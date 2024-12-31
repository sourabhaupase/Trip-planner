import { Link } from "react-router";

const menuList = [
  {
    title: "Things to do",
    path: "/things-to-do",
  },
  {
    title: "Tour",
    path: "/tour",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function CenterMenu() {
  return (
    <ul className="flex items-center gap-3">
      {menuList.map((list) => (
        <li key={list.path}>
          <Link to={list.path}>{list.title}</Link>
        </li>
      ))}
    </ul>
  );
}
