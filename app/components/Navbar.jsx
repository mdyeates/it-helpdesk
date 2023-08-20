import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import LogoutBtn from "./LogoutBtn";

const Navbar = ({ user }) => {
  return (
    <nav>
      <Image src={Logo} alt="Helpdesk logo" width={70} quality={100} placeholder="blur" />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello {user.email}</span>}
      <LogoutBtn />
    </nav>
  );
};

export default Navbar;
