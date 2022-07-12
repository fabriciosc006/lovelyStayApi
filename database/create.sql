create schema usuario;

create table usuario (
    id serial primary key,
    login text not null,
    location text not null,
    date timestamp default now()
);