import { render, screen } from "@testing-library/react";

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
});