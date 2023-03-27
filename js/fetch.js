define(["jquery"], function($) {

    const data = [
        {
            id: 0,
            word: 'customer',
            category: 'noun',
            hint: 'a person who buys goods or services from a shop or business.',
        },
        {
            id: 1,
            word: 'study',
            category: 'noun',
            hint: 'the time devoted by a particular person to gaining knowledge of an academic subject, typically at school, college, or university.',
        },
        {
            id: 2,
            word: 'opinion',
            category: 'noun',
            hint: 'a view or judgement formed about something, not necessarily based on fact or knowledge.',
        },
        {
            id: 3,
            word: 'government',
            category: 'noun',
            hint: 'the group of people with the authority to govern a country or state; a particular ministry in office.',
        },
        {
            id: 4,
            word: 'history',
            category: 'noun',
            hint: '',
        },
        {
            id: 5,
            word: 'literature',
            category: 'noun',
            hint: '',
        },
        {
            id: 6,
            word: 'knowledge',
            category: 'noun',
            hint: '',
        },
        {
            id: 7,
            word: 'society',
            category: 'noun',
            hint: '',
        },
        {
            id: 8,
            word: 'temperature',
            category: 'noun',
            hint: '',
        },
        {
            id: 9,
            word: 'community',
            category: 'noun',
            hint: '',
        },
        {
            id: 10,
            word: 'management',
            category: 'noun',
            hint: '',
        },
        {
            id: 11,
            word: 'equipment',
            category: 'noun',
            hint: '',
        },
        {
            id: 12,
            word: 'strategy',
            category: 'noun',
            hint: '',
        },
        {
            id: 13,
            word: 'university',
            category: 'noun',
            hint: '',
        },
        {
            id: 14,
            word: 'success',
            category: 'noun',
            hint: '',
        },
        {
            id: 15,
            word: 'moment',
            category: 'noun',
            hint: '',
        },
        {
            id: 16,
            word: 'medicine',
            category: 'noun',
            hint: '',
        },
        {
            id: 17,
            word: 'ambition',
            category: 'noun',
            hint: '',
        },
        {
            id: 18,
            word: 'lion',
            category: 'animal',
            hint: 'a large tawny-coloured cat that lives in prides, found in Africa and north-western India. The male has a flowing shaggy mane and takes little part in hunting, which is done cooperatively by the females.',
        },
        {
            id: 19,
            word: 'ostrich',
            category: 'animal',
            hint: 'a flightless swift-running African bird with a long neck, long legs, and two toes on each foot. It is the largest living bird, with males reaching a height of up to 2.75 m.',
        },
        {
            id: 20,
            word: 'giraffe',
            category: 'animal',
            hint: '',
        },
        {
            id: 21,
            word: 'bear',
            category: 'animal',
            hint: '',
        },
        {
            id: 22,
            word: 'zebra',
            category: 'animal',
            hint: '',
        },
        {
            id: 23,
            word: 'panda',
            category: 'animal',
            hint: '',
        },
        {
            id: 24,
            word: 'monkey',
            category: 'animal',
            hint: '',
        },
        {
            id: 25,
            word: 'dog',
            category: 'animal',
            hint: '',
        },
        {
            id: 26,
            word: 'cat',
            category: 'animal',
            hint: '',
        },
        {
            id: 27,
            word: 'rabbit',
            category: 'animal',
            hint: '',
        },
        {
            id: 28,
            word: 'duck',
            category: 'animal',
            hint: '',
        },
        {
            id: 29,
            word: 'fox',
            category: 'animal',
            hint: '',
        },
        {
            id: 30,
            word: 'horse',
            category: 'animal',
            hint: '',
        },
        {
            id: 31,
            word: 'donkey',
            category: 'animal',
            hint: '',
        },
        {
            id: 32,
            word: 'dear',
            category: 'animal',
            hint: '',
        },
        {
            id: 33,
            word: 'snake',
            category: 'animal',
            hint: '',
        },
        {
            id: 34,
            word: 'frog',
            category: 'animal',
            hint: '',
        },
        {
            id: 35,
            word: 'crocodile',
            category: 'animal',
            hint: '',
        },
        {
            id: 36,
            word: 'tiger',
            category: 'animal',
            hint: '',
        },
        {
            id: 37,
            word: 'goat',
            category: 'animal',
            hint: '',
        },
        {
            id: 38,
            word: 'sheep',
            category: 'animal',
            hint: '',
        },
        {
            id: 39,
            word: 'owl',
            category: 'animal',
            hint: '',
        },
        {
            id: 40,
            word: 'bison',
            category: 'animal',
            hint: '',
        },
        {
            id: 41,
            word: 'sparrow',
            category: 'animal',
            hint: '',
        },
        {
            id: 42,
            word: 'kangaroo',
            category: 'animal',
            hint: '',
        },
        {
            id: 43,
            word: 'apple',
            category: 'fruit',
            hint: '',
        },
        {
            id: 44,
            word: 'grapes',
            category: 'fruit',
            hint: '',
        },
        {
            id: 45,
            word: 'orange',
            category: 'fruit',
            hint: '',
        },
        {
            id: 46,
            word: 'mango',
            category: 'fruit',
            hint: '',
        },
        {
            id: 47,
            word: 'banana',
            category: 'fruit',
            hint: '',
        },
        {
            id: 48,
            word: 'strawberry',
            category: 'fruit',
            hint: '',
        },
        {
            id: 49,
            word: 'cherry',
            category: 'fruit',
            hint: '',
        },
        {
            id: 50,
            word: 'guava',
            category: 'fruit',
            hint: '',
        },
        {
            id: 51,
            word: 'coconut',
            category: 'fruit',
            hint: '',
        },
        {
            id: 52,
            word: 'peach',
            category: 'fruit',
            hint: '',
        },
        {
            id: 53,
            word: 'pear',
            category: 'fruit',
            hint: '',
        },
        {
            id: 54,
            word: 'pineapple',
            category: 'fruit',
            hint: '',
        },
        {
            id: 55,
            word: 'cabbage',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 56,
            word: 'cauliflower',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 57,
            word: 'cabbage',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 58,
            word: 'tomato',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 59,
            word: 'onion',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 60,
            word: 'potato',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 61,
            word: 'spinach',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 62,
            word: 'cucumber',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 63,
            word: 'broccoli',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 64,
            word: 'asparagus',
            category: 'vegetable',
            hint: '',
        },
        {
            id: 65,
            word: 'Toy Story',
            category: 'American Film',
            hint: 'A 1995 American computer-animated comedy film directed by John Lasseter (in his feature directorial debut); produced by Pixar Animation Studios and released by Walt Disney Pictures. It was the first entirely computer-animated feature film, as well as the first feature film from Pixar.',
        },
        {
            id: 66,
            word: 'The Lion King',
            category: 'American Film',
            hint: 'A 2019 American musical drama film directed and produced by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures and Fairview Entertainment. It is a photorealistic computer-animated remake of Disney\'s traditionally animated 1994 film of the same name.',
        },
        {
            id: 67,
            word: 'Finding Nemo',
            category: 'American Film',
            hint: 'A 2003 American computer-animated comedy-drama adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. Directed by Andrew Stanton. It tells the story of an overprotective clownfish named Marlin who, along with a regal blue tang named Dory, searches for his missing son Nemo.',
        },
        {
            id: 68,
            word: 'Shrek',
            category: 'American Film',
            hint: 'A 2001 American computer-animated comedy film loosely based on the 1990 picture book of the same name by William Steig. In the film, the ogre finds his swamp overrun by fairy tale creatures banished by Lord Farquaad (Lithgow).',
        },
        {
            id: 69,
            word: 'Beauty and the Beast',
            category: 'American Film',
            hint: 'A 2017 American musical romantic fantasy film directed by Bill Condon from a screenplay by Stephen Chbosky and Evan Spiliotopoulos. Co-produced by Walt Disney Pictures and Mandeville Films, the film is a live action adaptation of Disney\'s 1991 animated film of the same name.',
        },
        {
            id: 70,
            word: 'The Shawshank Redemption',
            category: 'American Film',
            hint: 'A 1994 American drama film written and directed by Frank Darabont. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis \"Red\" Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton).',
        },
        {
            id: 71,
            word: 'The Dark Knight',
            category: 'American Film',
            hint: 'A 2008 superhero film directed by Christopher Nolan from a screenplay he co-wrote with his brother Jonathan. Based on the DC Comics superhero Batman. The film follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent as they form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the intervention of the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from complete chaos.',
        },
        {
            id: 72,
            word: 'The Lord of the Rings',
            category: 'American Film',
            hint: 'A series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002), and The Return of the King (2003).',
        },
        {
            id: 73,
            word: 'The Godfather',
            category: 'American Film',
            hint: 'A 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo\'s best-selling 1969 novel of the same name.',
        },
        {
            id: 74,
            word: 'Titanic',
            category: 'American Film',
            hint: 'A 1997 American epic romance and disaster film directed, written, produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of the British passenger liner, and stars Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.',
        },
        {
            id: 75,
            word: 'Spider-Man',
            category: 'American Film',
            hint: 'A 2002 American superhero film based on the Marvel Comics character of the same name. Directed by Sam Raimi from a screenplay by David Koepp. After being bitten by a genetically-altered spider, outcast teenage genius Peter Parker develops spider-like superhuman abilities and adopts a masked identity to fight crime and injustice in New York City, facing the villainous Green Goblin (Dafoe) in the process.',
        },
        {
            id: 76,
            word: 'Harry Potter',
            category: 'British Film',
            hint: 'A film series based on the eponymous novels by J. K. Rowling. The series is distributed by Warner Bros. An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
        },
        {
            id: 77,
            word: 'Germany',
            category: 'country',
            hint: 'Beer, Bratwurst, Bach',
        },
        {
            id: 78,
            word: 'France',
            category: 'country',
            hint: 'Crepes, Berets, Notre Dame',
        },
        {
            id: 79,
            word: 'Spain',
            category: 'country',
            hint: 'Tapas, Flamenco, Siesta',
        },
        {
            id: 80,
            word: 'Italy',
            category: 'country',
            hint: 'Ferrari, Tuscany, Gnocchi',
        },
        {
            id: 81,
            word: 'Portugal',
            category: 'country',
            hint: 'Madeira, Vasco da Gama, Algarve',
        },
        {
            id: 82,
            word: 'Switzerland',
            category: 'country',
            hint: 'Neutrality, Watches, Banks',
        },
        {
            id: 83,
            word: 'Turkey',
            category: 'country',
            hint: 'Ottomans, Hagia Sophia, Kurds',
        },
        {
            id: 84,
            word: 'Greece',
            category: 'country',
            hint: 'Yogurt, Acropolis, Santorini.',
        },
        {
            id: 85,
            word: 'Norway',
            category: 'country',
            hint: 'Fjords, Oil, Winter Olympics',
        },
        {
            id: 86,
            word: 'Finland',
            category: 'country',
            hint: 'Saunas, Nokia, Jean Sibelius',
        },
        {
            id: 87,
            word: 'Sweden',
            category: 'country',
            hint: 'Dragon Tattoo, Malmö, Income Equality',
        },
        {
            id: 88,
            word: 'Denmark',
            category: 'country',
            hint: 'Jutland, Hamlet, Tivoli Gardens',
        },
        {
            id: 89,
            word: 'Iceland',
            category: 'country',
            hint: 'Volcanos, Vikings, Björk',
        },
        {
            id: 90,
            word: 'Greenland',
            category: 'country',
            hint: 'An island country that is part of the Kingdom of Denmark.',
        },
        {
            id: 91,
            word: 'United States',
            category: 'country',
            hint: 'Uncle Sam, Superpower, Coca-Cola',
        },
        {
            id: 92,
            word: 'United Kingdom',
            category: 'country',
            hint: 'Stiff Upper Lip, Stonehenge, David Beckham',
        },
        {
            id: 93,
            word: 'Canada',
            category: 'country',
            hint: 'Maple Leaf, Mounties, Moose',
        },
        {
            id: 94,
            word: 'New Zealand',
            category: 'country',
            hint: 'Kiwis, Road to Mordor, All Blacks',
        },
        {
            id: 95,
            word: 'Australia',
            category: 'country',
            hint: 'Outback, Boomerang, Billabong',
        },
        {
            id: 96,
            word: 'Mexico',
            category: 'country',
            hint: 'Tequila, Chupacabra, Tenochtitlan',
        },
        {
            id: 97,
            word: 'China',
            category: 'country',
            hint: 'Great Wall, Mao Zedong, Fireworks',
        },
        {
            id: 98,
            word: 'Japan',
            category: 'country',
            hint: 'Manga, Shinto, Tsunami, was attacked with nuclear weapons',
        },
        {
            id: 99,
            word: 'South Korea',
            category: 'country',
            hint: 'Samsung, Incheon, DMZ',
        },
        {
            id: 100,
            word: 'Russia',
            category: 'country',
            hint: 'Dachas, Duma, Lake Baikal',
        },
        {
            id: 101,
            word: 'North Korea',
            category: 'country',
            hint: 'Juche, Mass Games, Hermit Kingdom, is technically at war with its southern neighbor',
        },
        {
            id: 102,
            word: 'Indonesia',
            category: 'country',
            hint: 'Java, Suharto, Krakatoa, has land on the Equator',
        },
        {
            id: 103,
            word: 'Philippines',
            category: 'country',
            hint: 'was named for a Spanish king, Luzon, Return of MacArthur, Tagalog',
        },
        {
            id: 104,
            word: 'Morocco',
            category: 'country',
            hint: 'Marrakesh, Atlas Mountains, Strait of Gibraltar',
        },
        {
            id: 105,
            word: 'Algeria',
            category: 'country',
            hint: 'Country Code .dz, Berbers, Maghreb',
        },
        {
            id: 106,
            word: 'Tunisia',
            category: 'country',
            hint: 'Arab Spring, Carthage, Barbary Pirates',
        },
        {
            id: 107,
            word: 'Kenya',
            category: 'country',
            hint: 'Maasai, Mombasa, Marathons',
        },
        {
            id: 108,
            word: 'Maldives',
            category: 'country',
            hint: 'An archipelagic country located in Southern Asia.',
        },
        {
            id: 109,
            word: 'Pakistan',
            category: 'country',
            hint: 'Indus River, Benazir Bhutto, K2',
        },
        {
            id: 110,
            word: 'India',
            category: 'country',
            hint: 'Gandhi, Ganges, Cricket',
        },
        {
            id: 111,
            word: 'Bangladesh',
            category: 'country',
            hint: 'Dense Population, Bengal Tiger, East Pakistan',
        },
        {
            id: 112,
            word: 'Sri Lanka',
            category: 'country',
            hint: 'Formerly known as Ceylon, Ceylon, Sinhala, Teardrop Shaped',
        },
        {
            id: 113,
            word: 'Afghanistan',
            category: 'country',
            hint: 'Kandahar, Taliban, Khyber Pass',
        },
        {
            id: 114,
            word: 'Iraq',
            category: 'country',
            hint: 'Mesopotamia, Missing WMD\'s, Kurdish Minority',
        },
        {
            id: 115,
            word: 'Yemen',
            category: 'country',
            hint: 'A country in Western Asia, on the southern end of the Arabian Peninsula.',
        },
        {
            id: 116,
            word: 'Saudi Arabia',
            category: 'country',
            hint: 'Oil, Mecca, Bedouins',
        },
        {
            id: 117,
            word: 'United Arab Emirates',
            category: 'country',
            hint: 'Sharjah, Indoor Ski Slope, Ferrari World',
        },
        {
            id: 118,
            word: 'Bahrain',
            category: 'country',
            hint: 'An island country in Western Asia. It is situated on the Persian Gulf, and comprises a small archipelago made up of 50 natural islands and an additional 33 artificial islands.',
        },
        {
            id: 119,
            word: 'Kuwait',
            category: 'country',
            hint: 'Formerly known as Kureyn.',
        },
        {
            id: 120,
            word: 'Syria',
            category: 'country',
            hint: 'al-Assad, Aleppo, Levant',
        },
        {
            id: 121,
            word: 'Singapore',
            category: 'country',
            hint: 'Busiest Port, Caning, Tiger Economy, has more than one skyscraper per ten square kilometers',
        },
        {
            id: 122,
            word: 'Malaysia',
            category: 'country',
            hint: 'Strait of Malacca, Batu Caves, Petronas Towers',
        },
        {
            id: 123,
            word: 'Jamaica',
            category: 'country',
            hint: 'Caribbean Sea, Sprinters, Reggae',
        },
        {
            id: 124,
            word: 'Austria',
            category: 'country',
            hint: 'Alpine Skiing, Mozart, Coffee',
        },
        {
            id: 125,
            word: 'Colombia',
            category: 'country',
            hint: 'Coffee, Shakira, Tejo',
        },
        {
            id: 126,
            word: 'South Africa',
            category: 'country',
            hint: 'Springboks, Biltong, Afrikaans',
        },
        {
            id: 127,
            word: 'Chile',
            category: 'country',
            hint: 'Andes, Tierra del Fuego, Easter Island',
        },
        {
            id: 128,
            word: 'Mongolia',
            category: 'country',
            hint: 'Genghis, Nomads, Steppe',
        },
        {
            id: 129,
            word: 'Panama',
            category: 'country',
            hint: 'Canal, Balboa, Noriega',
        },
        {
            id: 130,
            word: 'Iran',
            category: 'country',
            hint: 'Ayatollah, Persia, Tehran',
        },
        {
            id: 131,
            word: 'Cuba',
            category: 'country',
            hint: 'Communist, Camagüey, Bay of Pigs',
        },
        {
            id: 132,
            word: 'Hungary',
            category: 'country',
            hint: 'Goulash, Magyar, Lake Balaton',
        },
        {
            id: 133,
            word: 'Israel',
            category: 'country',
            hint: 'Majority Jewish, Balfour Declaration, Kibbutz, Knesset',
        },
        {
            id: 134,
            word: 'Romania',
            category: 'country',
            hint: 'Gymnastics, Vampires, Ceausescu',
        },
        {
            id: 135,
            word: 'Nepal',
            category: 'country',
            hint: 'Himalayas, Sherpas, Kathmandu',
        },
        {
            id: 136,
            word: 'Nigeria',
            category: 'country',
            hint: 'Igbo, Abuja, Oil Industry',
        },
        {
            id: 137,
            word: 'Belgium',
            category: 'country',
            hint: 'Van Damme, Flanders, Trappist Beer',
        },
        {
            id: 138,
            word: 'Vietnam',
            category: 'country',
            hint: 'Tết, Phở, Conical Hats',
        },
        {
            id: 139,
            word: 'Dominican Republic',
            category: 'country',
            hint: 'Trujillo, Hispaniola, Baseball',
        },
        {
            id: 140,
            word: 'Brazil',
            category: 'country',
            hint: 'Samba, Carnival, Pelé',
        },
        {
            id: 141,
            word: 'Djibouti',
            category: 'country',
            hint: 'Horn of Africa, French-Speaking, Capital Name = Country Name',
        },
        {
            id: 142,
            word: 'Egypt',
            category: 'country',
            hint: 'Pyramids, Cleopatra, Tahrir Square',
        },
        {
            id: 143,
            word: 'Ireland',
            category: 'country',
            hint: 'Shamrock, James Joyce, Blarney Stone',
        },
        {
            id: 144,
            word: 'Ukraine',
            category: 'country',
            hint: 'Borscht, Black Sea, Odessa',
        },
        {
            id: 145,
            word: 'Netherlands',
            category: 'country',
            hint: 'Polders, Windmills, Wooden Shoes',
        },
        {
            id: 146,
            word: 'Poland',
            category: 'country',
            hint: 'Pączki, Solidarity, Vistula River',
        },
        {
            id: 147,
            word: 'Thailand',
            category: 'country',
            hint: 'Siam, Chiang Mai, Kickboxing',
        },
        {
            id: 148,
            word: 'Estonia',
            category: 'country',
            hint: 'Baltic, Skype, Internet Voting',
        },
        {
            id: 149,
            word: 'Lebanon',
            category: 'country',
            hint: 'Cedars, Levant, Hezbollah',
        },
        {
            id: 150,
            word: 'Myanmar',
            category: 'country',
            hint: 'Formerly known as Burma, Indochina, Aung San Suu Kyi, Irrawaddy River',
        },
    ]

    return data
})