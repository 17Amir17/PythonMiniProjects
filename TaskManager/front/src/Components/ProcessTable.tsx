import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Process } from "../utils/types";

export default function BasicTable({ processes }: { processes: Process[] }) {
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell width={"40%"}>Process</TableCell>
              <TableCell width={"30%"}>PID</TableCell>
              <TableCell width={"30%"} align="right">Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {processes.map((row) => (
              <TableRow key={row.PID}>
                <TableCell width={"40%"} component="th" scope="row">
                  {row.process}
                </TableCell>
                <TableCell width={"30%"} component="th" scope="row">
                  {row.PID}
                </TableCell>
                <TableCell width={"30%"} align="right">{row.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
