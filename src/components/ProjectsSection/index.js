import './index.css'
import ProjectCard from '../ProjectCard'

const ProjectsSection = props => {
  const {projectsArray} = props
  return (
    <div id="projectSection">
      <h1 className="project-section-heading"> Projects</h1>
      <hr className="horizontal-line" />
      <ul>
        {projectsArray.map(eachProject => (
          <ProjectCard project={eachProject} key={eachProject.id} />
        ))}
      </ul>
    </div>
  )
}
export default ProjectsSection
