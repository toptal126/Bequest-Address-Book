import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IAddress } from "../../../../interfaces/address";

const AddressFormSchema = yup
  .object({
    firstAddressLine: yup.string().required(),
    secondAddressLine: yup.string().notRequired(),
    thirdAddressLine: yup.string().notRequired(),
    town: yup.string().required(),
    county: yup.string().notRequired(),
    postCode: yup.string().required(),
  })
  .required();

interface IAddressFormProps {
  submitText?: string;
  address?: IAddress;
  postCode?: string;
  onSubmit: (address: IAddress) => void;
}

const AddressForm: FunctionComponent<IAddressFormProps> = ({
  address,
  submitText,
  postCode,
  onSubmit,
}) => {
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAddress>({
    resolver: yupResolver(AddressFormSchema),
  });
  const handleSubmitForm = (data: IAddress) => {
    onSubmit(data);
    reset();
  };
  useEffect(() => {
    if (address) {
      setValue("firstAddressLine", address.firstAddressLine);
      setValue("secondAddressLine", address.secondAddressLine);
      setValue("thirdAddressLine", address.thirdAddressLine);
      setValue("town", address.town);
      setValue("county", address.county);
      setValue("postCode", address.postCode);
      setValue("country", address.country);
    }
  }, [address]);
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Stack
        sx={{
          "&>*:nth-of-type(2n)": {
            marginBottom: "24px",
          },
          "&>*:nth-of-type(2n+1)": {
            marginBottom: "8px",
          },
        }}
      >
        <Typography data-name="">First Address Line</Typography>
        <TextField
          inputProps={{
            "data-testid": "first-address-line",
          }}
          {...register("firstAddressLine")}
          error={!!errors.firstAddressLine}
          helperText={errors.firstAddressLine?.message}
        />
        <Typography>Second Address Line</Typography>
        <TextField
          inputProps={{
            "data-testid": "second-address-line",
          }}
          {...register("secondAddressLine")}
          error={!!errors.secondAddressLine}
          helperText={errors.secondAddressLine?.message}
        />
        <Typography>Third Address Line</Typography>
        <TextField
          inputProps={{
            "data-testid": "third-address-line",
          }}
          {...register("thirdAddressLine")}
          error={!!errors.thirdAddressLine}
          helperText={errors.thirdAddressLine?.message}
        />
        <Typography>Town</Typography>
        <TextField
          inputProps={{
            "data-testid": "town",
          }}
          {...register("town")}
          error={!!errors.town}
          helperText={errors.town?.message}
        />
        <Typography>County</Typography>
        <TextField
          inputProps={{
            "data-testid": "county",
          }}
          {...register("county")}
          error={!!errors.county}
          helperText={errors.county?.message}
        />
        <Typography>Postcode</Typography>
        <TextField
          inputProps={{
            "data-testid": "postcode",
          }}
          {...register("postCode")}
          error={!!errors.postCode}
          helperText={errors.postCode?.message}
        />
        <Typography>Country</Typography>
        <TextField
          inputProps={{
            "data-testid": "country",
          }}
          {...register("country")}
          error={!!errors.postCode}
          helperText={errors.postCode?.message}
        />
        <Button
          data-testid="submit-button"
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ fontWeight: "600", height: 42, fontSize: "18px" }}
        >
          {submitText ?? "Add"}
        </Button>
      </Stack>
    </form>
  );
};

export default AddressForm;
