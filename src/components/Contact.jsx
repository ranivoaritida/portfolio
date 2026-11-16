import React, {useState,useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//Rgog4UiQ3pyeIbYa-
//template_dojxc1u
//service_r51g6ci

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value});

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_r51g6ci',
      'template_dojxc1u',
      {
        from_name: form.name,
        to_name:'Sandy',
        from_email:form.email,
        to_email:'ranivoaritidasandy@gmail.com',
        message:form.message,
      },
      'Rgog4UiQ3pyeIbYa-'
    )
    .then(() => {
      setLoading(false);
      alert('Merci. Je vous répondrai dans les plus brefs délais.');

      setForm({
        name:'',
        email:'',
        message:'',
      })
    },(error) => {
      setLoading(false);
      console.log(error);
      alert('Service non disponible. Veuillez réessayer plus tard.');
    })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left',"tween" ,0.2 , 1)}
        className="flex-[0.75] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-black-100 p-8 rounded-[20px]">
          <p className={styles.sectionSubText} >
            Me contacter
          </p>
          <h4 className={styles.sectionHeadText} >
            Contact
          </h4>
          <form ref={formRef}
            onSubmit={handleSubmit}
            className='mt-4 flex flex-col gap-8'
            >
              <label className='flex flex-col' >
                <span className='text-white font-medium mb-1' >
                  Votre nom
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Quel est votre nom ?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-white/30 focus:border-white/70 focus:outline-none font-medium"

                />
                <span className='text-white font-medium mt-3 mb-1' >
                  Votre Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Quel est votre email ?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-white/30 focus:border-white/70 focus:outline-none font-medium"

                />
                <span className='text-white font-medium mt-3 mb-1' >
                  Votre message
                </span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Que voulez-vous me dire ?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border border-white/30 focus:border-white/70 focus:outline-none font-medium"

                />

              </label>
              <button type="submit"
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white border border-white/30 font-bold shadow-md shadow-primary rounded-xl'

              >
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </button>
          </form>
        </div>
      </motion.div>
      <motion.div
       variants={slideIn('left',"tween" ,0.2 , 1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact');