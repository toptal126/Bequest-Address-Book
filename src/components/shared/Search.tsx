import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, InputBase } from "@mui/material";
import { FunctionComponent, useState } from "react";
interface Props {
  onSubmit: (value: string) => void;
}

const Search: FunctionComponent<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <InputBase
      value={value}
      inputProps={{
        "data-testid": "search-field",
      }}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter Postcode"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            data-testid="search-field-button"
            aria-label="toggle password visibility"
            onClick={() => onSubmit(value)}
            edge="end"
            sx={{ color: "#A5A082" }}
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default Search;
