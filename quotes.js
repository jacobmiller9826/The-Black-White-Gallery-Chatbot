const quotes = [
  {
    quote: "Every artist was first an amateur.",
    author: "Ralph Waldo Emerson",
    advice: "Embrace your imperfections. They're part of the process."
  },
  {
    quote: "Art washes away from the soul the dust of everyday life.",
    author: "Pablo Picasso",
    advice: "Let your work be your cleansing ritual."
  },
  {
    quote: "The object of art is not to reproduce reality, but to create a reality of the same intensity.",
    author: "Alberto Giacometti",
    advice: "Don’t chase what’s seen—build what’s felt."
  },
  {
    quote: "Creativity takes courage.",
    author: "Henri Matisse",
    advice: "Fear is the canvas. Paint anyway."
  },
  {
    quote: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
    advice: "Make something small today. It matters."
  },
  {
    quote: "Inspiration exists, but it has to find you working.",
    author: "Pablo Picasso",
    advice: "Show up. The muse follows effort."
  },
  {
    quote: "I paint flowers so they will not die.",
    author: "Frida Kahlo",
    advice: "Your art holds memory. Honor it."
  },
  {
    quote: "Art is the lie that enables us to realize the truth.",
    author: "Pablo Picasso",
    advice: "Use fiction to uncover your reality."
  },
  {
    quote: "A picture is a poem without words.",
    author: "Horace",
    advice: "Let your silence speak volumes."
  },
  {
    quote: "Every canvas is a journey all its own.",
    author: "Helen Frankenthaler",
    advice: "Start. Trust the unknown path."
  },
  {
    quote: "Art should comfort the disturbed and disturb the comfortable.",
    author: "Cesar Cruz",
    advice: "Don't be afraid to disrupt."
  },
  {
    quote: "The aim of art is to represent not the outward appearance of things, but their inward significance.",
    author: "Aristotle",
    advice: "Seek the truth beneath the surface."
  },
  {
    quote: "If I could say it in words there would be no reason to paint.",
    author: "Edward Hopper",
    advice: "Let your work speak beyond language."
  },
  {
    quote: "An artist is not paid for his labor but for his vision.",
    author: "James Whistler",
    advice: "Value what you see that others don’t."
  },
  {
    quote: "Painting is self-discovery. Every good artist paints what he is.",
    author: "Jackson Pollock",
    advice: "Reveal yourself in every stroke."
  },
  {
    quote: "To create one’s own world in any of the arts takes courage.",
    author: "Georgia O’Keeffe",
    advice: "Your world is valid. Build it."
  },
  {
    quote: "Color is the keyboard, the eyes are the harmonies, the soul is the piano with many strings.",
    author: "Wassily Kandinsky",
    advice: "Play with feeling. Compose your vision."
  },
  {
    quote: "Art is never finished, only abandoned.",
    author: "Leonardo da Vinci",
    advice: "Release perfection. Share anyway."
  },
  {
    quote: "I am seeking. I am striving. I am in it with all my heart.",
    author: "Vincent Van Gogh",
    advice: "Commit fully to your search."
  },
  {
    quote: "Art must be an expression of love or it is nothing.",
    author: "Marc Chagall",
    advice: "Pour love into your work."
  },
  {
    quote: "The chief enemy of creativity is good sense.",
    author: "Pablo Picasso",
    advice: "Break rules. Embrace nonsense."
  },
  {
    quote: "Art is the only way to run away without leaving home.",
    author: "Twyla Tharp",
    advice: "Escape inward. Travel your imagination."
  },
  {
    quote: "You don’t take a photograph, you make it.",
    author: "Ansel Adams",
    advice: "Construct your vision intentionally."
  },
  {
    quote: "Art is the stored honey of the human soul.",
    author: "Theodore Dreiser",
    advice: "Your work preserves sweetness. Share it."
  },
  {
    quote: "The artist sees what others only catch a glimpse of.",
    author: "Leonardo da Vinci",
    advice: "Trust your unique vision."
  },
  {
    quote: "Art is freedom. Being able to bend things most people see as a straight line.",
    author: "Unknown",
    advice: "Reimagine limits."
  },
  {
    quote: "A true artist is not one who is inspired, but one who inspires others.",
    author: "Salvador Dali",
    advice: "Create to ignite others."
  },
  {
    quote: "Drawing is the honesty of the art.",
    author: "Jean-Auguste-Dominique Ingres",
    advice: "Be raw. Be truthful."
  },
  {
    quote: "The job of the artist is always to deepen the mystery.",
    author: "Francis Bacon",
    advice: "Leave space for wonder."
  },
  {
    quote: "I am not strange. I am just not normal.",
    author: "Salvador Dali",
    advice: "Embrace your difference."
  },
  {
    quote: "I never paint dreams or nightmares. I paint my own reality.",
    author: "Frida Kahlo",
    advice: "Honor your lived experience."
  },
  {
    quote: "Art enables us to find ourselves and lose ourselves at the same time.",
    author: "Thomas Merton",
    advice: "Get lost. Discover."
  },
  {
    quote: "I found I could say things with color and shapes that I couldn't say any other way.",
    author: "Georgia O’Keeffe",
    advice: "Speak in the language of form."
  },
  {
    quote: "Art is not what you see, but what you make others see.",
    author: "Edgar Degas",
    advice: "Guide the viewer to your vision."
  },
  {
    quote: "I shut my eyes in order to see.",
    author: "Paul Gauguin",
    advice: "Look inward for truth."
  },
  {
    quote: "I dream my painting and I paint my dream.",
    author: "Vincent Van Gogh",
    advice: "Let your dreams guide your work."
  },
  {
    quote: "An artist is someone who produces things that people don’t need to have but that he—for some reason—thinks it would be a good idea to give them.",
    author: "Andy Warhol",
    advice: "Offer your vision even if it's unnecessary."
  },
  {
    quote: "Art is the most beautiful of all lies.",
    author: "Claude Debussy",
    advice: "Craft beautiful deceptions."
  },
  {
    quote: "Life beats down and crushes the soul and art reminds you that you have one.",
    author: "Stella Adler",
    advice: "Be the reminder people need."
  },
  {
    quote: "Art is the signature of civilizations.",
    author: "Beverly Sills",
    advice: "Your work marks this moment."
  },
  {
    quote: "Every act of creation is first an act of destruction.",
    author: "Pablo Picasso",
    advice: "Tear down. Build anew."
  },
  {
    quote: "Art does not reproduce what we see; it makes us see.",
    author: "Paul Klee",
    advice: "Open new eyes."
  },
  {
    quote: "To be an artist is to believe in life.",
    author: "Henry Moore",
    advice: "Affirm the world with your work."
  },
  {
    quote: "Art is the journey of a free soul.",
    author: "Alev Oguz",
    advice: "Roam freely in your creation."
  },
  {
    quote: "The purpose of art is washing the dust of daily life off our souls.",
    author: "Pablo Picasso",
    advice: "Make cleansing your mission."
  },
  {
    quote: "Art speaks where words are unable to explain.",
    author: "Unknown",
    advice: "Say the unsayable."
  },
  {
    quote: "The essence of all beautiful art, all great art, is gratitude.",
    author: "Friedrich Nietzsche",
    advice: "Create from thankfulness."
  },
  {
    quote: "Without art, the crudeness of reality would make the world unbearable.",
    author: "George Bernard Shaw",
    advice: "Be the balm for harshness."
  },
  {
    quote: "I don't paint things. I only paint the difference between things.",
    author: "Henri Matisse",
    advice: "Reveal the contrast."
  }
];
