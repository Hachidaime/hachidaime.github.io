import "bootstrap";
// import * as Constant from "./constants.js";
// import * as Functions from "./functions.js";
// import { Form } from "./form.js";

let scrollFunction = () => {
  let navigation = document.querySelector("#navigation");
  let navBacground = "bg-naples-yellow";

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navigation.classList.add(navBacground, "shadow");
  } else {
    navigation.classList.remove(navBacground, "shadow");
  }
};

window.onscroll = function () {
  scrollFunction();
};
