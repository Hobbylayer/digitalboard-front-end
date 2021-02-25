import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NavegacionPublica } from '../../components/NavegacionPublica'
import Contacto from './Contacto'
import { Login } from './Login'
import { Nosotros } from '../Privadas/Nosotros'


export const Home = () => {
    return (
        <div>
            <NavegacionPublica />

                <div className="mt-5" >
                    <Switch>
                        
                        
                            <Route path="/nosotros" component={ Nosotros } />
                            <Route path="/contacto" component={ Contacto } />
                            <Route path="/login" component={ Login } />

                            <Redirect to="/nosotros" />

                    </Switch>
                </div>


        </div>
    )
}
