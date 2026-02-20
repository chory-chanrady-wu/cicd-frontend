import { fetchCategories } from "../lib/api";

export default async function CategoriesPage() {
  const categories = await fetchCategories();
  return (
    <div>
      <h1 className="text-center font-bold bg-amber-300 rounded-lg text-3xl p-4">
        Categories
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2">#</th>
              <th className="border border-gray-200 px-3 py-2">Name</th>
              <th className="border border-gray-200 px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((cat: any, idx: number) => (
                <tr key={cat.id || cat._id || cat.name}>
                  <td className="border border-gray-200 px-3 py-2">
                    {idx + 1}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {cat.name || "-"}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    {cat.description || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
