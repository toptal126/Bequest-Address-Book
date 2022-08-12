import {
  Box,
  Button,
  DialogContent,
  Modal,
  Stack,
  useTheme,
} from "@mui/material";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { addressByIdAtom, openAddModalAtom } from "../../jotai/general";
import AutoCompleteSearch from "../shared/AutoCompleteSearch";
import Add from "./index/Add";
import AddressList from "./index/addressList/AddressList";
const Index = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useAtom(openAddModalAtom);
  const setAddressById = useUpdateAtom(addressByIdAtom);
  return (
    <>
      <Stack sx={{ backgroundColor: "#fff", borderRadius: "8px" }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          marginBottom="16px"
          sx={{
            [theme.breakpoints.down(700)]: {
              flexDirection: "column",
              "&>*": {
                marginBottom: "8px",
              },
            },
          }}
        >
          <AutoCompleteSearch />

          <Button
            onClick={() => setOpenModal(true)}
            variant="contained"
            data-testid="add-address-button"
            sx={{
              width: "213px",
              fontWeight: "bold",
              fontSize: "16px",
              marginLeft: "8px",
            }}
          >
            + Add Address
          </Button>
        </Box>
        <AddressList />
      </Stack>
      <Modal
        open={openModal}
        onClose={() => {}}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogContent
          data-testid="add-address-modal"
          onClick={() => {
            setOpenModal(false);
            setAddressById(undefined);
          }}
          sx={{
            "&.MuiDialogContent-root": {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Add />
        </DialogContent>
      </Modal>
    </>
  );
};

export default Index;
