import React from 'react'

const styel = {
    display: 'flex',
    justifyContent: 'space-around', 
}


export const Perfil = () => {
    return (
        <div className="container  col-md-6 col" >
            <div className="card">
                <div className="card-body" >
                   <div className="text-center">
                    <h2 className="card-title ">Javier Mora</h2>
                        <p> Administrador </p>
                   </div>
                        <div
                        className="mt-3" 
                        style={ styel } >
                            <h5>Horas</h5>
                            <h5>Publicaciones</h5>
                            <h5>Mes</h5>
                        </div>
                        <div style={ styel } className="mt-2" >
                            <p>50</p>
                            <p>10</p>
                            <p>Eneros</p>
                        </div>

                        <h3 className="text-center mt-5" >Datos del perfil</h3>
                        <label> Correo </label>
                        <input className="form-control mb-3" />
                        <label> Correo </label>
                        <input className="form-control mb-3" />
                        <label> Correo </label>
                        <input className="form-control mb-3" />
                        <button className="btn btn-outline-success block" >Guardar</button>                      
                </div>
            </div>
        </div>
    )
}
