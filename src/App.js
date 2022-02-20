import React, { Component } from "react";
import { Layout } from "antd";
import Sidebar from "./SideBar";
import Content from "./Content";
import { sidebarlist } from "./common/constent";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: sidebarlist[0].titile,
    };
  }

  handleClick = (e) => {
    this.setState({
      selected: e.key,
    });
  };
  render() {
    return (
      <Layout>
        <Sidebar handleClick={this.handleClick} />
        <Content selected={this.state.selected} />
      </Layout>
    );
  }
}

export default App;
