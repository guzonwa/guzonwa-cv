import React from "react";
import "./App.scss";
import Tabs from "./components/Tabs/Tabs";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      {
        // tutorial on tabs in react
        // https://www.digitalocean.com/community/tutorials/react-tabs-component#step-2-%E2%80%94-creating-the-tabs-component
        <Tabs>
          <div label="Home">
            <Home />
          </div>
          <div label="Education">Education</div>
          <div label="Work">Work</div>
          <div label="Projects">Projects</div>
        </Tabs>
      }
    </div>
  );
}

export default App;
