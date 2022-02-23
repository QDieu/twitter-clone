import { Button, FormControl, FormGroup, styled, TextField } from '@mui/material';
import React from 'react';
import { ModalBlock } from '../../../components';

const LoginFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const RegisterField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

type TProps = {
  open: boolean;
  onClose: () => void;
};

export const RegisterModal: React.FC<TProps> = ({ open, onClose }) => {
  return (
    <ModalBlock visible={open} onClose={onClose} title="Создайте учетную запись">
      <LoginFormControl fullWidth>
        <FormGroup aria-label="position" row>
          <RegisterField
            autoFocus
            id="name"
            label="Имя"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="name"
            fullWidth
          />
          <RegisterField
            autoFocus
            id="email"
            label="E-Mail"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="email"
            fullWidth
          />
          <RegisterField
            autoFocus
            id="password"
            label="Пароль"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="password"
            fullWidth
          />
          <Button variant="contained" color="primary" fullWidth>
            Далее
          </Button>
        </FormGroup>
      </LoginFormControl>
    </ModalBlock>
  );
};
