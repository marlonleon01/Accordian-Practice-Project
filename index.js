let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let hiddenText = this.nextElementSibling;
    if (hiddenText.style.display === "block") {
      hiddenText.style.display = "none";
    } else {
      hiddenText.style.display = "block";
    }
  });
}
