function Karyawan(nama, jabatan, gaji) {
  this.nama = nama;
  this.jabatan = jabatan;
  this.gaji = gaji;
}

Karyawan.prototype.tampilkanDetail = function () {
  return `${this.nama} - ${this.jabatan} - ${this.gaji}`;
};

let daftarKaryawan = [];

function tambahKaryawan(karyawan) {
  daftarKaryawan.push(karyawan);
}

function cariKaryawan(teks) {
  return daftarKaryawan.filter(
    (k) => k.nama.includes(teks) || k.jabatan.includes(teks)
  );
}

function cariDanTampilkan() {
  const teks = document.getElementById("input-cari").value;
  const hasil = cariKaryawan(teks);
  const ulElement = document.getElementById("daftar-karyawan");
  ulElement.innerHTML = "";

  hasil.forEach((k) => {
    const liElement = document.createElement("li");
    liElement.textContent = k.tampilkanDetail();
    ulElement.appendChild(liElement);
  });
}

function tampilkanKaryawanHTML() {
  const ulElement = document.getElementById("daftar-karyawan");
  ulElement.innerHTML = "";

  daftarKaryawan.forEach((karyawan) => {
    const liElement = document.createElement("li");
    liElement.textContent = karyawan.tampilkanDetail();
    ulElement.appendChild(liElement);
  });
}

// event listerner
document
  .getElementById("form-karyawan")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("input-nama").value;
    const jabatan = document.getElementById("input-jabatan").value;
    const gaji = document.getElementById("input-gaji").value;

    const karyawan = new Karyawan(nama, jabatan, gaji);
    tambahKaryawan(karyawan);
    tampilkanKaryawanHTML();

    document.getElementById("input-nama").value = "";
    document.getElementById("input-jabatan").value = "";
    document.getElementById("input-gaji").value = "";
  });

// event listener
document
  .getElementById("input-cari")
  .addEventListener("keypress", function (event) {
    cariDanTampilkan();
  });
