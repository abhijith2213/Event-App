import Image from "next/image"
import Link from "next/link"

export const Header = () => (
  <header>
    <div className="topNav">
      <Image src={"/images/Titans.webp"} width={100} height={50} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
