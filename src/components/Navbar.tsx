import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A1A1A] shadow-lg py-3"
          : "bg-gradient-to-b from-black/70 to-transparent py-5"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-white hover:text-[#C09F5F] transition-colors"
            style={{ fontWeight: "700", fontSize: "1.5rem" }}
          >
            حامد بندق
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#C09F5F] transition-colors"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("qualifications")}
              className="text-white hover:text-[#C09F5F] transition-colors"
            >
              المؤهلات
            </button>
            <button
              onClick={() => scrollToSection("initiatives")}
              className="text-white hover:text-[#C09F5F] transition-colors"
            >
              المبادرات
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-white hover:text-[#C09F5F] transition-colors"
            >
              البرنامج
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#CE1126] hover:bg-[#A00E1E] text-white"
              size="sm"
            >
              انضم للحملة
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-[#1A1A1A] rounded-lg p-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-right text-white hover:text-[#C09F5F] transition-colors py-2"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("qualifications")}
              className="block w-full text-right text-white hover:text-[#C09F5F] transition-colors py-2"
            >
              المؤهلات
            </button>
            <button
              onClick={() => scrollToSection("initiatives")}
              className="block w-full text-right text-white hover:text-[#C09F5F] transition-colors py-2"
            >
              المبادرات
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="block w-full text-right text-white hover:text-[#C09F5F] transition-colors py-2"
            >
              البرنامج
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#CE1126] hover:bg-[#A00E1E] text-white"
            >
              انضم للحملة
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
