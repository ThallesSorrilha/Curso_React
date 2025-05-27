/*
Componentes
*/

/*
* arrow function que abre para um bloco de código,
  que pode ter retorno ou não
* Caso possua retorno é preciso declará-lo
const funcao = () => {...}

* arrow function que abre para um bloco de código com
  retorno implícito 
const funcao = () => (...)
*/

import { useForm } from "react-hook-form"

// Componente estilo react
// ({}) -> recebe props desestruturadas
// => () -> arrow function q retorna .jsx
const Input = ({ name, label, register, ...rest }) => (
  <>
    <label>{label}</label>
    <input id={name} {...register(name)} {...rest}/>
  </>
)

const SelectWithChildren = ({name, label, children, register, ...rest}) => (
  <>
    <label>{label}</label>
    <select id={name} {...register(name)} {...rest}>
        {children}
    </select>
  </>
)

const HookForm4 = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" label="Primeiro Nome" register={register}/>
      <br />
      <SelectWithChildren name="gender" label="Sexo" register={register}>
        <option value="male">Homem</option>
        <option value="female">Mulher</option>
      </SelectWithChildren>
      <br />
      <input type="submit" />
    </form>
  )
}

export default HookForm4;