// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import validator from 'validator';

// Internal Dependencies
import { useTextField } from '../../../../hooks';
import FormInput from '../../../../components/Form/FormInput';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import FormTextArea from '../../../../components/Form/FormTextArea';

// Local Variables
const Wrapper = styled.div({
  margin: '0 auto',
  maxWidth: 600,
});
const Form = styled.form({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
});
const encode = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// Component Definition
const ContactForm: React.FC<RouteComponentProps> = (props) => {
  const botField = useTextField();
  const nameField = useTextField();
  const emailField = useTextField();
  const messageField = useTextField<HTMLTextAreaElement>();

  const emailPresent = emailField.inputProps.value.trim().length > 0;
  const isEmailValid = validator.isEmail(emailField.inputProps.value);
  const isNameValid = nameField.inputProps.value.trim().length > 0;
  const isMessageValid = messageField.inputProps.value.trim().length > 5;

  let emailErrorMessage = null;

  if (emailField.isTouched && !emailPresent) {
    emailErrorMessage = 'Required';
  } else if (emailField.isTouched && !isEmailValid) {
    emailErrorMessage = 'Invalid email';
  }

  const nameErrorMessage = nameField.isTouched && !isNameValid ? 'Required' : null;
  const messageErrorMessage = messageField.isTouched && !isMessageValid ? 'Message must be at least 6 characters.' : null;

  const isFormValid = isEmailValid && isNameValid;

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: nameField.inputProps.value,
          email: emailField.inputProps.value,
          message: messageField.inputProps.value,
        }),
      });

      if (response.status === 200) {
        props.history.push('/contact');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Wrapper>
      <Card>
        <Form
          // data-netlify-honeypot="bot-field"
          // data-netlify="true"
          // method="post"
          // name="contact"
          onSubmit={handleSubmit}
        >
          <input
            name="form-name"
            type="hidden"
            value="contact"
          />

          <p hidden>
            <label htmlFor="hidden">
              Don’t fill this out:{' '}
              <input
                name="bot-field"
                {...botField.inputProps}
              />
            </label>
          </p>

          <FormInput
            errorMessage={nameErrorMessage}
            id="name"
            name="name"
            placeholder="Name"
            {...nameField.inputProps}
          />

          <FormInput
            errorMessage={emailErrorMessage}
            id="email"
            name="email"
            placeholder="Email"
            {...emailField.inputProps}
          />

          <FormTextArea
            errorMessage={messageErrorMessage}
            id="message"
            name="message"
            placeholder="Message..."
            {...messageField.inputProps}
          />

          <div>
            <Button
              disabled={!isFormValid}
              type="submit"
            >
              SUBMIT
            </Button>
          </div>
        </Form>
      </Card>
    </Wrapper>
  )
}

export default withRouter(ContactForm);
