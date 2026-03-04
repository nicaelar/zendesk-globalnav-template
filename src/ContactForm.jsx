import { useState } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Label, Input, Message } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #2f3941;
`;

const StyledField = styled(Field)`
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  width: 100%;
`;

const SuccessMessage = styled.div`
  padding: 16px;
  background-color: #edf8f4;
  border: 1px solid #038153;
  border-radius: 4px;
  color: #038153;
  margin-bottom: 24px;
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', address: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <ThemeProvider>
      <FormContainer>
        <Title>Contact Information</Title>

        {submitted && (
          <SuccessMessage>
            Form submitted successfully! Thank you for your information.
          </SuccessMessage>
        )}

        <form onSubmit={handleSubmit}>
          <StyledField>
            <Label>Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              validation={errors.name ? 'error' : undefined}
            />
            {errors.name && (
              <Message validation="error">{errors.name}</Message>
            )}
          </StyledField>

          <StyledField>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              validation={errors.email ? 'error' : undefined}
            />
            {errors.email && (
              <Message validation="error">{errors.email}</Message>
            )}
          </StyledField>

          <StyledField>
            <Label>Address</Label>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              validation={errors.address ? 'error' : undefined}
            />
            {errors.address && (
              <Message validation="error">{errors.address}</Message>
            )}
          </StyledField>

          <StyledButton isPrimary type="submit">
            Submit
          </StyledButton>
        </form>
      </FormContainer>
    </ThemeProvider>
  );
}

export default ContactForm;
