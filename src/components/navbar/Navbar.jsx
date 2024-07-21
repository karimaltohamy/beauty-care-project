import React, { Fragment, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMenu2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Menu from "../menu/Menu";

const Navbar = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Fragment>
      <nav>
        <div className="flex items-center justify-between">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link !text-primary" : "link"
            }
            to="/"
          >
            <AiOutlineHome size={32} />
            <span>{t("home")}</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link !text-primary" : "link"
            }
            to="/favorite"
          >
            <MdFavoriteBorder size={32} />
            <span>{t("favorite")}</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link !text-primary" : "link"
            }
            to="/profile/accounts"
          >
            <CgProfile size={32} />
            <span>{t("profile")}</span>
          </NavLink>
          <button onClick={() => setOpenMenu(true)} className={"link"}>
            <RiMenu2Line size={32} />
            <span>{t("menu")}</span>
          </button>
        </div>
      </nav>
      <Menu open={openMenu} setOpen={setOpenMenu} />
    </Fragment>
  );
};

export default Navbar;
