import React from 'react'
import { CardGrupos } from './CardGrupos'

export const GridGrupos = ({ data }) => {

    const grupos = data 

    return (
        <div className="container" >
        <div className="row">
            
            {
                grupos.map( ( grupo, i ) => (
                <div
                key={ i }
                 className="mb-5 col-4" >
                    <CardGrupos
                        numero={ grupo.Grupo }
                        auxiliar={ grupo.Auxiliar }
                        superintendente={ grupo.Conductor }
                    />
                </div>
                ))
            }
        </div>
        </div>
    )
}
