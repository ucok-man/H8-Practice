document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var emailpattern = /^[a-zA-Z0-9._%=-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
    if (!emailpattern.test(email)) {
      document.getElementById("email-error").textContent =
        "alamat email tidak valid!";
    } else {
      document.getElementById("email-error").textContent = "";
    }

    // validasi date
    var date = document.getElementById("date").value;
    var datepattern = /(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-([1-9]{4})/;
    if (!datepattern.test(date)) {
      document.getElementById("date-error").textContent = "date tidak valid!";
    } else {
      document.getElementById("date-error").textContent = "";
    }
  });

let xxx = "x";
