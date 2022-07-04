'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('films', [
        {
          "title": "The Cotton Club",
          "year": "1984",
          "runtime": "127",
          "genres": [
            "Crime",
            "Drama",
            "Music"
          ],
          "director": "Francis Ford Coppola",
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
          "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
        },
        {
          "title": "Crocodile Dundee",
          "year": "1986",
          "runtime": "97",
          "genres": [
            "Adventure",
            "Comedy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Peter Faiman",
          "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
          "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
        },
        {
          "title": "Ratatouille",
          "year": "2007",
          "runtime": "111",
          "genres": [
            "Animation",
            "Comedy",
            "Family"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Brad Bird, Jan Pinkava",
          "actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
          "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
        },
        {
          "title": "City of God",
          "year": "2002",
          "runtime": "130",
          "genres": [
            "Crime",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Fernando Meirelles, Kátia Lund",
          "actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
          "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
        },
        {
          "title": "Stardust",
          "year": "2007",
          "runtime": "127",
          "genres": [
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Matthew Vaughn",
          "actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
          "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Apocalypto",
          "year": "2006",
          "runtime": "139",
          "genres": [
            "Action",
            "Adventure",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Mel Gibson",
          "actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
          "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
        },
        {
          "title": "No Country for Old Men",
          "year": "2007",
          "runtime": "122",
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Ethan Coen, Joel Coen",
          "actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
          "plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Third Man",
          "year": "1949",
          "runtime": "93",
          "genres": [
            "Film-Noir",
            "Mystery",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Carol Reed",
          "actors": "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
          "plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
        },
        {
          "title": "The Beach",
          "year": "2000",
          "runtime": "119",
          "genres": [
            "Adventure",
            "Drama",
            "Romance"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Danny Boyle",
          "actors": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
          "plot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
          "title": "Scarface",
          "year": "1983",
          "runtime": "170",
          "genres": [
            "Crime",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Brian De Palma",
          "actors": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
          "plot": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
        },
        {
          "title": "Sid and Nancy",
          "year": "1986",
          "runtime": "112",
          "genres": [
            "Biography",
            "Drama",
            "Music"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Alex Cox",
          "actors": "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
          "plot": "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
        },
        {
          "title": "Black Swan",
          "year": "2010",
          "runtime": "108",
          "genres": [
            "Drama",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Darren Aronofsky",
          "actors": "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
          "plot": "A committed dancer wins the lead role in a production of Tchaikovsky's \"Swan Lake\" only to find herself struggling to maintain her sanity.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Inception",
          "year": "2010",
          "runtime": "148",
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Christopher Nolan",
          "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
          "plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Chasing Amy",
          "year": "1997",
          "runtime": "113",
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Kevin Smith",
          "actors": "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
          "plot": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "The Silence of the Lambs",
          "year": "1991",
          "runtime": "118",
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Jonathan Demme",
          "actors": "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
          "plot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
        },
        {
          "title": "Midnight Express",
          "year": "1978",
          "runtime": "121",
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Alan Parker",
          "actors": "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
          "plot": "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
        },
        {
          "title": "Pulp Fiction",
          "year": "1994",
          "runtime": "154",
          "genres": [
            "Crime",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Quentin Tarantino",
          "actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
          "plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
        },
        {
          "title": "Lock, Stock and Two Smoking Barrels",
          "year": "1998",
          "runtime": "107",
          "genres": [
            "Comedy",
            "Crime"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Guy Ritchie",
          "actors": "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
          "plot": "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
          "title": "Rear Window",
          "year": "1954",
          "runtime": "112",
          "genres": [
            "Mystery",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Alfred Hitchcock",
          "actors": "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
          "plot": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Shutter Island",
          "year": "2010",
          "runtime": "138",
          "genres": [
            "Mystery",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Martin Scorsese",
          "actors": "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
          "plot": "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Reservoir Dogs",
          "year": "1992",
          "runtime": "99",
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Quentin Tarantino",
          "actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
          "plot": "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
        },
        {
          "title": "Moneyball",
          "year": "2011",
          "runtime": "133",
          "genres": [
            "Biography",
            "Drama",
            "Sport"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Bennett Miller",
          "actors": "Brad Pitt, Jonah Hill, Philip Seymour Hoffman, Robin Wright",
          "plot": "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg"
        },
        {
          "title": "The Hangover",
          "year": "2009",
          "runtime": "100",
          "genres": [
            "Comedy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Todd Phillips",
          "actors": "Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha",
          "plot": "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Great Beauty",
          "year": "2013",
          "runtime": "141",
          "genres": [
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Paolo Sorrentino",
          "actors": "Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso",
          "plot": "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg"
        },
        {
          "title": "Mary and Max",
          "year": "2009",
          "runtime": "92",
          "genres": [
            "Animation",
            "Comedy",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Adam Elliot",
          "actors": "Toni Collette, Philip Seymour Hoffman, Barry Humphries, Eric Bana",
          "plot": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg"
        },
        {
          "title": "Flight",
          "year": "2012",
          "runtime": "138",
          "genres": [
            "Drama",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Robert Zemeckis",
          "actors": "Nadine Velazquez, Denzel Washington, Carter Cabassa, Adam C. Edwards",
          "plot": "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg"
        },
        {
          "title": "One Flew Over the Cuckoo's Nest",
          "year": "1975",
          "runtime": "133",
          "genres": [
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Milos Forman",
          "actors": "Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown",
          "plot": "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
          "title": "Requiem for a Dream",
          "year": "2000",
          "runtime": "102",
          "genres": [
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Darren Aronofsky",
          "actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
          "plot": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Truman Show",
          "year": "1998",
          "runtime": "103",
          "genres": [
            "Comedy",
            "Drama",
            "Sci-Fi"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Peter Weir",
          "actors": "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
          "plot": "An insurance salesman/adjuster discovers his entire life is actually a television show.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
          "title": "The Artist",
          "year": "2011",
          "runtime": "100",
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Michel Hazanavicius",
          "actors": "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
          "plot": "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Hobbit: The Desolation of Smaug",
          "year": "2013",
          "runtime": "161",
          "genres": [
            "Adventure",
            "Fantasy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Peter Jackson",
          "actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
          "plot": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg"
        },
        {
          "title": "Vicky Cristina Barcelona",
          "year": "2008",
          "runtime": "96",
          "genres": [
            "Drama",
            "Romance"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Woody Allen",
          "actors": "Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina",
          "plot": "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Lost in Translation",
          "year": "2003",
          "runtime": "101",
          "genres": [
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Sofia Coppola",
          "actors": "Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe",
          "plot": "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg"
        },
        {
          "title": "Match Point",
          "year": "2005",
          "runtime": "119",
          "genres": [
            "Drama",
            "Romance",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Woody Allen",
          "actors": "Jonathan Rhys Meyers, Alexander Armstrong, Paul Kaye, Matthew Goode",
          "plot": "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Madagascar: Escape 2 Africa",
          "year": "2008",
          "runtime": "89",
          "genres": [
            "Animation",
            "Action",
            "Adventure"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Eric Darnell, Tom McGrath",
          "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
          "plot": "The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Despicable Me 2",
          "year": "2013",
          "runtime": "98",
          "genres": [
            "Animation",
            "Adventure",
            "Comedy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Pierre Coffin, Chris Renaud",
          "actors": "Steve Carell, Kristen Wiig, Benjamin Bratt, Miranda Cosgrove",
          "plot": "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg"
        },
        {
          "title": "Downfall",
          "year": "2004",
          "runtime": "156",
          "genres": [
            "Biography",
            "Drama",
            "History"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Oliver Hirschbiegel",
          "actors": "Bruno Ganz, Alexandra Maria Lara, Corinna Harfouch, Ulrich Matthes",
          "plot": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SX300.jpg"
        },
        {
          "title": "Madagascar",
          "year": "2005",
          "runtime": "86",
          "genres": [
            "Animation",
            "Adventure",
            "Comedy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Eric Darnell, Tom McGrath",
          "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
          "plot": "Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Madagascar 3: Europe's Most Wanted",
          "year": "2012",
          "runtime": "93",
          "genres": [
            "Animation",
            "Adventure",
            "Comedy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Eric Darnell, Tom McGrath, Conrad Vernon",
          "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
          "plot": "Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg"
        },
        {
          "title": "God Bless America",
          "year": "2011",
          "runtime": "105",
          "genres": [
            "Comedy",
            "Crime"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Bobcat Goldthwait",
          "actors": "Joel Murray, Tara Lynne Barr, Melinda Page Hamilton, Mackenzie Brooke Smith",
          "plot": "On a mission to rid society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-year-old Roxy.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Social Network",
          "year": "2010",
          "runtime": "120",
          "genres": [
            "Biography",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "David Fincher",
          "actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
          "plot": "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg"
        },
        {
          "title": "American Gangster",
          "year": "2007",
          "runtime": "157",
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Ridley Scott",
          "actors": "Denzel Washington, Russell Crowe, Chiwetel Ejiofor, Josh Brolin",
          "plot": "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Catch Me If You Can",
          "year": "2002",
          "runtime": "141",
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Steven Spielberg",
          "actors": "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
          "plot": "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg"
        },
        {
          "title": "American History X",
          "year": "1998",
          "runtime": "119",
          "genres": [
            "Crime",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Tony Kaye",
          "actors": "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
          "plot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
        },
        {
          "title": "Pirates of the Caribbean: At World's End",
          "year": "2007",
          "runtime": "169",
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Gore Verbinski",
          "actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
          "plot": "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
        },
        {
          "title": "Crash",
          "year": "2004",
          "runtime": "112",
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Paul Haggis",
          "actors": "Karina Arroyave, Dato Bakhtadze, Sandra Bullock, Don Cheadle",
          "plot": "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
          "year": "2003",
          "runtime": "143",
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Gore Verbinski",
          "actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
          "plot": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg"
        },
        {
          "title": "Oldboy",
          "year": "2003",
          "runtime": "120",
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Chan-wook Park",
          "actors": "Min-sik Choi, Ji-tae Yu, Hye-jeong Kang, Dae-han Ji",
          "plot": "After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Whiplash",
          "year": "2014",
          "runtime": "107",
          "genres": [
            "Drama",
            "Music"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Damien Chazelle",
          "actors": "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
          "plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg"
        },
        {
          "title": "Hotel Rwanda",
          "year": "2004",
          "runtime": "121",
          "genres": [
            "Drama",
            "History",
            "War"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Terry George",
          "actors": "Xolani Mali, Don Cheadle, Desmond Dube, Hakeem Kae-Kazim",
          "plot": "Paul Rusesabagina was a hotel manager who housed over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2MzQyNTc1M15BMl5BanBnXkFtZTYwMjExNjc3._V1_SX300.jpg"
        },
        {
          "title": "The Martian",
          "year": "2015",
          "runtime": "144",
          "genres": [
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Ridley Scott",
          "actors": "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
          "plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"
        },
        {
          "title": "The Hateful Eight",
          "year": "2015",
          "runtime": "187",
          "genres": [
            "Crime",
            "Drama",
            "Mystery"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Quentin Tarantino",
          "actors": "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins",
          "plot": "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg"
        },
        {
          "title": "The Big Short",
          "year": "2015",
          "runtime": "130",
          "genres": [
            "Biography",
            "Comedy",
            "Drama"
          ],
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "director": "Adam McKay",
          "actors": "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
          "plot": "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.",
          "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("films", null, {})
    }
  }
};
