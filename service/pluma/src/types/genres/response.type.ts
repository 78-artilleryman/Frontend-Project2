// Genre 타입 정의
export interface Genre {
  id: string;
  name: string;
}

// API 응답 타입 정의
export type GenreResponse =
  | Genre[] // 성공적인 응답 (장르 목록)
  | { message: string };
