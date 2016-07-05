# Class 06: Lab

## Choose-Your-Own Adventure (in Space!)

In this lab, we'll create a command line game that is an interactive "choose-your-own" adventure. We'll provide a sample script for you so that you spend less time thinking of story lines and more time coding, but if you are feeling inspired, feel free to write new extensions to the sample story.

### Set up

We'll be using the [game-prompt](https://github.com/jacobdfriedmann/game-prompt) node module to accept user input.

Use the installation instructions listed in the module's README to start using it in your project.

### Sample Story

#### Intro

- S.R.S.V.

- You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an expedition to explore foreign planets. Your mission is to make contact with three alien life forms, acquire an artifact representative of their culture, and bring back your findings to Earth.

#### Collect Pilot information

- Ask for the pilot's name
- Ask for the name of the S.R.S.V.
- Tell the pilot that the ship has 1000 gallons of fuel

#### Travel

- The pilot can then decide where to travel. There will be a list of planets at various distances. Distances represent how many gallons of gas the trip will use.
  - Earth* (10 lightyears)
  - Mesnides (20 lightyears)
  - Laplides (50 lightyears)
  - Kiyturn (120 lightyears)
  - Aenides (25 lightyears)
  - Cramuthea (200 lightyears)
  - Smeon T9Q (400 lightyears)
  - Gleshan 7Z9 (85 lightyears)

```
Where to Captain [playerName]?
(E)arth (10 lightyears)
(M)esnides (20 lightyears)
(L)aplides (50 lightyears)
(K)iyturn (120 lightyears)
(A)enides (25 lightyears)
(C)ramuthea (200 lightyears)
(S)meon T9Q (400 lightyears)
(G)leshan 7Z9 (85 lightyears)
=>M
Flying to Mesnides...

You used 20 gallons of gas. The [vehicleName] now has 980 gallons.
```

- When you arrive at a planet it will either be inhabited or not. Inhabited planets will have a representative you can talk to to ask for an artifact or to ask about other planets.

#### Mesnides

- Mesnides is inhabited and the representative of the Mesnidian people willingly gives you a Myoin Horn, an ancient Mesnidian instrument.
- The Mesnidian representative also happens to know that Laplides is uninhabitable and that visiting it would be a waste of time.

```
You've arrived at Mesnides. As you land, a representative of the Mesnidian people is there to greet you.

"Welcome, traveler, to Mesnides."

"How can we assist you?"
Ask about (A)rtifact.
Ask about other (P)lanets
(L)eave
=>A
"Here, take this Myoin Horn, an ancient Mesnidian instrument."
Myoin Horn added to inventory.
"How can we assist you?"
Ask about (A)rtifact.
Ask about other (P)lanets
(L)eave
=>P
"Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey."
"How can we assist you?"
Ask about (A)rtifact.
Ask about other (P)lanets
(L)eave
=>L
Where to Captain [playerName]?
(E)arth (10 lightyears)
(M)esnides (20 lightyears)
(L)aplides (50 lightyears)
(K)iyturn (120 lightyears)
(A)enides (25 lightyears)
(C)ramuthea (200 lightyears)
(S)meon T9Q (400 lightyears)
(G)leshan 7Z9 (85 lightyears)
```

#### Laplides

- Laplides is uninhabited and shows signs of atomic war. Upon arrival, you realize the only option is to leave.

```
You enter orbit around Laplides. Looking down at the planet, you see signs of atomic war and realize there is no option but to turn around.

Where to Captain [playerName]?
(E)arth (10 lightyears)
(M)esnides (20 lightyears)
(L)aplides (50 lightyears)
(K)iyturn (120 lightyears)
(A)enides (25 lightyears)
(C)ramuthea (200 lightyears)
(S)meon T9Q (400 lightyears)
(G)leshan 7Z9 (85 lightyears)
```

#### Kiyturn

- Kiyturn is populated by a shy people.
- After some discussion they willingly give you a prized Kiyturn Glass Bowl
- When you ask about other planets, they have nothing to offer because of their isolationism.

```
You've arrived at Kiyturn. As you land, a representative of the Kiyturn people is there to greet you.

"Hello, what brings you to Kiyturn? You're not here to cause trouble are you?"
Ask about (A)rtifact.
Ask about other (P)lanets
(L)eave
=>A
"Here, take this Kiyturn Glass Bowl, a symbol of our civilization."
Kiyturn Glass Bowl added to inventory.
"How can we assist you?"
Ask about (A)rtifact.
Ask about other (P)lanets
(L)eave
=>P
"I'm sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery."
"How can we assist you?"
Ask about (A)rtifact.
Ask about other (P)lanets
(L)eave
=>L
Where to Captain [playerName]?
(E)arth (10 lightyears)
(M)esnides (20 lightyears)
(L)aplides (50 lightyears)
(K)iyturn (120 lightyears)
(A)enides (25 lightyears)
(C)ramuthea (200 lightyears)
(S)meon T9Q (400 lightyears)
(G)leshan 7Z9 (85 lightyears)
```

#### Aenides

- You discover upon arrival to Aenides that they are a hostile people. You attempt to land, but they begin to fire upon your S.R.S.V. and you are forced to retreat.

#### Cramuthea

- Cramuthea has been abandoned due to global environmental disaster, but there are remnants of the people that left. You are able to refuel your ship (+500 gallons) and read a beacon signal that tells you the Cramuthean people have migrated to Smeon T9Q.

#### Smeon T9Q

- The Cramuthean people, living on Smeon T9Q, are a friendly people that give you some fuel (+100 gallons) when you arrive.
- When asked for an artifact, they also give you a dried Cramun Flower from their home planet.
- When asked about other planets, they warn you that the people of Aenides once tried to take over their home planet by force.

#### Gleshan 7Z9

- Gleshan 7Z9 is a poor country that does not willingly give you an Artifact.
- When asked about other planets, they will tell you of a wealthy people, the Cramuthean that once visited Gleshan 7Z9.

#### Earth

If you return to Earth with less that 3 artifacts, you will be able to refill you ship +10 gallons. If, however, you do have the 3 artifacts, you win the game.

#### Losing the game

If you run out of gas before making it to Earth with 3 artifacts, you lose the game.

### Tips

- Identify information that you need to store and access over the course of the game. Create variables and data structures to keep track of this data.
- Identify code or functionality that is reused. Create reusable functions for these parts.

### BONUS: Extensions

- Instead of fixed distances no matter where you are, use a coordinate system to make distances dynamic based on where you are in the universe.
- Make some of the alien races challenge you to a simple games in exchange for their artifact (i.e. hangman, guess-the-number, rock-paper-scissor, etc)
- Add in obstacles between certain planets (i.e. an astroid belt is blocking the path between Cramuthea and Smeon T9Q, you have to turn around and try somewhere else using up gas)
- Add in time based conditions: if a planet is visited early in the game, people are there, else they have fled.
