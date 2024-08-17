"use client";

import DrawIcon from "#/assets/DrawIcon";
import BottomNavigation from "#/components/BottomNavigation";
import Header from "#/components/Header";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="scrollbar-none mx-auto h-screen max-w-pc-form overflow-x-hidden overflow-y-scroll overscroll-none">
      <Header isHadGoBack />
      <div className="w-full h-full flex items-center flex-col gap-4 px-[16px] py-[24px]">
        <h1 className=" text-[24px] font-[600] mr-auto">
          내가 만약 히어로가 된다면
        </h1>
        <Image
          src="/mock_big.png"
          alt="image"
          width={9999}
          height={9999}
          className="rounded-[16px] w-full h-auto"
        />
        <div className="flex py-[8px] px-[18px] gap-[8px] items-center rounded-full bg-[#E3E3EE]">
          <DrawIcon />
          <span className="text-[14px] font-[500] text-[#707085]">
            이번 제 27회 앱잼 해커톤에 나와서 우승을 한다는 이야기를 만들어줘
          </span>
        </div>
        <p className="text-[14px] font-[500] text-[#494957] whitespace-pre-wrap">
          {contents}
        </p>
      </div>
      <BottomNavigation placeholder="시나리오 추가 작성하기" />
    </main>
  );
};

const contents = `만약 당신이 히어로가 된다면, 당신의 삶은 한층 더 특별해질 것입니다. 사람들의 안전을 지키고, 어려움에 처한 이들을 도우며, 불의를 바로잡는 데 앞장서겠죠. 하지만, 단순히 능력이 생기는 것만으로 히어로가 되는 것은 아닙니다. 히어로가 된다는 것은 그에 걸맞는 책임과 용기를 갖추어야 한다는 뜻이기도 합니다.
아마도 당신은 자신의 능력을 이용해 사람들에게 영감을 주고, 세상을 더 나은 곳으로 만들기 위해 힘쓸 것입니다. 때로는 힘든 결정도 내려야 하고, 갈등 속에서 정의를 선택해야 할 때도 있을 겁니다. 하지만 그 과정 속에서 진정한 히어로는 자신의 인간적인 면모를 잃지 않으며, 타인에 대한 연민과 공감도 함께 지켜나가는 것이겠죠.
당신이 선택한 히어로의 길은, 자신만의 방식으로 세상에 기여하고, 모든 이들에게 더 나은 미래를 선사하는 멋진 여정이 될 것입니다.`;

export default Page;
