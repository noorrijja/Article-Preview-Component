const icon = document.querySelectorAll(".icon");

const profile = document.querySelector(".profile-section");

const share = document.querySelector(".mobile-share");

const contentChange = () => {
  if (profile.style.display === "") {
    share.style.display = "flex";
    profile.style.display = "none";
  } else {
    profile.style.display = "";
    share.style.display = "none";
  }
};

icon.forEach((item) => item.addEventListener("click", contentChange));
