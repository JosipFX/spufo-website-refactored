import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#111] text-white min-h-screen overflow-hidden pt-20">
      {/* Dots Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-cyan-400 text-4xl md:text-7xl font-semibold mb-4">
            {t('twojo.blog.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('twojo.blog.description')}
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="rounded-3xl shadow-lg p-8 bg-[#18181b] transform hover:scale-105 transition duration-300">
            <div className="md:flex gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/assets/images/team.jpg"
                  alt="SPUFO Team" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
                <div>
                  <div className="text-cyan-400 font-medium mb-2">{t('twojo.blog.featuredArticle.tag')}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('twojo.blog.featuredArticle.title')}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t('twojo.blog.featuredArticle.content')}
                  </p>
                </div>
                <a 
                  href="https://hub.hslu.ch/informatik/neue-tatort-app-sichert-fingerabdruecke-fuer-die-polizei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mt-6"
                >
                  {t('twojo.blog.featuredArticle.link')}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Older Articles Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Article 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group h-full"
          >
            <div className="rounded-3xl shadow-lg p-8 h-full bg-[#18181b] transform hover:scale-105 transition duration-300 flex flex-col">
              <div className="flex-grow">
                <img 
                  src="/assets/images/Curved_FinalSpufoLogo.svg"
                  alt="SPUFO App" 
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <div className="text-cyan-400 font-medium mb-2">{t('twojo.blog.olderArticles.article1.tag')}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('twojo.blog.olderArticles.article1.title')}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t('twojo.blog.olderArticles.article1.content')}
                </p>
              </div>
              <a 
                href="https://business.apple.com/"
                target="_blank"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mt-6"
              >
                {t('twojo.blog.olderArticles.article1.link')}
                <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>

          {/* Article 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group h-full"
          >
            <div className="rounded-3xl shadow-lg p-8 h-full bg-[#18181b] transform hover:scale-105 transition duration-300 flex flex-col">
              <div className="flex-grow">
                <img 
                  src="/assets/images/Curved_FinalSpufoLogo.svg"
                  alt="SPUFO Interface" 
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <div className="text-cyan-400 font-medium mb-2">{t('twojo.blog.olderArticles.article2.tag')}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('twojo.blog.olderArticles.article2.title')}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t('twojo.blog.olderArticles.article2.content')}
                </p>
              </div>
              <a 
                href="https://business.apple.com/"
                target="_blank"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mt-6"
              >
                {t('twojo.blog.olderArticles.article2.link')}
                <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>

          {/* Article 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group h-full"
          >
            <div className="rounded-3xl shadow-lg p-8 h-full bg-[#18181b] transform hover:scale-105 transition duration-300 flex flex-col">
              <div className="flex-grow">
                <img 
                  src="/assets/images/Curved_FinalSpufoLogo.svg"
                  alt="SPUFO Features" 
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <div className="text-cyan-400 font-medium mb-2">{t('twojo.blog.olderArticles.article3.tag')}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('twojo.blog.olderArticles.article3.title')}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t('twojo.blog.olderArticles.article3.content')}
                </p>
              </div>
              <a 
                href="https://business.apple.com/"
                target="_blank"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mt-6"
              >
                {t('twojo.blog.olderArticles.article3.link')}
                <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
