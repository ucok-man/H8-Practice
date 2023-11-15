// perulangan 1-20 while loop
let index = 0;
while (index < 20) {
  console.log("while - idx: ", index);
  index++;
}

// perulangan 1-20 for loop
for (let idx = 0; idx < 20; idx++) {
  console.log("for - idx: ", idx);
}

// perulangan, skip odd
let output = "";
for (let idx = 1; idx <= 20; idx++) {
  output += "o";
  if (idx % 2 === 0) {
    console.log(output);
  }
}
