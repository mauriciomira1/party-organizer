"use client";
import { useState } from "react";
import "./styles.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Snackbar from "../Snackbar/Snackbar";

type Inputs = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const NewServiceForm = () => {
  const [btnSending, setBtnSending] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const changeSnackbarState = () => {
    setSnackbarOpen(true);
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 4000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setBtnSending(true);
    // Adicionei um setTimeout para adicionar 1 segundo
    setTimeout(async () => {
      try {
        await fetch("http://localhost:3000/api/services", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);
      }
      setBtnSending(false);
      changeSnackbarState();
    }, 600);
  };

  return (
    <form
      action=""
      method="post"
      className="flex flex-col w-3/5 rounded-lg border border-purple-500 shadow-md py-4 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name">Nome do serviço</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>Esse campo é obrigatório</span>}
      <label htmlFor="description">Descreva o serviço</label>
      <input {...register("description", { required: true })} />
      {errors.description && <span>Esse campo é obrigatório</span>}
      <label htmlFor="price">Valor do serviço</label>
      <input
        type="number"
        {...register("price", { required: true })}
        step={0.01}
      />
      {errors.price && <span>Esse campo é obrigatório</span>}
      <label htmlFor="image">URL para imagem de capa</label>
      <input {...register("image", { required: true })} />
      {errors.image && <span>Esse campo é obrigatório</span>}

      {btnSending ? (
        <button
          type="submit"
          className="w-full bg-green-600 duration-150 py-1 mt-3 rounded text-white mb-1"
        >
          Enviando...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-purple-900 hover:bg-purple-800 duration-150 text-white py-1 mt-3 rounded mb-1"
        >
          Criar
        </button>
      )}
      {snackbarOpen && <Snackbar textToShow="Serviço criado com sucesso!" />}
    </form>
  );
};

export default NewServiceForm;
