// Game Data
const gameData = [
    {
        prompt: "I want a pizza.",
        search: "Here are 10 pizza shops near you.",
        think: "Based on your past orders, you prefer Pepperoni.",
        gen: "Here is a fantasy pizza made of chocolate and clouds!",
        do: "I've ordered a Pepperoni pizza to your home.",
        question: "Which bot actually placed an order?",
        correct: "Do Bot / Agentic AI"
    },
    {
        prompt: "Explain why the sky is blue.",
        search: "Rayleigh scattering explains why shorter blue wavelengths scatter more.",
        think: "You might be preparing for a science test.",
        gen: "Imagine a poem about a sky painted by invisible artists!",
        do: "I've compiled a PDF summary and saved it to your Google Drive.",
        question: "Which bot created new content from imagination?",
        correct: "Gen AI"
    },
    {
        prompt: "Draw me a unicorn.",
        search: "Here are 20 unicorn drawings from the internet.",
        think: "Kids often like unicorns; maybe you want something cute.",
        gen: "Here is a newly generated unicorn made of galaxies!",
        do: "I saved the generated artwork as a printable poster.",
        question: "Which bot searched the internet?",
        correct: "Search Bot"
    },
    {
        prompt: "Tell me my schedule today.",
        search: "Your calendar shows two meetings and a gym session.",
        think: "You're probably planning your day.",
        gen: "Here is a fun cartoon timeline of your day!",
        do: "I've rearranged your meeting to 5 PM as you usually prefer evenings.",
        question: "Which bot edited your real schedule?",
        correct: "Do Bot / Agentic AI"
    },
    {
        prompt: "Recommend me a movie.",
        search: "Here are trending movies this week.",
        think: "You usually like sci-fi, so I recommend Interstellar.",
        gen: "I generated a poster for a movie about time-traveling cats!",
        do: "I've booked 2 tickets for Interstellar tonight.",
        question: "Which bot made a prediction about your preference?",
        correct: "Traditional AI / Think Bot"
    },
    {
        prompt: "Play relaxing music.",
        search: "Here are 20 relaxing playlists.",
        think: "You tend to listen to piano when stressed.",
        gen: "I composed a new calming melody.",
        do: "I started playing your favorite piano playlist.",
        question: "Which bot only provided information?",
        correct: "Search Bot"
    },
    {
        prompt: "Find me a good laptop.",
        search: "Here are top 10 laptops under your budget.",
        think: "Your past searches suggest you need one for programming.",
        gen: "Here's a concept image of a futuristic transparent laptop.",
        do: "I added the best-rated laptop to your Amazon cart.",
        question: "Which bot took an action in the real world?",
        correct: "Do Bot / Agentic AI"
    },
    {
        prompt: "Translate hello to French.",
        search: "According to Google, 'Bonjour' means hello.",
        think: "You might be learning French.",
        gen: "Here's a comic strip showing a French greeting scene.",
        do: "I added this translation to your language flashcards.",
        question: "Which bot provided a simple factual answer?",
        correct: "Search Bot"
    },
    {
        prompt: "Help me study for my exam.",
        search: "Here are study guides and notes.",
        think: "You struggle most with math, so let's start there.",
        gen: "I made a visual mind map of the topic.",
        do: "I set a 2-hour study session in your calendar.",
        question: "Which bot organized your calendar?",
        correct: "Do Bot / Agentic AI"
    },
    {
        prompt: "Show me cute cat videos.",
        search: "Here are 15 trending cat videos.",
        think: "You watch cat videos when you're tired.",
        gen: "I made an animated video of a cat doing yoga.",
        do: "I downloaded the playlist to your device.",
        question: "Which bot created something new that didn't exist before?",
        correct: "Gen AI"
    }
];

// Game State
let currentRound = 0;
let score = 0;
let currentQuestion = null;

// Bot explanations
const botExplanations = {
    "Do Bot / Agentic AI": "A Do Bot / Agentic AI doesn't just respond — it takes action in the real world, like ordering food, updating calendars, or modifying systems.",
    "Gen AI": "Gen AI creates entirely new content from imagination that didn't exist before, like generating images, writing poems, or composing music.",
    "Search Bot": "Search Bot retrieves and finds existing information from databases or the internet without creating anything new.",
    "Traditional AI / Think Bot": "Traditional AI / Think Bot analyzes patterns from past data to make predictions and recommendations about your preferences or behavior."
};

// Utility Functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function updateProgress() {
    const roundElements = ['current-round', 'current-round-2', 'current-round-3'];
    const scoreElements = ['score', 'score-2', 'score-3'];
    
    roundElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = currentRound + 1;
    });
    
    scoreElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = score;
    });
}

// Game Flow Functions
function startGame() {
    currentRound = 0;
    score = 0;
    updateProgress();
    loadRound();
    showScreen('screen-prompt');
}

