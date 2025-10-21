import HeroImg from "@/assets/images/krish.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, Problem Solver, Scalable Systems Builder
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            {/* <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-semibold">Krish Singh</span>, a
                passionate{" "}
                <span className="font-semibold">Full-Stack Developer</span> with
                a deep love for JavaScript and scalable web architectures. I
                specialize in building modern, dynamic, and high-performance web
                applications using{" "}
                <span className="font-semibold">
                  Node.js, Express.js, React.js, and MongoDB
                </span>
                .
              </p>

              <p className="text-white">
                My focus is on crafting seamless user experiences, developing
                robust backends, and deploying efficient cloud solutions. From
                creating the{" "}
                <span className="font-semibold">
                  Official IIIT Nagpur Website
                </span>{" "}
                to developing scalable SaaS and e-commerce platforms, I thrive
                on solving complex problems and optimizing performance.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner and innovator, exploring{" "}
                    <span className="font-semibold">
                      DevOps, Cloud, and Microservices
                    </span>{" "}
                    to bridge the gap between frontend creativity and backend
                    engineering. I enjoy mentoring teams, contributing to
                    open-source projects, and building solutions that bring real
                    value to users and developers alike.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Krish Singh, Full-Stack Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">
                        Building Scalable Web Experiences
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div> */}

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-semibold">Krish Singh</span>, a
                passionate{" "}
                <span className="font-semibold">Full-Stack Developer</span> who
                loves building innovative, scalable, and user-focused web
                applications. I specialize in{" "}
                <span className="font-semibold">
                  Node.js, Express.js, React.js, and MongoDB
                </span>{" "}
                to craft robust systems that combine clean design with powerful
                backend logic.
              </p>

              <p className="text-white">
                I've developed and deployed production-grade projects, including
                the{" "}
                <span className="font-semibold">
                  Official IIIT Nagpur Website
                </span>
                , full-stack SaaS platforms, and e-commerce web apps with{" "}
                <span className="font-semibold">scalable microservices</span>{" "}
                and RESTful APIs. My goal is to create seamless,
                high-performance solutions that empower both users and
                developers.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner and innovator, continuously exploring{" "}
                    <span className="font-semibold">
                      Cloud, DevOps, and Distributed Systems
                    </span>{" "}
                    to bridge the gap between frontend creativity and backend
                    efficiency. I enjoy leading teams, optimizing performance,
                    and designing scalable architectures that deliver real-world
                    impact.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Krish Singh, Full-Stack Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">
                        Building Scalable Web Experiences
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
