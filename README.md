# Endless Runner Game in TypeScript

## Overview

This repository contains a **browser-based Endless Runner game** developed using **TypeScript**, **HTML5**, and **CSS3**. The game features a **humanoid player character**, **dynamic obstacles**, **continuous cloud generation**, and **parallax scrolling backgrounds**. It is designed for beginners who want to learn **TypeScript**, **object-oriented programming**, and **browser game development**.

## Features

* Humanoid character with arms, legs, torso, and head.
* Jump physics with gravity simulation.
* Dynamic obstacles with collision detection.
* Continuous clouds and scrolling ground for parallax effect.
* Score tracking and progressive difficulty.
* Keyboard input support (Space key to jump).
* Smooth animations with `requestAnimationFrame`.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/m-a-h-b-u-b/endless-runner-game.git
```

2. Navigate to the project folder:

```bash
cd endless-runner-game
```

3. Install dependencies (if using npm for TypeScript compilation):

```bash
npm install
```

4. Compile TypeScript to JavaScript:

```bash
npx tsc
```

## Running the Game

1. Open the `index.html` file in your browser.
2. Press the **Space** key to make the character jump and avoid obstacles.
3. Try to achieve the highest score!

## Project Structure

```
endless-runner-game/
├── index.html          # Main HTML file
├── style.css           # CSS for canvas and game styling
├── tsconfig.json       # TypeScript configuration
├── src/                # TypeScript source files
│   ├── main.ts         # Entry point
│   ├── game.ts         # Game controller
│   ├── player.ts       # Humanoid player logic
│   ├── obstacle.ts     # Obstacle logic
│   └── background.ts   # Parallax background and clouds
└── dist/               # Compiled JavaScript files
```

## Usage

* Use **Space key** to jump.
* Avoid obstacles and try to survive as long as possible.
* Score increases over time, and obstacle speed gradually increases.

## Learning Objectives

This project helps beginners:

* Learn TypeScript setup and compilation.
* Apply OOP principles in game development.
* Understand game physics and collision detection.
* Implement parallax scrolling and smooth animations.
* Handle real-time user input and event handling.

## License

This project is licensed under the **Apache 2.0 License**.

## Repository

[https://github.com/m-a-h-b-u-b/endless-runner-game](https://github.com/m-a-h-b-u-b/endless-runner-game)
