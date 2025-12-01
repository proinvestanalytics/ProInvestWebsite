import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mail, User, MessageSquare, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('null');

  // Make the function async to use await
  const handleSubmit = async (e: React.FormEvent) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16">
      <SEO />
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 184, 138, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(0, 184, 138, 0.05) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00B88A]/20 border border-[#00B88A]/30 text-[#00B88A] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-6">
              💬 {t('hero.badge')}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('hero.title')} <span className="bg-gradient-to-r from-[#00B88A] to-[#008C8D] bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#F7F2F0] leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">{t('form.title')}</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail />}
                  title={t('info.email.title')}
                  info={t('info.email.value')}
                />
                <ContactInfo
                  icon={<MapPin />}
                  title={t('info.location.title')}
                  info={t('info.location.value')}
                />
              </div>
            </div>

            <div>
              <form action="https://hooks.airtable.com/workflows/v1/genericWebhook/appTdGGAOwnN8q4D8/wflsLMIGyFQWMP8Qu/wtriiXhnbqwyuBl8K" method="POST" className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.name.label')}
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
                        placeholder={t('form.name.placeholder')}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.email.label')}
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
                        placeholder={t('form.email.placeholder')}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.message.label')}
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
                        placeholder={t('form.message.placeholder')}
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
                      t('form.submitting')
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        {t('form.submit')}
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg">
                      {t('form.success')}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
                      {t('form.error')}
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
