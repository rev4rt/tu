import "./globals.css";
import { Merriweather } from "next/font/google";
import { fromImage } from 'imtool';

async function demo() {
    const tool = await fromImage('image.png');
    await tool.thumbnail(250, false).toDataURL();
}

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Akhmad Muhtarom & Ulin Nikmah - Wedding Invitation",
  description: "Undangan Pernikahan Akhmad Muhtarom & Ulin Nikmah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${merriweather.className} bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
