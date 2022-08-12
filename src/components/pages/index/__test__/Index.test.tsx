// import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Index from "../../Index";

const mockAddress = {
  firstAddressLine: "firstAddressLine",
  secondAddressLine: "secondAddressLine",
  thirdAddressLine: "thirdAddressLine",
  town: "town",
  county: "county",
  postCode: "postcode",
  country: "country",
};

const queryClient = new QueryClient();

const addAddressToTheList = async () => {
  const openModalButton = screen.getByTestId("add-address-button");
  await fireEvent.click(openModalButton);

  const firstAddressLine = screen.getByTestId("first-address-line");
  const secondAddressLine = screen.getByTestId("second-address-line");
  const thirdAddressLine = screen.getByTestId("third-address-line");
  const town = screen.getByTestId("town");
  const county = screen.getByTestId("county");
  const postCode = screen.getByTestId("postcode");
  const country = screen.getByTestId("country");

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

  const submitButton = screen.getByTestId("submit-button");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.click(submitButton);
  });
};

describe("Index", () => {
  test("Open and close the modal", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>,
      {}
    );
    const openModalButton = screen.getByTestId("add-address-button");

    await fireEvent.click(openModalButton);
    const addressModal = screen.getByTestId("add-address-modal");
    await fireEvent.click(addressModal);
    expect(screen.queryAllByText("add-address-modal").length).toBe(0);
  });
  test("Click on add new address button and entering info and add it to list", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    );
    await addAddressToTheList();

    const firstLineOfAddresses = screen.getByTestId("address-book-0");

    expect(firstLineOfAddresses).toBeTruthy();
  });
  test("go to second page", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    );
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();
    await addAddressToTheList();

    const firstLineOfAddresses = screen.getByTestId("NavigateNextIcon");
    await fireEvent.click(firstLineOfAddresses);
    const secondButton = screen.getByText("2");
    expect(secondButton.classList.contains("Mui-selected")).toBe(true);
  });
  test("go to second pagsasd123123e", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    );

    const openModalButton = screen.getByTestId("add-address-button");
    await fireEvent.click(openModalButton);

    const manualTab = screen.getByTestId("add-manual-button");
    await fireEvent.click(manualTab);

    const byPostTab = screen.getByTestId("add-by-postcode-button");
    await fireEvent.click(byPostTab);

    const searchInput = screen.getByTestId("search-field");
    fireEvent.change(searchInput, { target: { value: "ZE1 0PR" } });

    const searchSubmitButton = screen.getByTestId("search-field-button");
    await fireEvent.click(searchSubmitButton);

    const firstAddressLine = await screen.findByTestId("first-address-line");
    const secondAddressLine = screen.getByTestId("second-address-line");
    const thirdAddressLine = screen.getByTestId("third-address-line");
    const town = screen.getByTestId("town");
    const county = screen.getByTestId("county");
    const postCode = screen.getByTestId("postcode");
    const country = screen.getByTestId("country");

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

    const submitButton = screen.getByTestId("submit-button");
    await fireEvent.click(submitButton);
    expect(firstAddressLine).toBeTruthy();
  });
});
