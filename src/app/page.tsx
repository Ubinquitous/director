"use client";

import BottomNavigation from "#/components/BottomNavigation";
import Header from "#/components/Header";
import StoryItem from "#/components/StoryItem";
import React, { useState } from "react";

const Page = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <main className="scrollbar-none mx-auto h-screen max-w-pc-form overflow-x-hidden overflow-y-scroll overscroll-none">
      <Header />
      <div className="w-full h-full flex items-center flex-col gap-4 px-[12px] py-[24px]">
        {isFocus ? (
          <>
            <header className="w-[202px] h-[24px] rounded-[4px] bg-[#D0D0E0] mr-auto" />
            <div className="w-full h-full rounded-[16px] bg-[#D0D0E0]" />
          </>
        ) : (
          <>
            <h1 className=" text-[24px] font-[600] mr-auto">
              안녕하세요!
              <br />
              이야기의 주인공이 되어 보세요.
            </h1>
            {Array.from(Array(10)).map((_, i) => (
              <StoryItem key={i} id={i} />
            ))}
          </>
        )}
      </div>
      <BottomNavigation setIsFocus={setIsFocus} />
    </main>
  );
};

export default Page;
