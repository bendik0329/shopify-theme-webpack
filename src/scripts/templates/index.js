export function init() {
  console.log("homepage");
  // Find all sections in the page
  const sections = document.querySelectorAll("[data-section-name]");

  for (const section of sections) {
    console.log("section found:", section);

    const { sectionName /* sectionId */ } = section.dataset;

    if (sectionName === "my-section") {
      // do something
    }
  }
}
