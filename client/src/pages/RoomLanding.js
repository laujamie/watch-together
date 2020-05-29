import React, { useState } from 'react';
import { Container } from '../styles/pages';
import { TextField, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { generateRoomName } from '../utils/generateWords';
import { createRoom } from '../services/Socket';

const RoomLanding = () => {
  const initRoom = generateRoomName();
  const history = useHistory();
  const [roomId, setRoomId] = useState('');
  const handleChange = (e) => {
    setRoomId(e.target.value);
  };
  const createNewRoom = () => {
    let temp = '';
    if (roomId === '') {
      createRoom(initRoom);
      temp = initRoom;
    } else {
      createRoom(roomId);
      temp = roomId;
    }
    history.push(`/rooms/${temp}`);
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
            <Button
              color="secondary"
              variant="contained"
              onClick={createNewRoom}
            >
              Join Room
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RoomLanding;
