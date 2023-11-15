-- Dapatkan data first_name dan last_name dari tabel actor dengan disortir descending.
SELECT 
	first_name, 
    last_name 
FROM sakila
ORDER BY 
	first_name DESC,
    last_name ASC;


-- Dapatkan data dari tabel actor dengan first_name didahului huruf C. Kemudian ambil 10 data teratas.
SELECT 
    actor_id,
    first_name,
    last_name,
    last_update
FROM actor
WHERE first_name LIKE 'C%'
ORDER BY actor_id ASC
LIMIT 10;

-- Dapatkan data title, rental_rate dan rating dari tabel film, yang memiliki ratingG atau R. Serta mempunyai rental_rate antara 2 sampai 5.
SELECT 
    title,
    rental_rate, 
    rating 
FROM film
WHERE 
    rating IN ('G', 'R')
    AND
    rental_rate BETWEEN 2 AND 5;

-- Dapatkan rating dan rata-rata nilai rental_duration dari tabel film. Kemudian kelompokkan berdasar rating
SELECT
    rating,
    AVG(rental_duration)
FROM film
GROUP BY rating;

-- Dengan menggunakan INNER JOIN antara tabel film dan film_actor, tampilkan data title, actor_id dan film_id. Kemudian lakukan filtering dimana actor_id adalah 15
SELECT 
    f.title,
    fa.actor_id,
    f.film_id
FROM 
    film AS f
INNER JOIN 
    film_actor AS fa USING (film_id)
WHERE
    fa.actor_id = 15
ORDER BY  
    f.title ASC;
