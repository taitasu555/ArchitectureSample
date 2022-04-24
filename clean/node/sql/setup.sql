--   id: { type: "int", primaryKey: true, autoIncrement: true },
--     title: "string",
--     description: "string",
--     created_at: "datetime",
--     updated_at: "datetime",


create table tasks (
  id int primary key auto_increment,
  title varchar(255),
  description varchar(255),
  created_at datetime,
  updated_at datetime
);