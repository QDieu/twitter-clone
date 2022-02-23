import { Button, FormControl, FormGroup, styled, TextField } from '@mui/material';
import React from 'react';
import { ModalBlock } from '../../../components';

const LoginFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LoginSideField = styled(TextField)({
  marginBottom: 18,
});

type TProps = {
  open: boolean;
  onClose: () => void;
};

export const LoginModal: React.FC<TProps> = ({ open, onClose }) => {
  return (
    <ModalBlock visible={open} onClose={onClose} title="Войти в аккаунт">
      <form onSubmit={() => {}}>
        <LoginFormControl fullWidth>
          <FormGroup aria-label="position" row>
            <LoginSideField
              name="email"
              id="email"
              label="E-Mail"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              type="email"
              defaultValue=""
              fullWidth
              autoFocus
            />
            <LoginSideField
              name="password"
              id="password"
              label="Пароль"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              type="password"
              defaultValue=""
              fullWidth
            />
            <Button variant="contained" color="primary" fullWidth>
              Войти
            </Button>
          </FormGroup>
        </LoginFormControl>
      </form>
    </ModalBlock>
  );
};
