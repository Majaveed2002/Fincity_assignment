import {useState} from 'react'
import Home from '../Home'
import AddProjectSection from '../AddProjectSection'
import ProjectsSection from '../ProjectsSection'
import './index.css'
import FooterSection from '../FooterSection'

const projectsArray = [
  {
    id: 1,
    projectName: 'EcoGreen App',
    projectUrl: 'https://ecogreenapp.com',
    description:
      'A mobile app focused on sustainability and eco-friendly living practices.',
    projectThumbnail:
      'https://www.pngitem.com/pimgs/m/8-81843_save-electricity-png-transparent-images-save-energy-logo.png',
  },
  {
    id: 2,
    projectName: 'DataVis Dashboard',
    projectUrl: 'https://datavisdashboard.io',
    description:
      'An interactive data visualization dashboard for analyzing complex datasets.',
    projectThumbnail:
      'https://w7.pngwing.com/pngs/576/642/png-transparent-data-analysis-analytics-management-big-data-data-processing-business-template-text-people-thumbnail.png',
  },
  {
    id: 3,
    projectName: 'HealthCare AI',
    projectUrl: 'https://healthcareai.org',
    description:
      'Using AI to enhance healthcare by predicting patient outcomes and diagnoses.',
    projectThumbnail:
      'https://static.javatpoint.com/tutorial/ai/images/artificial-intelligence-in-healthcare.png',
  },
]

const Portfolio = () => {
  const [initialProjectsArray, updateProjectArray] = useState(projectsArray)

  const addNewProject = newProject => {
    updateProjectArray(prevState => [...prevState, newProject])
  }
  return (
    <div className="background-container">
      <Home />
      <AddProjectSection
        projectsArray={initialProjectsArray}
        addNewProject={addNewProject}
      />
      <ProjectsSection projectsArray={initialProjectsArray} />
      <FooterSection />
    </div>
  )
}

export default Portfolio
