import Image from "next/image";
import spinner from "./assets/spinner1.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <Image
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
