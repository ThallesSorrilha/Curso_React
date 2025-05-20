import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
            {...register("nome", {
              maxLength: 100,
              required: "nome é obrigatório, deve ter até 100 letras",
            })}
            placeholder="nome completo"
            type="text"
          />
          <ErrorMessage
            errors={errors}
            name="nome"
            render={({ message }) => <p className="p-error">{message} </p>}
          />

          <input
            {...register("email", {
              maxLength: 100,
              required:
                "e-mail é obrigatório; deve conter @; até 100 caracteres",
            })}
            placeholder="e-mail"
            type="email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="p-error">{message} </p>}
          />

          <input
            {...register("idade", {
              required: "idade é obrigatória; deve ser entre 0 e 200",
              min: 0,
              max: 200,
            })}
            placeholder="idade"
            type="number"
          />
          <ErrorMessage
            errors={errors}
            name="idade"
            render={({ message }) => <p className="p-error">{message} </p>}
          />

          <select {...register("funcao", { required: "função é obrigatória" })}>
            <option value="">Função</option>
            <option value="agricola">Agrícola</option>
            <option value="caldeira">Caldeireiro</option>
            <option value="motorista">Motorista</option>
          </select>
          <ErrorMessage
            errors={errors}
            name="funcao"
            render={({ message }) => <p className="p-error">{message} </p>}
          />

          <textarea
            className="descricao"
            {...register("descricao", {
              maxLength: 1500,
              required: "Descrição não pode ter mais de 1500 caracteres",
            })}
            placeholder="sobre você"
          ></textarea>
          <ErrorMessage
            errors={errors}
            name="descricao"
            render={({ message }) => <p className="p-error">{message} </p>}
          />

          <input type="submit" />
        </form>
      </div>
      <p className="centralize-children">{dados}</p>
    </>
  );
}

export default Form;
