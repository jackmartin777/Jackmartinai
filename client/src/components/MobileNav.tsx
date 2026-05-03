import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "AI & Automation", href: "#ai" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Limited Offer", href: "#limited-offer" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-[#0e1422] rounded transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} className="text-[#d8dce4]" />
        ) : (
          <Menu size={24} className="text-[#d8dce4]" />
        )}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#010b1c]/95 backdrop-blur-md border-b border-[#2d6ca6]/10 py-4 px-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-[family-name:var(--font-heading)] text-[12px] font-medium uppercase tracking-[0.12em] text-[#6b7080] hover:text-[#fb7103] transition-colors py-2 px-3 rounded hover:bg-[#0e1422]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
