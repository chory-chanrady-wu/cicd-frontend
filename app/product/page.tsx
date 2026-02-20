import { fetchProducts } from "../lib/api";
import "../globals.css";

export default async function ProductPage() {
  const products = await fetchProducts();
  return (
    <div>
      <h1 className="text-center font-bold bg-amber-300 rounded-lg text-3xl p-4">
        Product Page
      </h1>
      <div>
        <button className="mb-4 mt-4">
          <a href="/product/new" className="bg-amber-500 text-white px-4 py-2 rounded">
            Create New Product
          </a>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2">#</th>
              <th className="border border-gray-200 px-3 py-2">Name</th>
              <th className="border border-gray-200 px-3 py-2">Description</th>
              <th className="border border-gray-200 px-3 py-2">Packaging</th>
              <th className="border border-gray-200 px-3 py-2">Price</th>
              <th className="border border-gray-200 px-3 py-2">Stock</th>
              <th className="border border-gray-200 px-3 py-2">
                Category Name
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product: any, idx: number) => (
                <tr key={product.id || product._id || product.name}>
                  <td className="border border-gray-200 px-3 py-2">
                    {idx + 1}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {product.name || "-"}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {product.description || "-"}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {product.packaging || "-"}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {product.price !== undefined ? product.price : "-"}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {product.stock !== undefined ? product.stock : "-"}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {product.category?.name || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={13} className="text-center py-4">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
