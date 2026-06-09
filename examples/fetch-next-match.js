const timezone = process.argv[2] || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
const endpoint = new URL("https://ay-worldcup2026.zeabur.app/api/public/v1/next");

endpoint.searchParams.set("timezone", timezone);

const response = await fetch(endpoint);

if (!response.ok) {
  throw new Error(`Request failed: ${response.status} ${response.statusText}`);
}

const data = await response.json();

console.log(JSON.stringify(data, null, 2));
