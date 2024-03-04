create table product(
    id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    ticketsId integer not null,
    description varchar(255),
    price integer,
    status varchar(20),
    primary key (id)
);