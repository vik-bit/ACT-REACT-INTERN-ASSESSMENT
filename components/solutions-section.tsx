import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  ShoppingCart,
  Store,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Settings,
  Users,
  BarChart3,
  Lock,
  Zap,
} from "lucide-react"

const solutions = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "End-to-end custom software solutions tailored to your business requirements. From web applications to enterprise systems.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description: "Complete eCommerce platforms with payment integration, inventory management, and customer analytics.",
    features: ["Online Stores", "Payment Gateway", "Inventory System", "Analytics Dashboard"],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Store,
    title: "Online Store Setup",
    description:
      "From basic storefronts to elite marketplace solutions. We handle everything from design to deployment.",
    features: ["Store Design", "Product Catalog", "Order Management", "Multi-vendor Support"],
    gradient: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
    features: ["iOS Apps", "Android Apps", "Cross-platform", "App Store Deployment"],
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["Cloud Migration", "DevOps", "Auto Scaling", "Monitoring"],
    gradient: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Database design, data analytics, and business intelligence solutions for data-driven decisions.",
    features: ["Database Design", "Data Analytics", "Business Intelligence", "Reporting"],
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const additionalServices = [
  { icon: Palette, title: "UI/UX Design", color: "text-purple-500" },
  { icon: Settings, title: "DevOps", color: "text-blue-500" },
  { icon: Users, title: "Consulting", color: "text-green-500" },
  { icon: BarChart3, title: "Analytics", color: "text-orange-500" },
  { icon: Lock, title: "Security", color: "text-red-500" },
  { icon: Zap, title: "Performance", color: "text-yellow-500" },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Code className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-600">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Comprehensive Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology solutions that drive innovation and accelerate
            your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className={`h-full card-hover border-0 shadow-lg ${solution.bgColor}`}>
              <CardHeader className="pb-4">
                <div className="relative mb-4">
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div
                    className={`absolute -bottom-4 left-4 bg-gradient-to-r ${solution.gradient} p-3 rounded-xl shadow-lg`}
                  >
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-800">{solution.title}</CardTitle>
                <CardDescription className="text-base text-gray-600">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full mr-3`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Plus Many More Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <service.icon className={`h-5 w-5 ${service.color}`} />
                <span className="text-gray-700 font-medium">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
