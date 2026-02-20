"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchCategories } from "../../lib/api";

export default function ProductNewPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    packaging: "",
    price: "",
    stock: "",
    category: "",
  });
  const [categories, setCategories] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call
    setMessage("Product submitted! (API integration needed)");
    setTimeout(() => {
      router.push("/product");
    }, 1000);
  };

  return (
    <div className="max-w-8xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
      <button
        type="button"
        className="mb-4 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-400"
        onClick={() => router.push("/product")}
      >
        Back to Product
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="packaging">
            Packaging
          </label>
          <input
            type="text"
            id="packaging"
            name="packaging"
            value={form.packaging}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="stock">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            min="0"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id || cat._id} value={cat.id || cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-amber-600"
        >
          Create Product
        </button>
      </form>
      {message && (
        <div className="mt-4 text-green-600 font-semibold">{message}</div>
      )}
    </div>
  );
}
