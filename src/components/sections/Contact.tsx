import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { FaLinkedinIn, FaBehance, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Create a mailto link
    const mailtoLink = `mailto:isamadafridi@gmail.com?subject=${encodeURIComponent(
      subject as string
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open default mail client
    window.location.href = mailtoLink;

    setSubmitStatus('success');
    setIsSubmitting(false);
    form.current?.reset();
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            Let's Work <span className="text-primary">Together</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-6 origin-left"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your personal brand? Fill out the form below or reach out directly via email or social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-background border border-border rounded-[2.5rem] p-6 md:p-12 shadow-2xl">

          {/* Contact Info (Left) */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6 tracking-wide">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:Fayazafridi312@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Email Me</span>
                    <span className="text-white font-medium group-hover:text-primary transition-colors">Fayazafridi312@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+923129979558" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Call Me</span>
                    <span className="text-white font-medium group-hover:text-primary transition-colors">+92 312 9979558</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Location</span>
                    <span className="text-white font-medium">Peshawar, KPK, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading mb-6 tracking-wide">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/fayaz-afridi-80ba02224' },
                  { icon: FaBehance, link: 'https://www.behance.net/fayazafridi' },
                  { icon: FaWhatsapp, link: 'https://wa.me/923129979558' },
                  { icon: FaInstagram, link: 'https://www.instagram.com/fayaz_afridii' },
                  { icon: FaFacebookF, link: 'https://www.facebook.com/fayaz_afridii' },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-3 bg-card border border-primary rounded-3xl p-6 md:p-10 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-heading mb-8 tracking-wide">Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white"
                    placeholder="abc"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin w-5 h-5" /> Sending...</>
                ) : (
                  <><Send className="w-5 h-5" /> Send Message</>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm text-center mt-4">Your message has been sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center mt-4">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
