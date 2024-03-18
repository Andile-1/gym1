import { Fade } from "react-reveal";
const Hero = () => {
  const orderNow = () => {
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });
  };
  return (
    <section
      className="hero section"
      id="home"
      style={{ backgroundImage: `url(./images/gym.webp)` }}
    >
      <Fade top>
        <h1 className="hero_title">
          Challange <br />
          Yourself
        </h1>
        <p>
          {" "}
          <span>Join FitnessHub</span> and get your daily dose of fitness using
          world class equipment, functional facilities, great trainers and best
          machine of all, YOU.
          <br />
          Discover your personal potential now!
        </p>

        <button className="hero_button" onClick={orderNow}>
          Join Now
        </button>
      </Fade>
    </section>
  );
};
export default Hero;