function loadRound() {
    if (currentRound >= gameData.length) {
        showSummary();
        return;
    }
    
    currentQuestion = gameData[currentRound];
    updateProgress();
    
    // Load prompt in all locations
    document.getElementById('user-prompt').textContent = currentQuestion.prompt;
    const prompt2 = document.getElementById('user-prompt-2');
    const prompt3 = document.getElementById('user-prompt-3');
    if (prompt2) prompt2.textContent = currentQuestion.prompt;
    if (prompt3) prompt3.textContent = currentQuestion.prompt;
    
    // Load responses
    document.getElementById('response-search').textContent = currentQuestion.search;
    document.getElementById('response-think').textContent = currentQuestion.think;
    document.getElementById('response-gen').textContent = currentQuestion.gen;
    document.getElementById('response-do').textContent = currentQuestion.do;
    
    // Load question
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    // Reset all cards to front side and remove highlights
    document.querySelectorAll('.response-card').forEach(card => {
        card.classList.remove('highlight', 'flipped');
    });
}

function showResponses() {
    showScreen('screen-responses');
}

function showQuestion() {
    showScreen('screen-question');
}

function selectAnswer(answer) {
    const isCorrect = answer === currentQuestion.correct;
    
    if (isCorrect) {
        score++;
        updateProgress();
    }
    
    showFeedback(isCorrect, answer);
}

function showFeedback(isCorrect, selectedAnswer) {
    const feedbackCard = document.getElementById('feedback-card');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackMessage = document.getElementById('feedback-message');
    const highlightedResponse = document.getElementById('highlighted-response');
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const nextRoundBtn = document.getElementById('next-round-btn');
    
    // Reset classes
    feedbackCard.classList.remove('correct', 'incorrect');
    
    if (isCorrect) {
        feedbackCard.classList.add('correct');
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = 'Correct!';
        feedbackMessage.textContent = botExplanations[currentQuestion.correct];
        
        // Highlight correct response
        const correctType = getResponseType(currentQuestion.correct);
        highlightedResponse.innerHTML = `<strong>${getResponseIcon(correctType)} ${currentQuestion.correct}:</strong><br>"${currentQuestion[correctType]}"`;
        
        // Show only Next Round button for correct answers
        learnMoreBtn.style.display = 'none';
        nextRoundBtn.style.display = 'inline-block';
    } else {
        feedbackCard.classList.add('incorrect');
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = 'Not quite.';
        feedbackMessage.textContent = `The correct answer is ${currentQuestion.correct}. ${botExplanations[currentQuestion.correct]}`;
        
        // Highlight correct response
        const correctType = getResponseType(currentQuestion.correct);
        highlightedResponse.innerHTML = `<strong>${getResponseIcon(correctType)} ${currentQuestion.correct}:</strong><br>"${currentQuestion[correctType]}"`;
        
        // Show only Learn More button for incorrect answers
        learnMoreBtn.style.display = 'inline-block';
        nextRoundBtn.style.display = 'none';
    }
    
    showScreen('screen-feedback');
}

function getResponseType(botName) {
    switch(botName) {
        case "Search Bot": return "search";
        case "Traditional AI / Think Bot": return "think";
        case "Gen AI": return "gen";
        case "Do Bot / Agentic AI": return "do";
        default: return "search";
    }
}

function getResponseIcon(type) {
    switch(type) {
        case "search": return "🔍";
        case "think": return "🧠";
        case "gen": return "✨";
        case "do": return "⚙️";
        default: return "🔍";
    }
}

function showLearning() {
    showScreen('screen-learning');
}

function nextRound() {
    currentRound++;
    if (currentRound >= gameData.length) {
        showSummary();
    } else {
        loadRound();
        showScreen('screen-prompt');
    }
}

function showSummary() {
    document.getElementById('final-score').textContent = score;
    
    // Generate stars
    const starsDiv = document.getElementById('score-stars');
    const starCount = Math.round((score / gameData.length) * 5);
    starsDiv.textContent = '⭐'.repeat(starCount) + '☆'.repeat(5 - starCount);
    
    // Generate message
    const scoreMessage = document.getElementById('score-message');
    const percentage = (score / gameData.length) * 100;
    
    if (percentage === 100) {
        scoreMessage.textContent = "Perfect! You're an AI expert! 🎉";
    } else if (percentage >= 80) {
        scoreMessage.textContent = "Excellent work! You understand AI behavior! 👏";
    } else if (percentage >= 60) {
        scoreMessage.textContent = "Good job! You're getting the hang of it! 👍";
    } else if (percentage >= 40) {
        scoreMessage.textContent = "Not bad! Keep learning about AI! 📚";
    } else {
        scoreMessage.textContent = "Keep practicing! You'll master it soon! 💪";
    }
    
    showScreen('screen-summary');
}

function restartGame() {
    currentRound = 0;
    score = 0;
    startGame();
}

// Card flip function
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Prompt Game Loaded!');
});
