/*
Básico: entradas, register, watch, submissão,
*/

//import "./estilo.css";

// precisa ter instalado anteriormente com 'npm install react-hook-form'
// useForm -> pacote que permite usar as funções de formulários hook
import { useForm } from "react-hook-form";

/*
function Nome() {}
const Nome = () => {}
*/
function HookForm2() {
  /*
  Desestruturação do objeto, extraindo propriedades
  'useForm()' retorna um objeto
  São criadas variáveis dos seguintes tipos: ...
  O valor pode mudar, mas não é possível redeclarar
  */
  const {
    register, // conecta os 'inputs' ao hook form
    handleSubmit, // ação antes do envio do formulário
    watch, // observa valores em tempo real
    formState: { errors }, // 'errors' de validação extraídos de 'formState'
  } = useForm();

  /*
  Criação da função 'onSubmit' para cadastrar dados no formulário
  Pode ser feito um console.log(), inserção no localStorage, banco de dados, etc.
  */
  const submeter = (data) => {
    console.log(data);
  };
  /*
  Observar mudanças na variável 'example'
  */
  watch("example");

  return (
    /*
    Antes de enviar os dados do formulário para submissão
    é preciso tratá-los -> 'handleSubmit()'
    */
    <form onSubmit={handleSubmit(submeter)} className="myForm">
      <div className="centralize-children">
        {/*
        defaultValue -> valor inicial do input
        register("") -> Relaciona a entrada com um atributo, no caso
        "example" é o atributo
        register("ex") -> retorna um objeto com props (name, onChange)
        ... -> espalha as props do objeto retornado para o imput
        */}
        <input defaultValue="test" {...register("example")} />

        <br />
        {/*
        { required: true } -> passa uma validação
        */}
        <input {...register("exampleRequired", { required: true })} />
        {/*
            Mensagem que é passada caso o campo quebre as regras
        */}
        {errors.exampleRequired && <span>Esse campo é obrigatório</span>}

        <br />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>

      {/*
      Botão de envio
      */}
      <input type="submit" />
    </form>
  );
}

export default HookForm2;
