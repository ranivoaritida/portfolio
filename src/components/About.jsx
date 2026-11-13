import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper} from '../hoc';

const ServiceCard = ({index, title,icon }) => {
return(
  <Tilt className="xs:w-[250px] x-full">
    <motion.div
      variants={fadeIn("right","spring",0.5 * index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div option={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary rounded-[20px]
      py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain"  />
        <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
      </div>
    </motion.div>
  </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]" >
        Hello, je suis un développeur web ambitieux et dynamique qui aspire à acquérir 
        une première expérience professionnelle.
        Je suis à la recherche de nouveaux défis et j'ai une approche créative
        pour résoudre des problèmes.Capable de travailler en équipe, de communiquer efficacement,
        et j'ai une soif d'apprendre des autres.
        J'ai une passion pour le développement et je suis motivé à utiliser
        mes compétences pour créer des applications Web innovantes et fonctionnelles.
        En résumé,je suis un développeur Full Stack Junior spécialisé en Java Spring Boot et React.js, je
        conçois des applications web modernes, de la création d'API REST au
        développement d'interfaces.
        Je suis impatient de commencer ma carrière dans le domaine du développement Web et prêt à relever tous les défis que cela implique.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10' >
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
    )
}

export default SectionWrapper(About, "about");