/* eslint-disable import/no-anonymous-default-export */
import {NextApiRequest, NextApiResponse} from 'next'
import { type } from 'os'

type Data = {
    name: string
}
//request todos os dado da requisao 

//response: qual é a responsa 

// novo jeito de criar rota doc next 11
export default function handler(
    response:NextApiResponse,
    request:NextApiRequest
): void{
    const users = [
        {id:1, name:'Pedro Poeira'},
        {id:2, name:'Pedro Poeira'},
        {id:2, name:'Pedro Poeira'},
    ]
    return response.status(200).json(users)
}

