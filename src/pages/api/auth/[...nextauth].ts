import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';


export default NextAuth({
    // configurand uma rota de autheticação
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope:'read:user'
        }),
        // adicionando o Providers aqui 

    ],
})
