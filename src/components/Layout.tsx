import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import GlobalSearchBar from "./GlobalSearchBar";

interface LayoutProps {
  children: React.ReactNode;
  showGlobalSearch?: boolean;
}

const Layout = ({ children, showGlobalSearch = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {showGlobalSearch && <GlobalSearchBar />}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
