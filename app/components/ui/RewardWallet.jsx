'use client';
import { useState } from 'react'
import { Button } from "./button"
import { Input } from "./input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Label } from "./label"
import { Music, Wallet, ArrowUpRight, ArrowDownLeft, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"
import Footer from "./Footer"

export default function RewardWallet() {
    const [sendAmount, setSendAmount] = useState('')
    const [sendAddress, setSendAddress] = useState('')

    const handleSend = () => {
        // Implement send logic here
        console.log(`Sending ${sendAmount} TUNE to ${sendAddress}`)
    }

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
                    <Link className="text-sm font-medium hover:text-pink-500 transition-colors" href="/profile">
                        Profile
                    </Link>
                </nav>
            </header>
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold mb-6">Your Wallet</h1>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <Card className="bg-gradient-to-br from-purple-800 to-indigo-900 border-none">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">TUNE Balance</CardTitle>
                                <CardDescription className="text-gray-300">Your current token balance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-4xl font-bold">35,750</p>
                                        <p className="text-sm text-gray-300">≈ $3,575.00 USD</p>
                                    </div>
                                    <Wallet className="h-12 w-12 text-yellow-500" />
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="flex-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600 transition-all duration-300">
                                                Send
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="bg-indigo-900 text-white">
                                            <DialogHeader>
                                                <DialogTitle>Send TUNE</DialogTitle>
                                                <DialogDescription>Enter the amount and recipient address to send TUNE tokens.</DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid gap-2">
                                                    <Label htmlFor="amount">Amount</Label>
                                                    <Input
                                                        id="amount"
                                                        placeholder="Enter TUNE amount"
                                                        type="number"
                                                        value={sendAmount}
                                                        onChange={(e) => setSendAmount(e.target.value)}
                                                    />
                                                </div>
                                                <div className="grid gap-2">
                                                    <Label htmlFor="address">Recipient Address</Label>
                                                    <Input
                                                        id="address"
                                                        placeholder="Enter recipient's wallet address"
                                                        value={sendAddress}
                                                        onChange={(e) => setSendAddress(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <Button onClick={handleSend} className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600 transition-all duration-300">
                                                Send TUNE
                                            </Button>
                                        </DialogContent>
                                    </Dialog>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="flex-1">Receive</Button>
                                        </DialogTrigger>
                                        <DialogContent className="bg-indigo-900 text-white">
                                            <DialogHeader>
                                                <DialogTitle>Receive TUNE</DialogTitle>
                                                <DialogDescription>Share your wallet address to receive TUNE tokens.</DialogDescription>
                                            </DialogHeader>
                                            <div className="flex items-center justify-between p-4 bg-purple-800 rounded-md">
                                                <code className="text-sm">0x1234...5678</code>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Copy className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <Button variant="outline" className="w-full">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                View on Explorer
                                            </Button>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-indigo-800 to-blue-900 border-none">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Quick Stats</CardTitle>
                                <CardDescription className="text-gray-300">Your wallet activity at a glance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-purple-800 p-4 rounded-lg">
                                        <p className="text-sm text-gray-300">Total Earned</p>
                                        <p className="text-2xl font-bold">42,500 TUNE</p>
                                    </div>
                                    <div className="bg-purple-800 p-4 rounded-lg">
                                        <p className="text-sm text-gray-300">Total Spent</p>
                                        <p className="text-2xl font-bold">6,750 TUNE</p>
                                    </div>
                                    <div className="bg-purple-800 p-4 rounded-lg">
                                        <p className="text-sm text-gray-300">This Month</p>
                                        <p className="text-2xl font-bold">+2,500 TUNE</p>
                                    </div>
                                    <div className="bg-purple-800 p-4 rounded-lg">
                                        <p className="text-sm text-gray-300">Transactions</p>
                                        <p className="text-2xl font-bold">153</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="mt-6 bg-gradient-to-br from-purple-800 to-indigo-900 border-none">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Transaction History</CardTitle>
                            <CardDescription className="text-gray-300">Your recent TUNE token transactions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="all" className="w-full">
                                <TabsList className="bg-indigo-900 text-gray-300">
                                    <TabsTrigger value="all" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">All</TabsTrigger>
                                    <TabsTrigger value="sent" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">Sent</TabsTrigger>
                                    <TabsTrigger value="received" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">Received</TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    <div className="space-y-4">
                                        {[
                                            { type: 'received', amount: 250, from: '0xabcd...1234', date: '2023-06-15' },
                                            { type: 'sent', amount: 100, to: '0xefgh...5678', date: '2023-06-14' },
                                            { type: 'received', amount: 500, from: '0xijkl...9012', date: '2023-06-13' },
                                        ].map((transaction, index) => (
                                            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                                                <div className="flex items-center gap-3">
                                                    {transaction.type === 'received' ? (
                                                        <ArrowDownLeft className="h-6 w-6 text-green-500" />
                                                    ) : (
                                                        <ArrowUpRight className="h-6 w-6 text-red-500" />
                                                    )}
                                                    <div>
                                                        <p className="font-medium">{transaction.type === 'received' ? 'Received' : 'Sent'} {transaction.amount} TUNE</p>
                                                        <p className="text-sm text-gray-300">{transaction.type === 'received' ? `From: ${transaction.from}` : `To: ${transaction.to}`}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-300">{transaction.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="sent">
                                    <div className="space-y-4">
                                        {[
                                            { amount: 100, to: '0xefgh...5678', date: '2023-06-14' },
                                        ].map((transaction, index) => (
                                            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                                                <div className="flex items-center gap-3">
                                                    <ArrowUpRight className="h-6 w-6 text-red-500" />
                                                    <div>
                                                        <p className="font-medium">Sent {transaction.amount} TUNE</p>
                                                        <p className="text-sm text-gray-300">To: {transaction.to}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-300">{transaction.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="received">
                                    <div className="space-y-4">
                                        {[
                                            { amount: 250, from: '0xabcd...1234', date: '2023-06-15' },
                                            { amount: 500, from: '0xijkl...9012', date: '2023-06-13' },
                                        ].map((transaction, index) => (
                                            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                                                <div className="flex items-center gap-3">
                                                    <ArrowDownLeft className="h-6 w-6 text-green-500" />
                                                    <div>
                                                        <p className="font-medium">Received {transaction.amount} TUNE</p>
                                                        <p className="text-sm text-gray-300">From: {transaction.from}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-300">{transaction.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    )
}