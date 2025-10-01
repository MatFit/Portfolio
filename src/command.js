const COMMANDS = {
    help: [
        "<br>",
        '<span class="name">intro</span>                         Cool art',
        '<span class="name">whois</span>                         Learn more about me',
        '<span class="name">quit</span>                          Head over to the interface of my website',
        '<span class="name">projects</span>                      Learn about my previous projects',
        '<span class="name">work</span>                          View my past work experiences',
        '<span class="name">email</span>                         Get in contact with me',
        '<span class="name">clear</span>                         Clear terminal',
        '<span class="name">light</span>                         Switch to light theme',
        '<span class="name">dark</span>                          Switch to dark theme',
        `<br>`,
        'Make <span class="name">SURE</span> to quit the terminal and check out the GUI version of my website!',

        "<br>",
    ],    

    intro: [
        '<span class="name"> __       __             __      __        __                  ________  __    __                              __  </span>',
        '<span class="name">|  \\     /  \\           |  \\    |  \\      |  \\                |        \\|  \\  |  \\                            |  \\ </span>',
        '<span class="name">| $$\\   /  $$  ______  _| $$_   | $$____   \\$$  _______       | $$$$$$$$ \\$$ _| $$_    __    __  __   __   __  \\$$ </span>',
        '<span class="name">| $$$\\ /  $$$ |      \\|   $$ \\  | $$    \\ |  \\ /       \\      | $$__    |  \\|   $$ \\  |  \\  |  \\|  \\ |  \\ |  \\|  \\ </span>',
        '<span class="name">| $$$$\\  $$$$  \\$$$$$$\\\\$$$$$$  | $$$$$$$\\| $$|  $$$$$$$      | $$  \\   | $$ \\$$$$$$  | $$  | $$| $$ | $$ | $$| $$ </span>',
        '<span class="name">| $$\\$$ $$ $$ /      $$ | $$ __ | $$  | $$| $$ \\$$    \\       | $$$$$   | $$  | $$ __ | $$  | $$| $$ | $$ | $$| $$ </span>',
        '<span class="name">| $$ \\$$$| $$|  $$$$$$$ | $$|  \\| $$  | $$| $$ _\\$$$$$$\\      | $$      | $$  | $$|  \\| $$__/ $$| $$_/ $$_/ $$| $$ </span>',
        '<span class="name">| $$  \\$ | $$ \\$$    $$  \\$$  $$| $$  | $$| $$|       $$      | $$      | $$   \\$$  $$ \\$$    $$ \\$$   $$   $$| $$ </span>',
        '<span class="name"> \\$$      \\$$  \\$$$$$$$   \\$$$$  \\$$   \\$$ \\$$ \\$$$$$$$        \\$$       \\$$    \\$$$$   \\$$$$$$   \\$$$$$\\$$$$  \\$$ </span>',
        '<br>',
        '<span class="name">job</span>: Starbucks...',
        '<span class="name">school</span>: CU Boulder \'25',
        '<span class="name">email</span>: <a href="mailto:mathis.fituwi@gmail.com">mathis.fituwi@gmail.com</a>',
        '<span class="name">linkedin</span>: <a href="https://linkedin.com/in/mathis-fituwi-892977225">in/mathisfituwi</a>',
        '<span class="name">github</span>: <a href="https://github.com/MatFit">github.com/MatFit</a>',

        'Press <span class="name">F11</span> for best experience',
        'Enter <span class="name">help</span> to get started',
        "Use arrow keys ↑ and ↓ to navigate past commands",
        "<br>",
        'Make <span class="name">SURE</span> to <span class="name">quit</span> the terminal and check out desktop GUI of this website!',
        "<br>",
    ],

    whois: [
        "<br>",
        '<span class="name"></span>',
        "I'm Mathis Fituwi, a recent graduate from CU Boulder with a Computer Science degree and still looking for some way to get real experience...",
        "<br>",
        "I wouldn't say I'm amazing a coding or fully enjoy the art of it, but I do like learning, creating, and challenging myself in random things of things.",
        "Although I am looking for entry level SWE or Machine Learning/Data Science roles, I'm eagered to explore adjacent fields or career paths that utilize similar skillset.",
        "<br>",
        "",
        "",
        "<br>",
        "What I am trying to do right now is to in some way use the skills I've developed to make sort of an impact. Not for the world I'm not that important sadly.",
        "But rather for myself and those around me. I'd like to join a team and understand how to work in a professional environment and to learn from others",
        "<br>",
        "My hobbies: Gaming (currently playing FF7 Rebirth and P3R), Blood on the Clocktower (really fun social deduction game!), reading, lift heavy things, and coding (cool projects).",
        "Hobbies I'm trying to get back into: Climbing (membership is too expensive in the meantime), Piano, and cooking",
        "<br>",
    ],

    projects: [
        "<br>",
        '<span class="subtitle">Software Engineering Projects</span>',
        '<span class=name><a href="https://github.com/kyndranelson/CSCI3308_MovieRecommender_Project">Purrfect Choice</a> | Jan 2023</span>',
        "This is a full-stack web application (Node.js, PostgreSQL, EJS) that I had the privilege to work on with a team of 4 other classmates.",
        "We built a simple movie recommendation site that allows users to search and catalog movies to recieve personalized recommendations.",
        '<span class=name><a href="https://github.com/MatFit/aftermath_project">Aftermath</a> | Current</span>',
        "This is a current solo project that I am developing using several technologies including but not limited: Vite, React, FastAPI, and Springboot Java",
        "I want to make a financial learning tool that'll quiz users on financial literacy entirely based off the markets and news they see. Think Apple Stock with",
        "it's aggregated news but it quizzes you on it too",
        '<span class=name><a href="https://github.com/MatFit/Dreams-Embarked">Dreams Embarked</a> | May 2024</span>',
        "A libGDX rudimentary Java game I developed with a friend. The primary goal of this project was learning a completely new technology",
        "and to understand paradigms of object-oriented programming in the software cycle of this game project. Also cool UML diagrams", 
        '<span class="name">---------------------------------------------------------------------------------------------------</span>',

        '<span class="subtitle">Machine Learning Projects</span>',
        '<span class=name><a>Sentiment Impact on Horse Race Betting (sorry no hyperlink :/)</a> | May 2025 </span>',
        "This project was developed with a cool group of friends n peers to understand the impact of sentiment as a potential feature to prediction",
        "This encompassed project was pipelined with data scraping and cleaning using Python (BeautifulSoup, Selenium), EDA with Pandas and visualization libraries,",
        "tuning pre-trained transformers, training on various generic models, and even utitlzing backtesting with Kelly Criterion and Monte Carlo simulations to gauge performance.",
        '<span class=name><a href="https://github.com/nimi2356/mlproject">One Piece Deck Performance Predictor</a> | Dec 2024 </span>',
        "projects",


        '<span class="name">---------------------------------------------------------------------------------------------------</span>',


        '<span class="subtitle">Desktop Application Projects</span>',
        '<span class=name><a href="https://github.com/MatFit/TintsAndTells">Tints And Tells : Hues and Cues Knock off</a> | May 2025</span>',
        "A nice solo project developed in QT Creator C++ that emulates the board game Hues and Cues. This was a fun project to develop especially",
        "as I got to play this with friends.",
        '<span class=name><a>Connect-N : Connect 4 but More</a> | Feburary 2025</span>',
        "Similar with Tints and Tells, developed in QT / C++, this was a more ambitious project that utilized more complex GUI elements, stronger OOP principles,",
        "and a bit more advanced game logic with a dynamically sized boards and animated disks falling into places",


        '<span class="name">---------------------------------------------------------------------------------------------------</span>',
        '<span class="subtitle">AI projects</span>',
        '<span class=name><a href="https://github.com/MatFit/JavaRLSnake">Neural Network + Q-Learning Agent vs Classic Snake Game </a>| June 2024</span>',
        "This project put me through the ringers. After taking inspiriation from genetic algorithms beating Super Mario 64, I wanted to try something similar.",
        "Not knowing Java (or it's core GUI library, Swing), Q-Learning/NN, and game development at the time it was a huge challenge. Ultimately, I developed",
        "the complete snake game equipped with an AI agent designed with Deep Q-Learning that semi-comsistently beat the game...",
        '<span class=name><a href="https://github.com/MatFit/MancalaAI">MinMax and AlpacaBeta vs Mancala??</a> | Nov 2024</span>',
        "projects",


        '<span class="name">---------------------------------------------------------------------------------------------------</span>',

        '<span class="subtitle">Algorithmic Projects</span>',
        '<span class=name><a href="https://github.com/MatFit/ProjectDNA">Project DNA</a> | May 2025</span>',
        "This project in my Computation Genomic course was one of the more interesting and undoubtly challenging ones.",
        "While it wasn't much code, the bulk of the time spent on this project was on the algorithmic design and understanding what a MicroDNA was",
        "Ultimately, I designed an algorithm that identified MicroDNAs from a given genomic sequence with high accuracy and efficiency and wrote a neat paper to go with it.",
        '<span class=name><a href="https://github.com/MatFit/Directors-and-Movies">Aftermath</a> | Nov 2023</span>',
        "This was one of my early projects where I applied the newly aquired relic of information : hash-tables; Along with a skip list for",
        "a probabilitic data structure to search for directors more efficeintly and fetch their movies from the hash table. Luckily, ",
        "this worked wonders on 302 KB IMDB dataset",


        '<span class="name">---------------------------------------------------------------------------------------------------</span>',
    ],

    work: [
        
        "<br>",
        '<span class=name><a>Research Software Engineering Internship</a> | University of Colorado Boulder | Sep 2024 - May 2025 </span>',
        "For this role I was tasked with a team to developing a financial data pipeline to process hundreds of gigabytes of SEC filings",
        "and have it be ran through custom NLP models built with spaCy for named entites. Technologies that were used included Python, RegEx, Bash and Linux. As simple",
        "as the end goal was, this project had many hurdles including handling of inconsistant HTML/XML 10Ks, designing our NLP model with various pipelines,",
        "efficient use of compute resources through proper Bash configerations, and applying RegEx in instances of extremely noisey data. Ultimately, we wanted to show statistical insights of",
        "certain named entity types such as Persons, Organizations, and Geography in these filings as an additional talking point for understanding general trends of participants in the market",
        '<span class="name">-----------</span>',

        '<span class=name><a>Barista...</a> | Starbucks... | Current... </span>',
        "Serving coffee, cleaning, and taking verbal abuse whilst dealing with hundreds of customers a day. The Starbucks experience is something else.",
        '<span class="name">-----------</span>',

        
        '<span class=name><a>Desk Service</a> | Norlin Library | June 2023 - May 2025 </span>',
        "Helping out paterons with library account issues, printing, and general questions about the library. Occasionally shelving books and other fun tasks.",
        "Nothing too serious",
        '<span class="name">-----------</span>',

        '<span class=name><a>Community Engagement Internship</a> | Global MindED | Oct 2019  - May 2020 </span>',
        "For this role I was tasked with a varity of tasks including creating flyers, reaching out to business professionals to join panels, and maintaining several",
        "Excel dataspread sheets for an upcoming event where we connected Denver Public School students to business professionals in various fields to learn about career paths and opportunities",
        "Luckily, I've also had the chance to interview some of these professionals and write up incentives for students who were iffy on joining these panels by showing",
        "them that these professionals want to help and were just like them once",
        '<span class="name">-----------</span>',
        "<br>",
    ],

    fail: [
        'command not found: enter <span class="name">help</span> to lean how to interact',
    ],
};

const SNAIL_SPEECH = [
    "Say it with me now.. . .",
    "He's groovy but nevery glooby",
    "You can't this from an EGG",
    "The sensation from your SCREEN",
    "The show that make you SCREAM",
    "Mr. (Ant) TENNA'S 📺 TIME!!"
];