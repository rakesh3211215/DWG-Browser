import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
  FileWarning,
  Ban,
  ListTodo,
  Calendar,
  Contact,
  Component,
  Wrench,
  Puzzle,
  Palette,
  ScrollText,
  Table,
  BarChart2,
  MapPin,
  DollarSign,
} from "lucide-react";

const Sidebar = ({ isOpen }) => {
  const [errorOpen, setErrorOpen] = useState(false);

  const menuGroups = [
    {
      title: "Menu",
      items: [
        {
          label: "Dashboard",
          icon: <LayoutDashboard size={18} />,
          to: "/admin",
          exact: true,
        },
        { label: "Users", icon: <Users size={18} />, to: "/admin/users" },
        {
          label: "Settings",
          icon: <Settings size={18} />,
          to: "/admin/settings",
        },
        {
          label: "Payment Form",
          icon: <DollarSign size={18} />,
          to: "/admin/pricing-menu",
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          label: "Authentication",
          icon: <ShieldCheck size={18} />,
          to: "/authentication",
          exact: true,
        },
        {
          label: "Error Pages",
          icon: <FileWarning size={18} />,
          expandable: true,
          open: errorOpen,
          toggle: () => setErrorOpen(!errorOpen),
          children: [
            { label: "Error 404", to: "/error/404" },
            { label: "Error 500", to: "/error/500" },
            { label: "Error 503", to: "/error/503" },
            { label: "Error 429", to: "/error/429" },
            { label: "Offline Page", to: "/offline" },
          ],
        },
        {
          label: "Utility",
          icon: <Ban size={18} />,
          to: "/utility",
          exact: true,
        },
      ],
    },
    {
      title: "Apps",
      items: [
        { label: "Todo List", icon: <ListTodo size={18} />, to: "/todo" },
        { label: "Contacts", icon: <Contact size={18} />, to: "/contacts" },
        { label: "Calendar", icon: <Calendar size={18} />, to: "/calendar" },
      ],
    },
    {
      title: "General",
      items: [
        {
          label: "Components",
          icon: <Component size={18} />,
          to: "/components",
        },
        { label: "Widgets", icon: <Wrench size={18} />, to: "/widgets" },
        {
          label: "Extended UI",
          icon: <Puzzle size={18} />,
          to: "/extended-ui",
        },
        { label: "Icons", icon: <Palette size={18} />, to: "/icons" },
        { label: "Forms", icon: <ScrollText size={18} />, to: "/forms" },
        { label: "Tables", icon: <Table size={18} />, to: "/tables" },
        { label: "Apex Charts", icon: <BarChart2 size={18} />, to: "/charts" },
        { label: "Maps", icon: <MapPin size={18} />, to: "/maps" },
      ],
    },
  ];

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col p-4 shadow-lg`}
    >
      <div className="overflow-y-auto sidebar-scroll pr-2 flex-grow">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="text-xs font-semibold text-blue-500 uppercase px-2 mb-2 tracking-wide">
              {group.title}
            </h4>
            <nav className="space-y-1">
              {group.items.map((item, index) =>
                item.expandable ? (
                  <div key={index}>
                    <button
                      onClick={item.toggle}
                      className="flex justify-between items-center w-full px-4 py-2 rounded-xl font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-700 text-gray-700 dark:text-gray-300 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
                      {item.open ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {item.open && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.children.map((sub, subIdx) => (
                          <NavLink
                            key={subIdx}
                            to={sub.to}
                            className={({ isActive }) =>
                              `block px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                isActive
                                  ? "bg-blue-200 dark:bg-blue-600 text-blue-900 dark:text-white"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-700 hover:text-blue-700 dark:hover:text-white"
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.exact || false}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                        isActive
                          ? "bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-700 hover:text-blue-700 dark:hover:text-white"
                      }`
                    }
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>
          </div>
        ))}
      </div>

      {/* === */}
    </aside>
  );
};

export default Sidebar;
