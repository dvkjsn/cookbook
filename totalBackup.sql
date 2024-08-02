--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2024-08-02 13:16:19 CDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16614)
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- TOC entry 3659 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- TOC entry 3 (class 3079 OID 16626)
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- TOC entry 3660 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16609)
-- Name: ingredient; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingredient (
    item_id integer,
    ingredient_name text NOT NULL,
    quantity double precision,
    unit text
);


ALTER TABLE public.ingredient OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16452)
-- Name: recipe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe (
    name text NOT NULL,
    description text,
    steps text,
    item_id integer
);


ALTER TABLE public.recipe OWNER TO postgres;

--
-- TOC entry 3653 (class 0 OID 16609)
-- Dependencies: 218
-- Data for Name: ingredient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingredient (item_id, ingredient_name, quantity, unit) FROM stdin;
1	Brocolli	12	florets
1	Cheddar Cheese	2	cups
1	Salt	2	tablespoons
1	Onion	1.5	cups
1	Garlic	4	cloves
1	Celery	1	cup
1	Butter	4	tablespoons
1	Flour	6	tablespoons
1	Chicken Broth	5	cups
1	Pepper	2	tablespoons
1	Milk	0.5	cup
1	Carrot	2	cups
2	Flour	4	cups
2	Cocoa Powder	1.5	cups
2	Salt	0.125	teaspoon
2	Sugar	1.5	cups
2	Baking Powder	1	teaspoon
2	Butter	0.75	cup
2	Vanilla Extract	2	teaspoons
2	Eggs	2	N/A
3	Butter	0.5	cup
3	Sugar	1	cup
3	Brown Sugar	1	cup
3	Eggs	2	N/A
3	Vanilla Extract	3	tablespoons
3	Flour	3	cups
3	Baking Soda	0.125	teaspoon
3	Salt	0.125	teaspoon
3	Chocolate Chips	0.5	cup
4	Bread	2	slices
4	Butter	4	tablespoons
4	Eggs	2	N/A
4	Vanilla Extract	2	teaspoons
4	Ground Cinnamon	1	tablespoon
4	Salt	0.125	teaspoon
4	Milk	1	cup
5	Rice	2	cups
5	Chicken Thigh	2	pieces
5	Eggs	2	N/A
5	Soy Sauce	6	tablespoons
5	Garlic	4	cloves
5	Ginger	2	tablespoons
5	Sesame Oil	2	tablespoons
5	Vegetable Oil	2	tablespoons
5	Salt	3	tablespoons
5	Pepper	1.5	tablespoons
6	Butter	2	tablespoons
6	Bread	2	slices
6	Cheddar Cheese	1.5	cups
7	Peanut Butter	2	tablespoons
7	Jelly	2	tablespoons
7	Bread	2	slices
8	Eggs	2	N/A
8	Milk	3	tablespoons
8	Salt	1.5	tablespoons
8	Pepper	2	teaspoons
9	Potato	6	pieces
9	Salt	4	tablespoons
9	Pepper	1.5	tablespoons
9	Garlic Powder	2	tablespoons
9	Onion Powder	2	tablespoons
9	Vegetable Oil	1.5	cups
10	Olive Oil	5	tablespoons
10	Garlic	3	cloves
10	Onion	1	cup
10	Tomatoes	3	cups
10	Chicken Broth	6	cups
10	Salt	3	tablespoons
10	Pepper	1	tablespoon
10	Sugar	0.25	teaspoon
10	Basil Leaves	8	N/A
\.


