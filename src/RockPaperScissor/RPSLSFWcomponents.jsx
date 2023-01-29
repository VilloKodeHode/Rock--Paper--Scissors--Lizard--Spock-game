import { useState, useEffect } from "react";
import React from "react";

//images
import PAPER from "./assets/icon-paper.svg";
import SCISSORS from "./assets/icon-scissors.svg";
import ROCK from "./assets/icon-rock.svg";
import LIZARD from "./assets/icon-lizard.svg";
import SPOCK from "./assets/icon-spock.svg";
import HEPTAGON from "./assets/bg-heptagon.svg";

//Buttons:
import ScissorsGameButton, {
  FireSmallestGameButton,
  FireSmallGameButton,
  LizardGameButton,
  LizardSmallestGameButton,
  LizardSmallGameButton,
  PaperGameButton,
  PaperSmallestGameButton,
  PaperSmallGameButton,
  RockGameButton,
  RockSmallestGameButton,
  RockSmallGameButton,
  ScissorsSmallestGameButton,
  ScissorsSmallGameButton,
  SpockGameButton,
  SpockSmallestGameButton,
  SpockSmallGameButton,
  WaterSmallestGameButton,
  WaterSmallGameButton,
} from "./GameButtons";

export function WinnerGlow() {
  return (
    <>
      <div className=" [&>*]:animate-glow">
        <div className="absolute h-[300px] w-[300px] bg-sky-900 bg-opacity-30 winner -z-10 rounded-full"></div>
        <div className="absolute h-[400px] w-[400px] bg-sky-900 bg-opacity-20 winner -z-20 rounded-full"></div>
        <div className="absolute h-[500px] w-[500px] bg-sky-900 bg-opacity-10 winner -z-30 rounded-full"></div>
      </div>
    </>
  );
}

export function EmptyGameButton() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-50">
      <div className={`rounded-full p-10 bg-[#15183c] buttonshadow`}>
        <div className="h-32 w-32 flex"></div>
      </div>
    </div>
  );
}

function PlayRound({ setComputerPick, setScore, setResult }, playerPick) {
  const randomNumber = Math.floor(Math.random() * 7 + 1);
  let computerPick;
  if (randomNumber === 1) {
    computerPick = "rock";
  } else if (randomNumber === 2) {
    computerPick = "paper";
  } else if (randomNumber === 3) {
    computerPick = "scissors";
  } else if (randomNumber === 4) {
    computerPick = "lizard";
  } else if (randomNumber === 5) {
    computerPick = "spock";
  } else if (randomNumber === 6) {
    computerPick = "fire";
  } else {
    computerPick = "water";
  }
  console.log("computer picked: " + computerPick);

  setComputerPick(computerPick);
  let result;

  if (
    (playerPick === "rock" &&
      (computerPick === "scissors" ||
        computerPick === "lizard" ||
        computerPick === "fire")) ||
    (playerPick === "scissors" &&
      (computerPick === "paper" ||
        computerPick === "lizard" ||
        computerPick === "water")) ||
    (playerPick === "paper" &&
      (computerPick === "rock" ||
        computerPick === "spock" ||
        computerPick === "water")) ||
    (playerPick === "lizard" &&
      (computerPick === "spock" ||
        computerPick === "paper" ||
        computerPick === "water")) ||
    (playerPick === "spock" &&
      (computerPick === "scissors" ||
        computerPick === "rock" ||
        computerPick === "fire")) ||
    (playerPick === "fire" &&
      (computerPick === "scissors" ||
        computerPick === "lizard" ||
        computerPick === "paper")) ||
    (playerPick === "water" &&
      (computerPick === "rock" ||
        computerPick === "fire" ||
        computerPick === "spock"))
  ) {
    setTimeout(() => {
      setScore((prevScore) => prevScore + 1), 500;
    });
    result = "WIN";

    console.log(
      "Results from Playround function: playerpick: " + playerPick,
      "computerpick: " + computerPick
    );
  } else if (
    (playerPick === "rock" &&
      (computerPick === "paper" ||
        computerPick === "spock" ||
        computerPick === "water")) ||
    (playerPick === "scissors" &&
      (computerPick === "rock" ||
        computerPick === "spock" ||
        computerPick === "fire")) ||
    (playerPick === "paper" &&
      (computerPick === "scissors" ||
        computerPick === "lizard" ||
        computerPick === "fire")) ||
    (playerPick === "lizard" &&
      (computerPick === "rock" ||
        computerPick === "scissors" ||
        computerPick === "fire")) ||
    (playerPick === "spock" &&
      (computerPick === "paper" ||
        computerPick === "lizard" ||
        computerPick === "water")) ||
    (playerPick === "fire" &&
      (computerPick === "rock" ||
        computerPick === "spock" ||
        computerPick === "water")) ||
    (playerPick === "water" &&
      (computerPick === "scissors" ||
        computerPick === "paper" ||
        computerPick === "lizard"))
  ) {
    result = "LOSE";

    setTimeout(() => {
      setScore((prevScore) => prevScore - 1), 500;
    });
  } else {
    result = "DRAW";
  }

  setResult(result);

  return result;
}

