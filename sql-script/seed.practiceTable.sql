BEGIN;


INSERT INTO folders
    (id,folder_name)
VALUES
    ('528edbb6-fc2a-4662-97f6-9bfbc4b34201','playlist1');

INSERT INTO notes
    (id,name, content, folder_id)
VALUES
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224a','Crystal Castles', 'Magic Spells','528edbb6-fc2a-4662-97f6-9bfbc4b34201' ),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224b','Bauhaus', 'Hallow Hills','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224c','Neon Indian', 'Hex Girlfriend','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224d','Drab Majesty', 'Oxytocin','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224e','My Chemical Romance','Vampires Will Never Hurt You','528edbb6-fc2a-4662-97f6-9bfbc4b34201');

COMMIT;