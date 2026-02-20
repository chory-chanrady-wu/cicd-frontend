"use client";
import React from "react";

interface UserTableProps {
  users: any[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-3 py-2">ID</th>
            <th className="border border-gray-200 px-3 py-2">Full Name</th>
            <th className="border border-gray-200 px-3 py-2">Email</th>
            <th className="border border-gray-200 px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user: any, idx: number) => (
              <tr key={user.id || user._id || user.name}>
                <td className="border border-gray-200 px-3 py-2 text-center">
                  {user.id !== undefined ? user.id : "-"}
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  {user.fullname || "-"}
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  {user.email || "-"}
                </td>
                <td className="flex items-center gap-2 border border-gray-200 px-3 py-2 justify-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-1 text-sm"
                    onClick={() => alert(`Edit user ${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 text-sm"
                    onClick={() => alert(`Delete user ${user.id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
