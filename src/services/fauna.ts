import {Ceil, Client} from 'faunadb'

// para ter acesso ao banco de dados
export const fauna = new Client({
    secret:process.env.FAUNADB_KEY
})

