import React, { useCallback, useRef } from 'react';
import { FiUser, FiKey, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import i18n from '../../translations/i18n.js';
import getValidationErrors from '../../utils/getValidationErrors';
import CopyrightFooter from '../../components/CopyrightFooter';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        login: Yup.string().required(`${i18n.t('login.errors.required')}`),
        password: Yup.string().required(`${i18n.t('login.errors.required')}`),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background>
        <img
          src="https://www.healthbit.com.br/assets/img/common/logo.png"
          alt="Logo"
        />
      </Background>
      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>{i18n.t('login.welcome')}</h1>
          <strong>{i18n.t('login.message')}</strong>

          <Input
            id="login-user-input"
            name="login"
            placeholder={i18n.t('login.user')}
            icon={FiUser}
          />
          <Input
            id="login-password-input"
            name="password"
            type="password"
            placeholder={i18n.t('login.password')}
            icon={FiKey}
          />

          <div className="link-row">
            <a href="forgot">{i18n.t('login.forgot')}</a>
          </div>

          <div className="button-row">
            <div>
              <input id="checkbox-keep-loggin" type="checkbox" />
              <label htmlFor="checkbox-keep-loggin">
                {i18n.t('login.keep')}
              </label>
            </div>
            <Button id="login-button-submit" type="submit">
              <FiLogIn />
              <p>{i18n.t('login.button')}</p>
            </Button>
          </div>
        </Form>
        <CopyrightFooter />
      </Content>
    </Container>
  );
};

export default Login;
