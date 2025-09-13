import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export async function fetchPosts() {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
}

// my-website/
//  ┣ app/
//  ┃ ┣ (site)/
//  ┃ ┃ ┣ page.tsx       # Home
//  ┃ ┃ ┣ about/
//  ┃ ┃ ┃ ┗ page.tsx
//  ┃ ┃ ┣ services/
//  ┃ ┃ ┃ ┗ page.tsx
//  ┃ ┃ ┣ contact/
//  ┃ ┃ ┃ ┗ page.tsx
//  ┃ ┣ layout.tsx       # Root Layout
//  ┃ ┗ head.tsx         # SEO defaults
//  ┣ components/
//  ┃ ┣ ui/              # Buttons, Cards, etc.
//  ┃ ┗ layout/          # Header, Footer, Nav
//  ┣ lib/
//  ┃ ┣ api.ts           # API helpers
//  ┣ styles/
//  ┃ ┗ mixins.scss
//  ┗ next.config.mjs
