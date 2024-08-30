'use client'; // because of ReactJS client side code
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { Button } from "../ui/button"
import { Input } from "../ui//input"
import { Music, Headphones, Coins, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"

export default function LendingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const session = useSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (session.data?.user) {
            setUser(session.data.user)
        }
    }, [session])

    return (
        <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-purple-900 via-indigo-800 to-blue-900 text-white">
            <header className="px-4 lg:px-6 h-16 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Music className="h-6 w-6 text-pink-500" />
                    <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                        Web3Tunes
                    </span>
                </Link>
                <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        How It Works
                    </Link>
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        About
                    </Link>

                    <div>
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
                    </div>
                </nav>
                <Button
                    className="ml-auto md:hidden"
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </header>
            {isMenuOpen && (
                <nav className="flex flex-col items-center gap-4 p-4 bg-purple-900 md:hidden">
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        How It Works
                    </Link>
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        About
                    </Link>
                </nav>
            )}
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none xl:text-8xl/none">
                                    Earn While You <span className="text-pink-500">Create</span> & <span className="text-yellow-500">Listen</span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                                    Welcome to Web3Tunes - The revolutionary music platform where creators and listeners both get rewarded.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600 transition-all duration-300">
                                    Get Started
                                </Button>
                                <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-900">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <Music className="h-12 w-12 text-pink-500" />
                                <h3 className="text-xl font-bold">Creator Rewards</h3>
                                <p className="text-gray-300">Earn tokens for every stream of your music. The more popular your tracks, the more you earn.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-indigo-800 to-blue-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <Headphones className="h-12 w-12 text-yellow-500" />
                                <h3 className="text-xl font-bold">Listener Rewards</h3>
                                <p className="text-gray-300">Get rewarded for discovering and listening to great music. Your ears have value!</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-blue-800 to-purple-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <Coins className="h-12 w-12 text-green-500" />
                                <h3 className="text-xl font-bold">Web3 Integration</h3>
                                <p className="text-gray-300">Utilize blockchain technology for transparent, secure, and instant payments.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-2xl font-bold">1</div>
                                <h3 className="text-xl font-bold">Connect Your Wallet</h3>
                                <p className="text-gray-300">Link your Web3 wallet to start earning and spending tokens on the platform.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-green-500 text-white text-2xl font-bold">2</div>
                                <h3 className="text-xl font-bold">Create or Listen</h3>
                                <p className="text-gray-300">Upload your music as an artist or start listening to earn rewards.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl font-bold">3</div>
                                <h3 className="text-xl font-bold">Earn Rewards</h3>
                                <p className="text-gray-300">Automatically receive tokens based on your activity on the platform.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-900 to-purple-900">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Earning?</h2>
                                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                                    Join Web3Tunes today and revolutionize the way you experience music.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input className="max-w-lg flex-1 bg-white text-black" placeholder="Enter your email" type="email" />
                                    <Button type="submit" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600 transition-all duration-300">
                                        Join Waitlist
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                                <p className="text-xs text-gray-400">
                                    By signing up, you agree to our{" "}
                                    <Link className="underline underline-offset-2 hover:text-pink-500 transition-colors" href="#">
                                        Terms & Conditions
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
                <p className="text-xs text-gray-400">© 2023 Web3Tunes. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-pink-500 transition-colors" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-pink-500 transition-colors" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}