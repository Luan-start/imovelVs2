import { Link } from "react-router-dom"

export default function Card(props) {
    function excluir(){
    fetch(`http://localhost:8080/imoveis/${props.imovel.id}`,
      {
        method:'DELETE'        
      })
      .then(x => alert('Imovel excluido com sucesso.'))
    }
    return (
        <div className="card mt-3 col-sm-3">
            <img src="https://images.mediago.io/ML/d56383e33c450ea498419ced130c0bdf__scv1__300x157.png" 
            className="card-img-top" alt={props.imovel.nome} />
            <div className="card-body">
                <div>
                    <span className="fw-bold me-1">Rua:</span>
                    <span className="text-danger">{props.imovel.rua}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Numero:</span>
                    <span className="text-danger">{props.imovel.numero}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Bairro:</span>
                    <span className="text-danger">{props.imovel.bairro}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Cidade:</span>
                    <span className="text-danger">{props.imovel.cidade}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Estado:</span>
                    <span className="text-danger">{props.imovel.estado}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Status:</span>
                    <span className="text-danger">{props.imovel.status}</span>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                    <Link to={`/imovel/editar/${props.imovel.id}`}><button className="btn btn-outline-primary">Editar</button></Link>
                    <button 
                      onClick={excluir}
                    className="btn btn-outline-danger" >Excluir</button>
                </div>
            </div>
        </div>
    )
}