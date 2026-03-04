import React from 'react';
import styled from 'styled-components';
import {
  ProductSupportIcon,
  ProductKnowledgeIcon,
  ProductAIAgentsIcon,
  ProductChatIcon,
  ProductVoiceIcon,
  ProductAnalyticsIcon,
  ProductWorkforceManagementIcon,
  ProductQualityAssuranceIcon,
  ProductCommunityIcon,
  ProductSalesIcon,
  ProductAdminCenterIcon,
} from '../icons/GlobalNavIcons';

const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 256px;
  background-color: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0px 16px 24px 0px rgba(10, 13, 14, 0.16);
  padding: 4px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  width: 100%;
  border: none;
  background-color: ${props => props.$isActive ? '#293239' : 'transparent'};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${props => props.$isActive ? 'white' : '#293239'};
  text-align: left;

  &:hover {
    background-color: ${props => props.$isActive ? '#293239' : 'rgba(0, 0, 0, 0.04)'};
  }

  &:active {
    background-color: ${props => props.$isActive ? '#293239' : 'rgba(0, 0, 0, 0.08)'};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const products = [
  { id: 'support', name: 'Support', icon: ProductSupportIcon },
  { id: 'knowledge', name: 'Knowledge', icon: ProductKnowledgeIcon },
  { id: 'ai-agents', name: 'AI agents', icon: ProductAIAgentsIcon },
  { id: 'chat', name: 'Chat', icon: ProductChatIcon },
  { id: 'voice', name: 'Voice', icon: ProductVoiceIcon },
  { id: 'analytics', name: 'Analytics', icon: ProductAnalyticsIcon },
  { id: 'workforce-management', name: 'Workforce management', icon: ProductWorkforceManagementIcon },
  { id: 'quality-assurance', name: 'Quality assurance', icon: ProductQualityAssuranceIcon },
  { id: 'community', name: 'Community', icon: ProductCommunityIcon },
  { id: 'sales', name: 'Sales', icon: ProductSalesIcon },
  { id: 'admin-center', name: 'Admin center', icon: ProductAdminCenterIcon },
];

export const ProductTrayDropdown = ({ currentProduct = 'support', onSelectProduct, onClose }) => {
  const handleSelect = (productId) => {
    onSelectProduct?.(productId);
    onClose?.();
  };

  return (
    <DropdownContainer>
      {products.map(product => {
        const Icon = product.icon;
        const isActive = product.id === currentProduct;
        const iconColor = isActive ? 'white' : '#5C6970';

        return (
          <MenuItem
            key={product.id}
            $isActive={isActive}
            onClick={() => handleSelect(product.id)}
          >
            <IconWrapper>
              <Icon size={20} color={iconColor} />
            </IconWrapper>
            <span>{product.name}</span>
          </MenuItem>
        );
      })}
    </DropdownContainer>
  );
};

export default ProductTrayDropdown;
