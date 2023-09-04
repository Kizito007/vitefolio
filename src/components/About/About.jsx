import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import ReactTypingEffect from 'react-typing-effect'
import { about } from '../../portfolio'
import './About.css'
import kizitoo from "../img/profile.jpg"
const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {kizitoo && (
        <img
          src={kizitoo}
          alt='Joshua'
          style={{ width: '210px', height: "220px", borderRadius: '130px' }}
        />
      )}
      <br />
      {name && (
        <h1>
          Hi, my name is <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && (
        <h2 className='about__role'>
          <ReactTypingEffect
            typingDelay={1500}
            speed={100}
            text={['A Mobile Developer', `${role}`, 'A software developer']}
          />
          .
        </h2>
      )}
      <p className='about__desc'>
        <br />{description.expertise && description.expertise}
        <br />I am also an Arsenal fan. Loves Anime, Games, Tourism and
        Beans 😂
      </p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} style={{ position: "relative", bottom: "5px" }}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
