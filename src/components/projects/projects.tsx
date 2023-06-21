import classes from './projects.module.css'
import dummy from '../../me.jpg'
import mooviz from '../../mooviz.jpg'
import todoList from '../../todolist.jpg'
import portfolio from '../../portfolio-page.png'
import postIT from '../../postIT.png'
import { SiCss3, SiMongodb, SiNextdotjs, SiReact, SiRed, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
function Projects(){
    return <section>
        <div className={classes.projectsContainer}>
            <h2>PROJECTS</h2>
            <div className={classes.projects}>
                <div className={classes.project}><h3>MOOWIZ - Netflix clone</h3><img src={mooviz} alt='mooviz, netflix clone photo' /><p>Moowiz is a Netflix clone website. It utilizes TMDB to fetch movies. Users can watch movie trailers, add movies to their watchlist, and search for specific movies they desire.</p><div className={classes.technologiesContainer}>
                    <h3>Techonolgies</h3><div className={classes.technologies}><SiTailwindcss/><SiReact/><SiRedux/><SiNextdotjs/><SiTypescript/><SiMongodb/></div></div><div className={classes.buttonRefs}><a href='https://netflix-clone-fawn-sigma.vercel.app' target='_blank'><button>LIVE</button></a><a href='https://github.com/Czeka17/netflix-clone' target='_blank'><button>Github</button></a></div></div>
                    <div className={classes.project}><h3>PostIT - facebook clone</h3><img src={postIT} /><p>PostIT is a facebook clone app. Users here can add posts, comment and like them.  The app also includes a global chat feature for users and a friend list functionality.</p><div className={classes.technologiesContainer}>
                    <h3>Techonolgies</h3><div className={classes.technologies}><SiReact/><SiRedux/><SiMongodb/><SiNextdotjs/><SiTypescript/><SiCss3/></div></div><div className={classes.buttonRefs}><a href='https://portfolio-app-one-sage.vercel.app' target='_blank'><button>LIVE</button></a><a href='https://github.com/Czeka17/PortfolioApp' target='_blank'><button>Github</button></a></div></div>
                <div className={classes.project}><h3>To-Do list</h3><img src={todoList} /><p>This is a straightforward todo list application where users can create, edit, mark tasks as important or completed. Additionally, they have the flexibility to sort their tasks according to their preferences.</p><div className={classes.technologiesContainer}>
                    <h3>Techonolgies</h3><div className={classes.technologies}><SiReact/><SiTypescript/><SiCss3/></div></div><div className={classes.buttonRefs}><a href='https://todo-list-three-orcin-43.vercel.app' target='_blank'><button>LIVE</button></a><a href='https://github.com/Czeka17/TodoList' target='_blank'><button>Github</button></a></div></div>
                    
                <div className={classes.project}><h3>Portfolio Page</h3><img src={portfolio} /><p>This is my portfolio page. There are home, about, skills, projects, contact, and resume sections. Page contains Everything about me, including my own projects.</p><div className={classes.technologiesContainer}>
                    <h3>Techonolgies</h3><div className={classes.technologies}><SiReact/><SiTypescript/><SiCss3/></div></div><div className={classes.buttonRefs}><a href='https://portfolio-app-one-sage.vercel.app' target='_blank'><button>LIVE</button></a><a href='https://github.com/Czeka17/PortfolioApp' target='_blank'><button>Github</button></a></div></div>

   
            </div>
        </div>
    </section>
}
export default Projects;