import {useState} from 'react';

import ButtonUI from './ButtonUI'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link';
import MenuOverlay from './MenuOverlay'

import styles from './Header.module.scss'

const Header = () => {
    // 1. variable that holds the state of the menu
    // 2. variable that sets the state of the menu
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        {isMenuVisible && 
            <MenuOverlay 
                closeHandler={() => {
                    setMenuVisible(false);
                }}
            />
        }
        <Container>
            <Link href="/">
                <Image 
                    src="/images/syracuse-restaurants-logo.svg"
                    alt="Syracuse Restaurants Logo"
                    width={537}
                    height={86}
                    className={styles.logo}
                />
            </Link>
        </Container>
        <ButtonUI 
            icon="white-menu"
            clickHandler={() => {
                setMenuVisible(true)
            }}
        />
    </header>
}
export default Header