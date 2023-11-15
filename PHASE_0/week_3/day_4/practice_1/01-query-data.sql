-- select all and select specific field
SELECT * FROM table_name
SELECT field_1, field_2 FROM table_name

-- Select where
SELECT fleld[1..n] FROM table_name
WHERE expression;

-- using alias
select field_[1..n] AS alias_name
FROM table_name;

-- order by
select field_[1..n] FROM table_name
order by column_name [ASC | DESC] `default: ASC`

-- limit
select field_[1..n] FROM table_name
limit [number of record want to retrive]

-- distinct
select distinct field_[1..n]
from table_name;
