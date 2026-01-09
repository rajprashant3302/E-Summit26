import React, { useState } from "react";
import axios from "axios";

const AdminCreateEditor = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("editor");
  const [status, setStatus] = useState(null);

  const sendAccess = async () => {
    if (!email) {
      setStatus({ type: "error", text: "Enter an email first" });
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/invite-editor", {
        email,
        role,
      });

      setStatus({
        type: res.data.success ? "success" : "error",
        text: res.data.message,
      });

      setEmail("");
    } catch (err) {
      setStatus({ type: "error", text: "Server error sending invitation" });
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Assign Admin/Editor Access</h1>

      {status && (
        <div
          className={`mb-4 p-3 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.text}
        </div>
      )}

      {/* EMAIL INPUT */}
      <input
        type="email"
        className="w-full max-w-md px-4 py-2 mb-4 border rounded-md"
        placeholder="Enter email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* ROLE SELECT */}
      <select
        className="w-full max-w-md px-4 py-2 mb-4 border rounded-md"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>

      {/* BUTTON */}
      <button
        className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600"
        onClick={sendAccess}
      >
        Send Access
      </button>
    </div>
  );
};

export default AdminCreateEditor;