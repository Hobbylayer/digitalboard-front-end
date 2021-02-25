import React from 'react'
import { Link } from 'react-router-dom'

export const CardGrupos = ({ numero, superintendente, auxiliar } ) => {
    return (
      <Link style={{ textDecoration: 'none', color: 'black' }} to={`/app/grupos/${ numero }`} > 
        <div className="card" >
            <div className="card-body">
                <h3 className="text-center" >{ numero }</h3>
                <p> <strong>Superintendente</strong> {superintendente}</p>
                <p> <strong>Auxiliar</strong> { auxiliar }</p>
                <p> <strong>Numero de integrantes</strong> 12</p>
            </div>
        </div>
      </Link>
    )
}
