const genreTranslations: Record<string, string> = {
  Fantasy: "판타지",
  "Science Fiction": "SF",
  Romance: "로맨스",
  Mystery: "추리",
  Thriller: "스릴러",
  Horror: "공포",
  "Historical Fiction": "역사",
  Adventure: "모험",
  Drama: "드라마",
  Comedy: "코미디",
};

export const translateGenre = (englishGenre: string): string => {
  return genreTranslations[englishGenre] || "Unknown Genre"; // 매칭되지 않을 경우 기본 값 반환
};
