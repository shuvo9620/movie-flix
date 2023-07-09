import React from 'react';
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                <Image src="/logo2.webp" alt='logo' width="150" height="40"/>
                </Link>
            </div>
            <div className={styles.navbarList}>
                ggg
                aaaaaaaaaa
                ggggggg
                aaaaaa
            </div>
        </header>
    );
};

export default Header;