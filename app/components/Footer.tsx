import React from "react";
import { RevealWrapper } from "next-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/gallery/bg2.jpg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#ffffff00_0%,#9C76C2_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">
          <div className="relative py-8 px-10 w-full">
          <div
            className="bg-[#9C76C222] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-sm font-light">WEDDING INVITATION</p>
              <h1 className="text-3xl font-light mt-2 mb-4">Lulu & Farhan</h1>
            </RevealWrapper>
          </div>
         </div>
            <br />
            <br />
            <RevealWrapper duration={1500} origin="bottom">
              <h1 className="text-4xl font-light mt-2">Lulu & Farhan</h1>
            </RevealWrapper>
        </div>
      </div>
      <div className="bg-[#9C76C2] p-20 flex items-center justify-center">
        <img src="/images/footer/lf.png" alt="logo" className="w-24" />
      </div>
    </section>
  );
}

export default Footer;
