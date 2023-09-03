"use client";
import Link from "next/link";

const Navbar = () => {
  const linkCSSClass =
    "text-white hover:text-purple-400 duration-1 rounded px-2 py-1";

  return (
    <nav className="w-full h-12 flex gap-7 px-3 bg-purple-950 items-center justify-between">
      <div className="font-bold">LOGO</div>
      <div>
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
