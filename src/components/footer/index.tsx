import { useEffect, useState } from "react";
import FooterLink from "./footer-link";
import FooterService from "./footer-service";

function Footer() {
  const [bgColor, setBgColor] = useState<string>("bg-black");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/dev":
        setBgColor("bg-black");
        break;
    }
  }, []);

  return (
    <div className={`max-w-[1512px] m-auto ${bgColor} w-full`}>
      <FooterService />
      <FooterLink />
    </div>
  );
}

export default Footer;
