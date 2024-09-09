"use client";

import React, { useState } from "react";
import { useFetchNovelSliderQuery } from "../../queries/novel/novelQuery";
import NovelBox from "./Novel-Box";
import SlideControlButton from "./Novel-Slider-Button";

function NovelSlider() {
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
    <div className="group relative w-full overflow-hidden rounded-[20px]">
      <ul
        className="flex w-[200%] flex-shrink-0 gap-8"
        style={{ transform: `translateX(-${currentIndex * slideWidth}%)`, transition: "transform 0.3s ease" }}>
        {noveSliderlList?.novels.map(novel => (
          <NovelBox key={novel.id}>
            <NovelBox.Cover {...novel}>
              <NovelBox.Option {...novel}>
                <NovelBox.OptionButton controlType="delete" novel={novel} />
                <NovelBox.OptionButton controlType="edit" novel={novel} />
              </NovelBox.Option>
            </NovelBox.Cover>
          </NovelBox>
        ))}
      </ul>
      {currentIndex > 0 && <SlideControlButton direction="left" onClick={handlePrev} />}
      {currentIndex < totalSlides - 1 && <SlideControlButton direction="right" onClick={handleNext} />}
    </div>
  );
}

export default NovelSlider;
