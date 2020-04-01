import React, { Component } from "react";
import Logo from "../imgs/logo_white.png";
import { Layout, Input, Button, Tooltip } from "antd";
import { Row, Col } from "react-flexbox-grid";
import { GithubOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;
class MainHeader extends Component {
  render() {
    console.log(this.props.last_update);
    return (
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <Row between="lg">
          <Col xs={12} lg={4}>
            <Row>
              <Col xs={2} lg={2}>
                <img src={Logo} className="main_logo" alt="Covid-19" />
              </Col>
              <Col xs={7} lg={8}>
                <h1 className="main_logo_heading">COVID-19</h1>
              </Col>
              <Col xs={3}>
                <Tooltip placement="topLeft" title={"repo link"}>
                  <Button className="hidden-lg" >
                    <GithubOutlined />
                  </Button>
                </Tooltip>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="hidden-sm">
            <Row end="lg">
              <Col>
                <h3 className="update_time hidden-sm">
                  Last Update : {this.props.last_update}
                </h3>
              </Col>
            </Row>
          </Col>
          <Col lg={3}>
            <Row center="lg">
              <Col lg="6">
                <Search
                  placeholder="Search Country"
                  onSearch={value => console.log(value)}
                  style={{ width: 200 }}
                  className="search_input hidden-sm"
                  onChange={this.props.onHandleChange}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <Tooltip placement="topLeft" title={"repo link"}>
              <Button className="hidden-sm">
                <GithubOutlined />
              </Button>
            </Tooltip>
          </Col>
        </Row>
      </Header>
    );
  }
}
export default MainHeader;
