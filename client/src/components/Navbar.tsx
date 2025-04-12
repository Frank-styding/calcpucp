import { JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { GearIcon } from "./icons/GearIcon";
import { MenuIcon } from "./icons/MenuIcon";
import { StatisticsIcon } from "./icons/StatisticsIcon";

const NavLink = ({
  to,
  icon,
}: {
  to: string;
  icon: ({ className }: { className: string }) => JSX.Element;
}) => {
  const location = useLocation();

  const isActive = () => {
    const pathname = location.pathname;
    return (pathname.startsWith(to) && to != "/") || to == pathname;
  };
  return (
    <Link className="grid place-content-center active:bg-transparent" to={to}>
      {icon({
        className:
          (isActive() ? "fill-blue-800" : "fill-gray-400") +
          " hover:opacity-90",
      })}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <div className="w-full h-full bg-gray-900 flex flex-row justify-between align-middle pl-10 pr-10">
      <NavLink to="/settings" icon={GearIcon} />
      <NavLink to="/" icon={MenuIcon} />
      <NavLink to="/statistics" icon={StatisticsIcon} />
    </div>
  );
};
