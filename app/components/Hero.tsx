"use client";
import React from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import useSound from "use-sound";
import { RevealWrapper } from "next-reveal";

function Hero({
  setCurrentOverflow,
}: {
  setCurrentOverflow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [play] = useSound("/audio/w.mp3", {
    volume: 0.25,
  });

  return (
    <section id="hero">
      <div className="min-h-screen bg-[url('/images/hero/bg.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="flex flex-col justify-between py-28 px-12 text-center z-20 relative h-screen">
          <div>
            <p className="font-extralight text-[0.75rem]">The Wedding of</p>
            <h1 className="text-4xl font-light mt-2">Akhmad Muhtarom<br />&<br />Ulin Nikmah</h1>
            <p className="font-extralight text-[0.8rem] mt-4">
              Sunday, 21 April 2024
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[0.8rem]">Kepada Bapak/Ibu/Saudara/(i)</p>
            <p className="text-[0.8rem]">Di Tempat</p>
            <RevealWrapper duration={4000} origin="bottom">
              <a href="#countdown"
                onClick={() => {
                  setCurrentOverflow("auto");
                  play();
                }}
                className="font-bold text-sm bg-[#e2cdbc36] border border-[#bdb08f8c] rounded-lg flex items-center gap-2 px-6 py-3 mt-6 hover:scale-90 ease-linear duration-[0.2s]"
              >
                <RxEnvelopeOpen />
                <span>Buka Undangan</span>
              </a>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
