import { useRef, useState } from "react"

export const Valores = () => {
    const [resultado, setResultado] = useState(0)
    let input1 = useRef()
    let input2 = useRef()

    return <>
        <input ref={input1} type="number" placeholder="Inngrese un valor" />
        <h4>+</h4>
        <input ref={input2} type="number" placeholder="Inngrese un valor" />
        <h4>=</h4>
        <button onClick={() => { setResultado(input1.current.valueAsNumber + input2.current.valueAsNumber) }} >Sumar</button>
        <h4>Resultado: {resultado} </h4>
    </>
}