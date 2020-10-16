import React from "react";
import PropTypes from "prop-types";
import "./Tab.scss";

const Tab = (props) => {
  // instantiate the passed in props
  const activeTab = props.activeTab;
  const label = props.label;
  const onClickTabItem = props.onClick;

  const onClick = () => {
    // calls the onclick passed in from the proptypes by Tabs.js
    // which takes in a tab name/label (string)
    onClickTabItem(label);
  };

  const className = activeTab !== label ? "tab-item" : "tab-item-active";

  return (
    <div className="Tab" data-testid="Tab">
      <li className={className} onClick={onClick}>
        {label}
      </li>
    </div>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {};

export default Tab;
