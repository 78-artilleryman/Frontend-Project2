import { Button } from "@byeonghyeon/react-components-button";
import { composeStories } from "@storybook/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../../../test/test-utils";
import * as stories from "./Button.stories";

const { ButtonTestStory, TextButtonStory, ToggleButtonStory } = composeStories(stories);

describe("일반 Button 컴포넌트 기능 테스트", () => {
  it("올바른 텍스트와 아이콘으로 버튼이 렌더링 된다.", () => {
    render(<ButtonTestStory />);

    // 'Button'이라는 텍스트와 아이콘이 포함된 버튼 요소를 찾기
    const buttonElement = screen.getByRole("button", { name: /Button/i });

    // 버튼이 정상적으로 렌더링되었는지 확인
    expect(buttonElement).toBeInTheDocument();

    // 버튼에 'Button' 텍스트가 있는지 확인
    expect(buttonElement).toHaveTextContent("Button");

    // 버튼에 '🎱' 아이콘이 있는지 확인
    expect(buttonElement).toHaveTextContent("🎱");
  });

  it("isDisabled가 true일 때 버튼이 비활성화된다.", () => {
    render(<Button isDisabled={true} />);

    // role이 'button'인 버튼 요소를 찾기
    const buttonElement = screen.getByRole("button");

    // 버튼이 비활성화 상태인지 확인
    expect(buttonElement).toBeDisabled();
  });

  it("isLoading이 true일 때 로딩 상태를 표시한다.", () => {
    // isLoading 속성이 true인 버튼을 렌더링
    render(<Button isLoading={true} />);

    // role이 'button'인 요소를 찾기
    const loadingElement = screen.getByRole("button");

    // 로딩 중일 때 버튼이 비활성화 상태인지 확인
    expect(loadingElement).toBeDisabled();
  });
});

describe("Text Button 컴포넌트 기능 테스트", () => {
  it("텍스트 버튼이 올바르게 렌더링되고, 요소가 div인지 확인한다.", () => {
    render(<TextButtonStory />);

    // '텍스트 버튼입니다.'라는 텍스트가 포함된 요소 찾기
    const buttonElement = screen.getByText("텍스트 버튼입니다.");

    // 요소가 div 태그인지 확인
    expect(buttonElement.tagName.toLowerCase()).toBe("div");

    // 요소에 '텍스트 버튼입니다.'라는 텍스트가 있는지 확인
    expect(buttonElement).toHaveTextContent("텍스트 버튼입니다.");
  });
});

describe("Toggle Button 컴포넌트 기능 테스트", () => {
  it("초기 상태에서 올바른 아이콘과 스타일로 렌더링 된다.", () => {
    render(<ToggleButtonStory />);

    // role이 'button'인 버튼 요소 찾기
    const buttonElement = screen.getByRole("button");

    // 초기 상태에서 '🌝' 아이콘이 보여야 함
    expect(buttonElement).toHaveTextContent("🌝");

    // 초기 상태에서 'outline' 스타일이 적용되어야 함
    expect(buttonElement).toHaveAttribute("variant", "outline");
  });

  it("버튼을 클릭하면 선택 상태로 바뀌고, 올바른 아이콘과 스타일로 변경된다.", async () => {
    render(<ToggleButtonStory />);

    const buttonElement = screen.getByRole("button");

    // 버튼 클릭 시 선택 상태로 변경
    await userEvent.click(buttonElement);

    // 클릭 후 '🌚' 아이콘이 보여야 함
    expect(buttonElement).toHaveTextContent("🌚");

    // 클릭 후 'solid' 스타일이 적용되어야 함
    expect(buttonElement).toHaveAttribute("variant", "solid");
  });

  it("다시 클릭하면 초기 상태로 돌아온다.", async () => {
    render(<ToggleButtonStory />);

    const buttonElement = screen.getByRole("button");

    // 버튼을 두 번 클릭하여 상태 변경 확인
    await userEvent.click(buttonElement);
    await userEvent.click(buttonElement);

    // 다시 '🌝' 아이콘이 보여야 함
    expect(buttonElement).toHaveTextContent("🌝");

    // 다시 'outline' 스타일로 돌아와야 함
    expect(buttonElement).toHaveAttribute("variant", "outline");
  });
});
