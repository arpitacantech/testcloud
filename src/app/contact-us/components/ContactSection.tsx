"use client";
import { useState } from "react";
import { MapPin, Mail, PhoneCall, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormData>;

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length > 200) {
      newErrors.subject = "Subject must be less than 200 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <section className="min-h-screen relative py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Your message has been successfully sent.
          </p>
          <p className="text-gray-400 mb-8">
            We appreciate you reaching out to us. Our team will review your message and get back to you within 24-48 hours.
          </p>
          <button
            onClick={() => setShowThankYou(false)}
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-start space-y-10">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-white">
                      Address
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      F/6, 602, Victoria Prime, Nr Kalvibid Water
                      <br />
                      Tank Kalvibid "D", Bhavnagar Gujarat,
                      <br />
                      India - 364002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:sales@cantech.in"
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      sales@cantech.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <PhoneCall className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-white">
                      Phone
                    </h3>
                    <a
                      href="tel:7096937096"
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      +91 7096937096
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Send Us A Message
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 transition-colors focus:border-1 focus:outline-none focus:ring-2 focus:ring-white/75"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 transition-colors focus:border-1 focus:outline-none focus:ring-2 focus:ring-white/75"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 transition-colors focus:border-1 focus:outline-none focus:ring-2 focus:ring-white/75"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Leave us message"
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 transition-colors focus:border-1 focus:outline-none focus:ring-2 focus:ring-white/75"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-white text-black px-8 py-3 font-semibold uppercase tracking-widest transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;