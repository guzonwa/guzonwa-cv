import React from "react";
import styles from "./Home.module.scss";
import Typing from "react-typing-animation";

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <Typing speed={30}>
      <h3>
        Name: <strong>Uzonwa</strong> George,
        <br />
        <Typing.Delay ms={200} />
        Phone No: (204)-898-1749,
        <br />
        <Typing.Delay ms={200} />
        Email: g.uzonwa@gmail.com,
        <Typing.Delay ms={900} />
        <Typing.Backspace count={10} />
        hotmail.com,
      </h3>
      <Typing.Delay ms={750} />
      <h1>
        <strong>FULL STACK DEVELOPER</strong>
      </h1>
      <Typing.Delay ms={750} />
      <p>
        Winnipeg <strong>MB</strong>
      </p>
    </Typing>
  </div>
);

export default Home;
