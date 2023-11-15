INSERT INTO buku (judul, pengarang, tahun_terbit, kategori)
VALUES 
    ('Book1', 'John Doe', '2020', 'science'),
    ('Book2', 'Jane D', '2016', 'fantasy'),
    ('Book3', 'Marry John', '2012', 'comedy'),
    ('Book4', 'Jane Simpson', '2015', 'fiksi'),
    ('Book5', 'Douglass', '2023', 'tech');

INSERT INTO anggota (nama, alamat, no_telp, tanggal_bergabung)
VALUES 
    ('Anggota1', 'Jalan ABC no.1', '081111222333', '2023-09-12'),
    ('Anggota2', 'Jalan DEF no.45', '081222333444', '2023-10-01'),
    ('Anggota3', 'Jalan XYZ no.99', '0811333444555', '2023-10-05');

INSERT INTO peminjaman (id_buku, id_anggota, tanggal_peminjaman, tanggal_pengembalian, status)
VALUES
    (1, 2, '2023-10-12', '2023-10-19', 'Dikembalikan'),
    (3, 3, '2023-10-18', '2023-10-25', 'Dikembalikan'),
    (5, 1, '2023-10-23', '2023-10-30', 'Dipinjam'),
    (5, 3, '2023-10-23', NULL,'Dicuri');


