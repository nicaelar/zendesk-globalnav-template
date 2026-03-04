import { useState } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Label, Input, Hint, Select, Radio } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #2f3941;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #68737d;
  margin: 0;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #2f3941;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

const StyledField = styled(Field)`
  margin-bottom: 0;
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const PlanCard = styled.div`
  border: 2px solid ${props => props.selected ? '#1f73b7' : '#d8dcde'};
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.selected ? '#f5f9fc' : 'white'};

  &:hover {
    border-color: #1f73b7;
    box-shadow: 0 2px 8px rgba(31, 115, 183, 0.15);
  }
`;

const PlanName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #2f3941;
`;

const PlanPrice = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #1f73b7;
  margin-bottom: 4px;
`;

const PlanPriceDetail = styled.div`
  font-size: 14px;
  color: #68737d;
  margin-bottom: 16px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
`;

const FeatureItem = styled.li`
  padding: 8px 0;
  font-size: 14px;
  color: #49545c;
  display: flex;
  align-items: flex-start;

  &:before {
    content: '✓';
    color: #038153;
    font-weight: bold;
    margin-right: 8px;
    flex-shrink: 0;
  }
`;

const ResultsCard = styled(Card)`
  background: linear-gradient(135deg, #1f73b7 0%, #0f4c81 100%);
  color: white;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const ResultItem = styled.div`
  text-align: center;
`;

const ResultLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
`;

const ResultValue = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const ResultSubtext = styled.div`
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
`;

const BenefitsSection = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const BenefitsList = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 16px;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BenefitIcon = styled.span`
  margin-right: 12px;
  font-size: 20px;
`;

const plans = {
  supportTeam: {
    name: 'Support Team',
    monthlyPrice: 25,
    annualPrice: 19,
    features: [
      'Email support',
      'Ticketing system',
      'Facebook & Twitter integration',
      'Pre-defined reports & dashboards',
      'Mobile SDK'
    ]
  },
  supportPro: {
    name: 'Support Professional',
    monthlyPrice: 69,
    annualPrice: 55,
    features: [
      'Everything in Team',
      'Light agents',
      'SLA management',
      'Custom ticket fields',
      'Multiple ticket forms',
      'Business hours & schedules'
    ]
  },
  suiteTeam: {
    name: 'Suite Team',
    monthlyPrice: 69,
    annualPrice: 55,
    features: [
      'Omnichannel support',
      'Help Center',
      'Messaging & live chat',
      'Email & social channels',
      'Pre-built analytics',
      'Mobile SDK'
    ]
  },
  suiteGrowth: {
    name: 'Suite Growth',
    monthlyPrice: 115,
    annualPrice: 89,
    features: [
      'Everything in Suite Team',
      'Light agents',
      'SLA management',
      'Multiple brands',
      'Custom reports',
      'API access'
    ]
  },
  suitePro: {
    name: 'Suite Professional',
    monthlyPrice: 149,
    annualPrice: 115,
    features: [
      'Everything in Suite Growth',
      'Automations & AI',
      'Custom agent roles',
      'Multilingual support',
      'Advanced analytics',
      'Skills-based routing'
    ]
  }
};

function ROICalculator() {
  const [numAgents, setNumAgents] = useState(10);
  const [avgTicketsPerMonth, setAvgTicketsPerMonth] = useState(500);
  const [avgHandleTime, setAvgHandleTime] = useState(15);
  const [avgAgentSalary, setAvgAgentSalary] = useState(50000);
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedPlan, setSelectedPlan] = useState('suiteGrowth');
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const plan = plans[selectedPlan];
    const pricePerAgent = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

    // Monthly costs
    const monthlyCost = numAgents * pricePerAgent;
    const annualCost = monthlyCost * 12;

    // Calculate current costs (assuming manual/inefficient process)
    const currentHandleTimeMinutes = avgHandleTime;
    const improvedHandleTimeMinutes = avgHandleTime * 0.65; // 35% efficiency gain with Zendesk

    const timeSavedPerTicket = currentHandleTimeMinutes - improvedHandleTimeMinutes;
    const totalTimeSavedPerMonth = (timeSavedPerTicket * avgTicketsPerMonth) / 60; // in hours

    const hourlyRate = avgAgentSalary / (40 * 52); // hourly rate per agent
    const monthlySavings = totalTimeSavedPerMonth * hourlyRate;
    const annualSavings = monthlySavings * 12;

    const netAnnualROI = annualSavings - annualCost;
    const roiPercentage = ((netAnnualROI / annualCost) * 100).toFixed(1);
    const paybackMonths = (annualCost / monthlySavings).toFixed(1);

    return {
      monthlyCost,
      annualCost,
      monthlySavings,
      annualSavings,
      netAnnualROI,
      roiPercentage,
      paybackMonths,
      totalTimeSavedHours: totalTimeSavedPerMonth,
      efficiencyGain: 35
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateROI() : null;

  return (
    <ThemeProvider>
      <Container>
        <Header>
          <Title>Zendesk ROI Calculator</Title>
          <Subtitle>
            Calculate your potential return on investment with Zendesk
          </Subtitle>
        </Header>

        <Card>
          <SectionTitle>Your Current Situation</SectionTitle>
          <InputGrid>
            <StyledField>
              <Label>Number of Support Agents</Label>
              <Input
                type="number"
                value={numAgents}
                onChange={(e) => setNumAgents(Number(e.target.value))}
                min="1"
              />
            </StyledField>

            <StyledField>
              <Label>Average Tickets per Month</Label>
              <Input
                type="number"
                value={avgTicketsPerMonth}
                onChange={(e) => setAvgTicketsPerMonth(Number(e.target.value))}
                min="1"
              />
            </StyledField>

            <StyledField>
              <Label>Average Handle Time (minutes)</Label>
              <Input
                type="number"
                value={avgHandleTime}
                onChange={(e) => setAvgHandleTime(Number(e.target.value))}
                min="1"
              />
              <Hint>Current time to resolve a ticket</Hint>
            </StyledField>

            <StyledField>
              <Label>Average Agent Salary (USD/year)</Label>
              <Input
                type="number"
                value={avgAgentSalary}
                onChange={(e) => setAvgAgentSalary(Number(e.target.value))}
                min="1"
              />
            </StyledField>
          </InputGrid>

          <StyledField>
            <Label>Billing Cycle</Label>
            <div style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
              <Radio
                name="billing"
                value="annual"
                checked={billingCycle === 'annual'}
                onChange={(e) => setBillingCycle(e.target.value)}
              >
                <Label isRegular>Annual (Save up to 20%)</Label>
              </Radio>
              <Radio
                name="billing"
                value="monthly"
                checked={billingCycle === 'monthly'}
                onChange={(e) => setBillingCycle(e.target.value)}
              >
                <Label isRegular>Monthly</Label>
              </Radio>
            </div>
          </StyledField>
        </Card>

        <Card>
          <SectionTitle>Select a Zendesk Plan</SectionTitle>
          <PlanGrid>
            {Object.entries(plans).map(([key, plan]) => (
              <PlanCard
                key={key}
                selected={selectedPlan === key}
                onClick={() => setSelectedPlan(key)}
              >
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  ${billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}
                </PlanPrice>
                <PlanPriceDetail>
                  per agent/month
                  {billingCycle === 'annual' && ' (billed annually)'}
                </PlanPriceDetail>
                <FeatureList>
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </PlanCard>
            ))}
          </PlanGrid>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button isPrimary size="large" onClick={handleCalculate}>
              Calculate ROI
            </Button>
          </div>
        </Card>

        {showResults && results && (
          <ResultsCard>
            <SectionTitle style={{ color: 'white' }}>Your Potential ROI</SectionTitle>

            <ResultsGrid>
              <ResultItem>
                <ResultLabel>Annual Investment</ResultLabel>
                <ResultValue>${results.annualCost.toLocaleString()}</ResultValue>
                <ResultSubtext>${results.monthlyCost.toLocaleString()}/month</ResultSubtext>
              </ResultItem>

              <ResultItem>
                <ResultLabel>Annual Savings</ResultLabel>
                <ResultValue>${results.annualSavings.toLocaleString()}</ResultValue>
                <ResultSubtext>${results.monthlySavings.toLocaleString()}/month</ResultSubtext>
              </ResultItem>

              <ResultItem>
                <ResultLabel>Net Annual ROI</ResultLabel>
                <ResultValue>${results.netAnnualROI.toLocaleString()}</ResultValue>
                <ResultSubtext>{results.roiPercentage}% return</ResultSubtext>
              </ResultItem>

              <ResultItem>
                <ResultLabel>Payback Period</ResultLabel>
                <ResultValue>{results.paybackMonths}</ResultValue>
                <ResultSubtext>months</ResultSubtext>
              </ResultItem>
            </ResultsGrid>

            <BenefitsSection>
              <SectionTitle style={{ color: 'white' }}>Expected Benefits</SectionTitle>
              <BenefitsList>
                <BenefitItem>
                  <BenefitIcon>⚡</BenefitIcon>
                  <span>Save {results.totalTimeSavedHours.toFixed(0)} hours per month with improved efficiency</span>
                </BenefitItem>
                <BenefitItem>
                  <BenefitIcon>📈</BenefitIcon>
                  <span>{results.efficiencyGain}% increase in agent productivity</span>
                </BenefitItem>
                <BenefitItem>
                  <BenefitIcon>😊</BenefitIcon>
                  <span>Improved customer satisfaction with faster response times</span>
                </BenefitItem>
                <BenefitItem>
                  <BenefitIcon>🤖</BenefitIcon>
                  <span>Automate repetitive tasks and focus on complex issues</span>
                </BenefitItem>
                <BenefitItem>
                  <BenefitIcon>📊</BenefitIcon>
                  <span>Data-driven insights with advanced analytics and reporting</span>
                </BenefitItem>
              </BenefitsList>
            </BenefitsSection>
          </ResultsCard>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default ROICalculator;
