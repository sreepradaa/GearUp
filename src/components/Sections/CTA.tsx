import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const benefits = [
    'Free consultation & automation audit',
    'Custom AI solution roadmap',
    'No upfront costs for evaluation',
    'Implementation within 2 weeks'
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gearup-neon/30 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-gearup-neon/20 rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gearup-neon/10 rounded-lg animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gearup-neon/20 rounded-full text-gearup-neon font-medium text-sm mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Ready to Transform Your Business?
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your Free{' '}
              <span className="text-transparent bg-clip-text bg-gradient-neon">
                AI Automation
              </span>{' '}
              Audit
            </h2>

            <p className="text-xl text-gearup-light-gray max-w-3xl mx-auto mb-8">
              Discover how AI automation can save your business time and money. 
              We will analyze your workflows and provide a custom roadmap.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-gearup-neon flex-shrink-0" />
                <span className="text-white text-sm">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Get Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gearup-light-gray text-sm mt-6"
          >
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTA;