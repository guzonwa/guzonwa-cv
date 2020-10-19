import React from "react";
import Typing from "react-typing-animation";
import "./Home.scss";

const Home = () => (
  <div className="Home" data-testid="Home">
    <div className="page-layout">
    <Typing speed={30} cursorClassName="home-cursor">
      <h3>
        Name: <strong>Uzonwa</strong> George,
        <br />
        <Typing.Delay ms={200} />
        <strong>Phone</strong> No: <strong>(204)</strong>-898-1749,
        <br />
        <Typing.Delay ms={200} />
        Email: <strong>g.uzonwa@gmail.com,</strong>
        <Typing.Delay ms={900} />
        <Typing.Backspace count={10} />
        <strong>hotmail.com,</strong>
      </h3>
      <Typing.Delay ms={750} />
      <h1>
        Full Stack <strong>Developer</strong>
      </h1>
      <Typing.Delay ms={750} />
      <p>
        Winnipeg <strong>| MB</strong>
      </p>
    </Typing>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
