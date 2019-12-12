import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './apps.scss';
import KnockConfiguration from '../KnockConfiguration/KnockConfiguration';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Homepage = () => 'this is Homepage page'
const HotPage = () => 'this is Hot page'
const Sub = () => 'this is sub page'
const History = () => 'this is History page'
const Search = () => 'this is search page'
const BoysPage = () => 'this is BoysPage page'
const GirlPage = () => 'this is girlPage page'
const Contact = () => 'this is Contact page'

class Apps extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };


  render () {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/hot">Hot</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/subscriber">subscriber</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/history">history</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/search">search</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/boys">boys</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/girls">girls</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/contact">contact</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/knock-configuration">Knock Configuration(KC)</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff', minHeight: 'calc(100vh - 133px)' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              width={200}
            >
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>Option 2</span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                  }
                >
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                  }
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Switch>
                <Route path="/home" component={Homepage} />
                <Route path="/hot" component={HotPage} />
                <Route path="/subscriber" component={Sub} />
                <Route path="/history" component={History} />
                <Route path="/search" component={Search} />
                <Route path="/boys" component={BoysPage} />
                <Route path="/girls" component={GirlPage} />
                <Route path="/contact" component={Contact} />
                <Route path="/knock-configuration" component={KnockConfiguration} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer />

      </Layout>
    );
  }
}

export default Apps;
