import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';
import { KnowledgeSubnav } from './KnowledgeSubnav';
import { AIAgentsSubnav } from './AIAgentsSubnav';
import { SupportMainContent } from '../mainContent/SupportMainContent';
import { KnowledgeMainContent } from '../mainContent/KnowledgeMainContent';
import { AIAgentsMainContent } from '../mainContent/AIAgentsMainContent';
import { ChatMainContent } from '../mainContent/ChatMainContent';
import { VoiceMainContent } from '../mainContent/VoiceMainContent';
import { AnalyticsMainContent } from '../mainContent/AnalyticsMainContent';
import { WorkforceManagementMainContent } from '../mainContent/WorkforceManagementMainContent';
import { QualityAssuranceMainContent } from '../mainContent/QualityAssuranceMainContent';
import { CommunityMainContent } from '../mainContent/CommunityMainContent';
import { SalesMainContent } from '../mainContent/SalesMainContent';
import { AdminCenterMainContent } from '../mainContent/AdminCenterMainContent';

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`;


const MainContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`;

const NavAndSubnav = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 4px;
  isolation: isolate;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(10, 13, 14, 0.16);
  border-radius: 8px 0px 0px 0px;
  flex: 1;
  align-self: stretch;
`;

// Component
export const GlobalNavPageTemplate = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [currentProduct, setCurrentProduct] = useState('support');
  const [isSubnavExpanded, setIsSubnavExpanded] = useState(false);

  const handleProductChange = (productId) => {
    setCurrentProduct(productId);
    setActiveNavItem(0); // Reset to first nav item when switching products
    setIsSubnavExpanded(false); // Collapse subnav when switching products
  };

  const isKnowledge = currentProduct === 'knowledge';
  const isAIAgents = currentProduct === 'ai-agents';

  return (
    <ThemeProvider>
      <PageContainer>
        <TopBar
          currentProduct={currentProduct}
          onProductChange={handleProductChange}
        />

        {/* Main Container */}
        <MainContainer>
          <NavAndSubnav>
            <MainNav
              currentProduct={currentProduct}
              activeNavItem={activeNavItem}
              setActiveNavItem={setActiveNavItem}
              isSubnavExpanded={isSubnavExpanded}
              setIsSubnavExpanded={setIsSubnavExpanded}
            />

            {isKnowledge && isSubnavExpanded && <KnowledgeSubnav />}
            {isAIAgents && isSubnavExpanded && <AIAgentsSubnav />}
          </NavAndSubnav>

          <MainContent>
            {currentProduct === 'support' && <SupportMainContent />}
            {currentProduct === 'knowledge' && <KnowledgeMainContent />}
            {currentProduct === 'ai-agents' && <AIAgentsMainContent />}
            {currentProduct === 'chat' && <ChatMainContent />}
            {currentProduct === 'voice' && <VoiceMainContent />}
            {currentProduct === 'analytics' && <AnalyticsMainContent />}
            {currentProduct === 'workforce-management' && <WorkforceManagementMainContent />}
            {currentProduct === 'quality-assurance' && <QualityAssuranceMainContent />}
            {currentProduct === 'community' && <CommunityMainContent />}
            {currentProduct === 'sales' && <SalesMainContent />}
            {currentProduct === 'admin-center' && <AdminCenterMainContent />}
          </MainContent>
        </MainContainer>
      </PageContainer>
    </ThemeProvider>
  );
};

export default GlobalNavPageTemplate;
