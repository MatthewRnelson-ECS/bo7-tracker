"use client";

import { useState } from "react";
import Checklist from "./components/Checklist";
import RelicGrid, { Relic } from "./components/RelicGrid"; // We imported the Relic rules here
import { mapDatabase } from "./data/maps";

export default function Home() {
  const [activeMapId, setActiveMapId] = useState(mapDatabase[0].id);
  const [activeQuestId, setActiveQuestId] = useState(mapDatabase[0].quests[0]?.id || "");
  const [globalResetCounter, setGlobalResetCounter] = useState(0);

  const activeMap = mapDatabase.find(m => m.id === activeMapId);
  const activeQuest = activeMap?.quests.find(q => q.id === activeQuestId);

  const handleMasterReset = () => {
    if (window.confirm("WARNING: Are you sure you want to reset ALL tracker progress? (Relic progress will NOT be reset)")) {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("bo7-tracker-")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
      setGlobalResetCounter(prev => prev + 1); 
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center p-8 text-white bg-zinc-950 overflow-x-hidden">
      
      <button 
        onClick={handleMasterReset}
        className="absolute top-6 right-6 z-50 flex items-center space-x-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md text-zinc-400 border border-zinc-700/50 rounded-lg hover:bg-red-950 hover:text-red-400 hover:border-red-900 transition-all text-xs font-bold tracking-widest uppercase shadow-lg"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Master Reset</span>
      </button>

      {activeMap?.backgroundImage && (
        <div 
          className="fixed inset-0 z-0 transition-all duration-700 ease-in-out bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(9, 9, 11, 0.75), rgba(9, 9, 11, 0.90)), url(${activeMap.backgroundImage})`,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center w-full mt-4">
        <h1 className="text-5xl font-extrabold text-red-600 mb-8 tracking-wider uppercase drop-shadow-lg">
          BO7 Tracker
        </h1>
        
        <div className="flex space-x-2 mb-6 p-1 bg-zinc-900/60 backdrop-blur-md rounded-lg border border-zinc-800/50 shadow-xl">
          {mapDatabase.map((map) => (
            <button
              key={map.id}
              onClick={() => {
                setActiveMapId(map.id);
                setActiveQuestId(map.quests.length > 0 ? map.quests[0].id : ""); 
              }}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeMapId === map.id 
                  ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {map.name}
            </button>
          ))}
        </div>

        {activeMap && activeMap.quests.length > 0 && (
          <div className="flex space-x-4 mb-4 border-b border-zinc-800/50 w-full max-w-4xl justify-center pb-2">
            {activeMap.quests.map((quest) => (
              <button
                key={quest.id}
                onClick={() => setActiveQuestId(quest.id)}
                className={`pb-2 font-medium transition-colors ${
                  activeQuestId === quest.id 
                    ? "text-red-500 border-b-2 border-red-500 drop-shadow-md" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {quest.title}
              </button>
            ))}
          </div>
        )}

        {activeMap?.quests.length === 0 ? (
          <div className="relative mt-8 w-full max-w-3xl overflow-hidden rounded-lg border-2 border-red-900 shadow-[0_0_30px_rgba(153,27,27,0.3)]">
            <img src={activeMap.previewImage || "/placeholder.jpg"} alt={`${activeMap.name} Preview`} className="w-full h-[450px] object-cover opacity-65 grayscale-[15%] transition-all" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/40 p-6 text-center backdrop-blur-[1px]"> 
              <div className="border-y-4 border-red-800 py-4 px-12 mb-6"> 
                <h2 className="text-7xl font-extrabold uppercase tracking-widest text-red-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_15px_rgba(239,68,68,0.7)]">Coming Soon</h2>
              </div>
              <p className="mt-6 text-2xl font-bold text-zinc-100 drop-shadow-sm font-mono tracking-tight">Prepare for Battle on <span className="text-white text-3xl font-black">{activeMap.name}</span></p>
              {activeMap.id === "kowakujo" && (
                 <div className="mt-8 px-6 py-2 bg-red-950 rounded-full border border-red-600 text-sm font-semibold text-red-300 uppercase tracking-wide">Map Release Set for June 25, 2026!</div>
              )}
            </div>
          </div>
        ) : activeQuest?.type === "relics" ? (
          <RelicGrid 
            mapId={activeMapId} 
            relics={(activeQuest.relics as Relic[]) || []} // We cast it as Relic[] to satisfy TypeScript
          />
        ) : activeQuest ? (
          <Checklist 
            id={`${activeMapId}-${activeQuest.id}`} 
            title={activeQuest.title} 
            steps={activeQuest.steps} 
            onNavigate={setActiveQuestId} 
            globalResetCounter={globalResetCounter} 
          />
        ) : null}
      </div>
    </main>
  );
}