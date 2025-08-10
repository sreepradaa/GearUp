import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Award } from 'lucide-react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

// Import images
import sreeImage from '@/assets/sreepic.jpeg';
import layaImage from '@/assets/laya.jpg';
  
const About = () => {
 const founders = [
  {
    name: 'Sreeprada',
    role: 'Co-Founder & CEO',
    image: sreeImage
  },
  {
    name: 'Srilaya',
    role: 'Co-Founder & CTO',
    image: layaImage
  }
];


  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To make AI automation accessible to every business, regardless of size or technical expertise.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'A world where businesses focus on growth while AI handles the repetitive tasks.'
    },
    {
      icon: Award,
      title: 'Values',
      description: 'Innovation, transparency, and delivering measurable results for our clients.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-neon">GearUp</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      {/*<section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gearup-navy mb-6">Our Story</h2>
              <p className="text-gearup-gray mb-6 leading-relaxed">
                GearUp started when we noticed businesses wasting time on repetitive tasks. As two young students passionate about AI, we built simple automation solutions to help save time and money. We're just getting started and are excited to grow with you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-elegant"
              />
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* Founders Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gearup-navy mb-6">Meet Our Founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-white shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-2xl font-bold text-gearup-navy mb-2">{founder.name}</h3>
                    <p className="text-gearup-neon font-semibold mb-4">{founder.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gearup-navy mb-6">Why GearUp?</h2>
            <p className="text-xl text-gearup-gray max-w-3xl mx-auto">
              Our mission, vision, and values drive everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full bg-white shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-gearup-navy" />
                    </div>
                    <h3 className="text-2xl font-bold text-gearup-navy mb-4">{value.title}</h3>
                    <p className="text-gearup-gray leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
