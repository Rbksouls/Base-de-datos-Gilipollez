DROP DATABASE IF EXISTS gilipollez_db2;

-- Crear la base de datos
CREATE DATABASE gilipollez_db2;

-- Conectarse a la base de datos
\c gilipollez_db2;

-- Crear la tabla
CREATE TABLE gilipollez_table (
    id SERIAL PRIMARY KEY,  -- Usamos SERIAL en lugar de AUTO_INCREMENT
    checkbox1 BOOLEAN NOT NULL DEFAULT FALSE,  -- BOOLEAN en PostgreSQL usa TRUE/FALSE
    checkbox2 BOOLEAN NOT NULL DEFAULT FALSE,
    mensaje VARCHAR(100)
);
