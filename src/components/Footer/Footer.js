import React, { Component } from 'react';
import { Layout, Select   } from 'antd';

const { Option } = Select;

class Footer extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <Layout.Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Layout.Footer>
    );
  }
}

export default Footer;