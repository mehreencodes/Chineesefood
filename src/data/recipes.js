import { unsplash, unsplashSet } from "../utils/img";

const recipes = [
  {
    id: 1,
    category: "Noodles",
    title: "Chicken Chow Mein",
    desc: "Stir-fried noodles tossed with tender chicken and crunchy vegetables.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Chicken",
    title: "Sichuan Chicken",
    desc: "Juicy chicken tossed in a bold, spicy Sichuan sauce.",
    image:
      "https://images.unsplash.com/photo-1741004580357-15d116ef4ba3?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    category: "Rice",
    title: "Egg Fried Rice",
    desc: "Fluffy rice stir-fried with eggs, scallions, and savory seasonings.",
    image:
      "https://images.unsplash.com/photo-1691322161487-0331fae404af?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    category: "Beef",
    title: "Beef Stir Fry",
    desc: "Tender beef strips seared with crisp vegetables in a rich sauce.",
    image:
      "https://images.unsplash.com/photo-1680084539070-e26f84603d95?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    category: "Noodles",
    title: "Garlic Noodles",
    desc: "Savory noodles coated in buttery garlic sauce with a hint of soy.",
    image:
      "https://images.unsplash.com/photo-1544899812-000334603501?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    category: "Chicken",
    title: "Kung Pao Chicken",
    desc: "Spicy chicken stir-fried with peanuts, chilies, and a tangy sauce.",
    image:
      "https://images.unsplash.com/photo-1632022777952-0e4e0baf636d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    category: "Dim Sum",
    title: "Spring Rolls",
    desc: "Golden, crispy rolls filled with seasoned vegetables and aromatics.",
    image:
      "https://images.unsplash.com/photo-1641848392593-12451ee6cd1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    category: "Soups",
    title: "Hot & Sour Soup",
    desc: "A warming broth with mushrooms, tofu, and a punchy sour-spicy kick.",
    image:
      "https://images.unsplash.com/photo-1762305194194-6896afafecb7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    category: "Tofu",
    title: "Mapo Tofu",
    desc: "Silky tofu simmered in a fiery, savory Sichuan chili sauce.",
    image:
      "https://images.unsplash.com/photo-1652282558646-88207645cc86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    category: "Pork",
    title: "Sweet & Sour Pork",
    desc: "Crispy pork bites coated in a tangy sauce with a touch of sweetness.",
    image:
      "https://images.unsplash.com/photo-1673994801206-58e8763ab116?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    category: "Veg",
    title: "Vegetable Stir Fry",
    desc: "Fresh, colorful vegetables tossed in a light, flavorful garlic sauce.",
    image:
      "https://images.unsplash.com/photo-1599297915779-0dadbd376d49?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    category: "Chicken",
    title: "Sesame Chicken",
    desc: "Crispy chicken bites glazed with a sweet, sticky sesame sauce.",
    image:
      "https://images.unsplash.com/photo-1710508780452-d718a40b12a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default recipes;
