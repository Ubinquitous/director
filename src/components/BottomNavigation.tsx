import SearchIcon from "#/assets/SearchIcon";
import React from "react";

interface BottomNavigationProps {
  placeholder?: string;
  setIsFocus?: (bool: boolean) => void;
}

const BottomNavigation = ({
  setIsFocus,
  placeholder,
}: BottomNavigationProps) => {
  return (
    <footer className="w-full fixed bottom-0 h-[80px] rounded-t-[24px] bg-white flex items-center justify-center p-[16px]">
      <div className="bg-[#F1F2F4] rounded-full relative flex items-center gap-2 py-[8px] px-[12px] w-full">
        <SearchIcon />
        <input
          onFocus={() => setIsFocus?.(true)}
          onBlur={() => setIsFocus?.(false)}
          className="text-[14px] text-[#707085] bg-transparent font-[500] w-full outline-none"
          placeholder={placeholder || "시나리오 작성하기"}
        />
      </div>
    </footer>
  );
};

export default BottomNavigation;
