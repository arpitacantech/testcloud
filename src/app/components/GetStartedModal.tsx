"use client";
import { useState } from 'react';
import { X, CheckCircle2, ChevronDown } from "lucide-react";

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  jobTitle?: string;
  solution?: string;
  useCase?: string;
};

type CantechCloudModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CantechCloudModal({ open, onClose, }: CantechCloudModalProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    jobTitle: "",
    solution: "",
    useCase: "",
  });

  if (!open) return null;

  const jobTitles = [
    "AI/ML Engineer",
    "Data Scientist",
    "Data Engineer",
    "Data Analyst",
    "DevOps Specialist",
    "Product Manager",
    "Engineering Head",
    "Architect",
    "CEO",
    "CTO",
    "CIO",
    "Founders",
    "Others",
  ];

  const solutions = [
    "Cloud GPU",
    "IaaS - Compute",
    "IaaS - Storage",
    "IaaS - Network",
    "Kubernetes",
    "AWS Services",
    "Managed IT Services",
    "Managed Security Services",
    "Others",
  ];

  const useCases = [
    "AI/ML Training",
    "Inferencing & LLM Deployment",
    "3D Rendering & VFX",
    "Video Processing & Streaming",
    "Virtual Workstation & VDI",
    "Scientific Computing",
    "Others",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Business email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Job Title
    if (!formData.jobTitle) {
      newErrors.jobTitle = "Please select your job title";
    }

    // Solution
    if (!formData.solution) {
      newErrors.solution = "Please select a solution";
    }

    // Use Case
    if (!formData.useCase) {
      newErrors.useCase = "Please select a use case";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) { return; }

    setIsSubmitting(true);

    try {
        const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Submission failed");

        setIsSubmitted(true);

        setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
            name: "",
            phone: "",
            email: "",
            jobTitle: "",
            solution: "",
            useCase: "",
        });
        }, 3000);
    } catch (error) {
        console.error(error);
        alert("Something went wrong. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 text-gray-400 hover:text-white"
        >
          <X size={22} />
        </button>
        
        {!isSubmitted ? (
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="absolute top-0 left-0 z-0">             
            <img className="w-100 grayscale" src="/assets/images/get-started-model.webp" alt="Supercharge Your Compute Power! | Cantech Cloud" />
          </div>
          {/* LEFT SIDE – CONTENT */}
          <div className="glass-card p-8 overflow-hidden border-0 rounded-none text-white">
            
            <h2 className="text-3xl font-bold mb-4">
              Spend less. Build faster. Scale Smarter
            </h2>

            <p className="text-white/80 mb-6 leading-relaxed">
              Overspending on cloud compute that under delivers? Switch to Cantech Cloud built to deliver high performance, scale smarter with cloud expertise and reliability.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                Upto 80% low Cloud costs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                Proven 99.97% uptime and performance guarantee
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                Built-in enterprise security and compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                24/7 expert support from cloud and AI specialists
              </li>
            </ul>

            <div className="mt-10 text-center text-xl text-white/70">
              Trusted by leading enterprises
            </div>
            <div className="grid grid-cols-3 grid-flow-row mt-7 items-center">
              <div className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/assets/images/clients/tatapower.png" alt="Client logo" />
              </div>
              <div className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/assets/images/clients/creyon.png" alt="Client logo" />
              </div>
              <div className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/assets/images/clients/daawat.png" alt="Client logo" />
              </div>
              <div className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/assets/images/clients/hfcl.png" alt="Client logo" />
              </div>
              <div className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/assets/images/clients/jadeblue.png" alt="Client logo" />
              </div>
              <div className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/assets/images/clients/purple.png" alt="Client logo" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
            <div className="relative bg-black z-10 p-8">
              <div className="text-3xl font-sora font-bold text-white mb-2">
                Start Deploying in Minutes
              </div>
              <p className="text-gray-400 text-sm mb-6">
                We will reach out you soon to help you get started.
              </p>

              <form className="space-y-4">
                <input
                  required
                  name="name"
                  placeholder="Name*"
                  onChange={handleChange}
                  className={`w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 border ${errors.name ? "border-red-500" : "border-white/10"} focus:outline-none focus:border-white/30`}
                />

                <input
                  required
                  name="phone"
                  placeholder="Contact Number*"
                  onChange={handleChange}
                  className={`w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 border ${errors.phone ? "border-red-500" : "border-white/10"} focus:outline-none focus:border-white/30`}
                />

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Business Email*"
                  onChange={handleChange}
                  className={`w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 border ${errors.email ? "border-red-500" : "border-white/10"} focus:outline-none focus:border-white/30`}
                />

                <div className="relative">
                  <select required name="jobTitle" onChange={handleChange} className={`w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 border appearance-none pr-10 ${ errors.jobTitle ? "border-red-500" : ""} focus:outline-none focus:border-white/30`}>
                    <option value="">Job Title*</option>
                    {jobTitles.map(j => (<option key={j}>{j}</option>))}
                  </select>
                  <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                <div className="relative">
                  <select required name="solution" onChange={handleChange} className={`w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 border appearance-none pr-10 ${errors.solution ? "border-red-500" : ""} focus:outline-none focus:border-white/30`}>
                    <option value="">Solutions*</option>
                    {solutions.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                <div className="relative">
                  <select required name="useCase" onChange={handleChange} className={`w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 border appearance-none pr-10 ${errors.useCase ? "border-red-500" : ""} focus:outline-none focus:border-white/30`}>
                    <option value="">Use Cases*</option>
                    {useCases.map(u => <option key={u}>{u}</option>)}
                  </select>
                  <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full mt-6 rounded-lg bg-white py-3 font-semibold text-black hover:opacity-90"
                >
                  {isSubmitting ? "Sending..." : "Book Consultation"}
                </button>

                <p className="text-xs text-gray-500 mt-3">
                  We value your privacy and will use your information only to communicate and share relevant content.
                </p>
              </form>
            </div>
        </div>
        ) : (
        <div className="flex min-h-[420px] flex-col items-center justify-center p-12 text-center">
            <CheckCircle2 size={56} className="mb-6 text-green-500" />
            <h2 className="mb-4 text-4xl font-bold text-white">Thank You!</h2>
            <p className="mb-4 text-lg text-gray-300">Your message has been successfully sent.</p>
            <p className="max-w-xl text-gray-400">We appreciate you reaching out. Our team will review your request and get back to you within <strong>24–48 hours</strong>.</p>
            <button onClick={handleClose} className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-black hover:opacity-90">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}