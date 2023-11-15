CREATE TABLE IF NOT EXISTS buku (
    id_buku INT AUTO_INCREMENT,
    judul VARCHAR(100) NOT NULL,
    pengarang VARCHAR(100) NOT NULL,
    tahun_terbit YEAR NOT NULL,
    kategori VARCHAR (50) NOT NULL,
    
    PRIMARY KEY (id_buku)
);

CREATE TABLE IF NOT EXISTS anggota (
    id_anggota INT AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    no_telp VARCHAR(15) NOT NULL,
    tanggal_bergabung DATE,
    
    PRIMARY KEY (id_anggota)
);

CREATE TABLE IF NOT EXISTS peminjaman (
    id_peminjaman INT AUTO_INCREMENT,
    id_buku INT NOT NULL,
    id_anggota INT NOT NULL,
    tanggal_peminjaman DATE NOT NULL,
    tanggal_pengembalian DATE,
    status VARCHAR(50) NOT NULL,
    
    PRIMARY KEY (id_peminjaman),
    FOREIGN KEY (id_buku) REFERENCES buku(id_buku),
    FOREIGN KEY (id_anggota) REFERENCES anggota(id_anggota)
);