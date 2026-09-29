# 🎮 Decision Arena — Rock Paper Scissors

A polished browser-based Rock Paper Scissors game built with vanilla JavaScript. The project transforms simple decision-making logic into an interactive game experience with score tracking, randomized computer choices, instant results, and a reset system.

A small project demonstrating how fundamental programming logic can become a practical interactive application.

---

## 📖 Project Overview

Decision Arena is a lightweight browser game where a player competes against a computer opponent in the classic Rock Paper Scissors game.

The project focuses on the programming concepts behind the experience:
- Random decision generation
- Conditional logic
- Arrays
- Functions
- Event-driven programming
- DOM manipulation
- Application state management

Rather than relying on external libraries or frameworks, the project uses HTML, CSS, and vanilla JavaScript to keep the implementation understandable and easy to extend.

---

## 🌎 Real-World Conceptual Scenario

Imagine a small decision engine that needs to select an action from a predefined set and compare it against a user's action.

The same pattern appears in many software systems:
- Game mechanics
- Automated decision systems
- Rule-based applications
- Simulations
- Randomized testing
- Interactive user interfaces

In this project, that concept becomes a simple game:
> The player makes a decision $\rightarrow$ the computer makes a decision $\rightarrow$ the system evaluates both decisions $\rightarrow$ the application updates its state and interface.

---

## 🧠 Core Concept

The heart of the application is a rule-based decision engine. Each participant selects one of three possible actions:

| Choice | Defeats |
| :--- | :--- |
| 🪨 Rock | ✂️ Scissors |
| 📄 Paper | 🪨 Rock |
| ✂️ Scissors | 📄 Paper |

The computer's choice is selected randomly from an array of available choices.

The application then compares the two choices and determines whether:
- The player wins
- The computer wins
- The round is a draw

The resulting score is stored in application state and displayed through the browser interface.

---

## ⚙️ How the System Works

The game follows a simple event-driven flow:
```text
Player selects a move
        ↓
playGame() is triggered
        ↓
Computer randomly selects a move
        ↓
Player and computer choices are compared
        ↓
Winner is determined
        ↓
Score is updated
        ↓
DOM is updated with the result
```

A reset action follows a separate flow:
```text
Player clicks Reset
        ↓
Scores return to zero
        ↓
Result message is restored
        ↓
New game is ready
```

---

## 🧮 Algorithm & Data Structure

### Random Selection
The available moves are stored in an array:
```javascript
const choices = ["rock", "paper", "scissors"];
```

A random index is generated using:
```javascript
Math.floor(Math.random() * choices.length);
```

This allows the computer to select one of the available moves.

### Rule Evaluation
The winner is determined using conditional logic:
```javascript
if (playerChoice === computerChoice) {
    // Draw
} else if (playerWins) {
    // Player wins
} else {
    // Computer wins
}
```

This makes the game's decision system deterministic once both choices have been selected.

---

## 🔍 Step-by-Step Logic

1. **Store the game state:** Two variables track the current score (`playerScore` and `computerScore`).
2. **Receive the player's choice:** When a player clicks a move, the selected value is passed to `playGame()`.
3. **Generate the computer's choice:** The computer selects randomly from the available moves.
4. **Compare both decisions:** The application checks the predefined winning relationships.
5. **Update the score:** The winner's score increases by one.
6. **Update the interface:** The result and scores are written directly to the DOM.
7. **Reset when requested:** The reset function clears the scores and restores the initial game state.

---

## ✨ Key Features

- 🪨 Rock, Paper, and Scissors gameplay
- 🤖 Random computer decision-making
- 🏆 Automatic winner detection
- 📊 Live score tracking
- 🔄 One-click game reset
- ⚡ Instant browser-based feedback
- 📱 Responsive layout
- 🎨 Clean dark-themed interface
- 🚫 No external JavaScript libraries required

---

## 🎯 Example Use Case

A player chooses:
- **Player:** Rock
- **Computer:** Scissors

Since Rock defeats Scissors:
- **Result:** You win! 🎉
- **Player Score:** 1
- **Computer Score:** 0

Another round might produce:
- **Player:** Paper
- **Computer:** Paper

The result becomes:
- **Result:** It's a draw! 🤝
- **Player Score:** 1
- **Computer Score:** 0

---

## 📥 Example Input / Output

### Input
- **Player selects:** 🪨 Rock

### Computer Decision
- **Computer selects:** ✂️ Scissors

### Output
```text
You chose rock.
Computer chose scissors.
You win! 🎉
```

### Updated State
- **You:** 1
- **Computer:** 0

---

## ⏱️ Complexity

Each round requires only a constant number of operations.

| Operation | Time | Space |
| :--- | :--- | :--- |
| Generate computer choice | $O(1)$ | $O(1)$ |
| Compare choices | $O(1)$ | $O(1)$ |
| Update score | $O(1)$ | $O(1)$ |
| Update DOM | $O(1)$ | $O(1)$ |
| Complete round | $O(1)$ | $O(1)$ |

The choice array contains only three fixed elements, so the application's memory requirements remain constant.

---

## 🛠️ Technologies Used

- **HTML5** — application structure
- **CSS3** — styling and layout
- **JavaScript (ES6+)** — game logic and interaction
- **DOM API** — dynamic interface updates

No frameworks or external dependencies are required.

---

## 📁 Project Structure

```text
decision-arena-rock-paper-scissors/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Responsibilities

| File | Responsibility |
| :--- | :--- |
| `index.html` | Game interface and controls |
| `style.css` | Visual design and layout |
| `script.js` | Game state, decision logic, and DOM interaction |
| `README.md` | Project documentation |

---

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mirhamzarahman/decision-arena-rock-paper-scissors.git
   ```

2. **Enter the project directory:**
   ```bash
   cd decision-arena-rock-paper-scissors
   ```

3. **Open the application:**
   Open `index.html` in any modern web browser.

> No build tools, package manager, or server configuration is required.

🔗 **GitHub Repository:** [View the project repository](https://github.com/mirhamzarahman/decision-arena-rock-paper-scissors)

---

## 📚 Learning Outcomes

This project provides practical experience with:
- Writing reusable JavaScript functions
- Managing application state
- Working with arrays
- Generating random values
- Designing rule-based decision systems
- Using `if/else` conditional logic
- Handling browser events
- Manipulating the DOM
- Separating HTML, CSS, and JavaScript responsibilities
- Structuring a small GitHub portfolio project
- Thinking about algorithms as reusable software concepts

---

## 🔮 Possible Future Improvements

The project can be expanded into a more complete game platform. Potential improvements include:
- 🏁 First-to-5 match system
- ⏱️ Countdown timer
- 🔊 Sound effects
- ✨ Animated move transitions
- 🌙 Light/dark theme switching
- 👤 Custom player names
- 📜 Round history
- 📈 Win-rate statistics
- 💾 Persistent scores using `localStorage`
- 🏆 Achievement system
- 🎮 Additional game modes
- 📱 More advanced responsive design

A particularly useful next step would be introducing a round-history data structure that stores each player's choice, computer choice, result, and timestamp.

---

## 🧩 Design Philosophy

> *Take a fundamental programming concept and turn it into something people can interact with.*

The underlying logic is intentionally small, but the surrounding structure demonstrates how basic programming concepts can become a complete software experience.

---

## 📄 License

This project is released under the [MIT License](LICENSE). You are free to use, modify, and distribute the project while retaining the original license and copyright notice.

---

## 👨‍💻 Author

**Mir Hamza Rahman**  
- GitHub: [@mirhamzarahman](https://github.com/mirhamzarahman)

⭐ If you find the project useful, consider giving the repository a star!
