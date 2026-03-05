import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import {
  HomeIcon,
  InboxIcon,
  BookContactsIcon,
  BuildingIcon,
  ShapesIcon,
  BarChartSquareIcon,
  LineGraphSquareIcon,
  GearIcon,
  PeopleIcon,
  PaperPlaneIcon,
  SparkleIcon,
  MonitorIcon,
  FlowIcon,
  AppsIcon,
  BookOpenIcon,
  BubbleCheckIcon,
  FoldersIcon,
  PaletteIcon,
  PersonKeyIcon,
  SidebarIcon,
  NotePencilIcon,
  BubblesIcon,
  WrenchIcon,
  DatabaseIcon,
  SquareGridCircleIcon,
  PlugIcon,
  LayoutGridIcon,
  CloudArrowDownIcon,
  CheckSquareIcon,
  GraduateCapIcon,
  CloudSunIcon,
  CalendarIcon,
} from '../icons/GlobalNavIcons';
import { TopBar } from './TopBar';
import { KnowledgeSubnav } from './KnowledgeSubnav';
import { AIAgentsSubnav } from './AIAgentsSubnav';
import { SupportMainContent } from './mainContent/SupportMainContent';
import { KnowledgeMainContent } from './mainContent/KnowledgeMainContent';
import { AIAgentsMainContent } from './mainContent/AIAgentsMainContent';
import { ChatMainContent } from './mainContent/ChatMainContent';
import { VoiceMainContent } from './mainContent/VoiceMainContent';
import { AnalyticsMainContent } from './mainContent/AnalyticsMainContent';
import { WorkforceManagementMainContent } from './mainContent/WorkforceManagementMainContent';
import { QualityAssuranceMainContent } from './mainContent/QualityAssuranceMainContent';
import { CommunityMainContent } from './mainContent/CommunityMainContent';
import { SalesMainContent } from './mainContent/SalesMainContent';
import { AdminCenterMainContent } from './mainContent/AdminCenterMainContent';

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

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`;

const NavGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`;

const NavItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${props => props.$isActive ? '#293239' : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 0;

  &:hover {
    background-color: ${props => props.$isActive ? '#293239' : 'rgba(0, 0, 0, 0.08)'};
  }
`;

const NavBottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`;

const NavSeparator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 56px;
  padding: 8px 16px;
`;

const NavSeparatorLine = styled.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`;

const CollapseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.15s;
  padding: 0;
  box-shadow: 0px 4px 8px 0px rgba(10, 13, 14, 0.16);

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
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

  const defaultNavItems = [
    { id: 0, icon: HomeIcon, label: 'Home' },
    { id: 1, icon: InboxIcon, label: 'Inbox' },
    { id: 2, icon: BookContactsIcon, label: 'Contacts' },
    { id: 3, icon: BuildingIcon, label: 'Organization' },
    { id: 4, icon: ShapesIcon, label: 'Custom Objects' },
    { id: 5, icon: BarChartSquareIcon, label: 'Analytics' },
    { id: 6, icon: GearIcon, label: 'Settings' },
  ];

  const adminCenterNavItems = [
    { id: 0, icon: HomeIcon, label: 'Home' },
    { id: 1, icon: BuildingIcon, label: 'Account' },
    { id: 2, icon: PeopleIcon, label: 'People' },
    { id: 3, icon: PaperPlaneIcon, label: 'Channels' },
    { id: 4, icon: SparkleIcon, label: 'AI' },
    { id: 5, icon: MonitorIcon, label: 'Workspaces' },
    { id: 6, icon: FlowIcon, label: 'Objects & rules' },
    { id: 7, icon: AppsIcon, label: 'Apps and integrations' },
  ];

  const knowledgeNavItems = [
    { id: 0, icon: HomeIcon, label: 'Home' },
    { id: 1, icon: BookOpenIcon, label: 'Knowledge' },
    { id: 2, icon: BubbleCheckIcon, label: 'Moderate content' },
    { id: 3, icon: FoldersIcon, label: 'Arrange content' },
    { id: 4, icon: PaletteIcon, label: 'Customize design' },
    { id: 5, icon: PersonKeyIcon, label: 'User permissions' },
    { id: 6, icon: GearIcon, label: 'Settings' },
  ];

  const aiAgentsNavItems = [
    { id: 0, icon: BarChartSquareIcon, label: 'Analytics' },
    { id: 1, icon: NotePencilIcon, label: 'Content' },
    { id: 2, icon: BubblesIcon, label: 'Conversations' },
    { id: 3, icon: GearIcon, label: 'Settings' },
    { id: 4, icon: null, label: 'separator' }, // Separator
    { id: 5, icon: WrenchIcon, label: 'AI agent management' },
    { id: 6, icon: PersonKeyIcon, label: 'Permissions' },
    { id: 7, icon: DatabaseIcon, label: 'Database' },
    { id: 8, icon: SquareGridCircleIcon, label: 'Apps' },
    { id: 9, icon: PlugIcon, label: 'Integrations' },
  ];

  const analyticsNavItems = [
    { id: 0, icon: LineGraphSquareIcon, label: 'Real-time monitoring' },
    { id: 1, icon: LayoutGridIcon, label: 'Dashboard' },
    { id: 2, icon: BarChartSquareIcon, label: 'Reports' },
    { id: 3, icon: DatabaseIcon, label: 'Data' },
    { id: 4, icon: CloudArrowDownIcon, label: 'Export' },
    { id: 5, icon: GearIcon, label: 'Settings' },
  ];

  const qualityAssuranceNavItems = [
    { id: 0, icon: LayoutGridIcon, label: 'Dashboard' },
    { id: 1, icon: BubblesIcon, label: 'Conversations' },
    { id: 2, icon: CheckSquareIcon, label: 'Reviews' },
    { id: 3, icon: InboxIcon, label: 'Inbox' },
    { id: 4, icon: GraduateCapIcon, label: 'Training' },
  ];

  const workforceManagementNavItems = [
    { id: 0, icon: LineGraphSquareIcon, label: 'Real-time monitoring' },
    { id: 1, icon: BarChartSquareIcon, label: 'Analytics' },
    { id: 2, icon: CloudSunIcon, label: 'Forecasting' },
    { id: 3, icon: CalendarIcon, label: 'Scheduling' },
    { id: 4, icon: PeopleIcon, label: 'Team' },
    { id: 5, icon: GearIcon, label: 'Settings' },
  ];

  const navItems =
    currentProduct === 'admin-center' ? adminCenterNavItems :
    currentProduct === 'knowledge' ? knowledgeNavItems :
    currentProduct === 'ai-agents' ? aiAgentsNavItems :
    currentProduct === 'analytics' ? analyticsNavItems :
    currentProduct === 'quality-assurance' ? qualityAssuranceNavItems :
    currentProduct === 'workforce-management' ? workforceManagementNavItems :
    defaultNavItems;

  const isKnowledge = currentProduct === 'knowledge';
  const isAIAgents = currentProduct === 'ai-agents';
  const showSubnav = isKnowledge || isAIAgents;

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
            <Nav>
              <NavGradient />
              <NavItems>
                {navItems.map(item => {
                  // Handle separator
                  if (item.label === 'separator') {
                    return (
                      <NavSeparator key={item.id}>
                        <NavSeparatorLine />
                      </NavSeparator>
                    );
                  }

                  const isActive = activeNavItem === item.id;
                  const IconComponent = typeof item.icon === 'function' ? item.icon : null;

                  return (
                    <NavItem key={item.id}>
                      <NavItemButton
                        $isActive={isActive}
                        onClick={() => setActiveNavItem(item.id)}
                        aria-label={item.label}
                      >
                        {IconComponent ? (
                          <IconComponent size={20} color={isActive ? 'white' : '#5C6970'} />
                        ) : (
                          item.icon
                        )}
                      </NavItemButton>
                    </NavItem>
                  );
                })}
              </NavItems>
              <NavBottom>
                {showSubnav && (
                  <CollapseButton
                    onClick={() => setIsSubnavExpanded(!isSubnavExpanded)}
                    aria-label={isSubnavExpanded ? 'Collapse' : 'Expand'}
                  >
                    <SidebarIcon size={20} color="#5C6970" />
                  </CollapseButton>
                )}
              </NavBottom>
            </Nav>

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
