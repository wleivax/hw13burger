INSERT INTO burger (burger_name, devoured) VALUES ("In-n-Out", false);   
INSERT INTO burger (burger_name) VALUES ("FiveGuys");   
INSERT INTO burger (burger_name) VALUES ("Double Whopper w/Cheese");   
INSERT INTO burger (burger_name) VALUES ("Baconator");

SELECT * FROM burger;
UPDATE burger SET devoured = 1 WHERE id = 1;