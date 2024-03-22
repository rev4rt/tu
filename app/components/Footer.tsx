import React from "react";
import { RevealWrapper } from "next-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/footer/bg3.jpeg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
        <div className="flex flex-col items-center text-center gap-4 text-[#4242427A] p-6 z-10 relative">
        <div className="bg-[#e2cdbc21] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-[0.75rem] font-light leading-relaxed">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/(i) berkenan hadir dan memberikan doa restu
                kepada kami. Atas kehadiran dan doanya kami mengucapkan
                terimakasih
              </p>
              <br />
              <p className="text-[0.75rem] font-light leading-relaxed">
                وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                </p>
              </div>
            </RevealWrapper>
          </div>
          </div>
          <div className="bg-[linear-gradient(180deg,#e2cdbc00_00%,#e2cdbc_70%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">
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
