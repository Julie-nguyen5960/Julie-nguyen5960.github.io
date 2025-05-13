const card = document.querySelector(".card");
console.log(card);

// Flip by hover
// card.addEventListener("mouseover", flipMe);

// function flipMe() {
//   card.classList.add("flip");
// }

// card.addEventListener("mouseout", flipMeBack);

// function flipMeBack() {
//   card.classList.remove("flip");
// }

// flip by click
card.addEventListener("click", function () {
  card.classList.toggle("flip");
});
