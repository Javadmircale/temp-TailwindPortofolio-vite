import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 gap-16 items-center">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="mt-8 text-slate-600 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at
            ullam molestias vero enim dolor quidem? Consequuntur iste nisi
            voluptas alias, dolorum quibusdam reiciendis! Inventore omnis ipsam
            commodi dignissimos. Facilis.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
