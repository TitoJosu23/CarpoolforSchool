import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(child, guardian, date, time, school) {
  return { child, guardian, date, time, school };
}
const rows = [
  createData(
    "Jessica Hubbard",
    "Joanne Hubbard",
    "5 / 13 / 22",
    "6:18AM",
    "MIAMI HIGH"
  ),
  createData(
    "Monica Perez",
    "Arlene",
    "5 / 13 / 22",
    "6:35AM",
    "Village Green"
  ),
  createData("Victor Amat", "Robert Amat", "5 / 13 / 22", "7:18AM", "Varela"),
  createData(
    "Joseph Blue",
    "Selene Blue",
    "5 / 13 / 22",
    "7:25AM",
    "MIAMI HIGH"
  ),
  createData(
    "Josh Turner",
    "Hellen Turner",
    "5 / 13 / 22",
    "3:06PM",
    "MIAMI HIGH"
  ),
];
export const RideFeed = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="fs-3">Guardian</TableCell>
            <TableCell className="fs-3" align="right">
              Child
            </TableCell>
            <TableCell className="fs-3" align="right">
              Date&nbsp;
            </TableCell>
            <TableCell className="fs-3" align="right">
              Time&nbsp;
            </TableCell>
            <TableCell className="fs-3" align="right">
              School&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.child}
              </TableCell>
              <TableCell align="right">{row.guardian}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.school}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
