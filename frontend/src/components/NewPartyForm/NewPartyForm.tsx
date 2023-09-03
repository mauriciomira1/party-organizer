import "./styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  title: string;
  author: string;
  description: string;
  budget: number;
  image: string;
}

const NewPartyForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      action=""
      method="post"
      className="flex flex-col w-3/5 rounded-lg border border-purple-500 shadow-md py-4 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="title">Nome da festa</label>
      <input {...register("title", { required: true })} />
      <label htmlFor="author">Responsável</label>
      <input {...register("author", { required: true })} />
      <label htmlFor="description">
        Descreva seu evento em poucas palavras
      </label>
      <input {...register("description", { required: true })} />
      <label htmlFor="budget">Quer gastar quanto?</label>
      <input {...register("budget", { required: true })} step={0.01} />
      <label htmlFor="image">URL para imagem de capa</label>
      <input {...register("image", { required: true })} />
      <input
        type="submit"
        className="w-full bg-purple-900 hover:bg-purple-800 duration-150 text-white py-1 mt-3 rounded mb-1"
      >
        Criar
      </input>
    </form>
  );
};

export default NewPartyForm;
