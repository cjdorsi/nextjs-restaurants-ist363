import classnames from 'classnames/bind'
import Link from 'next/link'
import styles from './Button.module.scss'

let cx = classnames.bind(styles);

const Button = ({ 
    label = "Undefined label",
    clickHandler,
    type,
    path
}) => {
    return path ?
    <Link href={path} className={styles.btn}>
        {label}
    </Link>
    :
    <button className={styles.btn} onClick={clickHandler}>{label}</button>
}
export default Button