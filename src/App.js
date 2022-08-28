
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './App.css';
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <Box>
    <Navbar />
    {/* <div className='Topbar'>
    <Topbar sx={{display:"flex",flexDirection: 'row',justifyContent:"center" ,alignItems:"center"}} />

    </div> */}
    {/* <Topbar sx={{display:"flex",flexDirection: 'row',justifyContent:"center" ,alignItems:"center"}} /> */}

<Container maxWidth="lg">
<Topbar sx={{display:"flex",flexDirection: 'row',justifyContent:"center" ,alignItems:"center"}} />

<Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
    <Sidebar />
    <Feed />

</Stack>
</Container>




    </Box>
  );
}

export default App;
