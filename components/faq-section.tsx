import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of software solutions does ACT provide?",
    answer:
      "ACT specializes in custom software development, eCommerce solutions, mobile applications, web development, cloud solutions, and digital transformation services. We work with businesses of all sizes, from startups to enterprise-level organizations.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity and scope. Basic projects typically take 4-8 weeks, Standard projects 8-16 weeks, and Elite projects 16-24 weeks. We provide detailed timelines during the initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, all our plans include post-launch support. Basic plans include 3 months of support, Standard plans include 6 months, and Elite plans include 12 months. We also offer extended maintenance contracts for long-term partnerships.",
  },
  {
    question: "Can you work with our existing systems and integrate new solutions?",
    answer:
      "We specialize in system integration and can work with your existing infrastructure. Our team has experience with various platforms, APIs, and legacy systems to ensure seamless integration.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with regular client communication. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. You'll receive regular updates and have opportunities to provide feedback throughout the project.",
  },
  {
    question: "Do you provide source code and documentation?",
    answer:
      "Yes, you receive complete ownership of the source code and comprehensive documentation with all our plans. We believe in transparency and ensuring you have full control over your digital assets.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our team is proficient in modern technologies including React, Node.js, Python, Java, .NET, mobile frameworks (React Native, Flutter), cloud platforms (AWS, Azure, GCP), and various databases. We choose the best technology stack for each project.",
  },
  {
    question: "How do you ensure the security of our applications?",
    answer:
      "Security is a top priority. We implement industry-standard security practices including data encryption, secure authentication, regular security audits, and compliance with relevant standards (GDPR, HIPAA, etc.). Our Elite plans include advanced security features.",
  },
]

export function FAQSection() {
  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our services and development process.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
