// import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { IAddress } from "../../../../../interfaces/address";
import AddressForm from "../AddressForm";

const mockAddress = {
  firstAddressLine: "firstAddressLine",
  secondAddressLine: "secondAddressLine",
  thirdAddressLine: "thirdAddressLine",
  town: "town",
  county: "county",
  postCode: "postcode",
  country: "country",
};

describe("Layout", () => {
  test("On submit should return address data", async () => {
    let addressValue = undefined;
    const onSubmit = (address: IAddress) => {
      addressValue = JSON.stringify(address);
    };
    render(<AddressForm onSubmit={onSubmit} />);
    const firstAddressLine = screen.getByTestId("first-address-line");
    const secondAddressLine = screen.getByTestId("second-address-line");
    const thirdAddressLine = screen.getByTestId("third-address-line");
    const town = screen.getByTestId("town");
    const county = screen.getByTestId("county");
    const postCode = screen.getByTestId("postcode");
    const country = screen.getByTestId("country");

    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(firstAddressLine, {
      target: { value: mockAddress.firstAddressLine },
    });
    fireEvent.change(secondAddressLine, {
      target: { value: mockAddress.secondAddressLine },
    });
    fireEvent.change(thirdAddressLine, {
      target: { value: mockAddress.thirdAddressLine },
    });
    fireEvent.change(town, { target: { value: mockAddress.town } });
    fireEvent.change(county, { target: { value: mockAddress.county } });
    fireEvent.change(postCode, { target: { value: mockAddress.postCode } });
    fireEvent.change(country, { target: { value: mockAddress.country } });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(addressValue).toBe(JSON.stringify(mockAddress));
  });

  test("On send an address as prop", async () => {
    let addressValue = undefined;
    const onSubmit = (address: IAddress) => {
      addressValue = JSON.stringify(address);
    };
    render(<AddressForm onSubmit={onSubmit} address={mockAddress} />);
    const submitButton = screen.getByTestId("submit-button");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(addressValue).toBe(JSON.stringify(mockAddress));
  });
});
