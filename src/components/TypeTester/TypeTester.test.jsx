import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TypeTester from "./TypeTester";

import {
  DEFAULT_TEXT,
  DEFAULT_FONT,
  DEFAULT_STYLE,
  DEFAULT_VIEW,
} from "./config";

describe("TypeTester", () => {
  test("renders with default values", () => {
    render(<TypeTester />);

    // Toolbar controls
    const fontSelect = screen.getByLabelText("Font");
    const styleSelect = screen.getByLabelText("Style");
    const viewSelect = screen.getByLabelText("View");
    const textInput = screen.getByLabelText("Text");

    expect(fontSelect).toBeInTheDocument();
    expect(styleSelect).toBeInTheDocument();
    expect(viewSelect).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();

    // Default selections
    expect(fontSelect).toHaveValue(DEFAULT_FONT);
    expect(styleSelect).toHaveValue(DEFAULT_STYLE);
    expect(viewSelect).toHaveValue(DEFAULT_VIEW);

    // Default text
    expect(textInput).toHaveValue(DEFAULT_TEXT);

    // Specimen displays the default text
    expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
  });

  test("updates the specimen when the text changes", async () => {
    const user = userEvent.setup();

    render(<TypeTester />);

    const textInput = screen.getByLabelText("Text");

    const newText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    await user.clear(textInput);
    await user.type(textInput, newText);

    expect(textInput).toHaveValue(newText);

    expect(screen.getByText(newText)).toBeInTheDocument();
  });

  test("changing the font updates the available styles", async () => {
    const user = userEvent.setup();

    render(<TypeTester />);

    const fontSelect = screen.getByLabelText("Font");
    const styleSelect = screen.getByLabelText("Style");

    await user.selectOptions(fontSelect, "font-two");

    expect(fontSelect).toHaveValue("font-two");
    expect(styleSelect).toHaveValue("smooth");

    expect(
      screen.getByRole("option", { name: "Smooth" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "Sprinkle" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "Scatter" })
    ).toBeInTheDocument();
  });

  test("changing the style updates the selected style", async () => {
    const user = userEvent.setup();

    render(<TypeTester />);

    const styleSelect = screen.getByLabelText("Style");

    await user.selectOptions(styleSelect, "bold");

    expect(styleSelect).toHaveValue("bold");
  });

  test("changing font size updates the specimen", async () => {
    const user = userEvent.setup();

    render(<TypeTester />);

    // const slider = screen.getByLabelText("Font Size");
    const slider = screen.getByLabelText(/^Font Size/);
    const specimen = screen.getByTestId("specimen-text");

    // await user.clear(slider);
    // await user.type(slider, "72");
    fireEvent.change(slider, {
      target: {
        value: 72,
      },
    });

    expect(specimen).toHaveStyle({
      fontSize: "72px",
    });
  });

  test("changing font tracking updates the specimen", async () => {
    const user = userEvent.setup();

    render(<TypeTester />);

    const trackingSlider = screen.getByLabelText(/^Tracking/);
    const specimen = screen.getByTestId("specimen-text");

    fireEvent.change(trackingSlider, {
      target: {
        value: 20,
      },
    });

    expect(specimen).toHaveStyle({
      letterSpacing: "20px",
    });
  });

  test("changing font line height updates the specimen", async () => {
    const user = userEvent.setup();

    render(<TypeTester />);

    const lineHeightSlider = screen.getByLabelText(/^Line Height/);
    const specimen = screen.getByTestId("specimen-text");

    fireEvent.change(lineHeightSlider, {
      target: {
        value: 2,
      },
    });

    expect(specimen).toHaveStyle({
      lineHeight: "2",
    });
  });
});