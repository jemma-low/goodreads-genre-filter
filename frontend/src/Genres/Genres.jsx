import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { GENRES } from '../constants';


export const Genres = ({ genres, setGenres }) => {
  const handleChange = (genre) => (event) => {
    let arr = [];
    if (genres.indexOf(genre) != -1) {
      arr = genres.filter(element => element !== genre);
    } else {
      arr = genres.concat(genre);
    }
    setGenres(arr);
  }

  let genresList = GENRES.map((genre, index)=>{
    return (
      <FormControlLabel control={
        <Checkbox onChange={handleChange(genre)} />
      } label={genre} />
    )
  })  

  return (
    <FormGroup>  
      {genresList}
    </FormGroup>
    )
}
