import React, { Component } from 'react';
import DatePicker from 'components/DatePicker/DatePicker';

class KnockConfiguration extends Component {
  state = {
    value: new Date(new Date().getTime() + 86400000*4)
  }

  render() {
    return (
        <div>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <DatePicker
            value={this.state.value}
            initViewMode='day'
            onChange={value => this.setState({ value })}
            showQuickDay
            minDate={new Date(new Date().getTime() + 86400000*2)}
            maxDate={new Date(new Date().getTime() + 86400000*6)}
          />
        </div>
    );
  }
}

export default KnockConfiguration;
