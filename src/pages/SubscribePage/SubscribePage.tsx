import React, { useState } from 'react';
import { Backdrop, Button, Fade, Grid, Modal, Typography } from '@mui/material';
import { ModalContentWrapperStyled } from './SubscribePage.styles';

const SubscribePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <Grid container justifyContent='center' alignContent='center' height='100%'>
      <Grid item>
        <Button variant='outlined' size='large' onClick={handleOpen}>
          Subscribe
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <ModalContentWrapperStyled>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Text in a modal
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </ModalContentWrapperStyled>
          </Fade>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default SubscribePage;
