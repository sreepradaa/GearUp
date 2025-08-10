import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  MessageSquare, 
  Mic, 
  Mail, 
  Target, 
  Workflow, 
  FileText, 
  BarChart, 
  Users,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Custom RAG Chatbots',
      description: 'Intelligent chatbots powered by Retrieval-Augmented Generation for accurate, context-aware responses.',
      features: ['Knowledge-based responses', 'Multi-language support', 'Easy integration'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: '24/7 AI assistants that handle customer inquiries with human-like understanding and empathy.',
      features: ['24/7 availability', 'Sentiment analysis', 'Escalation handling'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mic,
      title: 'Voice-Based Assistants',
      description: 'Natural language voice interfaces that understand and respond to spoken commands.',
      features: ['Natural speech processing', 'Multi-accent support', 'Voice authentication'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Cold Email Automation',
      description: 'Automated outreach campaigns for LinkedIn, Maps, and Forms with personalized messaging.',
      features: ['Personalized sequences', 'A/B testing', 'Response tracking'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Lead Qualification',
      description: 'AI-powered lead scoring and qualification systems to identify your best prospects.',
      features: ['Behavioral scoring', 'Predictive analytics', 'CRM integration'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline business processes with n8n/Make.com integrations and custom workflows.',
      features: ['No-code automation', 'API integrations', 'Custom triggers'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'CRM & Marketing Automation',
      description: 'Complete automation of your customer relationship management and marketing workflows.',
      features: ['Pipeline automation', 'Email campaigns', 'Customer segmentation'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gearup-navy mb-6">
            Our AI Automation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-neon">Services</span>
          </h2>
          <p className="text-xl text-gearup-gray max-w-3xl mx-auto">
            From chatbots to workflow automation, we provide comprehensive AI solutions 
            that transform how your business operates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gearup-navy mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gearup-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gearup-gray">
                        <div className="w-1.5 h-1.5 bg-gearup-neon rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                 <Link to="/services" className="group/btn">
  <Button 
    variant="ghost" 
    className="text-gearup-neon hover:text-gearup-navy hover:bg-gearup-neon/10 p-0"
  >
    Learn More
    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
  </Button>
</Link>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="cta" size="lg" asChild>
            <Link to="/services" className="group">
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;