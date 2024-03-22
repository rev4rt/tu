import React from "react";
import { RevealWrapper } from "next-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/footer/bg3.jpeg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#ffffff00_0%,#e2cdbc_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
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
              <div className="grid grid-cols-2 border-y border-y-white text-center text-[0.75rem] font-light">
                <p className="leading-[1.85] py-2 px-2 border-r border-r-white flex flex-col gap-2">
                  <span>SAVE THE DATE</span>
                  <span>Saturday, 13 April 2024</span>
                </p>
                <p className="py-2 px-2 flex flex-col gap-2">
                  <span>COUNTDOWN</span>
                  <Countdown
                    date={new Date("2024-04-13")}
                    renderer={renderer}
                  />
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <div className="bg-[#e2cdbc] p-20 flex items-center justify-center">
        <img src="/images/footer/logo-final.png" alt="logo" className="w-24" />
      </div>
    </section>
  );
}

export default Footer;
