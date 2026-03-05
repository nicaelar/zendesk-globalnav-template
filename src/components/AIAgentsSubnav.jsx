import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PlusIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  BarChartSquareIcon,
  BubbleIcon,
  GearIcon,
  PersonKeyIcon,
  BuildingIcon,
  AppsIcon,
  FlowIcon,
  MonitorIcon
} from '../icons/GlobalNavIcons';

const SubnavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const SubnavHeading = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`;

const HeadingText = styled.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
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
  flex-shrink: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`;

const SmallIconButton = styled(IconButton)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
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
  gap: 8px;
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

const SubnavItemContent = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  min-width: 0;
`;

const SubnavItemText = styled.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${props => props.$isCurrent ? 'white' : '#293239'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;

const SubnavBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 16px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #2f3941;
  text-align: center;
  flex-shrink: 0;
`;

const SubnavGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubnavGroupHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
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
  padding: 12px 4px 12px 8px;
`;

const SubnavGroupText = styled.p`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #5c6970;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  flex-shrink: 0;
`;

const SubnavGroupDivider = styled.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`;

const SubnavGroupChevron = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`;

export const AIAgentsSubnav = () => {
  const [currentItem, setCurrentItem] = useState('agents');
  const [isAgentGroupExpanded, setIsAgentGroupExpanded] = useState(true);
  const [isDataGroupExpanded, setIsDataGroupExpanded] = useState(true);

  const handleItemClick = (itemId) => {
    setCurrentItem(itemId);
  };

  return (
    <SubnavContainer>
      <SubnavHeading>
        <HeadingText>AI agents</HeadingText>
        <IconButton aria-label="Add new">
          <PlusIcon size={20} color="#5C6970" />
        </IconButton>
      </SubnavHeading>

      <SubnavItems>
        <SubnavItem
          $isCurrent={currentItem === 'agents'}
          onClick={() => handleItemClick('agents')}
        >
          <SubnavItemContent>
            <BarChartSquareIcon size={20} color={currentItem === 'agents' ? 'white' : '#5C6970'} />
            <SubnavItemText $isCurrent={currentItem === 'agents'}>
              Agents
            </SubnavItemText>
          </SubnavItemContent>
          <SmallIconButton aria-label="More options">
            <DotsVerticalIcon size={16} color={currentItem === 'agents' ? 'white' : '#5C6970'} />
          </SmallIconButton>
        </SubnavItem>

        <SubnavItem
          $isCurrent={currentItem === 'conversations'}
          onClick={() => handleItemClick('conversations')}
        >
          <SubnavItemContent>
            <BubbleIcon size={20} color="#5C6970" />
            <SubnavItemText $isCurrent={currentItem === 'conversations'}>
              Conversations
            </SubnavItemText>
          </SubnavItemContent>
          <SmallIconButton aria-label="More options">
            <DotsVerticalIcon size={16} color="#5C6970" />
          </SmallIconButton>
        </SubnavItem>

        <SubnavItem
          $isCurrent={currentItem === 'settings'}
          onClick={() => handleItemClick('settings')}
        >
          <SubnavItemContent>
            <GearIcon size={20} color="#5C6970" />
            <SubnavItemText $isCurrent={currentItem === 'settings'}>
              Settings
            </SubnavItemText>
          </SubnavItemContent>
          <SmallIconButton aria-label="More options">
            <DotsVerticalIcon size={16} color="#5C6970" />
          </SmallIconButton>
        </SubnavItem>
      </SubnavItems>

      <SubnavGroup>
        <SubnavGroupHeader onClick={() => setIsAgentGroupExpanded(!isAgentGroupExpanded)}>
          <SubnavGroupContent>
            <SubnavGroupText>Agent Management</SubnavGroupText>
            <SubnavGroupDivider />
          </SubnavGroupContent>
          <SubnavGroupChevron>
            {isAgentGroupExpanded ? (
              <ChevronUpIcon size={16} color="#5C6970" />
            ) : (
              <ChevronRightIcon size={16} color="#5C6970" />
            )}
          </SubnavGroupChevron>
        </SubnavGroupHeader>

        {isAgentGroupExpanded && (
          <SubnavItems>
            <SubnavItem
              $isCurrent={currentItem === 'agent-builder'}
              onClick={() => handleItemClick('agent-builder')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'agent-builder'}>
                  Agent builder
                </SubnavItemText>
                <SubnavBadge>123</SubnavBadge>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'templates'}
              onClick={() => handleItemClick('templates')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'templates'}>
                  Templates
                </SubnavItemText>
                <SubnavBadge>123</SubnavBadge>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'workflows'}
              onClick={() => handleItemClick('workflows')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'workflows'}>
                  Workflows
                </SubnavItemText>
                <SubnavBadge>123</SubnavBadge>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'monitoring'}
              onClick={() => handleItemClick('monitoring')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'monitoring'}>
                  Monitoring
                </SubnavItemText>
                <SubnavBadge>123</SubnavBadge>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'permissions'}
              onClick={() => handleItemClick('permissions')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'permissions'}>
                  Permissions
                </SubnavItemText>
                <SubnavBadge>123</SubnavBadge>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>
          </SubnavItems>
        )}
      </SubnavGroup>

      <SubnavGroup>
        <SubnavGroupHeader onClick={() => setIsDataGroupExpanded(!isDataGroupExpanded)}>
          <SubnavGroupContent>
            <SubnavGroupText>Data & Integration</SubnavGroupText>
            <SubnavGroupDivider />
          </SubnavGroupContent>
          <SubnavGroupChevron>
            {isDataGroupExpanded ? (
              <ChevronUpIcon size={16} color="#5C6970" />
            ) : (
              <ChevronRightIcon size={16} color="#5C6970" />
            )}
          </SubnavGroupChevron>
        </SubnavGroupHeader>

        {isDataGroupExpanded && (
          <SubnavItems>
            <SubnavItem
              $isCurrent={currentItem === 'data-sources'}
              onClick={() => handleItemClick('data-sources')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'data-sources'}>
                  Data sources
                </SubnavItemText>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'knowledge-base'}
              onClick={() => handleItemClick('knowledge-base')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'knowledge-base'}>
                  Knowledge base
                </SubnavItemText>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'integrations'}
              onClick={() => handleItemClick('integrations')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'integrations'}>
                  Integrations
                </SubnavItemText>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'api-connections'}
              onClick={() => handleItemClick('api-connections')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'api-connections'}>
                  API connections
                </SubnavItemText>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'webhooks'}
              onClick={() => handleItemClick('webhooks')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'webhooks'}>
                  Webhooks
                </SubnavItemText>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>

            <SubnavItem
              $isCurrent={currentItem === 'logs'}
              onClick={() => handleItemClick('logs')}
            >
              <SubnavItemContent>
                <SubnavItemText $isCurrent={currentItem === 'logs'}>
                  Logs
                </SubnavItemText>
              </SubnavItemContent>
              <SmallIconButton aria-label="More options">
                <DotsVerticalIcon size={16} color="#5C6970" />
              </SmallIconButton>
            </SubnavItem>
          </SubnavItems>
        )}
      </SubnavGroup>
    </SubnavContainer>
  );
};

export default AIAgentsSubnav;
