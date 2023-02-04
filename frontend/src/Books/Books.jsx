import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { STATUS } from '../constants';


export const Books = ({ books, status }) => {
    if (status == STATUS.FOUND) {
        const StyledTableCell = styled(TableCell)(({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            [`&.${tableCellClasses.body}`]: {
              fontSize: 14,
            },
          }));
          
          const StyledTableRow = styled(TableRow)(({ theme }) => ({
            '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }));

        const booksList = books.map(book => {
            return (
                <StyledTableRow
                  key={book.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    <a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a>
                  </StyledTableCell>
                  <StyledTableCell align="right">{book.author}</StyledTableCell>
                  <StyledTableCell align="right"><img src={book.img_src} alt={book.img_alt}></img></StyledTableCell>
                </StyledTableRow>                
            )
        })
    
        return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200, marginTop: '10px' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell align="right">Author</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {booksList}
              </TableBody>
            </Table>
          </TableContainer>          
          ); 
    }
    let statusMessage;
    switch (status) {
      case STATUS.START:
        statusMessage = 'Start searching!';
        break;
      case STATUS.LOADING:
        statusMessage = 'Fetching books...';
        break;
      default:
        statusMessage = 'No books found.';  
    }
    return (
      <Box m="auto" display="flex" justifyContent="center" alignItems="center" height="100vh" >
      <h2>{statusMessage}</h2>
      </Box>
    )
}
