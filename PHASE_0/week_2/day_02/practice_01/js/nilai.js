const input = prompt("input nilai (1) - (100)");
const nilai = Number.parseInt(input);

switch (true) {
  case nilai > 80:
    alert("Grade A");
    break;
  case nilai > 60:
    alert("Grade B");
    break;
  case nilai > 40:
    alert("Grade C");
    break;
  case nilai < 40:
    alert("Grade D");
    break;
  case nilai == NaN:
  default:
    alert("Cannot compute your input");
}
