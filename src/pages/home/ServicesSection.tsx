import Container from "@/components/Container";
import Service1 from "@/components/Service1/Service1";

const ServicesSection = () => {
  return (
    <Container className="">
      <div className="flex flex-col justify-between items-center">
        <h1>Look at our services man </h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus
          iusto quo voluptate minus itaque odit suscipit inventore vitae at!
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <Service1 />
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-5"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl  col-span-12 md:col-span-6 lg:col-span-7"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6  lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl  col-span-12 md:col-span-6  lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl  col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
