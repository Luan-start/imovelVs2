import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Editar(){
    const[rua, setRua]= useState('')
    const[numero, setNumero] = useState('')
    const[bairro, setBairro] = useState('')
    const[cidade, setCidade] = useState('')
    const[estado, setEstado] = useState('')
    const[status, setStatus] = useState('')

    const { idImovel } = useParams()
    
    function salvar(){      
      let obj = {id: idImovel, rua, numero, bairro, cidade, estado, status}
      fetch(`http://localhost:8080/imoveis/${idImovel}`,
      {
        method:'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
      })
      .then(x => alert('Imovel criado com sucesso'))
    }

    useEffect(()=>{
      fetch(`http://localhost:8080/imoveis/${idImovel}`)
      .then(data => data.json())
      .then(response => {
        setRua(response.rua)
        setNumero(response.numero)
        setBairro(response.bairro)
        setCidade(response.cidade)
        setEstado(response.estado)
        setStatus(response.status)
    })
    },[])


    return(
        <div className="container">
            <h2 className="text-center">Editar Imovel: {idImovel} </h2>
            <label className="form-label">Informe Rua</label>
            <input 
              className="form-control" 
              type="text" 
              placeholder="Informe rua"
              value={rua}
              onChange={txt => setRua(txt.target.value)}
            />

            <label className="form-label">Informe numero</label>
            <input 
              className="form-control" 
              type="text" 
              placeholder="Informe numero" 
              value={numero}
              onChange={txt => setNumero(txt.target.value)}
            />

            <label className="form-label">Informe bairro</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe bairro" 
               value={bairro}
               onChange={txt => setBairro(txt.target.value)}
            />

            <label className="form-label">Informe cidade</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe cidade" 
               value={cidade}
               onChange={txt => setCidade(txt.target.value)}
            />
            <label className="form-label">Informe estado</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe estado" 
               value={estado}
               onChange={txt => setEstado(txt.target.value)}
            />
            <label className="form-label">Informe status</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe status" 
               value={bairro}
               onChange={txt => setStatus(txt.target.value)}
            />
            <div className="mt-3 d-flex justify-content-between">
                <button 
                     onClick={salvar}
                     className="btn btn-primary">
                      Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>                                        
        </div>
    )
}