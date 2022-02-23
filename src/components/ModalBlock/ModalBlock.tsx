import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
type TProps = {
  title?: string;
  children: React.ReactNode;
  visible?: boolean;
  onClose: () => void;
};

export const ModalBlock: React.FC<TProps> = ({ title, children, visible = false, onClose }) => {
  if (!visible) return null;
  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
