import React from 'react';

const blogPosts = [
  {
    title: 'The Future of AI in Business',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore how AI is transforming industries and creating new opportunities for innovation and growth.'
  },
  {
    title: 'Machine Learning: A Beginner\'s Guide',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Dive into the basics of machine learning and discover how it can be applied to solve real-world problems across various sectors.'
  },
  {
    title: 'Ethical Considerations in AI Development',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore the ethical challenges and considerations when developing AI systems, and learn about responsible AI practices.'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white square-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semiblond mb-4">{post.title}</h3>
                <p className="text-gray-600 font-semiblond mb-6">{post.excerpt}</p>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-semiblond text-lg">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;