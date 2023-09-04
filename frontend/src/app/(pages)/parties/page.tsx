"use client";
import PartyCard from "@/components/PartyCard/PartyCard";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PartiesProps {
  title: string;
  author: string;
  image: string;
  budget: number;
  _id: number;
}

const Parties = () => {
  const [parties, setParties] = useState<PartiesProps[]>([]);
  const getParties = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/parties", {
        method: "GET",
      });

      const arrayParties = await response.json();
      setParties(arrayParties);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getParties();
  }, []);

  return parties.length > 0 ? (
    <div className="flex flex-col items-center justify-center py-6">
      <h1 className="text-4xl text-purple-900">Party Organizer App</h1>
      <h2 className="text-purple-600 mb-6 text-xl mt-2">Bem-vindo</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {parties.map((party) => {
          return (
            <PartyCard
              image={party.image}
              title={party.title}
              author={party.author}
              budget={party.budget}
              key={party._id}
              id={party._id}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl">Você ainda não criou nenhuma festa.</h1>
      <Link
        href="/new-party"
        className="bg-purple-950 hover:bg-purple-800 px-5 py-2 text-white rounded"
      >
        Criar festa
      </Link>
    </div>
  );
};

export default Parties;
