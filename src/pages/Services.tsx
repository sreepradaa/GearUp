import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot, MessageSquare, Mic, Mail, Target, Workflow,
  FileText, BarChart, Users, CheckCircle, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Custom RAG Chatbots',
      description: 'Intelligent chatbots powered by Retrieval-Augmented Generation technology that provide accurate, context-aware responses based on your business knowledge base.',
      features: [
        'Knowledge-based responses from your data',
        'Multi-language support',
        'Easy integration with existing systems',
        'Real-time learning capabilities',
        'Custom personality and tone'
      ],
      benefits: ['24/7 customer support', '90% query resolution rate', 'Reduced support costs'],
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: '24/7 AI assistants that handle customer inquiries with human-like understanding, empathy, and the ability to escalate complex issues to human agents.',
      features: [
        '24/7 availability',
        'Sentiment analysis',
        'Intelligent escalation handling',
        'Multi-channel support',
        'Performance analytics'
      ],
      benefits: ['Improved satisfaction', 'Faster response times', 'Cost reduction'],
    },
    {
      icon: Mic,
      title: 'Voice-Based Assistants',
      description: 'Natural language voice interfaces that understand and respond to spoken commands with advanced speech recognition and synthesis.',
      features: [
        'Natural speech processing',
        'Multi-accent support',
        'Voice authentication',
        'Real-time transcription',
        'Custom wake words'
      ],
      benefits: ['Hands-free operation', 'Accessibility', 'Enhanced user experience'],
    },
    {
      icon: Mail,
      title: 'Cold Email Automation',
      description: 'Automated outreach campaigns for LinkedIn, email, and forms with personalized messaging and intelligent follow-up sequences.',
      features: [
        'Personalized email sequences',
        'A/B testing capabilities',
        'Response tracking and analytics',
        'LinkedIn integration',
        'CRM synchronization'
      ],
      benefits: ['Higher open rates', 'Increased conversions', 'Time savings'],
    },
    {
      icon: Target,
      title: 'Lead Qualification & Scoring',
      description: 'AI-powered lead scoring and qualification systems that identify your best prospects using behavioral data and predictive analytics.',
      features: [
        'Behavioral scoring algorithms',
        'Predictive analytics',
        'CRM integration',
        'Real-time lead scoring',
        'Custom qualification criteria'
      ],
      benefits: ['Better lead quality', 'Higher conversion rates', 'Sales efficiency'],
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline business processes with n8n/Make.com integrations and custom workflows that connect your tools and automate repetitive tasks.',
      features: [
        'No-code automation platform',
        'API integrations',
        'Custom triggers and actions',
        'Error handling',
        'Process monitoring'
      ],
      benefits: ['Process efficiency', 'Error reduction', 'Time savings'],
    },
    {
      icon: Users,
      title: 'CRM & Marketing Automation',
      description: 'Complete automation of your customer relationship management and marketing workflows with pipeline automation and customer segmentation.',
      features: [
        'Pipeline automation',
        'Email campaign automation',
        'Customer segmentation',
        'Lead nurturing workflows',
        'Performance tracking'
      ],
      benefits: ['Better relationships', 'Increased sales', 'Marketing ROI'],
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
              Our AI Automation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-neon">Services</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gearup-light-gray mb-8">
              Comprehensive AI solutions that transform how your business operates.
              From chatbots to workflow automation, we have you covered.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-gearup-navy" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gearup-navy mb-2">{service.title}</h3>

                      </div>
                    </div>

                    <p className="text-gearup-gray mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gearup-navy mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-gearup-neon mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gearup-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gearup-navy mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="px-3 py-1 bg-gearup-neon/10 text-gearup-neon text-sm rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="cta" className="w-full" asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gearup-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gearup-light-gray mb-8 max-w-3xl mx-auto">
              Let's discuss your specific needs and create a custom automation solution
              that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;