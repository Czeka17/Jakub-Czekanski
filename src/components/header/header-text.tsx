import { useEffect } from "react";
import classes from './header-text.module.css'
function HeaderText(){

    useEffect(() => {
        const squeezeSpans = document.querySelectorAll(`.${classes.squeeze} span`) as NodeListOf<HTMLElement>;
        squeezeSpans.forEach((span, index) => {
          span.style.animationDelay = `${index * 0.1}s`;
        });
      }, []);
      
        return (
          <span className={classes.squeeze}>
            <span>H</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
            <span>,</span>
            <span>&nbsp;</span>
            <span>I</span>
            <span>'m</span>
            <span>&nbsp;</span>
            <span>J</span>
            <span>a</span>
            <span>c</span>
            <span>o</span>
            <span>b</span>
          </span>
        );
}

export default HeaderText;