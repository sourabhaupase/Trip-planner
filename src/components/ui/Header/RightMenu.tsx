import { Link } from "react-router";
import { Bell } from "lucide-react";
const menuList = [
  {
    title: "USD",
    path: "/usd",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
];

export default function RightMenu() {
  return (
    <div className="flex items-center gap-3">
      <ul className="flex items-center gap-3">
        {menuList.map((list) => (
          <li key={list.path}>
            <Link to={list.path}>{list.title}</Link>
          </li>
        ))}
      </ul>
      <Bell />
    </div>
  );
}
