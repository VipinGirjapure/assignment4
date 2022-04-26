// import React from "react";
// // import MaterialTable from "material-table"
// const Students = () =>{

//     // const data=[
//     //     {name :"Vipin" ,age:23}
//     // ]
//     return(
//         <div>
//             <h1>Student Details</h1>
//             {/* <MaterialTable title="Material Table" /> */}

//         </div>
//     )
// }

// export default Students;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../App.css"

function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData("John", 26," MERN", "October",),
  createData("Doe", 25, "MERN","November", ),
  createData("Biden", 26, "MERN","September", ),
  createData("Barar", 22, "MERN", "November", ),
  createData("Chirst", 23, "MERN", "December", ),
  createData("Elent", 24, "MERN", "December", ),
];

export default function Student() {
  return (
    <div>
      <div className="heading">

      <h2>Student Details</h2>
      <span className="addStudent">Add New Student</span>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className="tableRow">Name</TableCell>
              <TableCell  className="tableRow" align="right">Age</TableCell>
              <TableCell className="tableRow" align="right">Course</TableCell>
              <TableCell className="tableRow" align="right">Batch</TableCell>
              <TableCell className="tableRow" align="right">Change</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
              className="tableRow"
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.batch}</TableCell>
                <TableCell align="right" id="edit">Edit</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
