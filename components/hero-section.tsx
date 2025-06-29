"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap, Shield, Sparkles, Rocket, Globe } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8">
            <Sparkles className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-600">Transforming Ideas into Digital Reality</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Transform Your Business with
            <span className="block text-gradient mt-2">Cutting-Edge Technology</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            ACT (Avyukt Core Technology) delivers custom software solutions, eCommerce platforms, and digital
            transformation services that drive growth and innovation for businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("#solutions")}
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="text-lg px-8 py-4 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              <Globe className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mb-16 relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="ACT Technology Solutions Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✨ Live Demo
              </div>
            </div>
          </div>

          {/* Feature highlights with colorful icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Custom Development</h3>
              <p className="text-gray-600">Tailored software solutions built for your unique business needs</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Lightning Fast</h3>
              <p className="text-gray-600">Rapid development cycles with agile methodologies</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-4 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security and compliance standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
