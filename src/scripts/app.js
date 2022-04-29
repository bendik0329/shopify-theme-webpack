import { shared } from "./shared";
import { init as initIndex } from "./templates/index";

async function main() {
  // Run logic required by all pages
  shared();
  // Run logic required by specific templates
  if (document.body.dataset.templateName === "index") {
    initIndex();
  }
}

document.addEventListener("DOMContentLoaded", main);
