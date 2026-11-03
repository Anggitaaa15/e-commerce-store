import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="flex items-center justify-between border-b px-8 py-4">
      <h1 className="text-xl font-bold">Arsora</h1>

      <div className="flex gap-2">
        {navItems.map((item) => (
          <Button key={item.path} asChild variant="ghost">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-600 hover:text-orange-600"
              }
            >
              {item.name}
            </NavLink>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;