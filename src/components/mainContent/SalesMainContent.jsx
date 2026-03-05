import React from 'react';
import styled from 'styled-components';
import { XL } from '@zendeskgarden/react-typography';

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`;

export const SalesMainContent = () => {
  return (
    <ContentArea>
      <XL tag="h1" style={{ marginBottom: '16px' }}>Sales's main content area</XL>
      <p>This is where your Sales page content will be displayed.</p>
    </ContentArea>
  );
};

export default SalesMainContent;
