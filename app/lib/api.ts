// app/lib/api.ts
const API_BASE_URL = "https://cicdassignment.up.railway.app";

export async function fetchProducts() {
  const res = await fetch(
    `${API_BASE_URL}/products`,
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchUsers() {
  const res = await fetch(
    `${API_BASE_URL}/users`,
  );
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(
    `${API_BASE_URL}/categories`,
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
