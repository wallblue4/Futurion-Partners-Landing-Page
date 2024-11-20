import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';


const teamMembers = [
    {
      name: 'Kevin Ramos',
      role: 'IA-enginner',
      image: 'src/public/kevinSas-removebg-preview.png',
      bio: 'Leading AI strategy and implementation',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Santiago Ramos',
      role: 'Economist, psychologist',
      image: 'src/public/Santiago-removebg-preview.png',
      bio: 'Specializing in deep learning architectures',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Daniel Hurtado',
      role: 'Data Science Lead',
      image: 'src/public/Daniel-removebg-preview.png',
      bio: 'Expert in predictive analytics',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Robinson Beltran',
      role: 'Machine Learning Engineer',
      image: 'src/public/Robbinson-removebg-preview.png',
      bio: 'Building scalable AI solutions',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Juan Medina',
      role: 'AI Ethics Specialist',
      image: 'src/public/Sebastian-removebg-preview.png',
      bio: 'Ensuring responsible AI development',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

const TeamSection = () => {
  return (
    <section id = "dark-section-2" className="py-24 bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-2xl font-semiblond text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 tracking-tight">
            Pioneering the future of AI with expertise, innovation, and ethical leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden square-2xl aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-serif text-white mb-1">{member.name}</h3>
                  <p className="text-blue-200 font-semiblond mb-3">{member.role}</p>
                  <p className="text-sm font-semiblond text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="text-blue-200 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-blue-200 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-blue-200 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;