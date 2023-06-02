// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Send to Wa
$(document).on("click", "#send", function () {
  /* Inputan Formulir */
  var input_name = $("#name").val(),
    input_email = $("#email").val(),
    input_message = $("#message").val();

  /* Pengaturan Whatsapp */
  var walink = "https://api.whatsapp.com/send",
    phone = "6281378065848",
    text = "Halo Brucel👋";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if (input_name != "") {
    /* Whatsapp URL */
    var checkout_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      text +
      "%0A%0A" +
      "*Nama* : " +
      input_name +
      "%0A" +
      "*Alamat Email* : " +
      input_email +
      "%0A" +
      "*Pesan* : " +
      input_message +
      "%0A";

    /* Whatsapp Window Open */
    window.open(checkout_whatsapp, "_blank");
  }
});
