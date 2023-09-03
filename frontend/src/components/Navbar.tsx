"use client";
import Link from "next/link";

const Navbar = () => {
  const linkCSSClass = "text-white hover:text-purple-400 duration-150";

  return (
    <nav className="w-full h-12 flex px-3 bg-purple-950 items-center justify-between">
      <div className="font-bold">
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex gap-5">
        <Link href="/new-party" className={linkCSSClass}>
          Criar Festa
        </Link>
        <Link href="/new-service" className={linkCSSClass}>
          Novo Serviço
        </Link>
        <Link href="/parties" className={linkCSSClass}>
          Minhas festas
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
