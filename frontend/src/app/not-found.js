import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center h-screen">
      <h1 className="text-4xl">Oops!! Página não encontrada.</h1>
      <Link href="/" className="px-3 py-1 bg-purple-900 hover:bg-purple-800 text-white">Voltar para Início</Link>
    </div>
  );
};

export default NotFound;
