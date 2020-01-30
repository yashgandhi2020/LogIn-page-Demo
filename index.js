const btnclick = document.getElementById("btnclick");
const username = document.getElementById("userName");
const pass = document.getElementById("userPass");
btnclick.addEventListener("click", value => {
  if (username.value === "yashgandhi" && pass.value === "yashgandhi") {
    window.location.href = "http://yashgandhi.tech";
  }
});
