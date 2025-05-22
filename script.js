// Function to start the quiz when the "Begin Quiz" button is clicked
function startQuiz() {
  // Hide the landing page container
  document.getElementById("landing").style.display = "none";
  // Show the quiz container where questions will appear
  document.getElementById("quiz-container").style.display = "block";
  // Render the first question
  renderQuestion();
}

// Array of appliance personalities with descriptions, compatible and clashing types
const appliances = [
  {
    name: "Toaster",
    description: "You're efficient, dependable, and like a good crunch.",
    compatible: ["Fridge", "Microwave"],
    clash: "Vacuum",
    image: "images/toaster.png"
  },
  {
    name: "Fridge",
    description: "Cool-headed, reliable, and always full of surprises.",
    compatible: ["Toaster", "Washer"],
    clash: "Blender",
    image: "images/fridge.png"
  },
  {
    name: "Vacuum",
    description: "You suck... in a good way. Clean and focused!",
    compatible: ["Air Purifier", "Fan"],
    clash: "Toaster",
    image: "images/vacuum.png"
  },
  {
    name: "Microwave",
    description: "Quick thinker and a master of shortcuts.",
    compatible: ["Toaster", "Coffee Maker"],
    clash: "Air Purifier",
    image: "images/microwave.png"
  },
  {
    name: "Air Purifier",
    description: "Calm, collected, and always improving your surroundings.",
    compatible: ["Vacuum", "Washer"],
    clash: "Microwave",
    image: "images/air_purifier.png"
  },
  {
    name: "Blender",
    description: "Energetic, loud, and full of ideas.",
    compatible: ["Fan", "Coffee Maker"],
    clash: "Fridge",
    image: "images/blender.png"
  },
  {
    name: "Washer",
    description: "Diligent, steady, and thorough.",
    compatible: ["Fridge", "Air Purifier"],
    clash: "Fan",
    image: "images/washer.png"
  },
  {
    name: "Coffee Maker",
    description: "Driven, energetic, and essential to any morning.",
    compatible: ["Microwave", "Blender"],
    clash: "Fan",
    image: "images/coffee.png"
  },
  {
    name: "Fan",
    description: "Chill, easygoing, and always around for support.",
    compatible: ["Vacuum", "Blender"],
    clash: "Washer",
    image: "images/fan.png"
  }
];

// Array of quiz questions, each with question text, options, and scores mapping
// Scores map each option to an appliance index in the appliances array
const questions = [
  {
    question: "You're at a party. What are you doing?",
    options: [
      "Fixing the music setup",    // Maps to Toaster (index 0)
      "Making snacks for people",  // Fridge (1)
      "Talking 1-on-1 in a corner",// Air Purifier (4)
      "Dancing like crazy"         // Blender (5)
    ],
    scores: [0, 1, 4, 5]
  },
  // ... (Other questions follow the same structure with their options and score mappings)
  {
    question: "Your friend is late for a movie. What do you do?",
    options: [
      "Start without them",      // Microwave (3)
      "Wait patiently",          // Washer (6)
      "Call and ask ETA",        // Coffee Maker (7)
      "Leave a ticket & go in"   // Fan (8)
    ],
    scores: [3, 6, 7, 8]
  },
{
    question: "What’s your vibe in group projects?",
    options: [
      "Leader, no question",     // Coffee Maker
      "Organizer behind scenes", // Fridge
      "Moral support",           // Fan
      "Solo worker"              // Air Purifier
    ],
    scores: [7, 1, 8, 4]
  },
  {
    question: "You just got a day off. What now?",
    options: [
      "Try a new recipe",        // Toaster
      "Deep clean your place",   // Vacuum
      "Go hiking",               // Fan
      "Stay in bed all day"      // Fridge
    ],
    scores: [0, 2, 8, 1]
  },
  {
    question: "Pick a slogan:",
    options: [
      "Fast and focused",        // Microwave
      "Cool under pressure",     // Fridge
      "Loud and proud",          // Blender
      "Fresh air only"           // Air Purifier
    ],
    scores: [3, 1, 5, 4]
  },
  {
    question: "Which chore do you secretly enjoy?",
    options: [
      "Vacuuming",               // Vacuum
      "Doing laundry",           // Washer
      "Making coffee",           // Coffee Maker
      "Tidying random drawers"   // Air Purifier
    ],
    scores: [2, 6, 7, 4]
  },
  {
    question: "How do you wake up?",
    options: [
      "Alarms galore",           // Coffee Maker
      "Let nature do it",        // Fan
      "Sunlight & chill",        // Air Purifier
      "With breakfast ready"     // Toaster
    ],
    scores: [7, 8, 4, 0]
  },
  {
    question: "Someone criticizes your work. You...",
    options: [
      "Blow up",                 // Blender
      "Think it over calmly",    // Air Purifier
      "Get motivated",           // Microwave
      "Ignore them"              // Fan
    ],
    scores: [5, 4, 3, 8]
  },
  {
    question: "Pick a sound:",
    options: [
      "Gentle hum",              // Fan
      "Beep beep",               // Microwave
      "Grinding motor",          // Blender
      "Bubbling brew"            // Coffee Maker
    ],
    scores: [8, 3, 5, 7]
  },
  {
    question: "You see someone crying. You...",
    options: [
      "Give them tissues & tea", // Fridge
      "Offer distraction",       // Blender
      "Sit quietly with them",   // Washer
      "Tell a funny story"       // Coffee Maker
    ],
    scores: [1, 5, 6, 7]
  },
  {
    question: "You’re in charge of snacks. You pick...",
    options: [
      "Piping hot pizza",        // Microwave
      "Healthy veggies",         // Air Purifier
      "Sugary treats",           // Toaster
      "Fruit platter"            // Fridge
    ],
    scores: [3, 4, 0, 1]
  },
  {
    question: "You’re most productive...",
    options: [
      "Late night",              // Coffee Maker
      "Early morning",           // Toaster
      "Midday",                  // Washer
      "All the time"             // Blender
    ],
    scores: [7, 0, 6, 5]
  },
  {
    question: "If you were a sound effect:",
    options: [
      "Whirr",                   // Vacuum
      "Buzz",                    // Fan
      "Click",                   // Toaster
      "Drip"                     // Coffee Maker
    ],
    scores: [2, 8, 0, 7]
  },
  {
    question: "How do you handle pressure?",
    options: [
      "Cool and calculated",     // Fridge
      "Explosive but effective", // Blender
      "Quiet determination",     // Washer
      "Fast and reactive"        // Microwave
    ],
    scores: [1, 5, 6, 3]
  },
  {
    question: "Pick a kitchen item:",
    options: [
      "Toaster",                 // Toaster
      "Blender",                 // Blender
      "Microwave",               // Microwave
      "Fridge"                   // Fridge
    ],
    scores: [0, 5, 3, 1]
  }
];

