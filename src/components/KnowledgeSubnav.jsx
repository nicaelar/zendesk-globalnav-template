import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusIcon, ChevronUpIcon, ChevronRightIcon } from '../icons/GlobalNavIcons';

const SubnavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`;

const SubnavHeading = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`;

const HeadingText = styled.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
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

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`;

const SubnavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`;

const SubnavItem = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${props => props.$isCurrent ? '#293239' : 'transparent'};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${props => props.$isCurrent ? '#293239' : 'rgba(92, 105, 112, 0.08)'};
  }

  &:active {
    background-color: ${props => props.$isCurrent ? '#293239' : 'rgba(92, 105, 112, 0.16)'};
  }
`;

const SubnavItemText = styled.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${props => props.$isCurrent ? 'white' : '#2f3941'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;

const SubnavBadge = styled.div`
  display: flex;
  align-items: center;
  justify-center: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #49545c;
  text-align: center;
`;

const SubnavGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubnavGroupHeader = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 4px;
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

const SubnavGroupContent = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`;

const SubnavGroupText = styled.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #68737d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;

const SubnavGroupDivider = styled.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`;

const SubnavGroupChevron = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`;

const NestedSubnavItem = styled(SubnavItem)`
  padding-left: ${props => props.$depth * 24 + 12}px;
`;

export const KnowledgeSubnav = () => {
  const [isContentExpanded, setIsContentExpanded] = useState(true);

  return (
    <SubnavContainer>
      <SubnavHeading>
        <HeadingText>Knowledge</HeadingText>
        <IconButton>
          <PlusIcon size={20} color="#5C6970" />
        </IconButton>
      </SubnavHeading>

      <SubnavItems>
        <SubnavItem $isCurrent>
          <SubnavItemText $isCurrent>Sources</SubnavItemText>
        </SubnavItem>
      </SubnavItems>

      <SubnavGroup>
        <SubnavGroupHeader onClick={() => setIsContentExpanded(!isContentExpanded)}>
          <SubnavGroupContent>
            <SubnavGroupText>Content</SubnavGroupText>
            <SubnavGroupDivider />
          </SubnavGroupContent>
          <SubnavGroupChevron>
            {isContentExpanded ? (
              <ChevronUpIcon size={16} color="#5C6970" />
            ) : (
              <ChevronRightIcon size={16} color="#5C6970" />
            )}
          </SubnavGroupChevron>
        </SubnavGroupHeader>

        {isContentExpanded && (
          <SubnavItems>
            <SubnavItem>
              <SubnavItemText>All content</SubnavItemText>
              <SubnavBadge>24</SubnavBadge>
            </SubnavItem>

            <NestedSubnavItem $depth={0}>
              <ChevronRightIcon size={16} color="#5C6970" />
              <SubnavItemText style={{ marginLeft: '8px' }}>Joe's Coffee</SubnavItemText>
              <SubnavBadge>24</SubnavBadge>
            </NestedSubnavItem>

            <NestedSubnavItem $depth={1}>
              <ChevronRightIcon size={16} color="#5C6970" />
              <SubnavItemText style={{ marginLeft: '8px' }}>Getting Started</SubnavItemText>
            </NestedSubnavItem>

            <NestedSubnavItem $depth={1}>
              <ChevronRightIcon size={16} color="#5C6970" />
              <SubnavItemText style={{ marginLeft: '8px' }}>Troubleshooting Guides</SubnavItemText>
            </NestedSubnavItem>

            <NestedSubnavItem $depth={1}>
              <ChevronRightIcon size={16} color="#5C6970" />
              <SubnavItemText style={{ marginLeft: '8px' }}>Product FAQs</SubnavItemText>
            </NestedSubnavItem>

            <NestedSubnavItem $depth={1}>
              <ChevronRightIcon size={16} color="#5C6970" />
              <SubnavItemText style={{ marginLeft: '8px' }}>Policies and Procedures</SubnavItemText>
            </NestedSubnavItem>

            <NestedSubnavItem $depth={0}>
              <ChevronRightIcon size={16} color="#5C6970" />
              <SubnavItemText style={{ marginLeft: '8px' }}>Confluence</SubnavItemText>
              <SubnavBadge>124</SubnavBadge>
            </NestedSubnavItem>

            <SubnavItem>
              <SubnavItemText>Content blocks</SubnavItemText>
              <SubnavBadge>0</SubnavBadge>
            </SubnavItem>

            <SubnavItem>
              <SubnavItemText>Procedures</SubnavItemText>
              <SubnavBadge>12</SubnavBadge>
            </SubnavItem>

            <SubnavItem>
              <SubnavItemText>Media</SubnavItemText>
              <SubnavBadge>0</SubnavBadge>
            </SubnavItem>
          </SubnavItems>
        )}
      </SubnavGroup>
    </SubnavContainer>
  );
};

export default KnowledgeSubnav;
