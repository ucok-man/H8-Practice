-- cari semua
SELECT * FROM buku;
SELECT * FROM anggota;

-- cari buku yang sering dipinjam
SELECT
    buku.judul, 
    COUNT(peminjaman.id_buku) as jumlah_buku
FROM 
    peminjaman
INNER JOIN
    buku on peminjaman.id_buku = buku.id_buku 
GROUP BY
    buku.id_buku
ORDER BY
    jumlah_buku DESC
LIMIT 10;