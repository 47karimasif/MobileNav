import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    position: "fixed",
    top: "0px",
    width: "100%",
    zIndex: 100,
  },
  spacer: {
    marginBottom: "66px",
  },
  container: {
    background: "linear-gradient(315deg, #b1bfd8 0%, #667eaa 74%)",
  },
  wrapper: {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  img: {
    width: "60px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40px",
    },
  },
  menuButtonInactive: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuButtonActive: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(45deg) translate(35px, -35px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(-45deg) translate(35px, 35px)",
    },
    cursor: "pointer",
  },
  inactiveLinksDiv: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },
  activeLinksDiv: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(50%)",
    transition: "all 0.5s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      margin: "20px 0",
      padding: "10px 0",
    },
  },
  a: {
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const data = [
  { name: "Home", Link: "/" },
  { name: "Problems", Link: "/problems" },
  {
    name: "Team",
    Link: "/team",
  },
  {
    name: "Events",
    Link: "/events",
  },
];

const MobileNavbar = () => {
  const classes = useStyles();
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.logoDiv}>
              <Link href="/">
                <img src="/codeloper1.png" alt="logo" className={classes.img} />
              </Link>
            </div>
            <div onClick={() => setActive(!active)}>
              <div
                className={
                  active ? classes.menuButtonActive : classes.menuButtonInactive
                }
              />
            </div>
          </div>
        </div>
        <div
          className={active ? classes.activeLinksDiv : classes.inactiveLinksDiv}
        >
          <ul className={classes.ul}>
            {data.map((item, i) => (
              <li key={`${i * 4}`} onClick={() => setActive(false)}>
                <Link href={item.Link}>
                  <a className={classes.a}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.spacer} />
    </>
  );
};

export default MobileNavbar;
