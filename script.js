document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll("section");
  section.forEach((sec) => {
    sec.addEventListener("click", (e) => {
      if (e.target.id === "basic-commands") {
        console.log("You clicked on Basic Commands section!");
      }
      sec.classList.toggle("highlight");
    });
  });
});
