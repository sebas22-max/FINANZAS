create database interfaz;
Use interfaz;


CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);


CREATE TABLE registros (
    id_registro INT AUTO_INCREMENT PRIMARY KEY,
    monto DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL,
    tipo ENUM('ingreso', 'gasto') NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);


INSERT INTO categorias (nombre) VALUES
('Comida'),
('Transporte'),
('Servicio'),
('Salario'),
('Entretenimiento');


INSERT INTO registros (monto, fecha, tipo, id_categoria) VALUES
(250000, '2026-10-01', 'ingreso', 4),
(60000, '2026-10-02', 'gasto', 1),
(15000, '2026-10-03', 'gasto', 2),
(80000, '2026-10-04', 'gasto', 3),
(30000, '2026-10-05', 'gasto', 5);


SELECT * FROM categorias;


SELECT
    registros.id_registro,
    registros.monto,
    registros.fecha,
    registros.tipo,
    categorias.nombre AS categoria
FROM registros
INNER JOIN categorias
ON registros.id_categoria = categorias.id_categoria;