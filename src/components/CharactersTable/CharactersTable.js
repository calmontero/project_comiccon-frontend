import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

function CharactersTable({ characters }) {
  const [selectedID, setSelectedID] = useState(null);
  const classes = useStyles();
  
  function handleClick(e) {
    console.log(selectedID);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="right">Creation Year</TableCell>
            <TableCell align="right">History</TableCell>
            <TableCell align="right">Alignment</TableCell>
            <TableCell align="right">Wikipedia Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((row) => (
            <TableRow key={row.id}
                hover
                onClick={() => {
                  setSelectedID(row.id);
                }}
                selected={selectedID === row.id}
                classes={{ selected: classes.selected }}
                className={classes.tableRow}
            >
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.creation}</TableCell>
              <TableCell align="right">{row.history}</TableCell>
              <TableCell align="right">{row.alignment}</TableCell>
              <TableCell align="right">{row.wikipedia_url}</TableCell>
              <button onClick={handleClick} >Edit</button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CharactersTable;