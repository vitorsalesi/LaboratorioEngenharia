import { useEffect, useState } from "react"


function Letreiro() {

    const [temp, setTemp] = useState('');

    useEffect(() => {

    
    let frase = "Conheça a  FATEC"
    let cont = 0

    let intervalo = setInterval(() => {

        let temp = ""

        for (let i = 0; i < cont; i++) {
            temp += frase[i]
        }
        setTemp(temp)
        cont++

        if (cont > frase.length) {
            clearInterval(intervalo)
        }
    }, 500)
},[])

  return (
    <div >
     <h1>{temp}</h1>
    </div>
  );
}

export default Letreiro;