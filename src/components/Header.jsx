import { menu } from "../assets";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <header>
      <nav className=" py-3 px-4 flex justify-between">
        <TemporaryDrawer />
        <div className="text-white font-bold text-[20px]">Logo</div>
      </nav>
    </header>
  );
};

export function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

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
    >
      <div className="bg-main_color w-full h-[100vh] "></div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div>
            <img
              src={menu}
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
      ))}
    </div>
  );
}

export default Header;
