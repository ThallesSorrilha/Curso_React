import { useState } from "react";
import { useForm } from "react-hook-form";

import "./estilo.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [dados, setDados] = useState("");

  return (
    <>
      <div className="centralize-children">
        <form
          className="myForm centralize-children"
          onSubmit={handleSubmit((dados) => setDados(JSON.stringify(dados)))}
        >
          <h1 className="centralize-children">Cadastro de Currículo</h1>
          <input
            {...register("nome", { required: "true" })}
            placeholder="nome completo"
            type="text"
          />
          {errors.nome && <p className="p-error">Insira o seu nome completo</p>}

          <input
            {...register("email", { required: "true" })}
            placeholder="e-mail"
            type="email"
          />
          {errors.email && <p className="p-error">Insira o seu e-mail</p>}

          <input
            {...register("idade", { required: "true", min: 0, max: 200 })}
            placeholder="idade"
            type="number"
          />
          {errors.idade && <p className="p-error">Insira uma idade válida</p>}

          <select {...register("funcao", { required: "true" })}>
            <option value="">Função</option>
            <option value="agricola">Agrícola</option>
            <option value="caldeira">Caldeireiro</option>
            <option value="motorista">Motorista</option>
          </select>
          {errors.funcao && <p className="p-error">Insira a sua função</p>}

          <textarea
            className="descricao"
            {...register("descricao", { maxLength: 1500 })}
            placeholder="sobre você"
          ></textarea>
          {errors.descricao && (
            <p className="p-error">Insira a sua descrição</p>
          )}

          <input type="submit" />
        </form>
      </div>
      <p className="centralize-children">{dados}</p>
    </>
  );
}

export default Form;
