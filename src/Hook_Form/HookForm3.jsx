/*
Validação básica
*/

/*
required        true false
min             (numerico)
max             (numerico)
minLength       (numerico)
maxLength       (numerico)
pattern
validate
*/

import { useForm } from "react-hook-form";

function HookForm3() {
  const { register, handleSubmit } = useForm();

  /*
  criando função onSubmit, que recebe como parâmetro 'data'
  arrow function
  no caso, pega o parâmetro e usa para printá-lo
  */
  const onSubmit = (data) => console.log(data);

  return (
    // Note que há onSubmit do formulário e o meu onSubmit
    // onSubmit interno do handle é passado como referência, sem parênteses
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("primeiroNome", {required: true, minLength:2, maxLength: 20})} />
        <br />
        <input {...register("idade", {required: true, min:0, max: 200})} />
        <br />
        <input {...register("descrição", {maxLength: 500})} />
        <br />
        <input type="submit" />
    </form>
  );
}

export default HookForm3;
