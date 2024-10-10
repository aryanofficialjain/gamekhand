'use client';
import React from 'react';
import Iframe from '../../../../Components/Iframe'; // Import your Iframe component
import { useParams } from 'next/navigation'; // Import useParams from next/navigation

const GamePage = () => {
  const { gamename } = useParams(); // Get the game name from the URL

  // Define your game URLs here
  const gameUrls: Record<string, string> = {
    parinda: 'https://play.famobi.com/om-nom-run', // Replace with your game's actual link
    // Add other games here...
  };

  // Ensure gamename is a string
  const gameUrl: string | undefined = typeof gamename === 'string' ? gameUrls[gamename] : undefined;

  if (!gameUrl) {
    return <div>Game not found!</div>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">{gamename}</h1>
      <Iframe src={gameUrl} title={gamename as string} /> {/* Pass gamename as a string */}
    </div>
  );
};

export default GamePage;