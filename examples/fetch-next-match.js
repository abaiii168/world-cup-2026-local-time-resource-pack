const timezone = process.argv[2] || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
const endpoint = new URL("https://ay-worldcup2026.zeabur.app/api/public/v1/next");

endpoint.searchParams.set("timezone", timezone);
endpoint.searchParams.set("utm_source", "github_resource_pack");
endpoint.searchParams.set("utm_medium", "developer_referral");
endpoint.searchParams.set("utm_campaign", "wc26_public_api");

async function main() {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  console.log(JSON.stringify(data, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
