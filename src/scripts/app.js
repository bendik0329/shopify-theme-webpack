import { shared } from "./shared";

async function main() {
  // Run logic required by all pages
  shared();
  // Run logic required by specific pages
  if (document.body.dataset.templateName === "index") {
    (await import("./templates/index")).init();
  }
}

document.addEventListener("DOMContentLoaded", main);
