import React, { Component } from "react";
import { Layout } from "antd";
import PureComponent from "./component/purecomponents/ParentComponent";
import FragmentCompontnt from "./component/fragment/ParentComponent";
import ReactExplain from "./component/react/ReactExplain";
import ReactHooks from "./component/hooks/ReactHooks";
import Portal from "./component/portal/Portal";

class Content extends Component {
  renderChild = () => {
    console.log(this.props);
    if (this.props.selected === "React") {
      return <ReactExplain />;
    } else if (this.props.selected === "Hooks") {
      return <ReactHooks />;
    } else if (this.props.selected === "Fragment") {
      return <FragmentCompontnt />;
    } else if (this.props.selected === "Pure Component") {
      return <PureComponent />;
    } else if (this.props.selected === "Portal") {
      return <Portal />;
    }
  };

  render() {
    return (
      <Layout.Content
        style={{
          padding: "24px 16px 0",
          height: "100vh",
          background: "#E7e7e7",
          overflow: "auto",
        }}
      >
        {this.renderChild()}
      </Layout.Content>
    );
  }
}

export default Content;
