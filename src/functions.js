let scrollFunction = () => {
  let navigation = document.querySelector("#navigation");
  let navBacground = "bg-naples-yellow";

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navigation.addClass(navBacground);
  } else {
    navigation.removeClass(navBacground);
  }
};

exports[scrollFunction];
