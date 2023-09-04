"use client";
import Link from "next/link";

const Navbar = () => {
  const linkCSSClass = "text-white hover:text-purple-400 duration-150 text-sm";

  return (
    <nav className="w-full h-12 flex px-3 bg-purple-950 items-center justify-between">
      <div className="font-bold text-white">
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex gap-5 mr-2">
        <Link href="/parties" className={linkCSSClass}>
          Minhas festas
        </Link>
        <Link href="/new-party" className={linkCSSClass}>
          Criar Festa
        </Link>
        <Link href="/new-service" className={linkCSSClass}>
          Criar Serviço
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
