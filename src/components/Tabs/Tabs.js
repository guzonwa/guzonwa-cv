import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Tabs.scss";
import Tab from "../Tab/Tab";

const Tabs = (props) => {
  // set state for tracking active tab
  const [state, setState] = useState({
    activeTab: props.children[0].props.label,
  });

  // onclick function to update state to current active tab
  const onClickTabItem = (tab) => {
    setState({ activeTab: tab });
  };

  return (
    <div className="Tabs" data-testid="Tabs">
      <ol className="tab-list">
        {/* display the tabs */}
        {props.children.map((child) => {
          // label is the name of the tab
          const label = child.props.label;
          return (
            <Tab
              activeTab={state.activeTab}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {/* loop through children(tabs) to display the tab content */}
        {props.children.map((child) => {
          // if current tab is active, return its properties
          return child.props.label === state.activeTab
            ? child.props.children
            : undefined;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

Tabs.defaultProps = {};

export default Tabs;
