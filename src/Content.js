import React, { Component } from "react";
import { Layout } from "antd";
import ParentComponent from "./component/purecomponents/ParentComponent";

class Content extends Component {
  render() {
    return (
      <Layout.Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, height: "100vh" }}
        >
          <ParentComponent />
        </div>
      </Layout.Content>
    );
  }
}

export default Content;
