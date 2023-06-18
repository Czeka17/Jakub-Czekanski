import classes from './main-navigation.module.css'
function MainNavigation(){
return <nav className={classes.navigation}>
    <div className={classes.logo}>JC</div>
    <ul className={classes.navigationList}>
        <li>
            Home
        </li>
        <li>
            About
        </li>
        <li>
            Skills
        </li>
        <li>
            Contact
        </li>
    </ul>
    </nav>
}
export default MainNavigation;