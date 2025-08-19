"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Send, Sparkles, Heart, Shield } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon with updates about our rudraksha collection.",
      });

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        message: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black overflow-x-hidden relative">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-orange-900/25 to-red-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.15)_0%,_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(251,191,36,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(220,38,38,0.1)_0%,_transparent_50%)]"></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500/15 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-red-500/15 to-amber-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-orange-400/5 rounded-full blur-3xl animate-pulse delay-1500"></div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-1/3 right-1/2 w-1 h-1 bg-amber-300 rounded-full animate-bounce delay-1000 opacity-30"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center py-8 lg:py-0">
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center lg:h-full max-w-7xl mx-auto">

              {/* Left Column - Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                {/* Enhanced Logo and Brand Name */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-4">
                  <div className="relative group">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-xl lg:rounded-2xl shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-white animate-pulse" />
                    </div>
                    <div className="absolute inset-0 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-400/20 via-orange-500/20 to-red-500/20 rounded-xl lg:rounded-2xl blur-xl animate-pulse"></div>
                  </div>
                  <div className="relative">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
                      Pashupati Beads
                    </h1>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>

                {/* Subtitle */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90">
                  Sacred Rudraksha Collection
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Discover the divine power of authentic rudraksha beads. Our collection brings you the finest
                  spiritual beads sourced from the sacred lands of Nepal.
                </p>

                {/* Enhanced Coming Soon Badge */}
                <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-white/30 shadow-lg">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-amber-400 rounded-full mr-2 lg:mr-3 animate-pulse"></div>
                  <span className="text-white font-medium text-sm lg:text-base">
                    Coming Soon - Early Access Available
                  </span>
                  <div className="ml-2 lg:ml-3 w-1 h-1 bg-amber-400 rounded-full animate-ping"></div>
                </div>

                {/* Features */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 pt-6 lg:pt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        Authentic Quality
                      </h3>
                      <p className="text-white/60 text-sm">
                        Certified genuine rudraksha beads
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        Sacred Sourcing
                      </h3>
                      <p className="text-white/60 text-sm">
                        Direct from Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        Spiritual Guidance
                      </h3>
                      <p className="text-white/60 text-sm">
                        Expert consultation available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        Divine Connection
                      </h3>
                      <p className="text-white/60 text-sm">
                        Enhance your spiritual journey
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="hidden lg:block pt-6 lg:pt-8">
                  <p className="text-white/50 text-sm lg:text-base">
                    © 2025 Pashupati Beads • Sacred • Authentic • Divine
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm sm:max-w-md">
                  <div className="bg-white/5 backdrop-blur-2xl rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
                    {/* Form background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-red-500/5 rounded-2xl lg:rounded-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/3 via-orange-400/3 to-red-400/3 rounded-2xl lg:rounded-3xl blur-xl"></div>
                    <div className="relative z-10">
                      <div className="text-center mb-6 lg:mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 lg:mb-3">
                          Get Early Access
                        </h3>
                        <p className="text-white/70 text-sm lg:text-base">
                          Join the spiritual journey first
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-12 lg:h-14 px-3 lg:px-4 text-sm lg:text-base border-2 border-white/20 focus:border-amber-400 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl transition-all duration-300 focus:ring-4 focus:ring-amber-400/20 focus:scale-[1.02] text-white placeholder-white/50 hover:border-white/30 hover:bg-white/15"
                          placeholder="Full Name *"
                        />

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12 lg:h-14 px-3 lg:px-4 text-sm lg:text-base border-2 border-white/20 focus:border-amber-400 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl transition-all duration-300 focus:ring-4 focus:ring-amber-400/20 focus:scale-[1.02] text-white placeholder-white/50 hover:border-white/30 hover:bg-white/15"
                          placeholder="Email Address *"
                        />

                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          className="h-12 lg:h-14 px-3 lg:px-4 text-sm lg:text-base border-2 border-white/20 focus:border-amber-400 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl transition-all duration-300 focus:ring-4 focus:ring-amber-400/20 focus:scale-[1.02] text-white placeholder-white/50 hover:border-white/30 hover:bg-white/15"
                          placeholder="WhatsApp Number"
                        />

                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="min-h-[80px] lg:min-h-[100px] px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border-2 border-white/20 focus:border-amber-400 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl resize-none transition-all duration-300 focus:ring-4 focus:ring-amber-400/20 focus:scale-[1.02] text-white placeholder-white/50 hover:border-white/30 hover:bg-white/15"
                          placeholder="Message / Enquiry"
                        />

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 lg:h-14 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-bold rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm lg:text-base relative overflow-hidden group"
                        >
                          {/* Button glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 rounded-lg lg:rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                          <div className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-white mr-2"></div>
                                <span>Sending...</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <Send className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                                <span>Get Early Access</span>
                              </div>
                            )}
                          </div>
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
