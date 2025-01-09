
const shareBtn = document.querySelector(".share .btn");
const socialIcons = document.querySelector(".share .social-icons");

shareBtn.addEventListener("click", () => {
  if (!socialIcons.classList.contains("show-socials")) {
    socialIcons.classList.toggle("show-socials");
    setTimeout(() => {
      socialIcons.classList.toggle("smooth-socials");
    }, 50);
  } else {
    socialIcons.classList.toggle("smooth-socials");
    setTimeout(() => {
      socialIcons.classList.toggle("show-socials");
    }, 300);
  }
});
