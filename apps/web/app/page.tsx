import Headline from "@/elements/Headline/Headline";
import Button from "@/components/elements/Button/Button";

const page = () => {
  return (
    <div>
      <Headline tag="h1" modifier="h1">
        Travel Tale
      </Headline>
      <Button text={"Test Button"} onClick={() => {console.log("Test Test Function works!")}}></Button>
    </div>
  );
};

export default page;
