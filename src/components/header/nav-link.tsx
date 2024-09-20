'use client';

import Link from "next/link"
import styles from './nav-link.module.css';
import { usePathname } from "next/navigation";
import { buildClassList } from "@/utils";

interface INavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: INavLinkProps) {
    const path = usePathname();
    const classes = buildClassList(styles.link, styles.active);

    return (
        <Link
            href={href}
            className={path.startsWith(href) ? classes : styles.link}
        >
            {children}
        </Link>
    )
}