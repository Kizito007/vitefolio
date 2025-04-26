import uniqid from 'uniqid'
import { companies, projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <>
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>
      <p className='section__title'>Here are some projects that I've worked on</p><br/>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
    <section id='projects' className='section projects'>
      <p className='section__title'>Here are some companies I have built with</p><br/>

      <div className='projects__grid'>
        {companies.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
    </>
  )
}

export default Projects
