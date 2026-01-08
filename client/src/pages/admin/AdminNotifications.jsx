import React, { useState } from "react";

const AdminNotifications = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState("all");
  const [status, setStatus] = useState(null);

  const handleSend = () => {
    if (!title || !message) {
      setStatus({ type: "error", text: "Please fill title & message" });
      return;
    }

    // later integrate firebase messaging backend API
    setStatus({ type: "success", text: "Notification Sent Successfully!" });

    setTitle("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Broadcast Notification
      </h1>

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
      <div className="bg-white p-6 shadow-md rounded-lg max-w-lg">
        {/* Title */}
        <label className="block font-semibold mb-2 text-gray-700">
          Notification Title
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ex: Hackathon Round 2 Starts Now!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Message */}
        <label className="block font-semibold mb-2 text-gray-700">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-md mb-4 h-28 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Target Audience */}
        <label className="block font-semibold mb-2 text-gray-700">
          Send To
        </label>
        <select
          className="w-full px-3 py-2 border rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        >
          <option value="all">All Users</option>
          <option value="participants">Event Participants Only</option>
          <option value="editors">Editors</option>
          <option value="blocked">Blocked Accounts</option>
        </select>

        {/* Button */}
        <button
          onClick={handleSend}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-all"
        >
          Send Notification
        </button>
      </div>
    </div>
  );
};

export default AdminNotifications;