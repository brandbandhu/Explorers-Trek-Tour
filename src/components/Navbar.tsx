import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programDirectory } from "@/data/siteData";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Treks",
    href: "/treks",
    children: [
      { label: "Monsoon Treks", href: "/treks" },
      { label: "Winter Treks", href: "/treks" },
      { label: "Summer Treks", href: "/treks" },
      { label: "Himalayan Treks", href: "/treks?type=Himalayan+Trek" },
      { label: "Treks at Glance Calendar", href: "/treks" },
    ],
  },
  {
    label: "Tours",
    href: "/programs/group-tours",
    children: [
      { label: "Group Tours", href: "/programs/group-tours" },
      { label: "Customised Domestic", href: "/programs/customised-packages" },
      { label: "Customised International", href: "/programs/customised-packages" },
      { label: "Corporate Tours", href: "/programs/corporate-tours" },
      { label: "School Tours", href: "/programs/school-tours" },
      { label: "Wildlife Tours", href: "/programs/wildlife-tours" },
    ],
  },
  {
    label: "Speciality Tours",
    href: "/programs/lady-explorers",
    children: programDirectory
      .filter((item) => ["Junior Explorers", "Lady Explorers", "Silver Explorers", "Explorers on Wheels"].includes(item.title))
      .map((item) => ({ label: item.title, href: item.link })),
  },
  { label: "Camping", href: "/treks?type=Camping" },
  { label: "Atlas", href: "/atlas" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="font-heading text-lg font-extrabold tracking-tight sm:text-xl md:text-2xl">
            <span className={scrolled ? "text-primary" : "text-foreground drop-shadow-sm"}>EXPLORERS</span>
          </span>
          <span className={`hidden max-w-40 truncate text-xs font-body sm:block ${scrolled ? "text-muted-foreground" : "text-foreground/70 drop-shadow-sm"}`}>
            The Name of Excellence Since 2001
          </span>
        </Link>

        <div className="hidden xl:flex flex-1 justify-center px-4">
          <div className="flex items-center gap-1 rounded-lg border border-border bg-background/90 px-2 py-1 shadow-sm backdrop-blur">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-md px-3 py-2 text-xs font-heading font-bold text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="rounded-lg px-5">Login</Button>
          </Link>
          <Link to="/login">
            <Button className="rounded-lg px-5 gradient-highlight text-highlight-foreground">Sign Up</Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className={`p-2 rounded-lg border border-border/60 bg-card/80 hover:bg-card transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(92vw,24rem)] p-0">
            <div className="h-full flex flex-col">
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
                <SheetTitle className="text-left font-heading text-xl font-extrabold text-foreground">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.label} className="rounded-lg border border-border/60 bg-background">
                      <Link
                        to={link.href}
                        className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/60"
                      >
                        <span className="font-heading">{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                      {link.children && (
                        <div className="pb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-border">
                <Link to="/login" className="block mb-3">
                  <Button variant="outline" className="w-full rounded-lg">
                    Login / Sign Up
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button className="w-full rounded-lg gradient-highlight font-semibold text-highlight-foreground">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
