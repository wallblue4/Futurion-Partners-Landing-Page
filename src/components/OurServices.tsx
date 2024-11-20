import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import IAConsulting from '../public/IAConsulting.png';
import MachineLearningSolutions from '../public/MachineL.png';
import DataAnalytics from '../public/DataAnalytics.png';

export default function Component() {
  return (
    <section id="Ourservices" className="relative w-full bg-white">
      <div className="space-y-8 md:space-y-0">
        {/* Leadership Article */}
        <div className="relative w-full">
          <div className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-[500px] w-full">
              <img
                src={MachineLearningSolutions}
                alt="Leadership concept"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 md:px-16 py-8">
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">
              AI Consulting
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
              Elevate your business with cutting-edge AI solutions. Our expert consultants help you navigate the AI landscape, developing tailored strategies to transform your operations and drive innovation. From AI readiness assessment to implementation roadmaps, we ensure your organization stays ahead in the digital revolution.              </p>
              <Link to="#" className="text-blue-600 inline-flex items-center gap-2 hover:underline">
                Read more <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Marketing Article */}
        <div className="relative w-full">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center px-6 md:px-16 py-8 order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">
              Machine Learning Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
              Transform raw data into actionable intelligence with our advanced machine learning solutions. We design and deploy custom ML models that optimize your processes, automate decision-making, and unlock new opportunities for growth. Our expertise spans predictive analytics, natural language processing, and computer vision applications.              </p>
              <div className="space-y-3">
                <Link to="#" className="text-blue-600 inline-flex items-center gap-2 hover:underline">
                  See more <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-blue-600 block hover:underline">
                  Read more insights on growth, marketing and sales
                </Link>
              </div>
            </div>
            <div className="relative h-72 md:h-[500px] w-full order-1 md:order-2">
              <img
                src={IAConsulting}
                alt="Marketing concept"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-[500px] w-full">
              <img
                src={DataAnalytics}
                alt="Data Analytics"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 md:px-16 py-8">
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">
              Data Analytics
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
              Harness the power of your data with our comprehensive analytics services. We help you extract meaningful insights that drive strategic decision-making and business growth. From data visualization to predictive modeling, our solutions turn complex information into clear, actionable business intelligence.              </p>
              <Link to="#" className="text-blue-600 inline-flex items-center gap-2 hover:underline">
                Read more <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}