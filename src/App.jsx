import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Settings, 
  MessageCircle, 
  Phone, 
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  Palette,
  GraduationCap,
  FileText,
  CheckCircle,
  Star,
  Sparkles,
  Zap
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.95 }
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Company Websites",
      description: "Professional corporate websites that represent your brand effectively",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "E-commerce Platforms",
      description: "Complete online stores with payment gateways and inventory management",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native Android and iOS apps tailored to your business needs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Modern design and redesign services for better user experience",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educational Platforms",
      description: "Learning management systems and course platforms",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Landing Pages",
      description: "High-converting landing pages for your marketing campaigns",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Contact Me",
      description: "Share your project idea via WhatsApp or Telegram",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      step: "2",
      title: "Get Quote",
      description: "Receive a customized quote based on your budget and requirements",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      step: "3",
      title: "Team Selection",
      description: "I select the most suitable development team for your needs",
      icon: <User className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      step: "4",
      title: "Project Delivery",
      description: "I oversee the project until full delivery and satisfaction",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-orange-500"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="font-bold text-xl text-gradient glow-text swing"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Omar Hany
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'How It Works', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="text-gray-600 hover:text-primary smooth-transition relative wobble"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary hover:bg-primary/90 btn-hover-effect pulse-glow heartbeat"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Start Project
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding pt-24 relative">
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse physics-bounce" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse liquid" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse swing" />
        </motion.div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                className="inline-block tada"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Eng. Omar Hany
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-2 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Professional Software Project Broker
            </motion.p>
            
            <motion.p 
              className="text-lg opacity-80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Connecting clients with trusted developers to build exceptional digital solutions
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div {...scaleOnHover}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 smooth-transition btn-hover-effect rubber-band"
                onClick={() => scrollToSection('contact')}
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </motion.div>
            
            <motion.div {...scaleOnHover}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary smooth-transition btn-hover-effect jello-effect"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient glow-text">About Me</h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInLeft}>
              <Card className="card-shadow smooth-transition hover-lift h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <motion.div
                      className="icon-bounce flip"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <User className="w-6 h-6 text-primary" />
                    </motion.div>
                    Professional Background
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    I'm Omar Hany, a professional software project broker based in Egypt. I help clients 
                    build websites, mobile apps, and digital platforms by connecting them with trusted and 
                    talented developers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInRight}>
              <Card className="card-shadow smooth-transition hover-lift h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <motion.div
                      className="icon-bounce shake"
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="w-6 h-6 text-primary" />
                    </motion.div>
                    My Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    You just share your project idea with me, and I'll take care of the rest — pricing, 
                    team selection, and project delivery. I ensure quality results while you focus on 
                    your business goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient glow-text">Services Offered</h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              I specialize in connecting you with the right development teams for various digital solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="card-shadow smooth-transition hover-lift h-full group magnetic">
                  <CardHeader>
                    <motion.div 
                      className={`text-white mb-4 w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto liquid`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360 
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient glow-text">How It Works</h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and straightforward process to get your project started
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="card-shadow smooth-transition hover-lift text-center h-full group physics-bounce">
                  <CardHeader>
                    <motion.div 
                      className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 relative`}
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: "0 0 30px rgba(102, 126, 234, 0.6)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl font-bold">{step.step}</span>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient glow-text">Contact Me</h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your digital project? Get in touch and let's discuss your ideas
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="card-shadow smooth-transition hover-lift text-center h-full group wobble">
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <MessageCircle className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="group-hover:text-green-500 transition-colors">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">+21030634710</p>
                  <motion.div {...scaleOnHover}>
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 btn-hover-effect rubber-band"
                      onClick={() => window.open('https://wa.me/21030634710', '_blank')}
                    >
                      Message on WhatsApp
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="card-shadow smooth-transition hover-lift text-center h-full group jello-effect">
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: -360,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <MessageCircle className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="group-hover:text-blue-500 transition-colors">Telegram</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">@Eng_Omar_Hany</p>
                  <motion.div {...scaleOnHover}>
                    <Button 
                      className="w-full bg-blue-500 hover:bg-blue-600 btn-hover-effect shake"
                      onClick={() => window.open('https://t.me/Eng_Omar_Hany', '_blank')}
                    >
                      Message on Telegram
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="card-shadow smooth-transition hover-lift text-center h-full group tada">
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <ExternalLink className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="group-hover:text-purple-500 transition-colors">Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">View My Work</p>
                  <motion.div {...scaleOnHover}>
                    <Button 
                      className="w-full bg-purple-500 hover:bg-purple-600 btn-hover-effect flip"
                      onClick={() => window.open('https://omarhany.netlify.app', '_blank')}
                    >
                      Visit Portfolio
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="hero-gradient text-white cta-section relative overflow-hidden"
        style={{ y: y2 }}
      >
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl liquid"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl physics-bounce"
            animate={{ 
              scale: [1.5, 1, 1.5],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Start Your Digital Project with Confidence
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let me handle the technical part while you focus on your business goals
          </motion.p>
          <motion.div
            className="cta-button-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 smooth-transition btn-hover-effect pulse-glow heartbeat"
              onClick={() => window.open('https://wa.me/21030634710', '_blank')}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Contact Me Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.p 
            className="text-gray-400"
            whileHover={{ color: "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            © 2025 Eng. Omar Hany - Software Project Broker. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;

