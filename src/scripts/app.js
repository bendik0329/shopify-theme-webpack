import { shared } from "./shared";
import { init as initIndex } from "./templates/index";

async function main() {
  // Run logic required by all pages
  shared();

  const { templateName /*templateSuffix*/ } = document.body.dataset;

  // Run logic required by specific templates
  if (templateName === "index") {
    initIndex();
  }
}

document.addEventListener("DOMContentLoaded", main);
