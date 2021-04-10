import React from 'react'
import {Title, Repositories} from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
    <Title>Listagem</Title>
      <Repositories>
        <a href="rodrigo">
          <div>
            <strong>Rodrigo Rodrigues</strong>
            <p>Clique para acessar suas informações.</p>
          </div>
        </a>

        <a href="fernanda">
          <div>
            <strong>Fernanda da Silva</strong>
            <p>Clique para acessar suas informações.</p>
          </div>
        </a>

        <a href="ricardo">
          <div>
            <strong>Ricardo Vinhas</strong>
            <p>Clique para acessar suas informações.</p>
          </div>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard