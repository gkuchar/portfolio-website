import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <p className="text-base text-foreground/60">welcome, my name is</p>
            <h1 className="font-display text-8xl font-bold leading-none mt-2">
                Griffin
                <br />
                Kuchar
            </h1>
            <p className="text-base text-foreground/60 mt-4">nice to meet you!</p>
            <p className="text-3xl mt-8">
            I am <span className=" text-4xl font-display font-bold">a builder</span>.
            </p>
            <p className="text-sm text-foreground mt-6 leading-relaxed max-w-prose">
            I am a Senior at Texas Christian University (TCU) studying Computer Science,
            Mathematics, and Economics, graduating in May 2027. I'm the product of
            cultivating Machine Learning undergraduate research and CS tutoring with two
            strong industry internships at AMD.
            </p>
            <p className="text-sm text-foreground mt-6 leading-relaxed max-w-prose">
            At my core, I am a creator and a builder who sets and achieves his own goals: learning new skills, meeting new people,
            and maturing as both a person and an engineer along the way.
            </p>
            <div className="flex items-center gap-4 mt-8">
                <a href="mailto:griffin.kuchar@gmail.com" className="btn-primary">
                    Let's Talk
                </a>
                <a
                    href="https://www.linkedin.com/in/griffin-kuchar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tertiary"
                    aria-label="LinkedIn"
                    >
                    <FaLinkedin size={22} />
                </a>
                <a
                    href="https://github.com/gkuchar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tertiary"
                    aria-label="GitHub"
                    >
                    <FaGithub size={22} />
                </a>
            </div>
        </div>
        <div>
          {/* right column: photo */}
        </div>
      </div>
    </section>
  );
}