import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { sidebarlist } from "./common/constent";
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[sidebarlist[0].titile]}
          onClick={this.props.handleClick}
        >
          {sidebarlist.map((item) => {
            return <Menu.Item key={item.titile}>{item.titile}</Menu.Item>;
          })}
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
