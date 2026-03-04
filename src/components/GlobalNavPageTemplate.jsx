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
} from '../icons/GlobalNavIcons';
import { TopBar } from './TopBar';
import { KnowledgeSubnav } from './KnowledgeSubnav';

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
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border: 1px solid transparent;
  border-top-left-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(10, 13, 14, 0.16);
  overflow: hidden;
`;

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
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

  const navItems =
    currentProduct === 'admin-center' ? adminCenterNavItems :
    currentProduct === 'knowledge' ? knowledgeNavItems :
    defaultNavItems;

  const isKnowledge = currentProduct === 'knowledge';

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
                {isKnowledge && (
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
          </NavAndSubnav>

          <MainContent>
            <ContentArea>
              {/* Main content goes here */}
              <h1>Content Area</h1>
              <p>This is where your page content will be displayed.</p>
            </ContentArea>
          </MainContent>
        </MainContainer>
      </PageContainer>
    </ThemeProvider>
  );
};

export default GlobalNavPageTemplate;
