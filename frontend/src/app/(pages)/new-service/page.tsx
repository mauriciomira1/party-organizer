import NewServiceForm from "@/components/NewServiceForm/NewServiceForm";

const NewService = () => {
  return (
    <div className="flex flex-col w-full items-center mt-10 px-3">
      <h1 className="text-2xl font-semibold text-purple-950">
        Crie um novo serviço para adicionar às festas.
      </h1>

      <NewServiceForm />
    </div>
  );
};

export default NewService;
