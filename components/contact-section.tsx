"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6">
            <MessageCircle className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-green-600">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and find the perfect solution that drives your
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Contact Cards */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Us</h3>
                      <p className="text-blue-600 font-medium">hello@act-tech.com</p>
                      <p className="text-sm text-gray-600">We reply within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <p className="text-green-600 font-medium">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Visit Us</h3>
                      <p className="text-purple-600 font-medium">
                        123 Tech Street
                        <br />
                        Innovation District
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">24h</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Send className="mr-3 h-6 w-6" />
                  Start Your Project
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal and next
                  steps.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700 font-medium">
                        Service Needed
                      </Label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 rounded-lg">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom-software">Custom Software Development</SelectItem>
                          <SelectItem value="ecommerce">eCommerce Solutions</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-gray-700 font-medium">
                        Project Budget
                      </Label>
                      <Select onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 rounded-lg">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message & Get Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
