/* ---------------------------------------------------------------- */
/*                       soal 6 deret geometri                      */
/* ---------------------------------------------------------------- */

function tentukanDeretGeometri(arr) {
  if (!Array.isArray(arr) && arr.length < 2) {
    return false;
  }

  const k = arr[1] / arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    const currentVal = arr[i];
    const nextVal = arr[i + 1];
    if (nextVal / currentVal !== k) {
      return false;
    }
  }
  return true;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));

/* ---------------------------------------------------------------- */
/*                  soal 7 pasangan angka terbesar                  */
/* ---------------------------------------------------------------- */
function pasanganTerbesar(num) {
  if (typeof num !== "number") {
    return 0;
  }

  let max = 0;
  const numstr = num.toString();
  for (let i = 0; i < numstr.length - 1; i++) {
    const valnum = Number.parseInt(`${numstr[i]}${numstr[i + 1]}`);
    if (valnum > max) {
      max = valnum;
    }
  }
  return max;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85

/* ---------------------------------------------------------------- */
/*                        soal 8 hapus symbol                       */
/* ---------------------------------------------------------------- */

function hapusSimbol(str) {
  const nonsymbol =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";
  for (const val of str) {
    if (nonsymbol.includes(val)) {
      result += val;
    }
  }
  return result;
}

console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100

/* ---------------------------------------------------------------- */
/*                        soal 9 cari pelaku                        */
/* ---------------------------------------------------------------- */

function cariPelaku(kalimat) {
  if (typeof kalimat !== "string") {
    return 0;
  }
  return kalimat.match(/abc/g).length;
}

console.log(cariPelaku("mabcvabc")); // 2
console.log(cariPelaku("abcdabdc")); // 1
console.log(cariPelaku("bcabcac")); // 1
console.log(cariPelaku("abcabcabc")); // 3
console.log(cariPelaku("babcbacabc")); // 2

/* ---------------------------------------------------------------- */
/*                        soal 10 buat class                        */
/* ---------------------------------------------------------------- */

class Mobil {
  constructor(merek, harga, warna, bensin, jumlahRoda) {
    this.merek = merek;
    this.harga = harga;
    this.warna = warna;
    this.bensin = bensin;
    this.jumlahRoda = jumlahRoda;
  }

  tampilkanSpesifikasi() {
    return `Mobil saya bermerek ${this.merek} dengan harga ${this.harga} rupiah, berwarna ${this.warna}, bensinnya ${this.bensin}, dan beroda ${this.jumlahRoda}`;
  }

  jualMobil() {
    console.log((20 / 100) * this.harga);
  }
}

const hando = new Mobil("Hando", 300_000_000, "merah", "solar", 4);
console.log(hando.tampilkanSpesifikasi());
console.log(hando.jualMobil());
