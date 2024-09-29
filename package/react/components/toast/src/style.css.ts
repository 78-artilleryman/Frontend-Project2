import { keyframes, style } from "@vanilla-extract/css";

// 애니메이션 정의
const slideUp = keyframes({
  "0%": {
    transform: "translateY(100%) scale(0.9)", // 아래 + 작게 시작
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0) scale(1)", // 위로 + 원래 크기
    opacity: 1,
  },
});

const slideDownKeyframes = keyframes({
  "0%": {
    transform: "translateY(0) scale(1)", // 처음 상태 (위치 0, 크기 100%)
    opacity: 1, // 처음에는 완전히 보임
  },
  "30%": {
    transform: "translateY(20%) scale(0.98)", // 조금 내려가고 살짝 작아짐
    opacity: 0.9, // 약간 투명해짐
  },
  "60%": {
    transform: "translateY(60%) scale(0.95)", // 더 내려가고 크기가 조금 더 작아짐
    opacity: 0.5, // 점점 더 투명해짐
  },
  "100%": {
    transform: "translateY(100%) scale(0.9)", // 최종적으로 아래로 이동하고 더 작아짐
    opacity: 0, // 완전히 사라짐
  },
});

export const toastContainerStyle = style({
  position: "fixed",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  pointerEvents: "none",
  padding: "0.5rem",
  left: 0,
  bottom: 0,
  zIndex: 99999,
});

export const toastStyle = style({
  width: "100%",
  maxWidth: "17.5rem",
  backgroundColor: "var(--gray-900)",
  padding: "0.5rem 0.75rem",
  color: "var(--gray-50)",
  borderRadius: "var(--radii-md)",
  textAlign: "center",
  animation: `${slideUp} 0.3s ease-out`,
});

export const slideDown = style({
  backgroundColor: "var(--gray-900)",
  animation: `${slideDownKeyframes} 0.3s ease-in forwards`,
  borderRadius: "var(--radii-md)",
  padding: "0.5rem 0.75rem",
});
