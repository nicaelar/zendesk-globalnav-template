import React from 'react';
import styled from 'styled-components';

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`;

const Title = styled.h1`
  font-family: 'SF Pro Display', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  color: #293239;
  margin: 0 0 16px 0;
`;

export const AIAgentsMainContent = () => {
  return (
    <ContentArea>
      <Title>AI agents's main content area</Title>
      <p>This is where your AI agents page content will be displayed.</p>
    </ContentArea>
  );
};

export default AIAgentsMainContent;
