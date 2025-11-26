"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard({ image, name, description, oldPrice, price, liveLink }) {
  const isOnSale = oldPrice && price && oldPrice !== price;
  return (
    <motion.article
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
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
        {/* <div className="mb-4 flex items-center gap-3">
          {isOnSale && (
            <span className="inline-block bg-success text-white text-xs font-semibold px-2 py-1 rounded mr-2">On Sale</span>
          )}
          {oldPrice && (
            <span className="text-red-500 line-through text-sm">
              {oldPrice}
            </span>
          )}
          {price && (
            <span className="text-success font-bold text-lg ml-2">
              {price}
            </span>
          )}
        </div> */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {liveLink && (
            <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="inline-block text-white bg-secondary hover:bg-primary font-semibold px-4 py-2 rounded-lg text-center transition-colors duration-200 w-full sm:w-auto" aria-label={`Live preview of ${name}`}>Live Preview</Link>
          )}
          <Link href="/contact" className="inline-block text-primary border border-primary hover:bg-primary hover:text-white font-semibold px-4 py-2 rounded-lg text-center transition-colors duration-200 w-full sm:w-auto" aria-label={`Contact us about ${name}`}>Contact Us Now</Link>
        </div>
      </div>
    </motion.article>
  );
} 