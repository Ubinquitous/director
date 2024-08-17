import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StoryItemProps {
  id: number;
}

const StoryItem = ({ id }: StoryItemProps) => {
  return (
    <Link
      href={`/story/${id}`}
      className="w-full bg-white p-[16px] flex items-center rounded-[12px] gap-[12px] hover:bg-[#E3E3EE]"
    >
      <Image
        src="/mock.png"
        width={72}
        height={72}
        className="rounded-[12px] w-[72px] h-[72px]"
        alt="story image"
      />
      <hgroup>
        <h1 className="font-[600] text-[20px]">내가 만약 히어로가 된다면</h1>
        <p className="line-clamp-2 overflow-hidden text-ellipsis font-[500] text-[14px] text-[#494957]">
          만약 당신이 히어로가 된다면, 당신의 삶은 한층 더 특별해질 것입니다.
          사람들의 안전을 지키고, 어려움에 처한 이들을 도우며, 불의를 바로잡는
          데 앞장서겠죠. 하지만, 단순히 능력이 생기는 것만으로 히어로가 되는
          것은 아닙니다. 히어로가 된다는 것은 그에 걸맞는 책임과 용기를 갖추어야
          한다는 뜻이기도 합니다.
        </p>
      </hgroup>
    </Link>
  );
};

export default StoryItem;
