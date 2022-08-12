// import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Layout from "../../Layout";

describe("Layout", () => {
  test("Header logo link", () => {
    render(
      <BrowserRouter>
        <Layout>
          <h1>test</h1>
        </Layout>
      </BrowserRouter>
    );
    const element = screen.getByTestId("header-logo-link");
    expect(element).toHaveAttribute("href", "/");
  });

  test("Header logo text", () => {
    render(
      <BrowserRouter>
        <Layout>
          <h1>test</h1>
        </Layout>
      </BrowserRouter>
    );
    const element = screen.getByTestId("header-logo-text");
    expect(element).toHaveTextContent("Address Book");
  });

  test("Layout children", () => {
    render(
      <BrowserRouter>
        <Layout>
          <h1>test</h1>
        </Layout>
      </BrowserRouter>
    );
    const element = screen.getByTestId("layout-container");
    expect(element).toHaveTextContent("test");
  });

  test("Layout snapshot", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Layout>
          <h1>test</h1>
        </Layout>
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
