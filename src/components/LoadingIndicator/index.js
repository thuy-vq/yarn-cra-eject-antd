import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  top: 45vh;
`;

const LoadingIndicator = () => {
  return (
    <Wrapper>
      <Spin />
    </Wrapper>
  );
}

export default LoadingIndicator;
