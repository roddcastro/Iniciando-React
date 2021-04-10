import styled from 'styled-components'
import {shade} from 'polished'

export const Title = styled.h1`
  font-size: 50px;
  line-height: 60px;
  margin-top: 50px;
`

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 500px;

  a{
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;
    align-items: center;
    transition: 0.2s;

    & + a{
      margin-top: 15px;
    }

    &:hover{
      transform: translateX(10px);
    }
  }

  div{
    margin-left: 15px;

    strong{
      font-size: 20px;
    }

    p{
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`