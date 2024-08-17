import Logo from "#/assets/Logo";
import SubTitle from "#/assets/SubTitle";
import React from "react";

const Landing = () => {
  return (
    <main className="scrollbar-none mx-auto h-screen max-w-pc-form overflow-x-hidden overflow-y-scroll overscroll-none">
      <div className="w-full h-full flex items-center justify-center flex-col gap-4">
        <Logo />
        <SubTitle />
      </div>
    </main>
  );
};

export default Landing;
