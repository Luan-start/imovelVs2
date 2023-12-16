import { useEffect, useState } from "react"
import Card from "./card"

export default function Consulta() {
    const [imoveis, setImoveis] = useState([])

    function consultar() {
        fetch('http://localhost:8080/imoveis')
            .then(data => data.json())
            .then(response => setImoveis(response))
    }

    useEffect(consultar, [])
    return (
        
        <div>
            <div className="d-flex flex-wrap">
                {
                    imoveis.map(im => <Card imoveis={im} />)
                }
            </div>

        </div>
    )
}