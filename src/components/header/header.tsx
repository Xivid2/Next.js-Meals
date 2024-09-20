import styles from './header.module.css';
import Link from "next/link"
import Image from 'next/image';
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from './header-background';

export default function Header() {
    return (
        <>
            <MainHeaderBackground />

            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={logoImg}
                        alt="A table with food"
                        priority
                    />
                    Wondeful Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>

                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}