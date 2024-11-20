import React from 'react';

const teamMembers = [
  { name: 'Dr. Sarah Chen', role: 'AI Research Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Michael Rodriguez', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Emily Nakamura', role: 'Data Science Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'David Okafor', role: 'Machine Learning Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Aisha Patel', role: 'AI Ethics Specialist', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
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