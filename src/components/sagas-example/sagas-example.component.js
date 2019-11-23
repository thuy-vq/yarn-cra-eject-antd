import React from 'react';
import { connect } from 'react-redux';

import { Card, Button } from 'antd';

const SagasExample = ({ increment, decrement, value }) => (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      {value}
      <Button onClick={increment}>Add 1</Button>
      <Button onClick={decrement}>Minus 1</Button>
    </Card>
);

const mapStateToProps = state => ({
  value: state.app.value
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SagasExample);
