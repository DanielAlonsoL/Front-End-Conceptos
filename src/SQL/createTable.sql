CREATE SEQUENCE public."Concepto_concepto_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public."Concepto_concepto_id_seq"
    OWNER TO postgres;

CREATE TABLE public.concepto
(
    id integer NOT NULL DEFAULT nextval('"Concepto_concepto_id_seq"'::regclass),
    descripcion character varying(255) COLLATE pg_catalog."default",
    metodo_pago character varying(255) COLLATE pg_catalog."default",
    importe numeric(10,0) COLLATE pg_catalog."default",
    CONSTRAINT "Concepto_pkey" PRIMARY KEY (id)
)
TABLESPACE pg_default;

ALTER TABLE public.concepto
    OWNER to postgres;


INSERT INTO concepto VALUES (DEFAULT,'Recarga de tiempo aire','Efectivo', 150);
INSERT INTO concepto VALUES (DEFAULT,'Recarga de tiempo aire','Efectivo',100);
INSERT INTO concepto VALUES (DEFAULT,'Recarga de tiempo aire','Tarjeta de Crédito',50);
INSERT INTO concepto VALUES (DEFAULT,'Compra de celular Samsung A10','Tarjeta de Crédito',7000);
INSERT INTO concepto VALUES (DEFAULT,'Compra de celular Huawei Y9','Tarjeta de Débito',15000);
INSERT INTO concepto VALUES (DEFAULT,'Compra de celular Galaxy S10','Tarjeta de Crédito',16000);
INSERT INTO concepto VALUES (DEFAULT,'Compra de celular iPhone X','Efectivo',14000);
INSERT INTO concepto VALUES (DEFAULT,'Recarga de tiempo aire','Efectivo',300);



