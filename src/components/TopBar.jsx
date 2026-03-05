import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar } from '@zendeskgarden/react-avatars';
import {
  ZendeskLogoIcon,
  ProductSupportIcon,
  ProductKnowledgeIcon,
  ProductAIAgentsIcon,
  ProductAnalyticsIcon,
  ProductWorkforceManagementIcon,
  ProductQualityAssuranceIcon,
  ProductCommunityIcon,
  ProductSalesIcon,
  ProductAdminCenterIcon,
  ProductChatIcon,
  ProductVoiceIcon,
  ChevronDownIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  BellIcon,
  RescueRingIcon,
  PersonIcon,
  EarthIcon,
  RocketIcon,
} from '../icons/GlobalNavIcons';
import { ProductTrayDropdown, products } from './ProductTrayDropdown';

// Product icon mapping
const productIcons = {
  'support': ProductSupportIcon,
  'knowledge': ProductKnowledgeIcon,
  'ai-agents': ProductAIAgentsIcon,
  'chat': ProductChatIcon,
  'voice': ProductVoiceIcon,
  'analytics': ProductAnalyticsIcon,
  'workforce-management': ProductWorkforceManagementIcon,
  'quality-assurance': ProductQualityAssuranceIcon,
  'community': ProductCommunityIcon,
  'sales': ProductSalesIcon,
  'admin-center': ProductAdminCenterIcon,
};

const TopBarContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightSection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`;

const ProductTray = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`;

const ProductLabel = styled.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`;

const WorkspaceName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 320px;
  min-width: 240px;
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #b0b8be;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #5c6970;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #87929d;
  }

  &:focus-within {
    border-color: #1f73b7;
    outline: none;
  }
`;

const Separator = styled.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeparatorLine = styled.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
  }
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
    background-color: transparent;
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  position: relative;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  background-color: #d93f4c;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
  color: white;
