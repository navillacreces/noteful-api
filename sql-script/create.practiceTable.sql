drop table if exists folders;
drop table if exists notes;

CREATE TABLE IF NOT EXISTS folders(
    id TEXT PRIMARY KEY,
    folder_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS notes(
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    content TEXT NOT NULL,
    folder_id TEXT NOT NULL REFERENCES folders(id),
    modified TEXT 
);

