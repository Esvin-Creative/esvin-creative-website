










const HOST = "www.esvincreative.in";
const INDEXNOW_KEY = "64a2ac55b3631859c3d7d2fab9a78c24";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const urlList = [
  "https://www.esvincreative.in",
  "https://www.esvincreative.in/about",
  "https://www.esvincreative.in/company",
  "https://www.esvincreative.in/contact",
  "https://www.esvincreative.in/services",
  "https://www.esvincreative.in/software-development",
  "https://www.esvincreative.in/mobile-app-development",
  "https://www.esvincreative.in/cloud-infrastructure",
  "https://www.esvincreative.in/aws-cloud-architecture",
  "https://www.esvincreative.in/technology-consulting",
  "https://www.esvincreative.in/portfolio",
  "https://www.esvincreative.in/case-studies",
  "https://www.esvincreative.in/case-studies/sreyas-institute-of-engineering-and-technology",
  "https://www.esvincreative.in/pricing",
  "https://www.esvincreative.in/pricing/calculator",
  "https://www.esvincreative.in/process",
  "https://www.esvincreative.in/privacy",
  "https://www.esvincreative.in/terms",
];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
});

console.log(`IndexNow submission: ${response.status} ${response.statusText}`);
if (!response.ok) {
  console.log(await response.text());
  process.exitCode = 1;
}
