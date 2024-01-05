import {useState} from 'react'

import './index.css'

const AddProjectSection = props => {
  const [projectName, setProjectName] = useState('')
  const [projectUrl, setProjectURL] = useState('')
  const [projectThumbnail, setProjectThumbnail] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const {addNewProject, projectsArray} = props

  const changeProjectName = event => {
    setProjectName(event.target.value)
  }

  const changeProjectURL = event => {
    setProjectURL(event.target.value)
  }
  const changeProjectThumbnail = event => {
    setProjectThumbnail(event.target.value)
  }
  const changeProjectDescription = event => {
    setProjectDescription(event.target.value)
  }

  const addProjectToArray = event => {
    event.preventDefault()
    const newId = projectsArray[projectsArray.length - 1].id + 1
    const newProject = {
      id: newId,
      projectName,
      description: projectDescription,
      projectThumbnail,
      projectUrl,
    }
    setProjectName('')
    setProjectURL('')
    setProjectThumbnail('')
    setProjectDescription('')
    addNewProject(newProject)
  }

  return (
    <div id="addProjectSection">
      <h1 className="add-project-section-heading">Add Project</h1>
      <hr className="horizontal-line" />
      <form onSubmit={addProjectToArray}>
        <label htmlFor="projectName">Project Name</label>
        <input
          id="projectName"
          placeholder="Enter Your Project Name"
          value={projectName}
          onChange={changeProjectName}
        />
        <label htmlFor="projectLink">Project Link</label>
        <input
          id="projectLink"
          placeholder="Enter Your Published URL"
          value={projectUrl}
          onChange={changeProjectURL}
        />
        <label htmlFor="projectThumbnail">Project Link</label>
        <input
          id="projectThumbnail"
          placeholder="Enter Your Project Thumbnail URL"
          value={projectThumbnail}
          onChange={changeProjectThumbnail}
        />
        <label htmlFor="projectDescription">Description</label>
        <input
          id="projectDescription"
          placeholder="Enter Your Project Description"
          value={projectDescription}
          onChange={changeProjectDescription}
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <img
        src="https://res.cloudinary.com/daqedhqtx/image/upload/v1704417293/Vector_yrismb.jpg"
        alt="footer img"
      />
    </div>
  )
}
export default AddProjectSection
