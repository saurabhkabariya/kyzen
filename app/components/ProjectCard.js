"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { memo } from 'react';

const ProjectCard = memo(function ProjectCard({ image, name, description, oldPrice, price, liveLink }) {
  return (
    <motion.article
      className="rounded-2xl border border-white/10 bg-black/35 overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Image
        src={image}
        alt={`${name} project screenshot`}
        width={1200}
        height={800}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-48 w-full object-cover object-top bg-slate-900"
        loading="lazy"
        itemProp="image"
      />
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold text-white mb-2" itemProp="name">{name}</h3>
        <p className="text-white/70 mb-4 flex-1" itemProp="description">{description}</p>
        <div className="flex gap-3 mt-auto">
          {liveLink && (
            <Link 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-black bg-lime-400 hover:bg-lime-300 font-semibold px-4 py-2 rounded-lg text-center transition-colors duration-200 w-full" 
              aria-label={`Live preview of ${name}`}
            >
              View Project
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;