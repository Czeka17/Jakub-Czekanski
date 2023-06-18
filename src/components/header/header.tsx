import HeaderText from "./header-text";
import classes from "./header.module.css";
import meImage from "../../me.jpg";
function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.headerText}>
				<HeaderText />
				<p>Aspiring front-end react developer</p>
			</div>
			<div className={classes.headerImage}>
				<img src={meImage} alt="Jacob" />
			</div>
		</header>
	);
}
export default Header;
