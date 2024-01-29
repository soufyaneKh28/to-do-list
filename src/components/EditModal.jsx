import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

export default function EditModal({
  open,
  handleSetOpen,
  tasksList,
  handleSetTask,
  handleSetClose,
  task,
  taskChange,
  setTaskChange,
  confirmChange,
  mode,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#31315b",
    color: "#fff",
    borderRadius: "10px",
    boxShadow: 24,
    p: "20px 15px",
  };

  if (mode) {
    style.bgcolor = "#fff";
    style.color = "black";
  } else {
    style.bgcolor = "#31315b";
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleSetClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              bgcolor: "#fff",
            }}
            className={`${mode ? "" : "blue"}`}
          >
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Task
            </Typography>
            <input
              type="text"
              className={` w-full py-3 mt-4 rounded-full 
             text-white
            px-4 bg-main_dark`}
              value={taskChange}
              onChange={(e) => setTaskChange(e.target.value)}
            />
            <div className="flex justify-end mt-3">
              <button className="m-1" onClick={handleSetClose}>
                Cancel
              </button>
              <button className="m-1 bg-blue-600" onClick={confirmChange}>
                Confirm
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
