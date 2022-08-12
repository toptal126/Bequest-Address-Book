import { Pagination, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { addressAtom } from "../../../../jotai/general";
const LIMIT = 10;

export default function AddressList() {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");

  const addresses = useAtomValue(addressAtom);

  if (addresses.length === 0) {
    return (
      <Typography variant="h5">
        There is no addresses yet, please add one.
      </Typography>
    );
  }

  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>First Address Line</StyledTableCell>
              <StyledTableCell align="right">
                Second Address Line
              </StyledTableCell>
              <StyledTableCell align="right">
                Third Address Line
              </StyledTableCell>
              <StyledTableCell align="right">Town</StyledTableCell>
              <StyledTableCell align="right">County</StyledTableCell>
              <StyledTableCell align="right">Postcode</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {addresses
              .slice((page - 1) * LIMIT, (page - 1) * LIMIT + LIMIT)
              .map((address, index) => (
                <StyledTableRow
                  data-testid={`address-book-${index}`}
                  key={address.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell scope="row">
                    {address.firstAddressLine}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {address.secondAddressLine}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {address.thirdAddressLine}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {address.town}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {address.county}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {address.postCode}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {address.country}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        role="listbox"
        count={Math.ceil(+(addresses.length / LIMIT).toFixed(2))}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ marginTop: "16px" }}
      />
    </Stack>
  );
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#fff",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
