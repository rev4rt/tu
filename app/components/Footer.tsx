import React from "react";
import { RevealWrapper } from "next-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/footer/bg3.jpeg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#ffffff00_0%,#e2cdbc_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
        <div className="relative py-8 px-10 w-full">
          <div
            className="bg-[#ffffff21] rounded-br-[1.25rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-sm text-center font-light">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/(i) berkenan hadir dan memberikan doa restu
                kepada kami. Atas kehadiran dan doanya kami mengucapkan
                terimakasih.</p>
               <br />
              <p className="text-sm text-center font-light mt-2 mb-4">وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
            </RevealWrapper>
          </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 text-[#424242] p-6 z-10 relative">
            <br />
            <br />
            <RevealWrapper duration={1500} origin="bottom">
              <h1 className="text-4xl font-light mt-2">Akhmad Muhtarom<br />&<br />Ulin Nikmah</h1>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <div className="bg-[#e2cdbc] p-20 flex items-center justify-center">
      <a href="#"><img src="/images/footer/logo-final.png" alt="logo" className="w-24" /></a>
      </div>
    </section>
  );
}

export default Footer;
