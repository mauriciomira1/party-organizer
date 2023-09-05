"use client";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

interface PartyProps {
  id: number;
  title: string;
  author: string;
  description: string;
  budget: number;
  image: string;
  services: [
    {
      name: string;
    }
  ];
}

const removeParty = async (id: string) => {
  try {
    await fetch(`http://localhost:3000/api/parties/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

const PartyDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [party, setParty] = useState<PartyProps>();

  const getParty = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/parties/${params.id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setParty(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getParty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      {party && (
        <div className="flex flex-col items-center justify-center pt-14 gap-3">
          <Image
            src={party.image}
            alt={party.title}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <h1 className="text-4xl text-purple-950">{party.title}</h1>
          <div className="flex flex-col items-center gap-1">
            <p>
              Responsável pela festa:{" "}
              <span className="font-semibold">{party.author}</span>
            </p>
            <p className="text-sm">{party.description}</p>
            <p>
              Orçamento disponível:{" "}
              <span className="font-semibold">R$ {party.budget}</span>
            </p>
            <div className="flex justify-center w-11/12 flex-wrap gap-1 rounded-sm">
              {party.services.map((service) => {
                return (
                  <p
                    key={service.name}
                    className="border border-purple-300 shadow px-2 rounded"
                  >
                    {service.name}
                  </p>
                );
              })}
            </div>
          </div>
          <button
            className="mt-8 flex justify-center gap-2 items-center rounded border border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-3 py-1 duration-100"
            onClick={() => {
              removeParty(params.id);
              router.push("/parties");
            }}
          >
            <BsFillTrashFill /> Remover Festa
          </button>
          <ServiceCard partyId={params.id} />
        </div>
      )}
    </>
  );
};

export default PartyDetails;
