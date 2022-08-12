import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { useUpdateAtom } from "jotai/utils";
import { FunctionComponent, useEffect, useState } from "react";
import { addressByIdAtom, openAddModalAtom } from "../../jotai/general";
import { idFetcher, suggestfetcher } from "../../utils/helpers";
interface Props {
  onSubmit: (value: string) => void;
}

const AutoCompleteSearch: FunctionComponent = () => {
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const setAddressById = useUpdateAtom(addressByIdAtom);
  const setOpenModal = useUpdateAtom(openAddModalAtom);

  const { data, status } = useQuery(
    ["findSuggestions", value],
    suggestfetcher,
    {
      enabled: value.length > 0,
      retry: false,
    }
  );
  const { data: result } = useQuery(["findAddress", id], idFetcher, {
    enabled: id.length > 0,
    retry: false,
  });

  useEffect(() => {
    if (result) {
      setAddressById({
        id: "id",
        firstAddressLine: result.line_1,
        secondAddressLine: result.line_2,
        thirdAddressLine: result.line_3,
        town: result.town_or_city,
        county: result.county,
        postCode: result.postcode,
      });
      setOpenModal(true);
    }
  }, [result]);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const addressOption = data?.suggestions?.map(
    (suggestion: any) => suggestion.address
  );
  const handleClick = (e: any, value: any) => {
    data?.suggestions.find((suggestion: any) => {
      if (suggestion.address === value) {
        setId(suggestion.id);
      }
    });
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={addressOption ?? []}
      onChange={(event, value) => handleClick(event, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={handleChange}
          placeholder="Enter Postcode"
          sx={{
            height: "100%",
            width: "400px",
            marginRight: "auto",
            "& .MuiAutocomplete-inputRoot": { height: "100%" },
          }}
        />
      )}
    />
  );
};

export default AutoCompleteSearch;
