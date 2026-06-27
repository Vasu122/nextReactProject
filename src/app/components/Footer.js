import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <div className="container">
            <nav>
                <Link href="https://techtipsall.com/disclaimer-2/"> Privacy Policy </Link>
                <Link href="https://techtipsall.com/terms-and-conditions/" target="_blank"> Terms Of Service </Link>
            </nav>
            </div>
        </footer>
    )
}