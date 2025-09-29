import { Code, User, ShieldCheck, Cpu } from "lucide-react"

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">  Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Who I Am ?</h3>
          <p className="text-muted-foreground">
            I'm a software programmer and embedded systems engineer with a passion for building reliable digital solutions. I specialize in both high-level application development and low-level hardware interaction.
          </p>
          <p className="text-muted-foreground">
            I enjoy solving real-world problems through code, whether it’s developing responsive web apps, working on embedded devices, or crafting secure systems with a user-first mindset.
          </p>
          <p className="text-muted-foreground">
            My technical journey is grounded in a strong foundation in mathematics and physics, which helps me reason clearly about logic, systems, and real-world problem solving. I also value clear communication—both in code and natural language—and believe language skills are essential for collaboration, documentation, and learning.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">My CV</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web and Mobile Development</h4>
                  <p className="text-muted-foreground">
                    I build responsive and dynamic web and mobile applications using modern tools like React, Node.js, and TypeScript to deliver seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">CyberSecurity and Networking</h4>
                  <p className="text-muted-foreground">
                    I incorporate fundamental security principles into my projects, from secure authentication flows to best practices for data handling and API protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Embedded Systems and Hardware</h4>
                  <p className="text-muted-foreground">
                    I work with microcontrollers and sensors to design and program embedded systems for real-time applications, often bridging software and hardware.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
I aim to create intuitive and accessible interfaces by combining thoughtful design with user feedback, ensuring both form and function align.
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
