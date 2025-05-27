/*
Validação
*/

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// função de verificação
const schema = yup
  .object({
    /*
    O tipo sempre vem primeiro
    */
    // regras para 'firstname' - string, obrigatório
    firstName: yup.string().required("É Obrigatório"),
    // regras para 'age' - número, positivo, inteiro, obrigatório
    age: yup
      .number()
      .required("É Obrigatório")
      .typeError("deve ser Número")
      .positive("deve ser Positivo")
      .integer("deve ser Inteiro"),
    mass: yup
      .number()
      .nullable()
      .notRequired()
      .typeError("deve ser Número")
      .positive("deve ser Positivo"),
  });

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    /*
    Com a validação, useForm recebe um argumento extra
    */
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input {...register("mass")} />
      <p>{errors.mass?.message}</p>

      <input type="submit" />
    </form>
  );
}
