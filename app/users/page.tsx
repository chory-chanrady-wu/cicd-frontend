import { fetchUsers } from "../lib/api";
import UserTableWrapper from "./UserTableWrapper";

export default async function UsersPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Users</h1>
      <UserTableWrapper users={users} />
    </div>
  );
}
