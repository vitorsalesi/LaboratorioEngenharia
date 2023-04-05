import { useEffect, useState } from "react"


function Relogio() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const intervalo = setInterval(() => {

            setTime(new Date())

        }, 1000)

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div >
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Relogio;
