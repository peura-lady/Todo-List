import './App.css';
import React, { useState } from 'react';
import Todos from './components/Todos';
import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Weather from './components/Weather';




function App() {

  const [value, setValue] = useState('one');
  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">

      {/* <AppBar position="static">
        <Toolbar >
          <Typography variant="h6">
            My Todos
          </Typography>
        </Toolbar>
      </AppBar>
      <Todos /> */}

      <AppBar position="static" >
        {/* <Tabs value={value} onChange={handleChange}> */}
        <Tabs onChange={handleChange} >
          <Tab style={{ fontSize: '16px', fontWeight: 'bold', color:'#E8E8E8'}} value="one" label="Home" />
          <Tab style={{ fontSize: '16px', fontWeight: 'bold', color:'#E8E8E8'}} value="two" label="My Todos" />
        </Tabs>
      </AppBar>
      
      {value === 'one' &&
        <div>
          <div style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '50px' }}>
            Welcome!
          </div>

          <div style={{ fontSize: '23px', marginTop: '100px', fontWeight: '600' }}>
            Todays weather in Helsinki:
            <div style={{ margin: '0 auto', borderWidth: 'initial', fontWeight: '400' }}>
              <Weather />
            </div>
          </div>
        </div>
      }

      {value === 'two' && <div><Todos /></div>}

    </div>
  );
}

export default App;
