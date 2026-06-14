"use client";

import { useState } from "react";
import Checklist from "./components/Checklist";
import { mapDatabase } from "./data/maps";

export default function Home() {
  const [activeMapId, setActiveMapId] = useState(mapDatabase[0].id);
  // Smarter default: grab the first quest of the first map
  const [activeQuestId, setActiveQuestId] = useState(mapDatabase[0].quests[0]?.id || "");

  const activeMap = mapDatabase.find(m => m.id === activeMapId);
  const activeQuest = activeMap?.quests.find(q => q.id === activeQuestId);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-zinc-950 text-white">
      <h1 className="text-5xl font-extrabold text-red-600 mb-8 tracking-wider uppercase">
        BO7 Tracker
      </h1>
      
      {/* --- MAP SELECTOR --- */}
      <div className="flex space-x-2 mb-6 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
        {mapDatabase.map((map) => (
          <button
            key={map.id}
            onClick={() => {
              setActiveMapId(map.id);
              // BUG FIX: Automatically select the first tab of the new map, or empty it!
              setActiveQuestId(map.quests.length > 0 ? map.quests[0].id : ""); 
            }}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeMapId === map.id 
                ? "bg-red-600 text-white shadow-lg" 
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {map.name}
          </button>
        ))}
      </div>

      {/* --- CATEGORY SELECTOR --- */}
      {activeMap && activeMap.quests.length > 0 && (
        <div className="flex space-x-4 mb-4 border-b border-zinc-800 w-full max-w-2xl justify-center pb-2">
          {activeMap.quests.map((quest) => (
            <button
              key={quest.id}
              onClick={() => setActiveQuestId(quest.id)}
              className={`pb-2 font-medium transition-colors ${
                activeQuestId === quest.id 
                  ? "text-red-500 border-b-2 border-red-500" 
                  : "text-zinc-500 hover:text-zinc-300"
            }`}
            >
              {quest.title}
            </button>
          ))}
        </div>
      )}

      {/* --- THE CHECKLIST OR FALLBACK --- */}
      {activeMap?.quests.length === 0 ? (
        // The cinematic "Coming Soon" card with enhanced visuals
        <div className="relative mt-8 w-full max-w-3xl overflow-hidden rounded-lg border-2 border-red-900 shadow-2xl">
          {/* Enhanced Background Image */}
          <img 
            src={activeMap.previewImage || "/placeholder.jpg"} 
            alt={`${activeMap.name} Preview`} 
            className="w-full h-[450px] object-cover opacity-65 grayscale-[15%] transition-all" // Increased opacity, reduced grayscale
          />
          
          {/* Exciting Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/40 p-6 text-center backdrop-blur-[1px]"> {/* Reduced fade/blur */}
            <div className="border-y-4 border-red-800 py-4 px-12 mb-6"> {/* Added decorative borders */}
              <h2 className="text-7xl font-extrabold uppercase tracking-widest text-red-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_15px_rgba(239,68,68,0.7)]"> {/* Intense red title with glow and shadow */}
                Coming Soon
              </h2>
            </div>
            <p className="mt-6 text-2xl font-bold text-zinc-100 drop-shadow-sm font-mono tracking-tight"> {/* Larger, punchier text with monospaced font */}
              Prepare for Battle on <span className="text-white text-3xl font-black">{activeMap.name}</span>
            </p>
            <div className="mt-8 px-6 py-2 bg-red-950 rounded-full border border-red-600 text-sm font-semibold text-red-300 uppercase tracking-wide"> {/* Subtle "STATUS: IN DEVELOPMENT" tag */}
              Current Status: MAP TO BE RELEASED ON JUNE 25, 2026
            </div>
          </div>
        </div>
      ) : activeQuest ? (
        <Checklist 
          id={`${activeMapId}-${activeQuest.id}`} 
          title={activeQuest.title} 
          steps={activeQuest.steps} 
          onNavigate={setActiveQuestId} 
        />
      ) : null}

    </main>
  );
}