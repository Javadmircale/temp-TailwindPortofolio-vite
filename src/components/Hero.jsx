import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24">
      <div className="align-element items-center gap-8 grid md:grid-cols-2">
        {/* Hero Info */}
        <article>
          <h1 className="font-bold text-7xl tracking-wider">I'm Javad</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            front-end developer
          </p>
          <p className="capitalize text-slate-700 mt-2 text-lg tracking-wide">
            turning ideas into interactive reality
          </p>
          {/* Social Icons */}
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="social-element" />
            </a>
            <a href="#">
              <FaLinkedin className="social-element" />
            </a>
            <a href="#">
              <FaTwitterSquare className="social-element" />
            </a>
          </div>
        </article>
        {/* Hero Image */}
        <article className="hidden md:block">
          <img src={heroImg} className="max-h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
