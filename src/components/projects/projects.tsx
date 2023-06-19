import classes from './projects.module.css'
import dummy from '../../me.jpg'
import mooviz from '../../mooviz.jpg'
import todoList from '../../todolist.jpg'
function Projects(){
    return <section>
        <div className={classes.projectsContainer}>
            <h2>PROJECTS</h2>
            <div className={classes.projects}>
                <div className={classes.project}><h3>MOOWIZ - Netflix clone</h3><img src={mooviz} /><p>Moowiz is a netflix clone page. I used TMDB to get movies. Users here can watch trailers of movies, add them to their list and search for exact movie they want.</p><div className={classes.buttonRefs}><button><a href='https://netflix-clone-fawn-sigma.vercel.app' target='_blank'>LIVE</a></button><button><a href='https://github.com/Czeka17/netflix-clone' target='_blank'>Github</a></button></div></div>
                <div className={classes.project}><h3>To-Do list</h3><img src={todoList} /><p>This is a simple todo list app. Users here can create, edit, mark as important and as completed their tasks. They can also sort them as they like</p><div className={classes.buttonRefs}><button><a href='https://todo-list-three-orcin-43.vercel.app' target='_blank'>LIVE</a></button><button><a href='https://github.com/Czeka17/TodoList' target='_blank'>Github</a></button></div></div>
                <div className={classes.project}><h3>Portfolio Page</h3><img src={dummy} /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae itaque corporis praesentium unde corrupti deserunt atque numquam, nemo animi.</p></div>
                <div className={classes.project}><h3>PostIT - facebook clone</h3><img src={dummy} /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae itaque corporis praesentium unde corrupti deserunt atque numquam, nemo animi.</p></div>
   
            </div>
        </div>
    </section>
}
export default Projects;