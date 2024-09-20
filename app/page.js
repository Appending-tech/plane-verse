import Brands from "./components/brands";
import Ilustration from "./components/ilustration";
import Intro from "./components/intro";

export default function Home() {
  return (
    <div className="bg-white">
    <Intro />
    <Ilustration />
    <Brands />
    </div>
  );
}
