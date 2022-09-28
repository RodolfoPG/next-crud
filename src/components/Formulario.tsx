import { useState } from "react";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.mome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
        <Entrada somenteLeitura texto='Código' valor={id}/>
      ) : false}
        <Entrada texto='Nome' valor={nome}/>
        <Entrada texto='Idade' tipo='number' valor={idade}/>
    </div>
  )
}