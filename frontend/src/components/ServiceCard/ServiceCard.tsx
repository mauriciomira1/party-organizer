"use client";
import Image from "next/image";
/* import { useRouter } from "next/navigation"; */
import { useEffect, useState } from "react";
import Snackbar from "../Snackbar/Snackbar";

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  _id: string;
  existsOnThisParty?: boolean;
}

interface PartyProps {
  _id: number;
  title: string;
  author: string;
  description: string;
  budget: number;
  image: string;
  services: ServiceCardProps[];
}

const ServiceCard = ({ partyId }: { partyId: string }) => {
  /*   const router = useRouter();
   */ const [services, setServices] = useState<ServiceCardProps[]>([]);
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Adicionando um serviço na Festa
  const addService = async (service: ServiceCardProps) => {
    if (partyId) {
      const response = await fetch(
        `http://localhost:3000/api/parties/${partyId}`,
        {
          method: "GET",
        }
      );
      const party = await response.json();
      const updatedServices = [...party.services, service];
      await fetch(`http://localhost:3000/api/parties/${partyId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ services: updatedServices }),
      });
    }
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  // Obtendo array de serviços
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/services", {
        method: "GET",
      });
      const servicesList: ServiceCardProps[] = await response.json();
      /* servicesList.pu */
      /*       setServices(servicesList); */

      // Verificando se o serviço já existe na festa
      const verifyService = async () => {
        const response = await fetch(
          `http://localhost:3000/api/parties/${partyId}`,
          {
            method: "GET",
          }
        );
        const party: PartyProps = await response.json();

        servicesList.some((service) => {
          const include = party.services.some(
            (partyService) => partyService._id === service._id
          );
          if (include) service.existsOnThisParty = true;
        });
        setServices(servicesList);
      };

      verifyService();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex gap-2 py-8 flex-wrap">
        {services.map((service) => (
          <section
            className="p-2 rounded border border-purple-300 shadow-md flex flex-col h-80"
            key={service._id}
          >
            <div className="h-3/4 rounded w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                width={260}
                height={260}
              />
            </div>
            <div className="flex flex-col items-center mt-2">
              <h2 className="font-semibold ">{service.name}</h2>
              <p className="italic text-xs">{service.description}</p>
              <p className="text-sm py-1">R$ {service.price}</p>
              {service.existsOnThisParty ? (
                <button className="bg-red-600 hover:bg-red-500 duration-150 px-4 py-1 rounded text-white mb-2">
                  Remover
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:bg-green-600 duration-150 px-4 py-1 rounded text-white mb-2"
                  onClick={() => addService(service)}
                >
                  Adicionar
                </button>
              )}
            </div>
          </section>
        ))}
      </div>
      {showSnackbar && <Snackbar textToShow="Serviço adicionado!" />}
    </>
  );
};

export default ServiceCard;
