import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f1729] via-[#1a2238] to-[#2d3561] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-[#8fa5c9]">
              Let's discuss how AI can transform your business. Book a strategy call or send us a message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-[#0f1729] mb-6">
                Send us a Message
              </h2>
              <p className="text-[#6b7fa8] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#0f1729] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-border bg-gray-light focus:outline-none focus:ring-2 focus:ring-[#5b7fc7] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#0f1729] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-border bg-gray-light focus:outline-none focus:ring-2 focus:ring-[#5b7fc7] focus:border-transparent transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[#0f1729] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-border bg-gray-light focus:outline-none focus:ring-2 focus:ring-[#5b7fc7] focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#0f1729] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-border bg-gray-light focus:outline-none focus:ring-2 focus:ring-[#5b7fc7] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project and what you're looking to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0f1729] text-white rounded-xl hover:bg-[#1a2238] transition-all duration-200 shadow-lg shadow-[#0f1729]/10 hover:shadow-xl hover:shadow-[#0f1729]/20 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl text-[#0f1729] mb-6">
                  Contact Information
                </h2>
                <p className="text-[#6b7fa8] mb-8">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white to-gray-light rounded-2xl p-6 border border-gray-border hover:border-[#5b7fc7]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-[#5b7fc7]" />
                    </div>
                    <div>
                      <h3 className="text-[#0f1729] mb-2">Email</h3>
                      <a 
                        href="mailto:info@ezdigitalsolutions.nl"
                        className="text-[#6b7fa8] hover:text-[#5b7fc7] transition-colors"
                      >
                        info@ezdigitalsolutions.nl
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-light rounded-2xl p-6 border border-gray-border hover:border-[#5b7fc7]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-[#5b7fc7]" />
                    </div>
                    <div>
                      <h3 className="text-[#0f1729] mb-2">Phone</h3>
                      <a 
                        href="tel:+31644841188"
                        className="text-[#6b7fa8] hover:text-[#5b7fc7] transition-colors"
                      >
                        +31 6 44841188
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-light rounded-2xl p-6 border border-gray-border hover:border-[#5b7fc7]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-[#5b7fc7]" />
                    </div>
                    <div>
                      <h3 className="text-[#0f1729] mb-2">Address</h3>
                      <p className="text-[#6b7fa8]">
                        EZ Digital Solutions B.V.<br />
                        Haagbeemd 57<br />
                        5641NB Eindhoven<br />
                        Netherlands
                      </p>
                      <p className="text-[#6b7fa8] mt-2 text-sm">
                        KVK: 96596546
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] rounded-2xl p-8 text-white mt-8">
                <h3 className="text-2xl mb-4">
                  Book an AI Strategy Call
                </h3>
                <p className="mb-6 text-white/90">
                  Schedule a free 30-minute consultation to discuss your AI needs and explore how we can help.
                </p>
                <button className="w-full px-6 py-3 bg-white text-[#5b7fc7] rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg">
                  Schedule Call
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Audit Section */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0f1729] to-[#2d3561] rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-4">
                Request a Free AI Automation Audit
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a comprehensive analysis of your business processes and discover untapped opportunities for AI automation. No strings attached.
              </p>
              <button className="px-8 py-4 bg-[#5b7fc7] text-white rounded-xl hover:bg-[#4a5f8f] transition-all duration-200 shadow-lg shadow-[#5b7fc7]/20">
                Request Free Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
