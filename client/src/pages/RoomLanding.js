import React, { useState } from 'react';
import { Container } from '../styles/pages';
import { TextField, Button, Grid } from '@material-ui/core';
import { generateRoomName } from '../utils/generateWords';

const RoomLanding = () => {
  const initRoom = generateRoomName();
  const [roomId, setRoomId] = useState('');
  const handleChange = (e) => {
    setRoomId(e.target.value);
  };
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid container item xs={12} justify="center">
          <TextField
            value={roomId}
            onChange={handleChange}
            label="Room Code"
            InputLabelProps={{ shrink: true }}
            placeholder={initRoom}
          ></TextField>
        </Grid>
        <Grid container item xs={12} justify="center" spacing={2}>
          <Grid item>
            <Button color="primary" variant="contained">
              Create Room
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" variant="contained">
              Join Room
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RoomLanding;
