-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.marcas
(
    id serial,
    marca character varying(256) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (marca)
);

CREATE TABLE IF NOT EXISTS public.carros
(
    id serial,
    carro character varying(256) NOT NULL,
    marca_id INT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (carro)
);

CREATE TABLE IF NOT EXISTS public.usuarios
(
    id serial,
    nome character varying(256) NOT NULL,
    cpf character varying(11) NOT NULL,
    usuario character varying(256) NOT NULL,
    telefone character varying(20) NOT NULL,
    senha character varying(30) NOT NULL,
    email character varying(50) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (cpf),
    UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS public.anuncios
(
    id serial,
    carro_id INT NOT NULL,
    ano smallint NOT NULL,
    quilometragem smallint NOT NULL,
    preco smallint NOT NULL,
    descricao text NOT NULL,
    usuario_id INT NOT NULL,
    data_anunciado timestamp without time zone NOT NULL,
    status boolean NOT NULL,
    direcao boolean NOT NULL,
    potencia boolean NOT NULL,
    ar_condicionado boolean NOT NULL,
    vidro boolean NOT NULL,
    air_bag boolean NOT NULL,
    alarme boolean NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.favoritos
(
    id serial,
    usuario_id INT NOT NULL,
    anuncio_id INT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (usuario_id, anuncio_id)
);

CREATE TABLE IF NOT EXISTS public.avaliacoes_site
(
    id serial,
    usuario_id INT NOT NULL,
    nota smallint NOT NULL,
    comentario text NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.carros
    ADD FOREIGN KEY (marca_id)
    REFERENCES public.marcas (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.anuncios
    ADD FOREIGN KEY (carro_id)
    REFERENCES public.carros (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.anuncios
    ADD FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.favoritos
    ADD FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.favoritos
    ADD FOREIGN KEY (anuncio_id)
    REFERENCES public.anuncios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.avaliacoes_site
    ADD FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;