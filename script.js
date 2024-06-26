"use strirt";

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const additionalInfoSection = document.querySelector(".additional-info");

yesBtn.addEventListener("click", () => {
  question.style.opacity = 0;
  setTimeout(() => {
    question.innerHTML = "Let's Go";
    question.style.opacity = 1;
  }, 600);
});

noBtn.addEventListener("touchstart", handleButtonMove);
noBtn.addEventListener("mouseover", handleButtonMove);

function handleButtonMove(event) {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
}

yesBtn.addEventListener("click", () => {
  additionalInfoSection.classList.add("animation-class");
  yesBtn.classList.add("move-left");
  noBtn.removeAttribute("style");
  noBtn.classList.add("move-right");

  noBtn.removeEventListener("touchstart", handleButtonMove);
  noBtn.removeEventListener("mouseover", handleButtonMove);
});
