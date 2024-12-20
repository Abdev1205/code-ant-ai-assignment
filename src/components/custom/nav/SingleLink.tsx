import React from "react";
import { NavLink } from "react-router-dom";

export interface SingleLinkProps {
  label: string;
  icon?: React.ReactNode;
  path: string;
}

export const SingleLink: React.FC<SingleLinkProps> = ({
  label,
  icon,
  path,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-[.3rem] px-[.5rem] py-[.5rem] rounded-[.3rem] font-poppins font-[400] duration-300 ${
          isActive
            ? " text-white bg-[#1570ef]"
            : "text-gray-500 hover:text-primary "
        }`
      }
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </NavLink>
  );
};