--
-- TOC entry 3652 (class 0 OID 16452)
-- Dependencies: 217
-- Data for Name: recipe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe (name, description, steps, item_id) FROM stdin;
Grilled Cheese Sandwich	A sandwich made with cheese.	Take two slices of bread from your bread supply.\nSlice the cheddar cheese thinly or grate it, depending on your preference.\n\nSpread a thin layer of butter on one side of each slice of bread. This will help create a crispy, golden-brown exterior when grilled.\n\nPlace the cheese slices or grated cheese evenly on the unbuttered side of one slice of bread.\n\nPlace the other slice of bread on top of the cheese, buttered side facing outwards. This will create a sandwich with the cheese sandwiched between two buttered slices of bread.\n\nHeat a skillet or frying pan over medium heat.\nCarefully transfer the assembled sandwich to the skillet and cook for 2-3 minutes on each side, or until the bread is golden brown and crispy, and the cheese is melted.\nYou may need to press down on the sandwich gently with a spatula to help the cheese melt evenly.\n\nOnce the sandwich is grilled to your liking, remove it from the skillet and place it on a cutting board.\nAllow it to cool for a minute or two to avoid burning yourself.\nSlice the sandwich diagonally or vertically with a knife, if desired.\nServe your delicious grilled cheese sandwich and enjoy it while it's warm and gooey!	6
Brocoli Cheddar Soup	A soup made with broccoli florets and cheddar cheese.	Chop the broccoli into small florets.\nFinely chop the onion, garlic, carrots, and celery.\n\nIn a large pot or Dutch oven, melt butter over medium heat.\nAdd chopped onion, garlic, carrots, and celery to the pot.\nSauté the vegetables until they are softened and fragrant, stirring occasionally. This usually takes about 5-7 minutes.\n\nSprinkle flour over the sautéed vegetables and stir well to combine, creating a roux. Cook the roux for 1-2 minutes, stirring constantly, to remove the raw flour taste.\n\nGradually pour in chicken broth while stirring continuously to prevent lumps from forming.\nAdd the chopped broccoli florets to the pot, stirring to combine.\n\nBring the soup to a simmer over medium heat.\nLet the soup simmer for about 15-20 minutes, or until the broccoli is tender and cooked through.\n\nIf you prefer a smoother consistency, use an immersion blender to partially blend the soup directly in the pot. Alternatively, transfer a portion of the soup to a blender and blend until smooth, then return it to the pot.\n\nPour in milk, stirring until well combined and heated through.\nGradually add shredded cheddar cheese to the soup, stirring until the cheese is melted and the soup is creamy.\n\nSeason the soup with salt and pepper to taste. Adjust the seasoning as needed.\nServe:\n\nLadle the hot broccoli cheddar soup into bowls.\nOptionally, garnish with extra shredded cheddar cheese or chopped fresh parsley before serving.\n\nServe the broccoli cheddar soup hot and enjoy its comforting and cheesy goodness!\n	1
Brownie	A soft, chocolatey dessert.	Preheat your oven to 350°F (175°C). Grease or line a baking pan with parchment paper.\nIn a microwave-safe bowl or on the stovetop, melt the butter until it is completely liquefied. Allow it to cool slightly.\n\nIn a mixing bowl, combine the melted butter, sugar, eggs, and vanilla extract. Mix until well combined.\n\nSift cocoa powder, flour, salt, and baking powder into the wet ingredients mixture.\nStir until the dry ingredients are fully incorporated into the wet mixture. Be careful not to overmix.\n\nPour the brownie batter into the prepared baking pan, spreading it evenly with a spatula.\n\nPlace the baking pan in the preheated oven and bake for 25-30 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs attached.\n\nAllow the brownies to cool in the pan for at least 10-15 minutes before slicing and serving.\nOptionally, dust the brownies with powdered sugar or top with your favorite frosting or ice cream before serving.\n\nServe and enjoy your homemade brownies! They are best enjoyed warm with a glass of milk or a scoop of ice cream.\n	2
Chocolate Chip Cookies	A chewy, buttery treat made with chocolate chips.	Preheat your oven to 375°F (190°C). Prepare a baking sheet by lining it with parchment paper or lightly greasing it.\n\nIn a mixing bowl, cream together softened butter, granulated sugar, and packed brown sugar until light and fluffy.\n\nAdd eggs, one at a time, to the butter-sugar mixture, beating well after each addition.\nMix in vanilla extract until well combined.\n\nIn a separate bowl, sift together all-purpose flour, baking soda, and salt.\n\nGradually add the dry ingredients to the wet ingredients, mixing until just combined. Be careful not to overmix.\n\nFold in semi-sweet chocolate chips until evenly distributed throughout the cookie dough.\n\nUsing a spoon or cookie scoop, scoop out portions of the cookie dough and roll them into balls about 1 to 1.5 inches in diameter.\nPlace the cookie dough balls onto the prepared baking sheet, leaving some space between each cookie to allow for spreading.\nBake in the preheated oven for 8 to 10 minutes, or until the edges are lightly golden brown.\n\nRemove the baking sheet from the oven and let the cookies cool on the pan for a few minutes before transferring them to a wire rack to cool completely.\nOnce cooled, serve and enjoy your homemade chocolate chip cookies with a glass of milk or your favorite beverage!	3
French Toast	A breakfast dish made with bread and beaten eggs.	Crack eggs into a shallow dish or bowl.\nAdd milk to the eggs.\nAdd vanilla extract, ground cinnamon, and a pinch of salt.\nWhisk the ingredients together until well combined.\n\nDip each slice of bread into the egg mixture, ensuring both sides are evenly coated.\n\nHeat a skillet or frying pan over medium heat.\nAdd butter to the skillet and let it melt and coat the bottom of the pan.\nPlace the soaked bread slices in the skillet and cook for 2-3 minutes on each side, or until golden brown and crispy.\n\nOnce cooked, remove the French toast from the skillet and place it on a plate.\nRepeat the process with any remaining bread slices.\nServe the French toast warm, with toppings such as maple syrup, powdered sugar, or fresh fruit if desired.\n	4
Fried Rice	A rice based dish made with chicken and seasoned with soy sauce.	Cook rice according to package instructions and set aside to cool.\nDice the chicken into small pieces.\nMince garlic and ginger.\nBeat the eggs in a small bowl.\n\nHeat vegetable oil in a large skillet or wok over medium-high heat.\nAdd diced chicken to the skillet and season with salt and pepper.\nCook the chicken until it is browned and cooked through, stirring occasionally. Once cooked, transfer the chicken to a plate and set aside.\n\nIn the same skillet, add a bit more oil if needed.\nPour the beaten eggs into the skillet and cook, stirring gently, until they are scrambled and cooked through.\nOnce cooked, transfer the scrambled eggs to the plate with the cooked chicken.\n\nIn the same skillet, add a bit more oil if needed.\nAdd minced garlic and ginger to the skillet and cook until fragrant, stirring constantly for about 1 minute.\n\nAdd the cooked rice to the skillet, breaking up any clumps with a spatula.\nStir-fry the rice with the garlic and ginger until heated through and lightly browned, about 3-4 minutes.\n\nReturn the cooked chicken and scrambled eggs to the skillet with the rice.\nAdd Soy Sauce and Sesame Oil:\n\nDrizzle soy sauce and sesame oil over the chicken, eggs, and rice mixture in the skillet.\n\nStir-fry everything together, ensuring that the soy sauce and sesame oil are evenly distributed and the ingredients are well combined.\n\nTaste the chicken fried rice and adjust seasoning with additional soy sauce, salt, and pepper if needed.\n\nOnce everything is heated through and well combined, remove the skillet from heat.\nServe the chicken fried rice hot, garnished with chopped green onions or cilantro if desired.\n	5
Peanut Butter and Jelly Sandwich	A sandwich made with peanut butter and jelly.	Take two slices of bread from your bread supply.\n\nOn one slice of bread, spread a layer of peanut butter using a knife. Make sure to cover the entire surface evenly.\n\nOn the other slice of bread, spread a layer of jelly using a clean knife. Again, ensure that the jelly covers the bread evenly.\n\nTake the slice of bread with peanut butter and place it on top of the slice with jelly, so that the spreads are facing each other.\n\nYour peanut butter and jelly sandwich is ready to eat! Serve it immediately and enjoy the delicious combination of flavors.	7
Scrambled Eggs	A breakfast dish made with beaten eggs.	Crack eggs into a mixing bowl.\nAdd Milk:\n\nAdd a splash of milk to the eggs.\n\nSeason the egg mixture with salt and pepper to taste.\n\nWhisk the eggs, milk, salt, and pepper together until well combined and slightly frothy.\n\nHeat a non-stick skillet or frying pan over medium heat.\nAdd a small pat of butter to the skillet and let it melt and coat the bottom of the pan.\n\nOnce the butter is melted and the pan is heated, pour the egg mixture into the skillet.\nLet the eggs cook undisturbed for a few seconds until they start to set around the edges.\n\nUsing a spatula, gently stir the eggs, pushing them from the edges towards the center of the pan. Continue stirring and folding the eggs until they are mostly cooked but still slightly moist.\n\nAs soon as the eggs are cooked to your desired consistency, remove the skillet from the heat. Remember that eggs will continue to cook even after you remove them from the heat, so it's best to slightly undercook them in the pan. And your eggs are ready to serve!	8
Tater Tots	A snack made with fried potatoes.	Wash and peel the potatoes.\nGrate the potatoes using a box grater or a food processor fitted with a grating attachment.\n\nIn a large bowl, add the grated potatoes.\nSeason the grated potatoes with salt, pepper, garlic powder, and onion powder to taste. Mix well to evenly distribute the seasonings.\n\nTake small portions of the seasoned grated potatoes and shape them into cylindrical or oval-shaped tots using your hands. You can make them about 1 inch long and 1/2 inch thick.\n\nHeat vegetable oil in a deep fryer or a large skillet over medium-high heat until it reaches about 350°F (175°C).\n\nCarefully add the shaped tater tots to the hot oil, making sure not to overcrowd the pan.\nFry the tater tots in batches, if necessary, to ensure even cooking.\nFry the tater tots until they are golden brown and crispy on all sides, which usually takes about 3-4 minutes per batch.\n\nOnce the tater tots are cooked to perfection, use a slotted spoon or a wire mesh skimmer to transfer them to a plate lined with paper towels. This will help absorb any excess oil.\n\nServe the freshly fried tater tots hot and crispy as a delicious side dish or snack.\nOptionally, you can sprinkle additional salt and pepper over the tater tots before serving for extra flavor.	9
Tomato Soup	A soup made with tomatoes and basil.	Finely chop onions and garlic.\nRoughly chop fresh basil leaves.\n\nHeat olive oil in a large pot over medium heat.\nAdd chopped onions and garlic to the pot.\nSauté until the onions are translucent and garlic is fragrant, stirring occasionally to prevent burning. This usually takes about 5-7 minutes.\n\nPour tomatoes into the pot.\nUse a wooden spoon to break up the whole tomatoes if necessary.\n\nPour chicken broth into the pot, stirring to combine with the tomatoes, onions, and garlic.\n\nSeason the soup with salt, pepper, and a pinch of sugar to balance the acidity of the tomatoes.\nBring the soup to a gentle boil, then reduce the heat to low and let it simmer uncovered for about 20-25 minutes, stirring occasionally.\n\nIf you prefer a smoother consistency, use an immersion blender or transfer the soup to a blender in batches to puree until smooth. Be cautious when blending hot liquids.\n\nTaste the soup and adjust seasoning if needed, adding more salt, pepper, or sugar according to your taste preferences.\n\nStir in the chopped fresh basil leaves, reserving some for garnish if desired.\nLet the soup simmer for an additional 5 minutes to allow the flavors to meld together.\n\nLadle the hot tomato soup into bowls.\nGarnish with additional fresh basil leaves if desired.\nServe the soup hot alongside crusty bread or grilled cheese sandwiches for a comforting meal.\n	10
\.


--
-- TOC entry 3508 (class 2606 OID 16458)
-- Name: recipe recipe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_pkey PRIMARY KEY (name);


-- Completed on 2024-08-02 13:16:19 CDT

--
-- PostgreSQL database dump complete
--

