import "./estilos.css";

// precisa ter instalado anteriormente com 'npm install react-hook-form'
// useForm -> pacote que permite usar as funções de formulários hook
import { useForm } from "react-hook-form";

/*
function Nome() {}
const Nome = () => {}
*/
function HookFormGetStarted() {
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

}

export default HookFormGetStarted;
