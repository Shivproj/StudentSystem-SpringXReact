import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [list, setList] = useState([]);
  const handleClick = () => {
    const details = { name, address };
    console.log(details);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then(() => console.log("New Student Added"))
      .then(() => {
        fetch("http://localhost:8080/student/getAll")
          .then((data) => data.json())
          .then((students) => setList(students));
      });
  };
  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((data) => data.json())
      .then((students) => setList(students)).then(()=>console.log(list));
  }, []);

  return (
    <>
      <div style={{ padding: 200 }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            onClick={() => handleClick()}
          >
            Success
          </Button>
        </Box>
      </div>
      <div>
        <Table>
            <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Address</td>
          </tr>
          </thead>
          <tbody>
           {
            list.map((item)=>{
                return(
                    <tr><td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    </tr>
                )
            })
           }
          </tbody>

          
         
        </Table>
      </div>
    </>
  );
}
