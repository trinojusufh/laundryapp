import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
<body className={`${inter.variable} ${poppins.variable} font-sans`}></body>
export default function Layout({ children, navbarProps }) {
  return (
    <>
      <Navbar {...navbarProps} />
      {children}
      <Footer />
    </>
  );
}