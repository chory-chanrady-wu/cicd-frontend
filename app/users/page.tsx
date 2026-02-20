import { fetchUsers } from "../lib/api";
import UserTableWrapper from "./UserTableWrapper";

export default async function UsersPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1 className="text-center font-bold bg-amber-300 rounded-lg text-3xl p-4">
        Users
      </h1>
      <UserTableWrapper users={users} />
    </div>
  );
}
