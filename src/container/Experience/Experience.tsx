import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { ExperienceInterface } from '../../interfaces';
import { dataJson, images } from '../../constants';
import './Experience.scss';

const Experiece = () => {
    return (
        <>
            <h2 className="head-text">My <span>Profesional</span> carrear</h2>
            <div className="app__skills-exp">
                {dataJson.experiences.map((experience: ExperienceInterface) => (
                    <motion.div
                    className="app__skills-exp-item"
                    key={experience.year}
                    >
                    <div className="app__skills-exp-year">
                        <p className="bold-text">{experience.year}</p>
                    </div>
                    <motion.div className="app__skills-exp-works">
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-exp-work"
                            data-tip
                            data-for={experience.name}
                            key={experience.name}
                        >
                            <h3 className="bold-text">{experience.company}</h3>
                            <h4 className="bold-text">{experience.name}</h4>
                            <p className="p-text">
                                {experience.description}
                            </p>
                        </motion.div>
                    </motion.div>
                    </motion.div>
                ))}
            </div>
            <motion.div 
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-resume"
            >   
                <a href={images.about01} target="_blank">
                    <div>
                        <p>
                            RESUME
                        </p>
                    </div>
                </a>
            </motion.div>
        </>       
    )
}

export default AppWrap(
    MotionWrap(Experiece, 'app__experience'),
    'experience',
    'app__primarybg',
  );
  