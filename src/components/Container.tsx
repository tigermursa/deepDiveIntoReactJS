import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={cn(
        "w-full h-full max-w-[1220px] px-[20px] mx-auto  bg-red-400 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
