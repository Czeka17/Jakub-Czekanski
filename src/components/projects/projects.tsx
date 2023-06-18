import classes from './projects.module.css'
import dummy from '../../me.jpg'
import mooviz from '../../mooviz.jpg'
import todoList from '../../todolist.jpg'
function Projects(){
    return <section>
        <p className={classes.introduction}>LETS TALK ABOUT</p>
        <div className={classes.projectsContainer}>
            <h2>PROJECTS</h2>
            <div className={classes.projects}>
                <div className={classes.project}><img src={mooviz} /><p>Moowiz is a netflix clone page. I used TMDB to get movies. Users here can watch trailers of movies, add them to their list and search for exact movie they want.</p><button><a href='https://netflix-clone-fawn-sigma.vercel.app' target='_blank'>LIVE</a></button></div>
                <div className={classes.project}><img src={todoList} /><p>This is a simple todo list app. Users here can create, edit, mark as important and as completed their tasks. They can also sort them as they like</p><button><a href='https://todo-list-three-orcin-43.vercel.app' target='_blank'>LIVE</a></button></div>
                <div className={classes.project}><img src={dummy} /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae itaque corporis praesentium unde corrupti deserunt atque numquam, nemo animi.</p></div>
                <div className={classes.project}><img src={dummy} /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae itaque corporis praesentium unde corrupti deserunt atque numquam, nemo animi.</p></div>
   
            </div>
        </div>
    </section>
}
export default Projects;