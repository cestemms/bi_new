import React, { useCallback, useRef } from 'react';
import { FiUser, FiMail, FiKey, FiLogIn, FiCornerUpLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';
import i18n from '../../translations/i18n.js';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CopyrightFooter from '../../components/CopyrightFooter';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        login: Yup.string().required('Login obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Mínimo de 6 caracteres requerido'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>{i18n.t('login.welcome')}</h1>
          <strong>{i18n.t('signup.message')}</strong>
          <Input
            id="signup-login-input"
            name="login"
            placeholder={i18n.t('login.user')}
            icon={FiUser}
          />
          <Input
            id="signup-email-input"
            name="email"
            placeholder={i18n.t('signup.email')}
            icon={FiMail}
          />

          <Input
            id="login-password-input"
            name="password"
            type="password"
            placeholder={i18n.t('login.password')}
            icon={FiKey}
          />

          <div className="button-row">
            <div>
              <a href="login">
                <FiCornerUpLeft />
                {i18n.t('signup.back')}
              </a>
            </div>
            <Button id="login-button-submit" type="submit">
              <FiLogIn />
              <p>{i18n.t('signup.button')}</p>
            </Button>
          </div>
        </Form>
        <CopyrightFooter />
      </Content>
      <Background>
        <img
          src="https://www.healthbit.com.br/assets/img/common/logo.png"
          alt="Logo"
        />
      </Background>
    </Container>
  );
};

export default Signup;
