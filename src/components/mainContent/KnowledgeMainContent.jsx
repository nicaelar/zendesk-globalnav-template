import React from 'react';
import styled from 'styled-components';
import { XL } from '@zendeskgarden/react-typography';

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`;

export const KnowledgeMainContent = () => {
  return (
    <ContentArea>
      <XL tag="h1" style={{ marginBottom: '16px' }}>Knowledge's main content area</XL>
      <p>This is where your Knowledge page content will be displayed.</p>
    </ContentArea>
  );
};

export default KnowledgeMainContent;
