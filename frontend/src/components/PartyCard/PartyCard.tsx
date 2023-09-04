"use client";
import Image from "next/image";
import Link from "next/link";

interface PartyCardProps {
  title: string;
  author: string;
  image: string;
  budget: number;
  id: number;
}

const PartyCard = ({ title, author, image, budget, id }: PartyCardProps) => {
  return (
    <section className="p-2 rounded border border-purple-300 shadow-md flex flex-col h-80">
      <div className="h-3/4 rounded w-full overflow-hidden">
        <Image src={image} alt={title} width={260} height={260} />
      </div>
      <div className="flex flex-col items-center mt-2">
        <h2 className="font-semibold ">{title}</h2>
        <p className="italic text-xs">Responsável: {author}</p>
        <p className="text-sm py-1">Orçamento: {budget}</p>
        <Link
          href={`http://localhost:3001/parties/${id}`}
          className="bg-purple-800 hover:bg-purple-600 duration-150 px-4 py-1 rounded text-white mb-2"
        >
          Mais detalhes
        </Link>
      </div>
    </section>
  );
};

export default PartyCard;
