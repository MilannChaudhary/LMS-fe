import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";

export const SideBar = () => {
  const sidebarLinks = [
    {
      title: "Dashboard",
      to: "/user",
      icon: <FaUserCog />,
      isAdminOnly: false,
    },
    {
      title: "Books",
      to: "/user/books",
      icon: <FaUserCog />,
      isAdminOnly: true,
    },
    {
      title: "Users",
      to: "/user/users",
      icon: <FaUserCog />,
      isAdminOnly: true,
    },
    {
      title: "Admin Staffs",
      to: "/user/admins",
      icon: <FaUserCog />,
      isAdminOnly: true,
    },
    {
      title: "Borrow History",
      to: "/user/borrow-history",
      icon: <FaUserCog />,
      isAdminOnly: false,
    },
    {
      title: "Reviews",
      to: "/user/reviews",
      icon: <FaUserCog />,
      isAdminOnly: true,
    },
    {
      title: "Profile",
      to: "/user/profile",
      icon: <FaUserCog />,
      isAdminOnly: false,
    },
  ];
  return (
    <Stack gap={2}>
      {sidebarLinks.map((link) => (
        <Link key={link.to} className="p-2 nav-link" to={link.to}>
          {link.icon} {link.title}
        </Link>
      ))}
    </Stack>
  );
};
