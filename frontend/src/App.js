import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Genres } from './Genres/Genres';
import { Books } from './Books/Books';
import Grid from '@mui/material/Unstable_Grid2';
import { customTheme } from './styles';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { STATUS } from './constants';

function App() {
  const [genres, setGenres] = useState([]);
  const [books, setBooks] = useState();

  const [status, setStatus] = useState(STATUS.START);

  const submitForm = (event) => {
    // TODO add handler for disabled button
    if (genres.length == 0) {
      return;
    }
    const bodyFormData = genres.join(',');  
    setStatus(STATUS.LOADING)
    
    axios.post('http://localhost:5000/', {genres:bodyFormData})
    .then(response => {
      console.log(response);
      const payload = JSON.parse(response.data.payload);

      if (payload.length == 0) {
        setStatus(STATUS.NOT_FOUND);
      } else {
        setBooks(JSON.parse(response.data.payload));
        setStatus(STATUS.FOUND)
      }

    })
    .catch(error => {
      setStatus(STATUS.NOT_FOUND)
      console.log(error);
    });
  } 

  return (
        <Container maxWidth="xl">
        <Grid container spacing={2}>
        
        <Grid xs={4} sx={{ bgcolor: '#cfd8dc' }} >
          <div style={{ position: 'sticky', top: 20, marginLeft: 10 }}>
          <h1>Goodreads genres filter</h1>
          <p> Choose some genres </p>
          <Genres genres={genres} setGenres={setGenres} ></Genres>
          <ThemeProvider theme={customTheme}>
            <Button variant="contained" onClick={submitForm}>Submit</Button>
          </ThemeProvider>  
          </div>
        </Grid>
                 
        <Grid xs display='flex'>
          <Books books={books} status={status}></Books>
        </Grid>
      </Grid>          
      </Container>
  );
}

export default App;