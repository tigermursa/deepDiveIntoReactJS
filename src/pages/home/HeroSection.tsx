import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <Container className="">
      <div>
        <h1>
          <span>Don't worry ,</span>
          <br></br>
          <span>We'll fix it.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          numquam esse ea vitae inventore maxime, ab veritatis porro praesentium
          ducimus consequatur voluptates aut dolore nesciunt repellendus
          corrupti recusandae! Dolor, a? Dolorem exercitationem repudiandae.
        </p>
        <Button>Book Service Now</Button>
      </div>
      <div></div>
    </Container>
  );
};

export default HeroSection;
