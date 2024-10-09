import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Rocket, Globe, Users, Target } from "lucide-react";
import Image from "next/image";

import Logo from "../images/org45.png";

const projects = [
  {
    name: "Escrow Agent",
    desc: "General purpose Escrow agent using Postgresql, go and more.",
    url: "https://github.com/org-45/escrow-agent",
  },
  {
    name: "Computer book for kids",
    desc: "200+ ideas as introductory Computer Science book.",
    url: "https://github.com/org-45/computer-book-for-kids",
  },
  {
    name: "React boilerplate",
    desc: "Simple production grade, enterprise grade vite based react project starter.",
    url: "https://github.com/org-45/react-boilerplate",
  },
];

export default function Org45Website() {
  return (
    <div className="min-h-screen bg-sky-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-100 to-sky-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <Image
            src={Logo}
            alt="Org45 Logo"
            width={200}
            height={100}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">
            Welcome to org45
          </h1>
          <p className="text-xl mb-8 text-sky-700">
            An open-source focused task force team of software developers,
            enthusiasts, and professionals.
          </p>
          <Button className="bg-sky-900 hover:bg-sky-600 text-white">
            Join Our Community
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4 text-gray-800">
              🚀 Org45 is an open-source focused task force team of software
              developers, enthusiasts, and professionals.
            </p>
            <p className="text-lg mb-4 text-gray-800">
              🌐 We focus on developing projects to maintain a portfolio for
              respective teams in each vertical of technologies.
            </p>
            <p className="text-lg mb-4 text-gray-800">
              🤝 We prioritize open communication and teamwork, leading to
              innovative and effective solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-800">
              💼 Our incentives are based on team member contributions to
              open-source projects, as well as converting POCs and portfolio
              projects to real contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-sky-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">
            Our Projects
          </h2>
          <p className="text-lg text-center mb-8 text-gray-800">
            📈 Our goal is to create POCs, MVPs, and portfolio projects for
            various market verticals using open-source tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  {project.name}
                </h3>
                <p className="text-gray-800 mb-4">{project.desc}</p>

                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="text-sky-900 border-sky-900 hover:bg-sky-50"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://github.com/org-45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-700 hover:text-sky-800"
            >
              <Github className="w-5 h-5 mr-2" />
              View our projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">
            Our Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Rocket className="w-8 h-8 text-sky-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Develop Portfolio Projects
                </h3>
                <p className="text-gray-700">
                  Create POCs, MVPs, and portfolio projects for various market
                  verticals using open-source tools.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="w-8 h-8 text-sky-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Expand Technical Expertise
                </h3>
                <p className="text-gray-700">
                  Cover various technical verticals including UI, backend,
                  mobile, QA, AI, database, data engineering, devops, AWS,
                  security, design, low code, agile, AR, VR, and IoT.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="w-8 h-8 text-sky-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Foster Community Growth
                </h3>
                <p className="text-gray-700">
                  Focus on college students while welcoming professionals as we
                  secure client contracts.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Target className="w-8 h-8 text-sky-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Drive Innovation
                </h3>
                <p className="text-gray-700">
                  Encourage open discussions and feedback to meet clients needs
                  and exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-sky-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">
            Our Team
          </h2>
          <p className="text-lg text-center mb-8 text-gray-800">
            🧑‍💻 Our team consists of experts in different technical verticals,
            each responsible for managing and executing projects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "UI",
              "Backend",
              "Mobile",
              "QA",
              "AI",
              "Database",
              "DevOps",
              "AWS",
            ].map((vertical, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <h3 className="text-lg font-semibold text-sky-700">
                  {vertical}
                </h3>
                <p className="text-sm text-gray-700">team</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <Input type="text" placeholder="Subject" className="w-full" />
              <Textarea placeholder="Your message" className="w-full h-32" />
              <Button
                type="submit"
                className="bg-sky-900 hover:bg-sky-600 text-white w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Image
                src={Logo}
                alt="Org45 Logo"
                width={100}
                height={50}
                className="mr-4"
              />
              <p>org45open@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-200">
                Home
              </a>
              <a href="#" className="hover:text-sky-200">
                About
              </a>
              <a href="#" className="hover:text-sky-200">
                Projects
              </a>
              <a href="#" className="hover:text-sky-200">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 org45. All rights reserved.</p>
            <a
              href="https://github.com/org-45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-sky-200 hover:text-white"
            >
              <Github className="w-5 h-5 mr-2" />
              Follow us on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
