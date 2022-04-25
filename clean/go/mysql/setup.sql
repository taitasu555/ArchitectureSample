CREATE TABLE users (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

insert into users(first_name, last_name) values("Patricia", "Smith");
insert into users(first_name, last_name) values("Linda", "Johnson");
insert into users(first_name, last_name) values("Mary", "William");
insert into users(first_name, last_name) values("Robert", "Jones");
insert into users(first_name, last_name) values("James", "Brown");

-- type Task struct {
-- 	ID          int
-- 	Name        string
-- 	Description string
-- 	CreatedAt   string
-- 	UpdatedAt   string
-- }


create table tasks (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);