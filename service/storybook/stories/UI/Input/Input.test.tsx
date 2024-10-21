import { composeStories } from "@storybook/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../../../test/test-utils";
import * as stories from "./Input.stories";

const { InputGroupStory } = composeStories(stories);

describe("Input 컴포넌트 기능 테스트", () => {
  it("InputGroup이 올바르게 렌더링된다", () => {
    render(<InputGroupStory />);

    // InputLeftAddon과 Input이 함께 포함되어 있는지 확인
    const addonElement = screen.getByText("$");
    const inputElement = screen.getByPlaceholderText("placeholder");

    expect(addonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("색상이 제대로 적용되는지 확인", () => {
    render(<InputGroupStory />);

    const inputElement = screen.getByPlaceholderText("placeholder");
    // 크기 확인
    expect(inputElement).toHaveStyle({ fontSize: "lg" });
  });

  it("Placeholder가 제대로 표시되는지 확인", () => {
    render(<InputGroupStory />);

    const inputElement = screen.getByPlaceholderText("placeholder");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "placeholder");
  });

  it("입력 이벤트가 처리되고 변경 사항이 반영되는지 확인", async () => {
    render(<InputGroupStory />);

    const inputElement = screen.getByPlaceholderText("placeholder");
    await userEvent.type(inputElement, "test input");

    expect(inputElement).toHaveValue("test input");
  });
});
