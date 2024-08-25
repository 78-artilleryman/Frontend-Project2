"use client";

import React, { useState } from "react";
import { useFetchNovelSliderQuery } from "../queries/novelQuery";
import NovelBox from "./NovelBox";
import SlideControlButton from "./SlideControlButton";

function NovelListSlider() {
  const { data: noveSliderlList } = useFetchNovelSliderQuery({ sort: "updatedAt", page: 1, limit: 8 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideWidth = 10;

  const totalSlides = noveSliderlList?.novels.length || 0;

  const handleNext = () => {
    if (currentIndex < totalSlides - 1 && noveSliderlList) {
      setCurrentIndex(prevIndex => Math.min(prevIndex + 1, noveSliderlList.novels.length - 1));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div className="w-full relative overflow-hidden rounded-[20px] group">
      <ul
        className="flex gap-8 w-[200%] flex-shrink-0"
        style={{ transform: `translateX(-${currentIndex * slideWidth}%)`, transition: "transform 0.3s ease" }}>
        {noveSliderlList?.novels.map(novel => <NovelBox key={novel.id} {...novel} />)}
      </ul>
      {currentIndex > 0 && <SlideControlButton direction="left" onClick={handlePrev} />}
      {currentIndex < totalSlides - 1 && <SlideControlButton direction="right" onClick={handleNext} />}
    </div>
  );
}

export default NovelListSlider;
