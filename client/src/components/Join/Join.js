import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  return (
    <>
    <div className="joinOuterContainer">
    <h2 className="heading">MASAI HEALTH-CARE</h2>
      <div className="joinInnerContainer">
        <div>
          <TextField variant="outlined" placeholder="Name"  type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
        <TextField variant="outlined" placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)}  />
        </div>
        <Link style={{textDecoration:"none"}} onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Button variant="contained" color="primary">JOIN</Button>
        </Link>
      </div>
    </div>
  </>
  );
}
