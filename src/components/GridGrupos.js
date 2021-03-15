import React from 'react';
import { CardGrupos } from './Card/CardGrupos';
import {Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const GridGrupos = ({ data }) => {
    const grupos = data 
    return (
        <Container>
            <Row>
                {
                    grupos.map( grupo  => (
                    <div
                    key={ grupo }
                    className="mb-5 col-4" >
                        <CardGrupos
                        { ...grupo }
                        />
                    </div>
                    ))
                }
            </Row>
        </Container>
    )
}

GridGrupos.propTypes = {
    data: PropTypes.array.isRequired
}
