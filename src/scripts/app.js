import { shared } from "./shared";

function main() {
  // Run logic required by all pages
  shared();
}

document.addEventListener("DOMContentLoaded", main);
