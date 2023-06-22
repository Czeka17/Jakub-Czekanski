import classes from './main-navigation.module.css'
import {BsCode} from 'react-icons/bs'
interface MainNavigationProps{
    isOpen: boolean
    HideNavHandler:() => void
}
function MainNavigation({isOpen,HideNavHandler}:MainNavigationProps){
    
return <nav className={`${classes.navigation} ${isOpen ? classes.openNav : ''}`}>
    <div className={classes.logo}><a href='#home'><BsCode/>JC</a></div>
    <ul className={classes.navigationList}>
        <li onClick={HideNavHandler}>
            <a href='#'>Home</a>
        </li>
        <li onClick={HideNavHandler}>
            <a href="#about">About</a>
        </li>
        <li onClick={HideNavHandler}>
            <a href='#skills'>Skills</a>
        </li>
        <li onClick={HideNavHandler}>
            <a href='#projects'>Projects</a>
        </li>
        <li onClick={HideNavHandler}>
            <a href='#contact'>Contact</a>
        </li>
    </ul>
    </nav>
}
export default MainNavigation;