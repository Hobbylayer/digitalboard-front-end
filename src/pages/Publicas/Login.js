import React from 'react'

export const Login = () => {
    return (
        <div>
           
            <div className="row" style={{ display: 'flex', justifyContent: "center" }}  >
                <div className="col-3">
                    <fom >
                        <h2 className="mb-5" >Iniciar Sesión </h2>
                        <input
                        className="form-control mb-3"
                        placeholder="Usuario"
                        type="text"
                        />
                        <input
                        className="form-control mb-3"
                        placeholder="Clave"
                        type="password"
                        />
                        <button
                        className="btn btn-primary"
                        type="submit"
                        > Entrar </button>
                    </fom>
                </div>
            </div>


        </div>
    )
}
