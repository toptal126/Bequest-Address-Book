import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useUpdateAtom } from "jotai/utils";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { IAddress } from "../../../../interfaces/address";
import {
  addressAtom,
  addressByIdAtom,
  openAddModalAtom,
} from "../../../../jotai/general";
import { fetcher } from "../../../../utils/helpers";
import Search from "../../../shared/Search";
import AddressForm from "./AddressForm";

const AddByPostcode = () => {
  const [postCode, setPostCode] = useState("");
  const { data, status } = useQuery(["find", postCode], fetcher, {
    enabled: postCode.length > 0,
    retry: false,
  });
  const seOpenModal = useUpdateAtom(openAddModalAtom);
  const setAddressById = useUpdateAtom(addressByIdAtom);

  const setAddress = useUpdateAtom(addressAtom);
  const handleSubmit = (newAddress: IAddress) => {
    setAddress((prev) => [...prev, { ...newAddress, id: uuid() }]);
    seOpenModal(false);
    setAddressById(undefined);
  };
  const convertStringToArray = (data: any) => {
    return {
      firstAddressLine: data.line_1,
      secondAddressLine: data.line_2,
      thirdAddressLine: data.line_3,
      town: data.town_or_city,
      county: data.county,
      postCode: postCode,
    };
  };
  return (
    <Stack
      sx={{
        "&>*:not(:last-child)": {
          marginBottom: "16px",
        },
      }}
    >
      <Search onSubmit={(value) => setPostCode(value)} />
      {status === "success" && data.addresses && (
        <AddressForm
          onSubmit={handleSubmit}
          address={convertStringToArray(data?.addresses?.[0])}
          postCode={postCode}
        />
      )}
    </Stack>
  );
};

export default AddByPostcode;
