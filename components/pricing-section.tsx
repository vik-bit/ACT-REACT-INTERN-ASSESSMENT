"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$2,999",
    description: "Perfect for startups and small businesses",
    icon: Zap,
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50",
    features: [
      "Custom Web Application",
      "Responsive Design",
      "Basic SEO Setup",
      "3 Months Support",
      "Source Code Delivery",
      "Basic Analytics",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "$7,999",
    description: "Ideal for growing businesses",
    icon: Rocket,
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-blue-50 to-purple-50",
    features: [
      "Everything in Basic",
      "Mobile App (iOS/Android)",
      "Advanced Analytics",
      "Payment Integration",
      "6 Months Support",
      "API Development",
      "Database Design",
      "Cloud Deployment",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$15,999",
    description: "Enterprise-grade solutions",
    icon: Crown,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    features: [
      "Everything in Standard",
      "Multi-platform Solution",
      "Advanced Security",
      "12 Months Support",
      "DevOps & CI/CD",
      "Performance Optimization",
      "Third-party Integrations",
      "Dedicated Project Manager",
      "Priority Support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Star className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-600">Flexible Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Choose Your Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our commitment to quality, excellence, and your
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative h-full card-hover border-0 shadow-xl bg-gradient-to-br ${plan.bgGradient} ${
                plan.popular ? "scale-105 ring-2 ring-blue-500/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 relative">
                <div
                  className={`mx-auto w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600">/project</span>
                </div>
                <CardDescription className="mt-4 text-base text-gray-600">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`p-1 rounded-full bg-gradient-to-r ${plan.gradient} mr-3`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white shadow-lg`
                      : "border-2 border-gray-300 hover:border-gray-400"
                  } transition-all duration-300`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Need Something Custom?</h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. We offer flexible pricing and custom solutions tailored to your specific
              requirements and budget.
            </p>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
