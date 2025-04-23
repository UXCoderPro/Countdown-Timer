import logo from "./Assets/logo.svg";
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="w-full h-screen bg-hero-pattern object-cover bg-center relative flex justify-center items-center">
      <img src={logo} className="absolute top-9 left-20" alt="hero" />
      <Timer />
      <div className="absolute left-20 bottom-16 flex gap-4 items-center">
        <hr className=" bg-white w-48 h-1 rounded-full" />
        <p className="text-white text-2xl font-normal leading-6">
          © [2025] Abdul Aziz V I. Designed to delight, developed to perform.
        </p>
      </div>
    </div>
  );
}

export default App;
