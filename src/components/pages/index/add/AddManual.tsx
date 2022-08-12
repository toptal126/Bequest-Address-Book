import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { v4 as uuid } from "uuid";
import { IAddress } from "../../../../interfaces/address";
import {
  addressAtom,
  addressByIdAtom,
  openAddModalAtom,
} from "../../../../jotai/general";
import AddressForm from "./AddressForm";

const AddManual = () => {
  const seOpenModal = useUpdateAtom(openAddModalAtom);
  const addressById = useAtomValue(addressByIdAtom);

  const setAddress = useUpdateAtom(addressAtom);
  const handleSubmit = (newAddress: IAddress) => {
    setAddress((prev) => [...prev, { ...newAddress, id: uuid() }]);
    seOpenModal(false);
  };
  return <AddressForm onSubmit={handleSubmit} address={addressById} />;
};

export default AddManual;
