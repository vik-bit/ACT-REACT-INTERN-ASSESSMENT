import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github, Heart, Sparkles } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-400 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold">ACT</span>
                <div className="text-sm text-blue-200">Avyukt Core Technology</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative software solutions, custom development, and cutting-edge
              technology implementations. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <Twitter className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Solutions", "Pricing", "FAQs", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm group">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">hello@act-tech.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm group">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-sm group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  123 Tech Street
                  <br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} ACT (Avyukt Core Technology). Made with
              <Heart className="h-4 w-4 mx-1 text-red-400" />
              for innovation.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
