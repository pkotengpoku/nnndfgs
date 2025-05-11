import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function RoomModal(props) {
  return (
    <div>
      <Modal
        open={props.openstatus}
        onClose={props.handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='mx-10 w-2/3'>
          <Image
            src={'https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif'}
            alt="A description of the image"
            width={150}
            height={150}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Room Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is the room's detailed description.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
