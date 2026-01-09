import React from "react";
import { FiUsers, FiBell, FiDollarSign, FiUserPlus, FiUserCheck } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";

const AdminDashboard = () => {
  const features = [
    {
      title: "Broadcast Notifications",
      icon: <FiBell size={30} />,
      link: "/admin/notifications",
      color: "bg-blue-500",
    },
    {
      title: "Manage Editors / Create Access",
      icon: <MdAdminPanelSettings size={30} />,
      link: "/admin/editors",
      color: "bg-purple-500",
    },
    {
      title: "See All Payments",
      icon: <FiDollarSign size={30} />,
      link: "/admin/payments",
      color: "bg-green-500",
    },
    {
      title: "See All Users",
      icon: <FiUsers size={30} />,
      link: "/admin/users",
      color: "bg-orange-500",
    },
    {
      title: "See Editor List",
      icon: <FiUserCheck size={30} />,
      link: "/admin/editor-list",
      color: "bg-indigo-500",
    },
    {
      title: "User Details View",
      icon: <FiUserPlus size={30} />,
      link: "/admin/user-details",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="w-full p-6 bg-white shadow-md rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col items-center justify-center border border-gray-200"
          >
            <div className={`${item.color} text-white rounded-full p-3 mb-4`}>
              {item.icon}
            </div>
            <h2 className="text-lg font-semibold text-center text-gray-800">
              {item.title}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;