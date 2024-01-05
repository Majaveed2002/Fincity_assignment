import './index.css'

const ProjectCard = props => {
  const {project} = props
  const {projectName, description, projectThumbnail, id} = project
  const imageOrder = id % 2 === 0 ? '1' : '0'

  return (
    <li className="project-card">
      <div style={{order: imageOrder}}>
        <h1 className="project-name">{projectName}</h1>
        <p className="project-description">{description}</p>
        <button className="project-btn" type="button">
          View Project
        </button>
      </div>
      <img
        className="project-image"
        src={projectThumbnail}
        alt="project thumbnail"
      />
    </li>
  )
}

export default ProjectCard
