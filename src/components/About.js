import React from 'react';
import me from "../img/ValeriaRagonese.jpg"

const About = () => (
  <div className="about-page">
    <h3>What's Credenza?</h3>
    <div className="desc">
      How many times have you come home from your shopping, only to find out you already had 4
      cans of pickled eggs in your pantry (we are not judging...)?
      <br /><br />
      <strong>FEAR NO MORE!</strong>
      <br /><br />
      With <strong>Credenza</strong> (it means "pantry" in Italian), you can finally keep track of your food items at home, so you won't buy stuff you don't need (or want).
    </div>

    <div className="author">
      <img src={me} alt="Valeria Ragonese" />
      <p>
      <strong>Credenza</strong> has been developed by <strong><i>Valeria Ragonese</i></strong>.
      <br />
      You can find her online on:
      <div className="social">
        <a href="https://twitter.com/ValeriaRagonese" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/valeriaragonese/" target="blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/morwen80" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt"></i></a>
        <a href="https://medium.com/@ragonese.valeria" target="_blank" rel="noopener noreferrer"><i class="fab fa-medium-m"></i></a>
      </div>
      </p>
    </div>

  </div>
)
export default About
