import React from "react";
import { Fade } from "react-reveal";

const Classes = () => {
  return (
    <div className="classes section container" id="classes">
      <div className="classes__container">
        <div className="classes__box">
          <Fade left delay={500}>
            <h2 className="section__title">
              JOIN THE MOVEMENT. BE YOUR BEST SELF <br />
              Get Started Today!
            </h2>
          </Fade>
        </div>

        <div className="classes__category">
          <Fade bottom delay={700}>
            <div className="classes__group">
              <div className="classes__img__border">
                <img
                  src="./images/fitness.webp"
                  alt=""
                  className="classes__img"
                />
              </div>
              <h3 className="classes__title">Fitness</h3>
              <p className="classes__description">
                Only one thing’s more important than starting to move more –
                that’s keeping it going. And we’ve got all the motivation you
                need. Everything from top athletes’ inspiring stories, to fresh
                ideas for home workouts and music playlists that are impossible
                to sit down to.
              </p>
            </div>
          </Fade>

          <Fade bottom delay={600}>
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

          <Fade bottom delay={500}>
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
