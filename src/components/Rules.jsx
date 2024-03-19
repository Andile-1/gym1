import { Fade } from "react-reveal";
const Rules = () => {
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
      style={{ backgroundImage: `url(/images/pexels-scott-webb-136404.jpg)` }}
    >
      <Fade top>
        <h1 className="hero_title">Rules and Regulations</h1>
        <p>
          {" "}
          Your membership will commence on the Start Date, from which date you
          will be entitled to access the facilities of Motion Fitness in
          accordance with your selected membership type and will continue for a
          fixed period payable upfront or via debit order. Should you wish to
          terminate your membership on the termination date of your initial
          period, then you should notify your home facility by giving 20
          business days prior written notice. Should your notice be within your
          minimum duration period, a cancellation fee will be applicable. Please
          keep in mind that Motion Fitness may at any time withdraw all or part
          of its facilities for any period in connection with the repair,
          alteration or refurbishment of the facilities or for any reason beyond
          the control of Motion Fitness. Please take note of the below fee
          structure and understand that all of the below fees are applicable for
          each and every membership.
        </p>
      </Fade>
    </section>
  );
};
export default Rules;
