import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle, Copy, Mail, Check } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const email = "devopsciroperez@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setStatus('sending');
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('contact.title')}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 bg-white/5 rounded-lg p-4 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <Mail className="w-5 h-5 mr-2 text-blue-500" />
            <span className="text-sm md:text-base">{email}</span>
          </div>
          <button
            onClick={copyEmail}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center hover:bg-blue-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                {t('contact.copied')}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                {t('contact.copyEmail')}
              </>
            )}
          </button>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium mb-2">
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-navy-light dark:border-navy-light"
            />
          </div>
          <div>
            <label htmlFor="from_email" className="block text-sm font-medium mb-2">
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-navy-light dark:border-navy-light"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              {t('contact.subject')}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-navy-light dark:border-navy-light"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-navy-light dark:border-navy-light"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-navy text-white dark:bg-white dark:text-navy px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{t('contact.send')}</span>
            {status === 'sending' ? (
              <Send className="w-5 h-5 animate-pulse" />
            ) : status === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : status === 'error' ? (
              <XCircle className="w-5 h-5 text-red-500" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-center">{t('contact.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">{t('contact.error')}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;