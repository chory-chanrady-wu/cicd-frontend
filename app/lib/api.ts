// app/lib/api.ts

export async function fetchProducts() {
  const res = await fetch(
    "https://cicdassignment-production.up.railway.app/products",
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchUsers() {
  const res = await fetch(
    "https://cicdassignment-production.up.railway.app/users",
  );
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(
    "https://cicdassignment-production.up.railway.app/categories",
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
