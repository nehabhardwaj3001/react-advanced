import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${(prop) => prop?.flex};
`;

const SplitScreen = ({
  // to get components as prps
  // Left,
  // Right,
  leftCompWidth = 1,
  rightCompWidth = 1,
  children
}) => {
  const [left, right] = children;

  return (
    <MainContainer>
      <Panel flex={leftCompWidth}>
        {/* <Left /> */} {/* use in case of props */}
        {left} {/* use in case of children */}
      </Panel>
      <Panel flex={rightCompWidth}>
        {/* <Right /> */}
        {right}
      </Panel>
    </MainContainer>
  );
};

export default SplitScreen;
