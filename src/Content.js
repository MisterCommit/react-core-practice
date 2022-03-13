import React, { Component } from "react";
import { Layout } from "antd";
import PureComponent from "./component/purecomponents/ParentComponent";
import FragmentCompontnt from "./component/fragment/ParentComponent";
import ReactExplain from "./component/react/ReactExplain";
import ReactHooks from "./component/hooks/ReactHooks";
import Portal from "./component/portal/Portal";
import Profiler from "./component/Profiler/Profiler";
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary";
import SimpleRef from "./component/Refs/SimpleRef";
import ParentCompForRef from "./component/Refs/ParentCompForRef";
import SimpleHOC from "./component/simpleHOC/SimpleHOC";
import RenderProps from "./component/RenderProps/RenderProps";
import Shabeer from "./component/Shabeer/Shabeer";

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
    } else if (this.props.selected === "Porfiler") {
      return <Profiler />;
    } else if (this.props.selected === "Error Boundary") {
      return <ErrorBoundary />;
    } else if (this.props.selected === "Simple Ref") {
      return <SimpleRef />;
    } else if (this.props.selected === "Custom Component Ref") {
      return <ParentCompForRef />;
    } else if (this.props.selected === "HOC") {
      return <SimpleHOC />;
    } else if (this.props.selected === "Render Props") {
      return <RenderProps />;
    } else if (this.props.selected === "Shabeer") {
      return <Shabeer />;
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
