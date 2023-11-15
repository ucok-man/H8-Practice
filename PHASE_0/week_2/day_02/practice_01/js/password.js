let password = prompt("Input Password");
const secret = "ucok-kun";

if (password !== secret) {
  window.location.href = "https://google.com";
}

if (password === secret) {
  alert("Ok");
}
