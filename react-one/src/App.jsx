import React from "react"


import Primeiro from './basicos/Primeiro'
import PassarParametro from './basicos/PassarParametro'
import ComFilhos from './basicos/ComFilhos'
import Repeticao from './basicos/Repeticao'
import Condicional from './basicos/Condicional'
import Card from './layout/Card'
import './App.css'

export default (props)=>
    <div className="App">
        <Card 
            titulo="Exercicio A" color="#FF4500" colorBFooter="#FF8C52"> 
            <PassarParametro apresentacao="Bem vindo" nome="Sr João" />     
        </Card>
        
        <Card 
            titulo="Exercicio B" color="#00FF7F" colorBFooter="#90EE90">
            <Primeiro />
        </Card>
        
        <Card 
            titulo="Exercicio C" color="#800000" colorBFooter="#8B0000">
            <ComFilhos>
                <ul>
                    <li>Apolo</li>
                    <li>Fabricio</li>
                    <li>Canuto</li>
                </ul>
            </ComFilhos>  
        </Card> 

        <Card titulo="Exercicio D" color="#4682B4">
            <Repeticao />
        </Card>
             
        <Card 
        titulo="Exercicio D" color="#2F4F4F" colorBFooter="#5F9EA0">
            <Condicional numero={10}/>
        </Card>
    </div>
