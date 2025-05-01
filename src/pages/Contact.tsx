import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('null');

  // Make the function async to use await
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('null');
    
    try {
      // Destructure the form data to use in the API call
      const { name, email, message } = formData;
      
      // Call our backend API route instead of Airtable directly
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        console.log('Form submitted successfully:', result);
        setSubmitStatus('success');
        // Clear the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-br from-[#1F3B4D] to-[#152A38] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">Contact Us</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or want to book a demo? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  info="+1 (647) 526-9334"
                />
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  info="blakenielsen@proinvest.trade"
                />
                <ContactInfo
                  icon={<MapPin />}
                  title="Located"
                  info="Montreal, QC & Toronto, ON"
                />
              </div>
            </div>
            
            <div>
              <form action="https://hooks.airtable.com/workflows/v1/genericWebhook/appTdGGAOwnN8q4D8/wflsLMIGyFQWMP8Qu/wtriiXhnbqwyuBl8K" method="POST" className="bg-white rounded-2xl shadow-xl p-8"> {/*onSubmit={handleSubmit} */ }
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Your message..."
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg">
                      Your message has been sent successfully!
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
                      There was an error sending your message. Please try again later.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, info }) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  );
};

export default Contact;