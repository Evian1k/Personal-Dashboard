import React, { useState } from 'react';

const quotes = {
  dancehall: [
    "Music is life. Dancehall is the sound of freedom.",
    "In the dancehall, we rise up together.",
    "Vibes so heavy, the dancefloor can't take it.",
    "Keep calm and dancehall on.",
    "Rise to the rhythm, feel the beat.",
    "Dancehall, where the heart beats loud.",
    "Freedom is in the music, feel it in your soul.",
    "Keep the fire burning with every step.",
    "Sound system vibes, making the world go round.",
    "In the rhythm, we trust.",
    "Dancehall is not just music; it's a way of life.",
    "Every beat, every step, it’s a movement.",
    "The sound of the streets, the voice of the people.",
    "Life’s too short to not dancehall!",
    "Feel the bass, feel the energy.",
    "Reggae, soul, and dancehall – one heart.",
    "Basslines and riddims, that's the dancehall spirit.",
    "When the music hits, the world forgets.",
    "Dancehall teaches you to express yourself freely.",
    "Feel the beat, live the life."
  ],
  reggae: [
    "One good thing about music, when it hits you, you feel no pain.",
    "Roots rock reggae, that’s where it’s at.",
    "Reggae is the voice of the oppressed.",
    "Rise up, stand tall, reggae is for us all.",
    "Let the music take you to another place.",
    "Peace, love, and reggae vibes.",
    "Reggae is not just music, it’s a movement.",
    "The roots of reggae live within us.",
    "Reggae music is the medicine for the soul.",
    "One love, one heart, let’s get together and feel all right.",
    "Reggae makes the world a better place.",
    "Find your peace through reggae music.",
    "Reggae speaks the truth and heals the heart.",
    "Let the reggae beat guide your soul.",
    "Stand up and fight for your right to live free.",
    "Don’t worry, be happy – that’s the reggae way.",
    "No music, no life – reggae forever.",
    "With reggae, we spread love and unity.",
    "Reggae, a rhythm that heals the world.",
    "Feel the love in the reggae beat."
  ],
  hiphop: [
    "Hiphop is a voice for the unheard.",
    "Every hustle is a step closer to greatness.",
    "The struggle is real, but so is the grind.",
    "Get up, get out, make it happen.",
    "Real recognizes real, and that’s the truth.",
    "Hip-hop is the heartbeat of the streets.",
    "Life's a journey, and I’m making my path.",
    "When life throws you struggles, turn it into bars.",
    "Keep grinding, keep shining, no matter the odds.",
    "Dream big, work hard, stay focused.",
    "Hip-hop teaches us that nothing is impossible.",
    "The world’s full of problems, but we got the answers in our rhymes.",
    "Never stop hustling, the game will recognize you.",
    "Rap is poetry in motion.",
    "From the struggle, greatness emerges.",
    "Let the beat guide you through the storm.",
    "Stay true to yourself, don’t let the game change you.",
    "Hip-hop is not just a genre, it’s a lifestyle.",
    "We rise from the ashes, one verse at a time.",
    "Be your own boss, that’s the hip-hop way."
  ]
};

const DailyQuote = () => {
  const [selectedQuote, setSelectedQuote] = useState('');

  const handleCategorySelection = (category) => {
    // Select a random quote from the selected category
    const randomQuote = quotes[category][Math.floor(Math.random() * quotes[category].length)];
    setSelectedQuote(randomQuote);
  };

  return (
    <div className="section daily-quote">
      <h2>Quote of the Day</h2>

      {/* Category Buttons for Quotes */}
      <div className="category-options">
        <button onClick={() => handleCategorySelection('dancehall')}>
          Dancehall
        </button>
        <button onClick={() => handleCategorySelection('reggae')}>
          Reggae
        </button>
        <button onClick={() => handleCategorySelection('hiphop')}>
          Hip-Hop
        </button>
      </div>

      {/* Display Selected Quote */}
      {selectedQuote && (
        <div style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '18px', color: '#555' }}>
          <p>"{selectedQuote}"</p>
        </div>
      )}
    </div>
  );
};

export default DailyQuote;


