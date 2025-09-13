import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Link href="/" className="logo">
          <Image
            src="/images/logo/kivaro-logo.svg"
            alt="Logo"
            width={176}
            height={78}
            priority
          />
        </Link>
      </div>

      <div>
        <p>
          Copyright © <span id="year"></span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
