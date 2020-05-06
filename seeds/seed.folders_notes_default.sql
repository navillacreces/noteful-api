INSERT INTO folders
    (id,folder_name)
VALUES
    ('528edbb6-fc2a-4662-97f6-9bfbc4b34201','NotesFolder01');

    INSERT INTO notes
    (id,name, content, folder_id)
VALUES
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224a','Made Breakfast', 'Eggs, Milk, Toast','528edbb6-fc2a-4662-97f6-9bfbc4b34201' ),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224b','Do Laundry', 'Remember fabric softner','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224c','Make Coffee', '2 to 3 scoops','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224d','Shower', 'Irish soap','528edbb6-fc2a-4662-97f6-9bfbc4b34201'),
    ('d518a0fd-10e9-4b9b-9b5e-700ac403224e','Shave','blue shaving cream','528edbb6-fc2a-4662-97f6-9bfbc4b34201');