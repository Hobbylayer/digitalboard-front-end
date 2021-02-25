import React from 'react'

export const Publicadores = () => {
    return (
        <div className="container" >
            <div className="row" >
                <div className="col-4" >
                    <input className="form-control" />
                    <button className="btn btn-outline-primary" >Buscar</button>
                </div>

                <div className="col-8" >
                    <h2> Resultad de busqueda </h2>
                </div>
            </div>
        </div>
    )
}
