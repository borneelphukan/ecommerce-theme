import Navbar from "@/components/layout/Navbar";
import ThemeSwitch from "@/components/layout/ThemeSwitch";
import CircularProgressBar from "@/components/layout/CircularProgressBar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import Categories from "@/components/Categories";
import Head from "next/head";
import { ReactNode, useState, useEffect } from "react";


interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Head>
        <title>BShop | E-Commerce Template</title>
      </Head>
      {isLoading ? (<Loader />) : (
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          {/* Main content */}
          <main>
            {children}
            <CircularProgressBar />
            <ThemeSwitch />
          </main>

          <footer>
            {/* Footer will go here */}
            <Categories/>
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
