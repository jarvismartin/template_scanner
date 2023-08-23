<script lang="ts">
  // import { gsm_set } from "./lib/gsm_chars";
  import { fade } from "svelte/transition";
  import Papa from "papaparse";

  let files: FileList;
  let dropped: FileList;
  let scanning = false;
  let non_gsm = [];
  let csv_url: string;
  let headers = "";
  let limit = 100;
  let min = 0;

  // These are the GSM chars that
  // count as 2 characters
  const gsm_set_extension = [
    124, // | (pipe)
    94, // ^
    8364, // €
    123, // {
    125, // }
    12, // FormFeed
    91, // [
    126, // ~
    93, // ]
    92, // \
  ];
  // IS SS2 EVEN RELEVANT HERE???
  // What about CR2???
  // \ Needs to be escaped (\\) for charCodeAt()

  function handleDragOver(e: DragEvent) {
    // In markup
    // e.stopPropagation();
    // e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }
  function handleDrop(e: DragEvent) {
    console.log("HANDLE DROP e:", e);
    // In markup
    // e.stopPropagation();
    // e.preventDefault();
    dropped = e.dataTransfer.files;
    console.log("dropped:", dropped);
    parseFile(e);
  }

  function setDifference(a, b) {
    return new Set(Array.from(a).filter((item) => !b.has(item)));
  }

  function fileComplete(results, file) {
    scanning = true;
    console.log("FILE COMPLETE RESULTS:", results);

    const { data, errors, meta } = results;

    // Capture Column Headers
    headers = meta.fields;
    headers.concat("non_gsm");
    console.log("HEADERS:", headers);

    if (errors.length > 0) {
      console.warn("PARSE ERRORS:", results.errors);
    }

    // Determine which column has the message
    let msg_col = "Message"; // Default per the upload template

    const mc = meta.fields.indexOf("Message");
    msg_col = mc > -1 ? msg_col : "TextMessage";
    console.log("MSG COL:", msg_col);

    // Find templates with non-GSM chars
    function find_non_gsm(acc, row) {
      // function find_non_gsm(row) {
      const msg =
        msg_col === "Message"
          ? row[msg_col]
          : row["TemplateFrom"].concat(" ").concat(row[msg_col]);

      let s: Set<string> = new Set(msg);

      let non_gsm_chars: Array<string> = [];

      for (const char of s) {
        const cc = char.charCodeAt(0);
        if (cc > 128) {
          non_gsm_chars.push(char);
        }
      }

      // let diff = setDifference(s, gsm_set);
      // if (diff.size > 0) {
      //   console.log("DIFF:", diff);
      // }

      // Non-GSM
      // if (diff.size > 0) {
      if (non_gsm_chars.length > 0) {
        // const diff_str = Array.from(diff).join(" ");
        const diff_str = Array.from(non_gsm_chars).join(" ");
        let updated_row = row;
        updated_row["non_gsm"] = diff_str;
        // console.log("UPDATED ROW:", updated_row);
        acc.push(updated_row);
        // non_gsm.push(updated_row);
      }

      // Multi-part
      // if (diff.size === 0 && msg.length > 160) {
      if (non_gsm_chars.length === 0) {
        // Calculate msg length
        let extra = 0;
        for (let char of msg) {
          if (gsm_set_extension.includes(char)) {
            extra += 1;
            console.log("EXTRA:", extra);
          }
        }
        const total_msg_length = msg.length + extra;

        if (msg.length != total_msg_length) {
          console.log("TOTAL MSG LENGTH:", total_msg_length);
          console.log("MSG LENGTH:", msg.length);
        }

        if (total_msg_length > 160) {
          let updated_row = row;
          updated_row["non_gsm"] = "";
          acc.push(updated_row);
          // non_gsm.push(updated_row);
        }
      }

      return acc;
      // return;
    }
    non_gsm = data.reduce(find_non_gsm, []);
    console.log("non_gsm:", non_gsm);

    // TODO -- use for loop for performance
    // Then test with OutboundReport download
    // for (let i = 0; i < data.length; i++) {
    //   find_non_gsm(data[i]);
    // }
    // data.forEach((row) => {
    //   find_non_gsm(row);
    // });

    scanning = false;

    // Prepare Report CSV
    const updated_non_gsm = [headers, ...non_gsm];

    // Convert non_gsm to csv
    const non_gsm_csv = Papa.unparse(non_gsm);
    console.log("NON GSM CSV:", non_gsm_csv);

    // Blob
    const blob = new Blob(["\ufeff", non_gsm_csv], {
      type: "text/csv;charset=utf-8;",
    });
    // URL
    csv_url = URL.createObjectURL(blob);

    console.log("AT THE END non_gsm:", non_gsm);
  }

  // // Read file as string
  // reader.readAsText(file);
  // }

  function parseFile(e) {
    scanning = true;

    const files =
      e.target.files?.length > 0 ? e.target.files : e.dataTransfer?.files;
    const file = files[0];

    console.log("SCANNING FILE:", file);

    Papa.parse(file, {
      header: true,
      encoding: "utf-8",
      skipEmptyLines: "greedy",
      complete: (results, file) => {
        fileComplete(results, file);
      },
    });
  }

  function downloadReport() {
    // Create a new link
    let tempLink: HTMLAnchorElement = document.createElement("a");
    tempLink.href = csv_url;
    tempLink.setAttribute("download", "report.csv");

    // Append to DOM
    document.body.appendChild(tempLink);

    // Trigger click event
    tempLink.click();

    // Remove element from DOM
    document.body.removeChild(tempLink);
  }

  function handlePagination(type) {
    console.log("PAGINATION type:", type);
    if (type === "inc") {
      min = Math.min(min + limit, non_gsm.length - 1);
    }

    if (type === "dec") {
      min = Math.max(min - limit, 0);
    }
  }
</script>

<main class="overflow-none">
  <div class="flex flex-col justify-center p-4 m-auto tau">
    {#if !scanning && non_gsm.length === 0}
      <!-- Drag and Drop -->
      <label
        for="upload"
        class="cursor-pointer"
        on:dragover|preventDefault|stopPropagation={handleDragOver}
        on:drop|preventDefault|stopPropagation={handleDrop}
        in:fade
      >
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M32.3936 28.6875C32.3468 28.6277 32.287 28.5794 32.2188 28.5462C32.1506 28.5129 32.0757 28.4957 31.9998 28.4957C31.9239 28.4957 31.849 28.5129 31.7808 28.5462C31.7126 28.5794 31.6528 28.6277 31.6061 28.6875L24.6061 37.5438C24.5484 37.6174 24.5126 37.7059 24.5027 37.799C24.4929 37.8921 24.5095 37.986 24.5506 38.0701C24.5917 38.1542 24.6556 38.2251 24.735 38.2746C24.8145 38.3241 24.9062 38.3502 24.9998 38.35H29.6186V53.5C29.6186 53.775 29.8436 54 30.1186 54H33.8686C34.1436 54 34.3686 53.775 34.3686 53.5V38.3563H38.9998C39.4186 38.3563 39.6498 37.875 39.3936 37.55L32.3936 28.6875Z"
              fill="black"
              fill-opacity="0.64"
            />
            <path
              d="M50.7125 22.9188C47.85 15.3688 40.5563 10 32.0125 10C23.4688 10 16.175 15.3625 13.3125 22.9125C7.95625 24.3188 4 29.2 4 35C4 41.9062 9.59375 47.5 16.4937 47.5H19C19.275 47.5 19.5 47.275 19.5 47V43.25C19.5 42.975 19.275 42.75 19 42.75H16.4937C14.3875 42.75 12.4062 41.9125 10.9312 40.3937C9.4625 38.8812 8.68125 36.8438 8.75 34.7313C8.80625 33.0813 9.36875 31.5312 10.3875 30.225C11.4312 28.8938 12.8938 27.925 14.5188 27.4937L16.8875 26.875L17.7563 24.5875C18.2938 23.1625 19.0437 21.8313 19.9875 20.625C20.9192 19.4294 22.0228 18.3784 23.2625 17.5063C25.8313 15.7 28.8563 14.7437 32.0125 14.7437C35.1688 14.7437 38.1938 15.7 40.7625 17.5063C42.0063 18.3813 43.1062 19.4312 44.0375 20.625C44.9812 21.8313 45.7313 23.1687 46.2687 24.5875L47.1312 26.8687L49.4938 27.4937C52.8813 28.4062 55.25 31.4875 55.25 35C55.25 37.0688 54.4438 39.0188 52.9813 40.4813C52.264 41.2027 51.4108 41.7747 50.471 42.1641C49.5312 42.5535 48.5235 42.7527 47.5062 42.75H45C44.725 42.75 44.5 42.975 44.5 43.25V47C44.5 47.275 44.725 47.5 45 47.5H47.5062C54.4062 47.5 60 41.9062 60 35C60 29.2062 56.0563 24.3313 50.7125 22.9188Z"
              fill="black"
              fill-opacity="0.64"
            />
          </svg>
        </div>
        <div class="mt-4 text-center">
          <div>Drag and drop your CSV file here</div>
          <div>or</div>
          <div>Click here to upload</div>
        </div>
        <input
          type="file"
          id="upload"
          accept=".csv"
          bind:files
          hidden
          on:change={parseFile}
        />
      </label>
    {:else}
      <div class="flex flex-col justify-between h-full" in:fade>
        {#if scanning}
          <div class="flex-1">Scanning...</div>
        {/if}
        {#if non_gsm?.length > 0}
          <div class="flex items-center justify-center flex-1">
            Possible issues detected in <strong
              class="mx-2 text-xl text-amber-800"
              >{non_gsm.length}
            </strong> of your messages.
          </div>
          <!-- <div>Please check the templates in the report with our</div>
          <a
            href="https://solutionsbytext.com/free-sms-calculator/"
            target="_blank"
            class="text-blue-500"
          >
            Free SMS Caculator.
          </a> -->
        {/if}
        <div class="flex justify-end pt-8 active:opacity-70">
          {#if non_gsm?.length > 0}
            <button
              class="px-4 py-1 mr-2 border-2 border-gray-600 rounded"
              on:click={downloadReport}
            >
              download report
            </button>
          {/if}
          <button
            class="px-4 py-1 text-xs border-2 border-gray-600 rounded"
            on:click={() => {
              scanning = false;
              non_gsm = [];
              files = null;
            }}
          >
            reset
          </button>
        </div>
      </div>
    {/if}
  </div>
  {#if non_gsm.length > 100}
    <div
      class="sticky top-0 flex items-center justify-between text-xs bg-white/80"
    >
      <div class="flex-1">
        {#if min > 0}
          <button
            class="flex items-center justify-center py-2 bg-lime-500 active:opacity-70"
            on:click={() => handlePagination("dec")}
          >
            <!-- heroicons chevron-left -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span class="pr-2">Prev 100</span>
          </button>
        {/if}
      </div>
      <div class="flex-1 text-center">
        {min} - {min + limit} / {non_gsm.length}
      </div>
      <div class="flex justify-end flex-1">
        <button
          class="flex items-center justify-center py-2 bg-lime-500 active:opacity-70"
          on:click={() => {
            handlePagination("inc");
          }}
        >
          <span class="pl-2">Next 100</span>
          <!-- heroicons.com chevron-right -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  {/if}
  {#if non_gsm.length > 0}
    <div
      class="flex flex-col flex-wrap flex-1 my-4 overflow-y-auto border-gray-700 bg-black/70 text-white/90"
      transition:fade
    >
      <div class="flex border-b-2">
        <div class="w-32 text-center border-r-2">Info</div>
        <div class="flex-1 text-center">Message</div>
      </div>
      {#each non_gsm as item, i}
        {#if i >= min && i < min + limit}
          <div class="flex border-b-2">
            <div
              class="flex flex-col items-center justify-between w-32 py-2 border-r-2"
            >
              <div class="flex">
                {#each item.non_gsm as uni}
                  <pre class="mx-2 underline">{uni}</pre>
                {/each}
              </div>
              <!-- Msg Length -->
              <div>
                {item.Message
                  ? item.Message.length
                  : item.TemplateFrom.concat(" ").concat(item.TemplateMessage)
                      .length} chars
              </div>
            </div>
            <div class="flex flex-wrap items-center flex-1 pl-4">
              {#each item.Message ? item.Message : item.TemplateFrom.concat(" ").concat(item.TemplateMessage) as char}
                <pre
                  class="my-2 border-2 border-gray-600 {item.non_gsm.includes(
                    char
                  )
                    ? 'bg-amber-500 text-slate-700 font-semibold'
                    : ''}">{char}</pre>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</main>

<style>
  /* Drag and Drop */
  .tau {
    width: 384px;
    height: 172px;
    background-color: rgb(244, 244, 244);
    color: rgba(0, 0, 0, 0.87);
    font-family: "Open Sans", sans-serif;
    line-height: 20px;
    font-size: 14px;
  }
</style>
