import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
    <>
          <nav className={styles.navbar}>
            <Link href='/'>
              <a>Acceuil</a>
            </Link>
            <Link href='/blog'>
                <a>Blog</a>
            </Link>
            <Link href='/contact'>
                <a>Contact</a>
              </Link>
            <Link href='/galery'>
                <a>Galery</a>
              </Link>
            <Link href='/citation'>
                <a>Citation</a>
            </Link>
          </nav>
    </>
  )
}
