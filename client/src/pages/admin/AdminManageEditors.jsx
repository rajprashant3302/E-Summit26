import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const AdminManageEditors = () => {
  const [editors, setEditors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetchEditors();
  }, []);

  const fetchEditors = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users")
      );

      const list = [];
      querySnapshot.forEach((d) => {
        const data = d.data();
        if (data.role === "editor") {
          list.push({ id: d.id, ...data });
        }
      });

      setEditors(list);
    } catch (err) {
      console.error(err);
    }
  };

  const removeEditorAccess = async (id) => {
    try {
      await updateDoc(doc(db, "users", id), { role: "user" });
      setStatus({ type: "success", text: "Editor access removed" });
      fetchEditors();
    } catch (err) {
      setStatus({ type: "error", text: "Failed to update role" });
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Manage Editors</h1>

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

      <div className="bg-white rounded-lg overflow-x-auto shadow">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {editors.length > 0 ? (
              editors.map((editor) => (
                <tr
                  key={editor.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{editor.name}</td>
                  <td className="p-3">{editor.email}</td>
                  <td className="p-3 capitalize">{editor.role}</td>
                  <td className="p-3">
                    <button
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                      onClick={() => removeEditorAccess(editor.id)}
                    >
                      Remove Access
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center" colSpan={4}>
                  No editors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageEditors;