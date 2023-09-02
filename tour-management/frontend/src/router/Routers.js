import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'

const Routers = () =>{
    return(
        <Routes>
            <Route path='/' element={<Navigate/>}/>
        </Routes>
    )
}

export default Routers;