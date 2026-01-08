import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase"; // your frontend firebase config
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setUsers(list);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(filter.toLowerCase()) ||
      u.email?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Users</h1>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search user by name or email"
        className="w-full max-w-md px-4 py-2 mb-4 border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((u) => (
                <tr
                  key={u.id}
                  className="border-b hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="p-3">{u.name || "--"}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3 capitalize">{u.role || "user"}</td>
                  <td className="p-3">
                    {u.blocked ? (
                      <span className="text-red-500 font-medium">Blocked</span>
                    ) : (
                      <span className="text-green-600 font-medium">Active</span>
                    )}
                  </td>

                  {/* Action button */}
                  <td className="p-3">
                    <button
                      onClick={() => navigate(`/admin/user/${u.id}`)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan="5">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;