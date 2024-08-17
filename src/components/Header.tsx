import GoBackIcon from "#/assets/GoBackIcon";
import Logo from "#/assets/Logo";
import SettingIcon from "#/assets/SettingIcon";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
  isHadGoBack?: boolean;
}

const Header = ({ isHadGoBack }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className="w-full h-[64px] flex items-center justify-between px-[16px] py-[18px] bg-white border-solid border-b-1 border-[#8B8B9F] ">
      {isHadGoBack ? (
        <GoBackIcon onClick={() => router.back()} />
      ) : (
        <Logo width={80} height={28} />
      )}
      <SettingIcon />
    </header>
  );
};

export default Header;
