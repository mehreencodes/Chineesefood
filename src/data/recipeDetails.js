const recipes = [
  {
    id: 1,
    title: "Chicken Chow Mein",
    desc: "Classic noodles",
    time: 25,
    difficulty: "Easy",
    fullDesc:
      "Chicken Chow Mein is a flavorful Chinese stir-fried noodle dish made with tender chicken, fresh vegetables, and perfectly seasoned sauces. The noodles are first boiled and then stir-fried on high heat to create a smoky restaurant-style aroma. Garlic, soy sauce, and crunchy vegetables combine to give it a balanced taste of savory and umami flavors. It is a quick yet satisfying meal that is perfect for lunch or dinner.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    ingredients: ["Noodles", "Chicken", "Soy Sauce", "Garlic", "Vegetables"],
    steps: [
      "Boil noodles until soft",
      "Cook chicken with garlic",
      "Add soy sauce and vegetables",
      "Mix everything together"
    ]
  },

  {
    id: 2,
    title: "Sichuan Chicken",
    desc: "Spicy dish",
    time: 35,
    difficulty: "Medium",
    fullDesc:
      "Sichuan Chicken is a bold and spicy Chinese dish famous for its intense flavors and numbing chili heat. The chicken is marinated first, then stir-fried with garlic, dried chilies, and Sichuan-style sauces. The combination of spice, aroma, and slight sweetness creates a perfect balance. It is best served hot with steamed rice for a complete traditional experience.",
    image: "https://images.unsplash.com/photo-1741004580357-15d116ef4ba3",
    ingredients: ["Chicken", "Chili Sauce", "Garlic", "Soy Sauce"],
    steps: [
      "Marinate chicken",
      "Heat oil in pan",
      "Add spices and cook chicken",
      "Serve hot"
    ]
  },

  {
    id: 3,
    title: "Egg Fried Rice",
    desc: "Simple rice",
    time: 15,
    difficulty: "Easy",
    fullDesc:
      "Egg Fried Rice is a simple yet comforting dish made using cooked rice, scrambled eggs, and light seasoning. It is stir-fried quickly on high heat to maintain its fluffy texture. Soy sauce and spring onions add aroma and flavor, making it a perfect quick meal that can be enjoyed on its own or with other dishes.",
    image: "https://images.unsplash.com/photo-1691322161487-0331fae404af",
    ingredients: ["Rice", "Eggs", "Soy Sauce", "Spring Onion"],
    steps: [
      "Cook rice and let it cool",
      "Scramble eggs",
      "Add rice and soy sauce",
      "Mix well and serve"
    ]
  },

  {
    id: 4,
    title: "Beef Stir Fry",
    desc: "Quick beef recipe",
    time: 20,
    difficulty: "Easy",
    fullDesc:
      "Beef Stir Fry is a quick and protein-rich dish cooked at high heat with sliced beef, fresh vegetables, and savory sauces. The beef is seared to lock in juices while vegetables stay slightly crunchy. Garlic and soy-based sauces enhance its deep umami flavor, making it a perfect weeknight meal.",
    image: "https://images.unsplash.com/photo-1680084539070-e26f84603d95",
    ingredients: ["Beef", "Garlic", "Onion", "Soy Sauce"],
    steps: [
      "Slice beef thin",
      "Cook in hot pan",
      "Add vegetables",
      "Stir fry and serve"
    ]
  },

  {
    id: 5,
    title: "Garlic Noodles",
    desc: "Rich garlic flavor",
    time: 15,
    difficulty: "Easy",
    fullDesc:
      "Garlic Noodles are rich, buttery, and packed with strong garlic aroma. The noodles are boiled and then tossed in melted butter, fried garlic, and soy sauce. The result is a silky, flavorful dish with a deep savory taste that is both simple and addictive.",
    image: "https://images.unsplash.com/photo-1544899812-000334603501",
    ingredients: ["Noodles", "Garlic", "Butter", "Soy Sauce"],
    steps: [
      "Boil noodles",
      "Fry garlic in butter",
      "Add noodles and sauce",
      "Mix well"
    ]
  },

  {
    id: 6,
    title: "Kung Pao Chicken",
    desc: "Sweet spicy chicken",
    time: 30,
    difficulty: "Medium",
    fullDesc:
      "Kung Pao Chicken is a famous Sichuan dish combining spicy chilies, roasted peanuts, and tender chicken. It is stir-fried quickly to maintain crunch and flavor. The sweet, spicy, and nutty combination creates a perfect balance that makes it one of the most loved Chinese dishes worldwide.",
    image: "https://images.unsplash.com/photo-1632022777952-0e4e0baf636d",
    ingredients: ["Chicken", "Peanuts", "Chili", "Soy Sauce"],
    steps: [
      "Cook chicken",
      "Add chili sauce",
      "Mix peanuts",
      "Serve hot"
    ]
  },

  {
    id: 7,
    title: "Spring Rolls",
    desc: "Crispy rolls",
    time: 45,
    difficulty: "Medium",
    fullDesc:
      "Spring Rolls are crispy golden snacks filled with fresh vegetables and sometimes meat. They are wrapped tightly and deep-fried until crunchy. Every bite delivers a crispy outer layer with a soft and flavorful filling inside, making them a perfect appetizer.",
    image: "https://images.unsplash.com/photo-1641848392593-12451ee6cd1d",
    ingredients: ["Wrapper", "Vegetables", "Oil"],
    steps: [
      "Fill wrapper with veggies",
      "Roll tightly",
      "Deep fry until golden"
    ]
  },

  {
    id: 8,
    title: "Hot & Sour Soup",
    desc: "Traditional soup",
    time: 35,
    difficulty: "Medium",
    fullDesc:
      "Hot & Sour Soup is a traditional Chinese soup with a perfect balance of spicy and tangy flavors. It is made with mushrooms, tofu, and aromatic spices simmered in a rich broth. The combination of heat and sourness makes it both comforting and refreshing.",
    image: "https://images.unsplash.com/photo-1762305194194-6896afafecb7",
    ingredients: ["Mushroom", "Soy Sauce", "Pepper", "Stock"],
    steps: [
      "Boil stock",
      "Add vegetables",
      "Add spices",
      "Serve hot"
    ]
  },

  {
    id: 9,
    title: "Mapo Tofu",
    desc: "Soft spicy tofu",
    time: 30,
    difficulty: "Medium",
    fullDesc:
      "Mapo Tofu is a classic Sichuan dish featuring soft tofu cooked in a spicy chili bean sauce. The dish is rich, flavorful, and slightly numbing due to Sichuan pepper. It is best enjoyed with hot steamed rice and is loved for its bold taste.",
    image: "https://images.unsplash.com/photo-1652282558646-88207645cc86",
    ingredients: ["Tofu", "Chili Paste", "Garlic"],
    steps: [
      "Cook tofu",
      "Add chili sauce",
      "Simmer and serve"
    ]
  },

  {
    id: 10,
    title: "Sweet & Sour Pork",
    desc: "Classic dish",
    time: 50,
    difficulty: "Hard",
    fullDesc:
      "Sweet & Sour Pork is a popular Chinese dish featuring crispy fried pork pieces coated in a tangy and slightly sweet sauce. Pineapple adds freshness while the sauce gives a glossy and flavorful coating. It is a perfect mix of crunch and flavor.",
    image: "https://images.unsplash.com/photo-1673994801206-58e8763ab116",
    ingredients: ["Pork", "Sauce", "Pineapple"],
    steps: [
      "Fry pork",
      "Add sauce",
      "Mix pineapple",
      "Serve"
    ]
  },

  {
    id: 11,
    title: "Vegetable Stir Fry",
    desc: "Healthy veggies",
    time: 15,
    difficulty: "Easy",
    fullDesc:
      "Vegetable Stir Fry is a healthy and colorful dish made by quickly cooking fresh vegetables over high heat. It retains crunch, nutrients, and natural flavors. Light soy sauce and garlic enhance its taste while keeping it simple and nutritious.",
    image: "https://images.unsplash.com/photo-1599297915779-0dadbd376d49",
    ingredients: ["Vegetables", "Soy Sauce", "Garlic"],
    steps: [
      "Heat pan",
      "Add vegetables",
      "Stir fry with sauce"
    ]
  },

  {
    id: 12,
    title: "Sesame Chicken",
    desc: "Crispy sweet chicken",
    time: 40,
    difficulty: "Medium",
    fullDesc:
      "Sesame Chicken is a crispy fried chicken dish coated in a sweet, sticky sauce and topped with toasted sesame seeds. The combination of crunchy texture and sweet glaze makes it a restaurant favorite. It is flavorful, satisfying, and best served fresh.",
    image: "https://images.unsplash.com/photo-1710508780452-d718a40b12a6",
    ingredients: ["Chicken", "Sesame", "Honey", "Soy Sauce"],
    steps: [
      "Fry chicken",
      "Add honey sauce",
      "Sprinkle sesame",
      "Serve"
    ]
  }
];

export default recipes;