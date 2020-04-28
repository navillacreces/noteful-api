BEGIN;


INSERT INTO folders
    (folder_name,folder_id)
VALUES
    ('playlist1','0001');

INSERT INTO notes
    (note_name, note_content, folder_name, folder_id)
VALUES
    ('Crystal Castles', 'Magic Spells', 'playlist1','0001'),
    ('Bauhaus', 'Hallow Hills','playlist1','0001'),
    ('Neon Indian', 'Hex Girlfriend','playlist1','0001'),
    ('Drab Majesty', 'Oxytocin','playlist1','0001'),
    ('My Chemical Romance','Vampires Will Never Hurt You','playlist1','0001');

COMMIT;