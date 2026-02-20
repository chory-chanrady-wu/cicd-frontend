import { fetchProducts, fetchUsers, fetchCategories } from "../lib/api";

export default async function DashboardPage() {
  const [products, users, categories] = await Promise.all([
    fetchProducts(),
    fetchUsers(),
    fetchCategories(),
  ]);

  // Helper to get recent items by createdAt
  function getRecent(items: any[], count = 5) {
    return Array.isArray(items)
      ? items
          .filter((item) => item.createdAt)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )
          .slice(0, count)
      : [];
  }

  const recentProducts = getRecent(products);
  const recentUsers = getRecent(users);
  const recentCategories = getRecent(categories);

  return (
    <div>
      <h1 className="text-center font-bold bg-amber-300 rounded-lg text-3xl p-4">
        Dashboard
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="bg-white shadow rounded-lg p-6 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-3xl font-bold text-amber-500">
            {Array.isArray(products) ? products.length : 0}
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-amber-500">
            {Array.isArray(users) ? users.length : 0}
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Categories</h2>
          <p className="text-3xl font-bold text-amber-500">
            {Array.isArray(categories) ? categories.length : 0}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Recent Activity</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-100 bg-gray-200 shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Recent Products</h3>
            <ul>
              {recentProducts.length > 0 ? (
                recentProducts.map((p: any) => (
                  <li key={p.id || p._id || p.name} className="mb-2">
                    <span className="font-bold">{p.name}</span> —{" "}
                    {p.description || "No description"} <br />
                    <span className="text-xs text-gray-500">
                      Created: {new Date(p.createdAt).toLocaleString()}
                    </span>
                  </li>
                ))
              ) : (
                <li>No recent products.</li>
              )}
            </ul>
          </div>
          <div className="w-100 bg-gray-200 shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Recent Users</h3>
            <ul>
              {recentUsers.length > 0 ? (
                recentUsers.map((u: any) => (
                  <li key={u.id || u._id || u.name} className="mb-2">
                    <span className="font-bold">
                      {u.name || u.username || u.email}
                    </span>{" "}
                    <br />
                    <span className="text-xs text-gray-500">
                      Created:{" "}
                      {u.createdAt
                        ? new Date(u.createdAt).toLocaleString()
                        : "-"}
                    </span>
                  </li>
                ))
              ) : (
                <li>No recent users.</li>
              )}
            </ul>
          </div>
          <div className="w-100 bg-gray-200 shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Recent Categories</h3>
            <ul>
              {recentCategories.length > 0 ? (
                recentCategories.map((c: any) => (
                  <li key={c.id || c._id || c.name} className="mb-2">
                    <span className="font-bold">{c.name}</span> —{" "}
                    {c.description || "No description"} <br />
                    <span className="text-xs text-gray-500">
                      Created:{" "}
                      {c.createdAt
                        ? new Date(c.createdAt).toLocaleString()
                        : "-"}
                    </span>
                  </li>
                ))
              ) : (
                <li>No recent categories.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
