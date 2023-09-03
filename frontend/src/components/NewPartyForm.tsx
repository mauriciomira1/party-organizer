const NewPartyForm = () => {
  return (
    <form action="" method="post" className="flex flex-col gap-2 w-3/5">
      <label htmlFor="title">Nome da festa</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="author">Responsável</label>
      <input type="text" name="author" id="author" />
      <label htmlFor="description">
        Descreva seu evento em poucas palavras
      </label>
      <textarea
        name="description"
        id="description"
        cols={30}
        rows={10}
      ></textarea>
      <label htmlFor="budget">Quer gastar quanto?</label>
      <input type="number" name="budget" id="budget" />
      <label htmlFor="image">URL para imagem de capa</label>
      <input type="text" name="image" id="image" />
    </form>
  );
};

export default NewPartyForm;