// Track the current question index user is on
let currentQuestion = 0;

// Array to store the selected answer index for each question; initialized with nulls
let answers = Array(questions.length).fill(null);

// Function to render the current question and answer options on the page
function renderQuestion() {
  const container = document.getElementById("quiz-container");  // Get quiz container div
  const q = questions[currentQuestion];                         // Current question object

  // Build the HTML dynamically with question number, text, options, and navigation buttons
  container.innerHTML = `
    <div style="text-align: center; font-weight: bold; margin-bottom: 12px;">
      Question ${currentQuestion + 1} / ${questions.length}   <!-- Show progress -->
    </div>
    <div class="question">${q.question}</div>                 <!-- Show question text -->
    ${q.options.map((opt, i) => `                             <!-- Map each option to a clickable div -->
      <div class="answer-box ${answers[currentQuestion] === i ? "selected" : ""}" 
           onclick="selectAnswer(${i})">                      <!-- Highlight if selected -->
        ${opt}                                                <!-- Option text -->
      </div>
    `).join('')}
    <div class="button-row">
      ${currentQuestion > 0 ? `<button onclick="prevQuestion()">Back</button>` : `<div></div>`}  <!-- Back button only if not first question -->
      <button onclick="nextQuestion()">${currentQuestion === questions.length - 1 ? "Submit" : "Next"}</button> <!-- Next or Submit button -->
    </div>
  `;
}

// Function called when user selects an answer option
function selectAnswer(index) {
  answers[currentQuestion] = index;  // Save selected answer index for current question
  renderQuestion();                  // Re-render question to update UI with selection
}

// Function called when user clicks "Next" or "Submit" button
function nextQuestion() {
  // If no answer selected for current question, alert and prevent moving forward
  if (answers[currentQuestion] === null) {
    alert("Please select an answer.");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;  // Move to next question
    renderQuestion();   // Render it
  } else {
    showResults();      // If last question, show results instead
  }
}

// Function to move back to previous question when "Back" is clicked
function prevQuestion() {
  currentQuestion--;
  renderQuestion();
}

// Function to calculate quiz results and display the user's appliance personality
function showResults() {
  // Create an array to count scores for each appliance, initialized to zero
  const scoreCount = new Array(appliances.length).fill(0);

  // Iterate through all answers to tally the points for each appliance
  answers.forEach((ans, i) => {
    const applianceIndex = questions[i].scores[ans];  // Get appliance index for chosen answer
    scoreCount[applianceIndex]++;                     // Increment count for that appliance
  });

  // Find the maximum score (most matched appliance)
  const maxScore = Math.max(...scoreCount);
  // Find the index of the appliance with the max score
  const resultIndex = scoreCount.indexOf(maxScore);
  // Get the appliance result object
  const result = appliances[resultIndex];

  // Display the final result with name, description, compatibility, and clash info
  document.getElementById("quiz-container").innerHTML = `
    <h2>You are a... ${result.name}!</h2>
    <img src="${result.image}" alt="${result.name}" style="max-width: 100%; border-radius: 10px; margin: 1rem 0;">
    <p>${result.description}</p>
    <p><strong>Compatible with:</strong> ${result.compatible.join(", ")}</p>
    <p><strong>Clashes with:</strong> ${result.clash}</p>
    <button onclick="restartQuiz()">Retake Quiz</button>  <!-- Button to retake -->
  `;
}

// Function to reset the quiz to initial state to retake it
function restartQuiz() {
  currentQuestion = 0;              // Reset question index
  answers = Array(questions.length).fill(null);  // Reset all answers

  // Hide quiz and show landing screen again
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("landing").style.display = "block";
}

// Optional: You could call renderQuestion() on page load if you want quiz ready immediately
// window.onload = renderQuestion;
