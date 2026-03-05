import React from 'react';
import styled from 'styled-components';
import { XL } from '@zendeskgarden/react-typography';

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`;

export const AdminCenterMainContent = () => {
  return (
    <ContentArea>
      <XL tag="h1" style={{ marginBottom: '16px' }}>Admin center's main content area</XL>
      <p>This is where your Admin center page content will be displayed.</p>
    </ContentArea>
  );
};

export default AdminCenterMainContent;
