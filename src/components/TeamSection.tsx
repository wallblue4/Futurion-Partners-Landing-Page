import React from 'react';
import SantiagoIMG from '../public/Santiago.jpeg';
import DanielIMG from '../public/Daniel.png';
import RobinsonIMG from '../public/Robbinson.png';
import JuanIMG from '../public/Sebastian.png';

const teamMembers = [
  { name: 'Kevin Ramos', role: 'IA-enginner', image: SantiagoIMG },
  { name: 'Santiago Ramos', role: 'Economist, psychologist', image: SantiagoIMG },
  { name: 'Daniel Hurtado', role: 'Data Science Lead', image: DanielIMG },
  { name: 'Robinson Beltran', role: 'Machine Learning Engineer', image: RobinsonIMG },
  { name: 'Juan Medina', role: 'AI Ethics Specialist', image: JuanIMG },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
