import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Treks", "/treks"],
  ["Tours", "/programs/group-tours"],
  ["Speciality Tours", "/programs/lady-explorers"],
  ["Camping", "/treks?type=Camping"],
  ["Atlas", "/atlas"],
  ["Contact", "/contact"],
  ["Mountain Run", "/programs/mountain-run"],
  ["School Tours", "/programs/school-tours"],
  ["Corporate Tours", "/programs/corporate-tours"],
  ["Customised Tour Packages", "/programs/customised-packages"],
];

const footerGroups = [
  {
    title: "Useful Links",
    links: [
      ["How to Book", "/contact"],
      ["Cancellation Policy", "/contact"],
      ["Rules During Event", "/contact"],
      ["Discount Policy", "/contact"],
      ["Privacy Policy", "/contact"],
      ["Work With Us", "/contact"],
      ["Career Opportunities", "/contact"],
      ["Why Explorers", "/about"],
    ],
  },
  {
    title: "Speciality",
    links: [
      ["Upcoming Events", "/treks"],
      ["Junior Explorers", "/programs/junior-explorers"],
      ["Lady Explorers", "/programs/lady-explorers"],
      ["Silver Explorers", "/programs/silver-explorers"],
      ["Jungle Safari", "/programs/wildlife-tours"],
      ["ATLAS Academy", "/atlas"],
    ],
  },
  {
    title: "We Also Offer",
    links: [
      ["School & Educational Tours", "/programs/school-tours"],
      ["Corporate / Team Building Tours", "/programs/corporate-tours"],
      ["Domestic Tours", "/programs/customised-packages"],
      ["International Tours", "/programs/customised-packages"],
      ["Fix Departure Tours", "/programs/group-tours"],
      ["Membership", "/contact"],
    ],
  },
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/explorers_group/", Instagram],
  ["Facebook", "https://www.facebook.com/Explorers.DareToDiscover/", Facebook],
  ["YouTube", "https://www.youtube.com/channel/UC5ffVZUnp2p2Bi6VqNyMRcw", Youtube],
];

const Footer = () => {
  return (
    <footer className="gradient-primary text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,2fr)]">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-heading text-3xl font-extrabold">EXPLORERS</h3>
              <p className="mb-4 text-sm font-semibold text-foreground/75">Since 2001 - The Name of Excellence</p>
              <p className="text-sm leading-relaxed text-foreground/80">
                Trusted by lakhs of explorers for safe treks, camps, tours, school programs, corporate events and customised travel.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <a href="tel:+919850502723" className="flex items-start gap-2 text-foreground/80 hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Treks / Himalaya / Jungle Safari: 9850502723 | 9850506622</span>
              </a>
              <a href="tel:+919850504433" className="flex items-start gap-2 text-foreground/80 hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Tour Packages / Corporate / School: 9850504433 | 9850507733</span>
              </a>
              <a href="https://wa.me/919850504437" className="flex items-start gap-2 text-foreground/80 hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>WhatsApp: 9850504437</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1692+Bhagyadarshan+Building+Shop+No+5+Sadashiv+Peth+Tilak+Road+Pune+411030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-foreground/80 hover:text-foreground"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>1692, Bhagyadarshan Building, Shop No 5, Sadashiv Peth, Tilak Road, Pune 411030</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1692+Bhagyadarshan+Building+Shop+No+5+Sadashiv+Peth+Tilak+Road+Pune+411030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-foreground/10 px-4 py-2 font-heading text-sm font-bold text-foreground transition-colors hover:bg-foreground/20"
              >
                Google Location
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 min-[520px]:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 font-heading text-lg font-bold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {quickLinks.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="break-words text-foreground/75 transition-colors hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 font-heading text-lg font-bold">{group.title}</h4>
                <ul className="space-y-2 text-sm">
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <Link to={href} className="break-words text-foreground/75 transition-colors hover:text-foreground">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-foreground/65">
            © {new Date().getFullYear()} Explorers Treks & Tours. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(([label, href, Icon]) => (
              <a
                key={label as string}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground/75 transition-colors hover:bg-foreground/20 hover:text-foreground"
                aria-label={label as string}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
