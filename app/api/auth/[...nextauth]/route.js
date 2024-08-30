import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { prismaCilent } from '../../../lib/db';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        async signIn(params){
            console.log(params)
            if(!params.user.email){
                return false
            }
            try {
                await prismaCilent.user.create({
                    data:{
                        email: params.user.email,
                        provider: "Google",
                    }
                })
            } catch (error) {
                
            }

            return true;
        }
    }
})

export { handler as GET, handler as POST }
