import React from "react";
import "./App.scss";
import Tabs from "./components/Tabs/Tabs";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Tabs>
        <div label="Home">
          <Home />
        </div>
        <div label="Education">test</div>
        <div label="Work">test</div>
        <div label="Projects">test</div>
      </Tabs>
    </div>
  );
}

export default App;
