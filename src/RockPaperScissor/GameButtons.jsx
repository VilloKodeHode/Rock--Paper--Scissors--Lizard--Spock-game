import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import LIZARD from "./assets/icon-lizard.svg";
import SPOCK from "./assets/icon-spock.svg";
import FIRE from "./assets/icon-fire.png";
import WATER from "./assets/icon-water.png";

//Largest buttons:
export function ScissorsGameButton() {
  return (
    <div
      className={`border-b-8 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-yellow-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={SCISSORS} />
        </div>
      </div>
    </div>
  );
}

export function PaperGameButton() {
  return (
    <div className={`border-b-8 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-blue-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={PAPER} />
        </div>
      </div>
    </div>
  );
}

export function RockGameButton() {
  return (
    <div className={`border-b-8 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-red-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={ROCK} />
        </div>
      </div>
    </div>
  );
}

export function LizardGameButton() {
  return (
    <div
      className={`border-b-8 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-purple-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={LIZARD} />
        </div>
      </div>
    </div>
  );
}

export function SpockGameButton() {
  return (
    <div className={`border-b-8 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-teal-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={SPOCK} />
        </div>
      </div>
    </div>
  );
}

export function FireGameButton() {
  return (
    <div
      className={`border-b-8 bg-orange-700 rounded-full border-orange-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-orange-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={FIRE} />
        </div>
      </div>
    </div>
  );
}

export function WaterGameButton() {
  return (
    <div className={`border-b-8 bg-sky-700 rounded-full border-sky-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-sky-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-16 m-auto z-20" src={WATER} />
        </div>
      </div>
    </div>
  );
}

//Smaller buttons:
export function ScissorsSmallGameButton() {
  return (
    <div
      className={`border-b-4 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-yellow-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={SCISSORS} />
        </div>
      </div>
    </div>
  );
}

export function PaperSmallGameButton() {
  return (
    <div className={`border-b-8 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-blue-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={PAPER} />
        </div>
      </div>
    </div>
  );
}

export function RockSmallGameButton() {
  return (
    <div className={`border-b-8 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-red-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={ROCK} />
        </div>
      </div>
    </div>
  );
}

export function LizardSmallGameButton() {
  return (
    <div
      className={`border-b-8 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-purple-500  buttonshadow`}
      >
        <div className="h-20 w-20 flex relative">
          <img className="w-[70px] m-auto z-20" src={LIZARD} />
        </div>
      </div>
    </div>
  );
}

export function SpockSmallGameButton() {
  return (
    <div className={`border-b-8 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-[28px] bg-white border-[22px] border-teal-500  buttonshadow`}
      >
        <div className="h-24 w-24 flex relative">
          <img className="w-[70px] m-auto z-20" src={SPOCK} />
        </div>
      </div>
    </div>
  );
}

export function FireSmallGameButton() {
  return (
    <div
      className={`border-b-8 bg-orange-700 rounded-full border-orange-700 z-40`}
    >
      <div
        className={`rounded-full p-[28px] bg-white border-[22px] border-orange-500  buttonshadow`}
      >
        <div className="h-24 w-24 flex relative">
          <img className="w-[70px] m-auto z-20" src={FIRE} />
        </div>
      </div>
    </div>
  );
}

export function WaterSmallGameButton() {
  return (
    <div className={`border-b-8 bg-sky-700 rounded-full border-sky-700 z-40`}>
      <div
        className={`rounded-full p-[28px] bg-white border-[22px] border-sky-500  buttonshadow`}
      >
        <div className="h-24 w-24 flex relative">
          <img className="w-[70px] m-auto z-20" src={WATER} />
        </div>
      </div>
    </div>
  );
}

//Smallest buttons:
export function ScissorsSmallestGameButton() {
  return (
    <div
      className={`border-b-2 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-yellow-500  buttonshadow`}
      >
        <div className="h-16 w-16 flex relative">
          <img className="w-[55px] m-auto z-20" src={SCISSORS} />
        </div>
      </div>
    </div>
  );
}

export function PaperSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-blue-500  buttonshadow`}
      >
        <div className="h-16 w-16 flex relative">
          <img className="w-[55px] m-auto z-20" src={PAPER} />
        </div>
      </div>
    </div>
  );
}

export function RockSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-red-500  buttonshadow`}
      >
        <div className="h-16 w-16 flex relative">
          <img className="w-[55px] m-auto z-20" src={ROCK} />
        </div>
      </div>
    </div>
  );
}

export function LizardSmallestGameButton() {
  return (
    <div
      className={`border-b-2 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-purple-500  buttonshadow`}
      >
        <div className="h-16 w-16 flex relative">
          <img className="w-[55px] m-auto z-20" src={LIZARD} />
        </div>
      </div>
    </div>
  );
}

export function SpockSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-teal-500  buttonshadow`}
      >
        <div className="h-16 w-16 flex relative">
          <img className="w-[55px] m-auto z-20" src={SPOCK} />
        </div>
      </div>
    </div>
  );
}

export function FireSmallestGameButton() {
  return (
    <div
      className={`border-b-2 bg-orange-700 rounded-full border-orange-700 z-40`}
    >
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-orange-500  buttonshadow`}
      >
        <div className="h-16 w-16 flex relative">
          <img className="w-[55px] m-auto z-20" src={FIRE} />
        </div>
      </div>
    </div>
  );
}

export function WaterSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-sky-700 rounded-full border-sky-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-sky-500  buttonshadow`}
      >
        <div className="h-16 w-16 flex relative">
          <img className="w-[55px] m-auto z-20" src={WATER} />
        </div>
      </div>
    </div>
  );
}

export default ScissorsGameButton;
