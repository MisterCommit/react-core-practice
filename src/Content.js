import React, { Component } from "react";
import { Layout } from "antd";
import PureComponent from "./component/purecomponents/ParentComponent";
import FragmentCompontnt from "./component/fragment/ParentComponent";

class Content extends Component {
  renderChild = () => {
    console.log(this.props);
    if (this.props.selected === "React Fragment") {
      return <FragmentCompontnt />;
    } else if (this.props.selected === "Pure Component") {
      return <PureComponent />;
    }
  };

  render() {
    return (
      <Layout.Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, height: "100vh" }}
        >
          {this.renderChild()}
        </div>
      </Layout.Content>
    );
  }
}

export default Content;
