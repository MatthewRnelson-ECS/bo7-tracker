"use client";

import { useState, useEffect } from "react";

interface Step {
  text: string;
  linkId?: string;
  linkText?: string;
  imageUrl?: string; // We added the image property here!
}

interface ChecklistProps {
  id: string;
  title: string;
  steps: Step[];
  onNavigate: (questId: string) => void;
}

export default function Checklist({ id, title, steps, onNavigate }: ChecklistProps) {
  const [completed, setCompleted] = useState<number[]>([]);
  const storageKey = `bo7-${id}-progress`;

  useEffect(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      setCompleted(JSON.parse(savedProgress));
    } else {
      setCompleted([]); 
    }
  }, [storageKey]);

  const toggleStep = (index: number) => {
    let newCompleted;
    if (completed.includes(index)) {
      newCompleted = completed.filter((i) => i !== index);
    } else {
      newCompleted = [...completed, index];
    }
    setCompleted(newCompleted);
    localStorage.setItem(storageKey, JSON.stringify(newCompleted));
  };

  // If a map has no quests yet (like Kowakujo), show a coming soon message
  if (steps.length === 0) {
    return (
      <div className="mt-8 w-full max-w-2xl rounded-lg border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400 font-medium">
        Guides for this map are currently being researched...
      </div>
    );
  }

  return (
    <div className="mt-8 w-full max-w-2xl rounded-lg border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-white">{title}</h2>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 rounded-lg p-3 hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-800">
            <input
              type="checkbox"
              checked={completed.includes(index)}
              onChange={() => toggleStep(index)}
              className="mt-1.5 h-6 w-6 shrink-0 cursor-pointer rounded border-zinc-700 bg-zinc-800 text-red-500 accent-red-500"
            />
            
            <div className="flex flex-col w-full">
              <span 
                onClick={() => toggleStep(index)}
                className={`text-lg cursor-pointer select-none ${completed.includes(index) ? 'text-zinc-600 line-through' : 'text-zinc-200'}`}
              >
                {step.text}
              </span>
              
              {/* IMAGE RENDERER: If the step has an image, show it! */}
              {step.imageUrl && (
                <div className="mt-3 mb-1 overflow-hidden rounded-md border border-zinc-700">
                  <img 
                    src={step.imageUrl} 
                    alt="Guide step location" 
                    className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
                    // If they don't have the image saved yet, this prevents a broken image icon
                    onError={(e) => (e.currentTarget.style.display = 'none')} 
                  />
                </div>
              )}
              
              {step.linkId && step.linkText && (
                <button 
                  onClick={() => onNavigate(step.linkId as string)}
                  className="mt-2 self-start text-sm font-bold text-red-500 hover:text-red-400 underline underline-offset-4"
                >
                  ↳ {step.linkText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}