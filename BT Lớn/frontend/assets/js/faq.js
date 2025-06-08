const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    this.classList.toggle("active");
    answer.classList.toggle("show");
  });
});
