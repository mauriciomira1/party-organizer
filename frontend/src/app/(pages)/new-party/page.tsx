import NewPartyForm from "@/components/NewPartyForm/NewPartyForm";

const page = () => {
  return (
    <div className="flex flex-col w-full items-center mt-10 px-3">
      <h1 className="text-2xl font-semibold text-purple-950">
        Vamos fazer uma festa que cabe no seu orçamento?
      </h1>
      <h2 className="font-light mb-5 italic text-purple-700">
        Crie uma nova festa
      </h2>
      <NewPartyForm />
    </div>
  );
};

export default page;
