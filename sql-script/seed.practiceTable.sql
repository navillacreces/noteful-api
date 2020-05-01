BEGIN;


INSERT INTO folders
    (id,folder_name)
VALUES
    ('528edbb6-fc2a-4662-97f6-9bfbc4b34201','playlist1');

INSERT INTO notes
    (name, content, folder_id)
VALUES
    ('Crystal Castles', 'Magic Spells','528edbb6-fc2a-4662-97f6-9bfbc4b34201' ),
    ('Bauhaus', 'Hallow Hills','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('Neon Indian', 'Hex Girlfriend','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('Drab Majesty', 'Oxytocin','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('My Chemical Romance','Vampires Will Never Hurt You','528edbb6-fc2a-4662-97f6-9bfbc4b34201');

COMMIT;