"use client";
import navigation from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="d-none d-lg-block">
            <ul className="d-block">
                {navigation.map((item) => (
                    <li key={item.path}>
                        <Link
                            href={item.path}
                            className={pathname === item.path ? "ui-nav-active" : ""}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
