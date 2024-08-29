'use client'; // because of ReactJS client side code
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';

function Navbar() {
    const session = useSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (session.data?.user) {
            setUser(session.data.user)
        }
    }, [session])

    // console.log(user)

    return (
        <nav className='container mx-auto flex justify-between p-3'>
            <p>MusicEarn</p>
            {
                session.data?.user ? (
                    <button className='bg-green-500 p-2 rounded-full font-bold'
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <button className='bg-green-500 p-2 rounded-full font-bold'
                            onClick={() => signIn()}
                        >
                            Login With Google
                        </button>
                    </>
                )
            }
        </nav >
    )
}

export default Navbar