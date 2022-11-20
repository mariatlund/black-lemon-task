"use strict";

// ACCORDION

document.querySelectorAll(".accordion-item h2").forEach((element) => {
  element.addEventListener("click", (e) => {
    let accordion = e.target;
    accordion.nextElementSibling.classList.toggle("hidden");
  });
});

// const accordion = document.querySelectorAll(".accordion-item h2");
// let i;

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", () => {
//     const text = this.parentNode;
//     console.log(text);

//     // if (text.style.display === "block") {
//     //   text.style.display = "none";
//     // } else {
//     //   text.style.display = "block";
//     // }
//   });
// }
