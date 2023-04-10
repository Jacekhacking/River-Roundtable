CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    -- image
    body TEXT NOT NULL,

)

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    created_by ,
    author , 
)