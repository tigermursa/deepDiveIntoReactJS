import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import tab from "../../assets/Samsung_Galaxy_Tab_S3.png";
import React from "react";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center ">
      <div>
        <h1 className="text-6xl font-bold">
          <span className="text-gray mb-10">Hey Nigga</span>
          <br></br>
          <span className="">Buy Buy</span>
        </h1>
        <p className=" text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          explicabo quisquam quidem voluptatibus magni ullam nam debitis
          laudantium deleniti doloremque.
        </p>
        <Button>Book Service Now</Button>
      </div>
      <div className=" flex justify-center">
        <img
          className="-rotate-[30deg]"
          width={350}
          height={350}
          src={tab}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
