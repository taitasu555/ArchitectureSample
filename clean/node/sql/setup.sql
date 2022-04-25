
create table tasks (
  id int primary key auto_increment,
  title varchar(255),
  description varchar(255),
  created_at datetime,
  updated_at datetime
);


create table users (
  id int primary key auto_increment,
  email varchar(255),
  password varchar(255),
  created_at datetime,
  updated_at datetime
);