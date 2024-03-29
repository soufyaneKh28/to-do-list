import { menu, menu_black } from "../assets";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CustomizedSwitches from "./CustomizedSwitches";

const Header = ({ mode, handleMode, handleSetDisplay }) => {
  return (
    <header>
      <nav className=" py-3 px-4 flex justify-between">
        <TemporaryDrawer mode={mode} handleSetDisplay={handleSetDisplay} />
        <CustomizedSwitches mode={mode} handleMode={handleMode} />
      </nav>
    </header>
  );
};

export function TemporaryDrawer({ mode, handleSetDisplay }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const links = [
    {
      link: "All",
      id: "All",
      Display() {
        handleSetDisplay(() => "All");
      },
    },
    {
      link: "Not Completed",
      id: "notCompleted",
      Display() {
        handleSetDisplay("Not");
      },
    },
    {
      link: "Completed",
      id: "Completed",
      Display() {
        handleSetDisplay(() => "Completed");
      },
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className=" "
      handleSetDisplay={handleSetDisplay}
    >
      <div
        className={`${
          mode ? " bg-white" : " bg-main_dark"
        } bg-main_color w-full h-[100vh] `}
      >
        <div>
          <ul className="pt-10">
            {links.map((link) => (
              <li
                key={link.id}
                className={`  px-2 py-3 cursor-pointer hover:bg-red-500 transition-colors ${
                  mode ? "text-black" : "text-white"
                }`}
                onClick={link.Display}
              >
                {link.link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );

  let anchor = "left";

  return (
    <div className="flex items-center">
      <React.Fragment key={anchor}>
        <div className=" flex items-center">
          <img
            src={mode ? menu_black : menu}
            alt="menu"
            className=" w-[35px] cursor-pointer"
            onClick={toggleDrawer(anchor, true)}
          />
        </div>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Header;