`;

const AppIconsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Placeholder icon component for app icons we don't have yet
const PlaceholderIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <rect x="4" y="4" width="12" height="12" rx="2" fill="#5C6970" />
  </svg>
);

export const TopBar = ({ currentProduct = 'support', onProductChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const productTrayRef = useRef(null);

  const handleProductSelect = (productId) => {
    onProductChange?.(productId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productTrayRef.current && !productTrayRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const currentProductData = products.find(p => p.id === currentProduct) || products[0];
  const isAdminCenter = currentProduct === 'admin-center';
  const isKnowledge = currentProduct === 'knowledge';
  const isAIAgents = currentProduct === 'ai-agents';
  const isWorkforceManagement = currentProduct === 'workforce-management';
  const isQualityAssurance = currentProduct === 'quality-assurance';
  const isAnalytics = currentProduct === 'analytics';

  return (
    <TopBarContainer>
      <LeftSection>
        <Logo>
          <ZendeskLogoIcon size={20} />
        </Logo>
        <ProductTray
          ref={productTrayRef}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <ProductLabel>{currentProductData.name}</ProductLabel>
          <ChevronDownIcon size={12} />
          {isDropdownOpen && (
            <ProductTrayDropdown
              currentProduct={currentProduct}
              onSelectProduct={handleProductSelect}
              onClose={() => setIsDropdownOpen(false)}
            />
          )}
        </ProductTray>
      </LeftSection>

      <RightSection>
        {isAdminCenter ? (
          // Admin Center Header
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Separator>
                <SeparatorLine />
              </Separator>
              <WorkspaceName>Camera obscura</WorkspaceName>
            </div>

            <RightContent>
              <SearchInput>
                <MagnifyingGlassIcon size={16} />
                <span>Search admin center</span>
              </SearchInput>

              <IconButton>
                <RescueRingIcon size={20} />
              </IconButton>

              <Avatar size="small" backgroundColor="#f8f9f9">
                <PersonIcon size={16} color="#5C6970" />
              </Avatar>
            </RightContent>
          </>
        ) : isKnowledge ? (
          // Knowledge Header
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Separator>
                <SeparatorLine />
              </Separator>
              <ProductTray>
                <span style={{ fontSize: '12px', fontWeight: 600, lineHeight: '16px', letterSpacing: '-0.0004px', color: '#293239' }}>
                  Joe's Coffee
                </span>
                <ChevronDownIcon size={12} />
              </ProductTray>
            </div>

            <RightContent>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HeaderButton size="small">Create content</HeaderButton>
                <HeaderButton size="small" disabled>Help center</HeaderButton>
              </div>

              <IconButton>
                <RescueRingIcon size={20} />
              </IconButton>

              <Avatar size="small" backgroundColor="#f8f9f9">
                <PersonIcon size={16} color="#5C6970" />
              </Avatar>
            </RightContent>
          </>
        ) : isAIAgents ? (
          // AI Agents Header
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Separator>
                <SeparatorLine />
              </Separator>
              <WorkspaceName>Camera obscura</WorkspaceName>
            </div>

            <RightContent>
              <ProductTray>
                <span style={{ fontSize: '12px', fontWeight: 600, lineHeight: '16px', letterSpacing: '-0.0004px', color: '#293239' }}>
                  Test bot
                </span>
                <ChevronDownIcon size={12} />
              </ProductTray>

              <IconButton>
                <RescueRingIcon size={20} />
              </IconButton>

              <Avatar size="small" backgroundColor="#f8f9f9">
                <PersonIcon size={16} color="#5C6970" />
              </Avatar>
            </RightContent>
          </>
        ) : isWorkforceManagement ? (
          // Workforce Management Header
          <>
            <div />

            <RightContent>
              <SearchInput>
                <MagnifyingGlassIcon size={16} />
                <span>Search</span>
              </SearchInput>

              <IconButton>
                <EarthIcon size={20} />
              </IconButton>

              <Avatar size="small" backgroundColor="#f8f9f9">
                <PersonIcon size={16} color="#5C6970" />
              </Avatar>
            </RightContent>
          </>
        ) : isQualityAssurance ? (
          // Quality Assurance Header
          <>
            <div />

            <RightContent>
              <SearchInput>
                <MagnifyingGlassIcon size={16} />
                <span>Search</span>
              </SearchInput>

              <Avatar size="small" backgroundColor="#f8f9f9">
                <PersonIcon size={16} color="#5C6970" />
              </Avatar>
            </RightContent>
          </>
        ) : isAnalytics ? (
          // Analytics Header
          <>
            <div />

            <RightContent>
              <SearchInput>
                <MagnifyingGlassIcon size={16} />
                <span>Search</span>
              </SearchInput>

              <Avatar size="small" backgroundColor="#f8f9f9">
                <PersonIcon size={16} color="#5C6970" />
              </Avatar>
            </RightContent>
          </>
        ) : (
          // Default Header
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Separator>
                <SeparatorLine />
              </Separator>
              <AddButton>
                <PlusIcon size={12} />
                <span>Add</span>
              </AddButton>
            </div>

            <RightContent>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconButton>
                  <MagnifyingGlassIcon size={20} />
                </IconButton>
                <HeaderButton size="small" disabled>
                  Conversations
                </HeaderButton>
                <IconButton>
                  <ProductChatIcon size={20} />
                </IconButton>
                <IconButton>
                  <ProductVoiceIcon size={20} />
                </IconButton>
              </div>

              <Separator>
                <SeparatorLine />
              </Separator>

              <IconButton>
                <BellIcon size={20} />
                <NotificationBadge>1</NotificationBadge>
              </IconButton>

              <IconButton>
                <RocketIcon size={20} />
              </IconButton>

              <Avatar size="small" backgroundColor="#f8f9f9">
                <PersonIcon size={16} color="#5C6970" />
              </Avatar>
            </RightContent>
          </>
        )}
      </RightSection>
    </TopBarContainer>
  );
};

export default TopBar;
