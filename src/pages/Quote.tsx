// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
// import Navbar from '@/components/Layout/Navbar';
// import Footer from '@/components/Layout/Footer';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from '@/components/ui/label';
// import { useToast } from '@/hooks/use-toast';

// const Quote = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     industry: '',
//     challenges: '',
//     automationGoals: '',
//     budget: '',
//     timeline: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       toast({
//         title: "Quote request submitted!",
//         description: "We'll prepare a custom proposal and contact you within 24 hours.",
//       });

//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         industry: '',
//         challenges: '',
//         automationGoals: '',
//         budget: '',
//         timeline: ''
//       });
//     } catch (error) {
//       toast({
//         title: "Error submitting request",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const benefits = [
//     'Free consultation & automation audit',
//     'Custom AI solution roadmap',
//     'No upfront costs for evaluation',
//     'Implementation within 2 weeks'
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-hero">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center text-white"
//           >
//             <div className="inline-flex items-center px-4 py-2 bg-gearup-neon/20 rounded-full text-gearup-neon font-medium text-sm mb-6 backdrop-blur-sm">
//               <Zap className="w-4 h-4 mr-2" />
//               Free AI Automation Audit
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Get Your{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-neon">Custom Proposal</span>
//             </h1>
//             <p className="text-xl max-w-3xl mx-auto text-gearup-light-gray">
//               Tell us about your business challenges and automation goals. 
//               We'll create a custom proposal with clear ROI projections.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Quote Form */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//             {/* Form */}
//             <div className="lg:col-span-2">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white shadow-elegant">
//                   <CardContent className="p-8">
//                     <h2 className="text-3xl font-bold text-gearup-navy mb-6">Project Details</h2>
//                     <form onSubmit={handleSubmit} className="space-y-6">
                      
//                       {/* Basic Info */}
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <Label htmlFor="name">Full Name *</Label>
//                           <Input
//                             id="name"
//                             name="name"
//                             required
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             placeholder="Your full name"
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="email">Email Address *</Label>
//                           <Input
//                             id="email"
//                             name="email"
//                             type="email"
//                             required
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             placeholder="your@email.com"
//                           />
//                         </div>
//                       </div>

//                       {/* Company Info */}
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <Label htmlFor="company">Company Name *</Label>
//                           <Input
//                             id="company"
//                             name="company"
//                             required
//                             value={formData.company}
//                             onChange={handleInputChange}
//                             placeholder="Your company"
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="industry">Industry</Label>
//                           <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select your industry" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="technology">Technology</SelectItem>
//                               <SelectItem value="healthcare">Healthcare</SelectItem>
//                               <SelectItem value="finance">Finance</SelectItem>
//                               <SelectItem value="retail">Retail</SelectItem>
//                               <SelectItem value="manufacturing">Manufacturing</SelectItem>
//                               <SelectItem value="real-estate">Real Estate</SelectItem>
//                               <SelectItem value="consulting">Consulting</SelectItem>
//                               <SelectItem value="other">Other</SelectItem>
//                             </SelectContent>
//                           </Select>
//                         </div>
//                       </div>

//                       {/* Challenges */}
//                       <div>
//                         <Label htmlFor="challenges">Current Business Challenges *</Label>
//                         <Textarea
//                           id="challenges"
//                           name="challenges"
//                           required
//                           value={formData.challenges}
//                           onChange={handleInputChange}
//                           placeholder="Describe your current pain points, manual processes, and bottlenecks..."
//                           className="min-h-[100px]"
//                         />
//                       </div>

//                       {/* Automation Goals */}
//                       <div>
//                         <Label htmlFor="automationGoals">What would you like to automate? *</Label>
//                         <Textarea
//                           id="automationGoals"
//                           name="automationGoals"
//                           required
//                           value={formData.automationGoals}
//                           onChange={handleInputChange}
//                           placeholder="Describe specific processes you want to automate (e.g., customer support, lead qualification, reporting...)"
//                           className="min-h-[100px]"
//                         />
//                       </div>

//                       {/* Timeline */}
//                       <div>
//                         <Label className="text-base font-medium text-gearup-navy mb-3 block">
//                           Preferred Timeline
//                         </Label>
//                         <RadioGroup
//                           value={formData.timeline}
//                           onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
//                           className="grid grid-cols-1 md:grid-cols-2 gap-3"
//                         >
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="asap" id="asap" />
//                             <Label htmlFor="asap">ASAP (Within 2 weeks)</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="1-month" id="1-month" />
//                             <Label htmlFor="1-month">Within 1 month</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="2-3-months" id="2-3-months" />
//                             <Label htmlFor="2-3-months">2-3 months</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="flexible" id="flexible" />
//                             <Label htmlFor="flexible">Flexible</Label>
//                           </div>
//                         </RadioGroup>
//                       </div>

//                       {/* Submit Button */}
//                       <Button 
//                         type="submit" 
//                         variant="cta" 
//                         size="lg" 
//                         className="w-full"
//                         disabled={isSubmitting}
//                       >
//                         {isSubmitting ? (
//                           'Submitting Request...'
//                         ) : (
//                           <>
//                             Get My Custom Quote
//                             <ArrowRight className="w-5 h-5 ml-2" />
//                           </>
//                         )}
//                       </Button>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </div>

//             {/* Benefits Sidebar */}
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//               >
//                 <Card className="bg-gradient-neon">
//                   <CardContent className="p-6 text-gearup-navy">
//                     <h3 className="text-xl font-bold mb-4">What You'll Get</h3>
//                     <ul className="space-y-3">
//                       {benefits.map((benefit) => (
//                         <li key={benefit} className="flex items-start space-x-3">
//                           <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                           <span className="text-sm">{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-white shadow-card">
//                   <CardContent className="p-6">
//                     <h3 className="text-lg font-bold text-gearup-navy mb-4">Our Process</h3>
//                     <div className="space-y-4">
//                       <div className="flex items-start space-x-3">
//                         <div className="w-6 h-6 bg-gearup-neon rounded-full flex items-center justify-center text-gearup-navy text-sm font-bold">1</div>
//                         <div>
//                           <h4 className="font-semibold text-gearup-navy">Discovery Call</h4>
//                           <p className="text-sm text-gearup-gray">30-min consultation to understand your needs</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start space-x-3">
//                         <div className="w-6 h-6 bg-gearup-neon rounded-full flex items-center justify-center text-gearup-navy text-sm font-bold">2</div>
//                         <div>
//                           <h4 className="font-semibold text-gearup-navy">Audit & Analysis</h4>
//                           <p className="text-sm text-gearup-gray">Free automation audit of your workflows</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start space-x-3">
//                         <div className="w-6 h-6 bg-gearup-neon rounded-full flex items-center justify-center text-gearup-navy text-sm font-bold">3</div>
//                         <div>
//                           <h4 className="font-semibold text-gearup-navy">Custom Proposal</h4>
//                           <p className="text-sm text-gearup-gray">Detailed proposal with ROI projections</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-gearup-navy text-white">
//                   <CardContent className="p-6 text-center">
//                     <h3 className="text-lg font-bold mb-2">Need Help?</h3>
//                     <p className="text-gearup-light-gray text-sm mb-4">
//                       Not sure what to automate? We're here to help!
//                     </p>
//                     <Button variant="heroOutline" size="sm" className="w-full">
//                       Schedule a Call
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Quote;
