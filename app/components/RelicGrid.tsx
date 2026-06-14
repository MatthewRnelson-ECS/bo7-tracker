"use client";

import { useState, useEffect } from "react";

export interface Relic {
  id: string;
  name: string;
  difficulty: "grim" | "sinister" | "wicked";
  symbolUrl?: string; 
  fallbackSymbol: string; 
  steps: string[];
  isUndiscovered?: boolean; // NEW: Flag for unsolved relics
}

interface RelicGridProps {
  mapId: string;
  relics: Relic[];
}

export default function RelicGrid({ mapId, relics }: RelicGridProps) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`bo7-relics-${mapId}`);
    if (saved) {
      setCompleted(JSON.parse(saved));
    } else {
      setCompleted({});
    }
  }, [mapId]);

  const toggleCheck = (relicId: string, e: React.MouseEvent) => {
    e.stopPropagation(); 
    const newCompleted = { ...completed, [relicId]: !completed[relicId] };
    setCompleted(newCompleted);
    localStorage.setItem(`bo7-relics-${mapId}`, JSON.stringify(newCompleted));
  };

  const grimRelics = relics.filter(r => r.difficulty === "grim");
  const sinisterRelics = relics.filter(r => r.difficulty === "sinister");
  const wickedRelics = relics.filter(r => r.difficulty === "wicked");

  const renderDifficultyBox = (title: string, rowRelics: Relic[], colorClass: string, containerBorderClass: string, headerBorderClass: string) => {
    if (rowRelics.length === 0) return null;
    return (
      <div className={`mb-10 w-full bg-zinc-950/60 border-2 rounded-2xl p-8 shadow-2xl backdrop-blur-sm ${containerBorderClass}`}>
        <h3 className={`text-3xl font-extrabold text-center uppercase tracking-widest mb-8 pb-4 border-b-2 ${headerBorderClass} ${colorClass} drop-shadow-md`}>
          {title}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6 items-start w-full">
          {rowRelics.map((relic) => {
            const isCompleted = completed[relic.id];
            const isExpanded = expandedId === relic.id;

            return (
              <div 
                key={relic.id}
                onClick={() => setExpandedId(isExpanded ? null : relic.id)}
                className={`flex flex-col cursor-pointer rounded-xl transition-all duration-500 overflow-hidden border-2 w-full sm:w-[320px] shrink-0 ${
                  isCompleted 
                    ? "bg-zinc-900/40 border-zinc-700/50 grayscale opacity-60" 
                    : isExpanded 
                      ? "bg-zinc-900/90 border-zinc-400 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      : "bg-zinc-950/80 border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 shadow-lg"
                }`}
              >
                <div className="flex flex-col items-center justify-center p-6 text-center relative">
                  {isCompleted && (
                    <div className="absolute top-3 right-3 text-green-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="text-5xl mb-3 drop-shadow-md flex items-center justify-center h-16 w-16">
                    {relic.symbolUrl ? (
                      <img src={relic.symbolUrl} alt={relic.name} className="max-h-full max-w-full object-contain" />
                    ) : (
                      relic.fallbackSymbol
                    )}
                  </div>
                  <h4 className={`font-bold tracking-wide ${isCompleted ? "text-zinc-500 line-through" : "text-zinc-200"}`}>
                    {relic.name}
                  </h4>
                </div>

                <div className={`grid transition-all duration-500 ease-in-out bg-black/40 ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="p-5 border-t border-zinc-800/50">
                      
                      {relic.isUndiscovered ? (
                        // UNDISCOVERED STATE UI
                        <div className="w-full py-3 px-2 bg-red-950 rounded border border-red-600 text-xs font-semibold text-red-300 uppercase tracking-wide text-center shadow-[0_0_15px_rgba(153,27,27,0.4)]">
                          Status: Undiscovered<br/>
                          <span className="text-[10px] text-red-400/80 mt-1 block">The community is still searching!</span>
                        </div>
                      ) : (
                        // STANDARD STATE UI
                        <>
                          <ul className="list-decimal list-outside ml-5 space-y-2 text-zinc-300 text-sm mb-4">
                            {relic.steps.map((step, i) => (
                              <li key={i} className="leading-relaxed pl-1">{step}</li>
                            ))}
                          </ul>
                          
                          <button
                            onClick={(e) => toggleCheck(relic.id, e)}
                            className={`w-full py-2 rounded font-bold uppercase tracking-wide transition-all ${
                              isCompleted 
                                ? "bg-zinc-800 text-zinc-400 hover:bg-zinc-700" 
                                : "bg-red-900/60 text-red-200 hover:bg-red-700 hover:text-white border border-red-800/50"
                            }`}
                          >
                            {isCompleted ? "Mark Incomplete" : "Mark Completed"}
                          </button>
                        </>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl bg-zinc-950/80 backdrop-blur-md p-8 rounded-xl border border-zinc-800 shadow-2xl mt-4">
      <div className="flex justify-center items-end mb-8 border-b border-zinc-800 pb-4">
        <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">Relics Guide</h2>
      </div>

      {renderDifficultyBox("Grim", grimRelics, "text-emerald-500", "border-emerald-900/30", "border-emerald-900/50")}
      {renderDifficultyBox("Sinister", sinisterRelics, "text-amber-500", "border-amber-900/30", "border-amber-900/50")}
      {renderDifficultyBox("Wicked", wickedRelics, "text-red-500", "border-red-900/30", "border-red-900/50")}
    </div>
  );
}