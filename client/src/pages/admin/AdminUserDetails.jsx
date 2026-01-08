import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams(); // Firestore user id
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [blocked, setBlocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const docRef = doc(db, "users", id);
      const snap = await getDoc(docRef);

      if (!snap.exists()) {
        setStatus({ type: "error", text: "User not found" });
        return;
      }

      const data = snap.data();
      setUser(data);
      setRole(data.role || "user");
      setBlocked(data.blocked || false);
      setLoading(false);
    } catch (e) {
      console.error("Error:", e);
      setStatus({ type: "error", text: "Error fetching user" });
    }
  };

  const updateUser = async () => {
    try {
      await updateDoc(doc(db, "users", id), {
        role,
        blocked,
      });

      setStatus({ type: "success", text: "User updated successfully" });
    } catch (e) {
      setStatus({ type: "error", text: "Update failed" });
      console.error(e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading user details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        ⬅ Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Details</h1>

      {/* STATUS ALERT */}
      {status && (
        <div
          className={`mb-4 p-3 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {status.text}
        </div>
      )}

      {/* CARD */}
      <div className="bg-white p-6 shadow-md rounded-lg max-w-xl">
        <p className="text-lg mb-2">
          <strong>Name:</strong> {user.name || "--"}
        </p>

        <p className="text-lg mb-2">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="text-lg mb-2">
          <strong>Phone:</strong> {user.phone || "Not Provided"}
        </p>

        <p className="text-lg mb-4">
          <strong>Role:</strong> {role}
        </p>

        {/* ROLE SELECT */}
        <label className="block font-semibold mb-1 text-gray-700">
          Update Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-5 outline-none"
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>

        {/* BLOCK BUTTON */}
        <label className="block font-semibold mb-1 text-gray-700">
          Account Status
        </label>
        <select
          value={blocked ? "true" : "false"}
          onChange={(e) => setBlocked(e.target.value === "true")}
          className="w-full px-3 py-2 border rounded-md mb-5 outline-none"
        >
          <option value="false">Active</option>
          <option value="true">Blocked</option>
        </select>

        {/* SAVE */}
        <button
          onClick={updateUser}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserDetails;