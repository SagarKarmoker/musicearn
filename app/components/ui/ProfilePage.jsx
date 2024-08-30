'use client';
import { useState } from 'react'
import { Button } from "../ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Music, Headphones, Coins, Share2, Edit, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import Footer from "./Footer"

export default function ProfilePage() {
    const [isFollowing, setIsFollowing] = useState(false)

    return (
        <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-purple-900 via-indigo-800 to-blue-900 text-white">
            <header className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Music className="h-6 w-6 text-pink-500" />
                    <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                        Web3Tunes
                    </span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        Discover
                    </Link>
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="#">
                        Library
                    </Link>
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="profile/wallet">
                        Rewards
                    </Link>
                </nav>
            </header>
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <Card className="bg-gradient-to-br from-purple-800 to-indigo-900 border-none">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile picture" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <CardTitle className="text-2xl font-bold mt-4">John Doe</CardTitle>
                                    <CardDescription className="text-gray-300">@johndoe</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between mb-4">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold">1.2K</p>
                                            <p className="text-sm text-gray-300">Followers</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold">3.5K</p>
                                            <p className="text-sm text-gray-300">Listeners</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold">15</p>
                                            <p className="text-sm text-gray-300">Tracks</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button className="flex-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600 transition-all duration-300" onClick={() => setIsFollowing(!isFollowing)}>
                                            {isFollowing ? 'Unfollow' : 'Follow'}
                                        </Button>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="mt-4 bg-gradient-to-br from-indigo-800 to-blue-900 border-none">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">Earnings</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-gray-300">This Month</p>
                                        <p className="text-2xl font-bold">2,500 <span className="text-sm text-gray-300">TUNE</span></p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-300">All Time</p>
                                        <p className="text-2xl font-bold">35,750 <span className="text-sm text-gray-300">TUNE</span></p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="md:w-2/3">
                            <Tabs defaultValue="tracks" className="w-full">
                                <TabsList className="bg-indigo-900 text-gray-300">
                                    <TabsTrigger value="tracks" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">Tracks</TabsTrigger>
                                    <TabsTrigger value="albums" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">Albums</TabsTrigger>
                                    <TabsTrigger value="playlists" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">Playlists</TabsTrigger>
                                </TabsList>
                                <TabsContent value="tracks">
                                    <Card className="bg-gradient-to-br from-purple-800 to-indigo-900 border-none">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">Top Tracks</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            {[1, 2, 3, 4, 5].map((track) => (
                                                <div key={track} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                                                    <div className="flex items-center gap-3">
                                                        <Music className="h-6 w-6 text-pink-500" />
                                                        <div>
                                                            <p className="font-medium">Track {track}</p>
                                                            <p className="text-sm text-gray-300">3:45</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Headphones className="h-4 w-4 text-gray-300" />
                                                        <span className="text-sm text-gray-300">1.2K</span>
                                                        <Coins className="h-4 w-4 text-yellow-500 ml-2" />
                                                        <span className="text-sm text-gray-300">250 TUNE</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="albums">
                                    <Card className="bg-gradient-to-br from-purple-800 to-indigo-900 border-none">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">Albums</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-300">No albums released yet.</p>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="playlists">
                                    <Card className="bg-gradient-to-br from-purple-800 to-indigo-900 border-none">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">Playlists</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-300">No playlists created yet.</p>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}