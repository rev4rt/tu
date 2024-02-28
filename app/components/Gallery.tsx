import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";

function Gallery() {
  return (
    <section id="gallery">
      <div className="bg-[url('/images/gallery/bg.jpg')] bg-cover bg-center relative px-8 py-16">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-xl italic font-light text-center text-white">
            SAWER ONLINE
          </h1>
          <div className="flex flex-col items-center text-center gap-4 my-10">
            <img
              src="/images/gallery/quote.jpg"
              alt="quote"
              className="w-[170px] h-[220px] object-cover"
            />
            <RevealWrapper origin="top" duration={1500}>
              <span>
                <FaQuoteRight color="#4242427A" fontSize="1.75rem" />
              </span>
            </RevealWrapper>
            <RevealWrapper origin="top" duration={1500}>
              <p className="text-[0.8rem] font-light leading-loose px-8">
                Kami menerima saweran anda dengan sepenuh hati melalui lumbung berikut.
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper origin="right" duration={1500}>
            <img
              src="/images/gallery/bigGrid1.jpg"
              alt="big-grid"
              className="w-full h-96 object-cover object-bottom"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
