/*
Manipulando Erros
*/

import { useForm } from "react-hook-form"

export default function HookForm() {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {/*
      É possível chamar um elemento caso ocorra um erro
      {verificação_de_erro && (mensagem_de_erro)}
      */}
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}

      <br />
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}

      <br />
      <input type="submit" />
    </form>
  )
}