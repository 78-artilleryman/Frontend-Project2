import { describe, expect, it } from "vitest";
import { render, screen } from "../../../test/test-utils";
import React from "react";

describe("test", () => {
  it("test", () => {
    render(<div>test</div>);

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