export function ResultandRestart({ result, setType }) {
  return (
    <div className="z-50 flex flex-col justify-center mx-8 [&>*]:animate-RPSPopUpMoreDelayed">
      <h1 className="text-6xl">
        {result === "WIN" || result === "LOSE" ? "YOU " : null}
        {result}
      </h1>
      <button
        className="p-2 px-10 m-8 h-fit w-fit text-md tracking-widest text-red-600 bg-white z-50"
        onClick={() => {
          setType(false);
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

export function StartingScreen(props) {
  const {
    paper,
    scissors,
    rock,
    lizard,
    spock,
    fire,
    water,
    setPaper,
    setScissors,
    setRock,
    setLizard,
    setSpock,
    setFire,
    setWater,
    setComputerPick,
    setScore,
    setResult,
    round,
    setRound,
    PlayRound,
  } = props;
  return (
    <>
      {paper || scissors || rock || lizard || spock || fire || water || (
        <div className="md:w-[800px] w-full h-full relative m-auto">
          <div className="absolute h-full w-full">
            <div className="absolute left-1/2 -translate-x-1/2 top-[15%] m-auto z-50">
              <img src={HEPTAGON} className="" />
            </div>
            <div className="">
              <button
                onClick={() => {
                  setPaper(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "paper"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-[16%] right-[25%] translate-x-1/2 p-0 h-fit bg-blue-700 z-50 mr-14"
              >
                <PaperSmallestGameButton />
              </button>

              <button
                onClick={() => {
                  setScissors(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "scissors"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-0 right-1/2 translate-x-1/2 translate-y-[27%] p-0 h-fit bg-yellow-700 z-50 ml-14"
              >
                <ScissorsSmallestGameButton />
              </button>

              <button
                onClick={() => {
                  setRock(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "rock"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-[23%] left-[40%] translate-x-1/2 p-0 h-fit bg-red-700 z-50 m-28 mb-0"
              >
                <RockSmallestGameButton />
              </button>

              <button
                onClick={() => {
                  setLizard(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "lizard"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-[44%] right-[16%] p-0 h-fit bg-purple-700 z-50 m-28 mb-0"
              >
                <LizardSmallestGameButton />
              </button>

              <button
                onClick={() => {
                  setSpock(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "spock"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-[44%] right-[37%] p-0 h-fit bg-teal-700 z-50 m-28 mb-0"
              >
                <SpockSmallestGameButton />
              </button>

              <button
                onClick={() => {
                  setFire(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "fire"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute top-[24%] right-[50%] p-0 h-fit bg-orange-700 z-50 m-28 mb-0"
              >
                <FireSmallestGameButton />
              </button>

              <button
                onClick={() => {
                  setWater(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setRound, round },
                      "water"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full absolute right-[54%] translate-x-1/2 p-0 h-fit bg-sky-700 z-50 m-28 mb-0"
              >
                <WaterSmallestGameButton />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlayRound;
