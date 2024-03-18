import React from "react";
import { Fade } from "react-reveal";
const Classes = () => {
  return (
    <div className="classes section container" id="classes">
      <div className="classes__container">
        <div className="classes__box">
          <Fade left delay={500}>
            <h2 className="section__title">
              JOIN THE MOVEMENT, BE YOUR BEST SELF <br />
              Get Started Today!
            </h2>
          </Fade>
        </div>

        <div className="classes__category">
          <Fade bottom delay={800}>
            <div className="classes__group">
              <div className="classes__img__border">
                <img
                  src="./images/fitness.webp"
                  alt=""
                  className="classes__img"
                />
              </div>
              <h3 className="classes__title">Personal Fitness</h3>
              <p className="classes__description">
                Shape your muscle with us, we have 1500m2 of modern space to
                exercise
              </p>
            </div>
          </Fade>
          <Fade bottom delay={700}>
            <div className="classes__group">
              <div className="classes__img__border">
                <img
                  src="./images/gym_3.webp"
                  alt=""
                  className="classes__img"
                />
              </div>
              <h3 className="classes__title">Best Trainers</h3>
              <p className="classes__description">
                Personal trainers are responsible for motivating and guiding
                clients to train towards their physical fitness goals, which
                could include losing weight, building muscle, increasing core
                strength, or improving cardiovascular fitness
              </p>
            </div>
          </Fade>
          <Fade bottom delay={600}>
            <div className="classes__group">
              <div className="classes__img__border">
                <img
                  src="./images/pexels-rui-dias-1472887.jpg"
                  alt=""
                  className="classses__img"
                />
              </div>
              <h3 className="classes__title">Yoga</h3>
              <p className="classes__description">
                Our yoga teacher training courses go beyond borders help with
                anxiety,stress,blood pressure,improves concentrationand
                coordination, helps you sleep better and most importantly
                improves your overall fitness level and posture and flexibility.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Classes;
