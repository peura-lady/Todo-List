import './App.css';
import Todos from './components/Todos';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// 



function App() {
  return (
    <div className="App">

      <AppBar position="static">
        <Toolbar >

          <Typography variant="h6">
            My Todos
          </Typography>

        </Toolbar>
      </AppBar>

      <Todos />
    </div>
  );
}

export default App;
