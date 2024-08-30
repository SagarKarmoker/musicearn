import Link from "next/link"

function Footer() {
    return (
        <footer className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
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

    )
}

export default Footer