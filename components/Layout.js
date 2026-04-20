import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, navbarProps }) {
  return (
    <>
      <Navbar {...navbarProps} />
      {children}
      <Footer />
    </>
  );
}