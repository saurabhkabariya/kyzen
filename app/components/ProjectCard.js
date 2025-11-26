"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { memo } from 'react';

const ProjectCard = memo(function ProjectCard({ image, name, description, oldPrice, price, liveLink }) {
  const isOnSale = oldPrice && price && oldPrice !== price;
  
  return (
    <motion.article
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <img
        src={image}
        alt={name + ' project screenshot'}
        className="w-full h-48 object-cover object-top bg-backgroundLight"
        loading="lazy"
        itemProp="image"
      />
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold text-textPrimary mb-2" itemProp="name">{name}</h3>
        <p className="text-textSecondary mb-4 flex-1" itemProp="description">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {liveLink && (
            <Link 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-white bg-secondary hover:bg-primary font-semibold px-4 py-2 rounded-lg text-center transition-colors duration-200 w-full sm:w-auto" 
              aria-label={`Live preview of ${name}`}
            >
              Live Preview
            </Link>
          )}
          <Link 
            href="/contact" 
            className="inline-block text-primary border border-primary hover:bg-primary hover:text-white font-semibold px-4 py-2 rounded-lg text-center transition-colors duration-200 w-full sm:w-auto" 
            aria-label={`Contact us about ${name}`}
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;