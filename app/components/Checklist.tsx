"use client";

import { useState, useEffect } from "react";

interface Step {
  text: string;
  subSteps?: string[]; 
  tip?: string;        
  imageUrl?: string;
  note?: string; 
  linkId?: string;
  linkText?: string;
}

interface ChecklistProps {
  id: string;
  title: string;
  steps: Step[];
  onNavigate: (id: string) => void;
  globalResetCounter: number;
}

export default function Checklist({ id, title, steps, onNavigate, globalResetCounter }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`bo7-tracker-${id}`);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    } else {
      setCheckedItems(new Array(steps.length).fill(false));
    }
  }, [id, steps]);

  useEffect(() => {
    if (globalResetCounter > 0) {
      setCheckedItems(new Array(steps.length).fill(false));
    }
  }, [globalResetCounter, steps.length]);

  const toggleCheck = (index: number) => {
    // SECURITY: Prevent checking a box if the previous step isn't done yet
    if (!checkedItems[index] && index > 0 && !checkedItems[index - 1]) {
      return; 
    }

    const newChecked = [...checkedItems];
    
    if (newChecked[index]) {
      // CASCADE UNCHECK: If they uncheck a step, wipe out everything after it too
      for (let i = index; i < newChecked.length; i++) {
        newChecked[i] = false;
      }
    } else {
      // Normal check
      newChecked[index] = true;
    }
    
    setCheckedItems(newChecked);
    localStorage.setItem(`bo7-tracker-${id}`, JSON.stringify(newChecked));
  };

  const handleLocalReset = () => {
    const resetState = new Array(steps.length).fill(false);
    setCheckedItems(resetState);
    localStorage.setItem(`bo7-tracker-${id}`, JSON.stringify(resetState));
  };

  if (checkedItems.length === 0) return null;

  const activeIndex = checkedItems.findIndex((isChecked) => !isChecked);

  return (
    <div className="w-full max-w-3xl bg-zinc-950/80 backdrop-blur-md p-8 rounded-xl border border-zinc-800 shadow-2xl mt-4 transition-all">
      
      <div className="flex justify-between items-end mb-6 border-b border-zinc-800 pb-4">
        <h2 className="text-3xl font-bold text-red-500 tracking-wide">{title}</h2>
        <button
          onClick={handleLocalReset}
          className="text-xs px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-400 rounded-md hover:bg-zinc-800 hover:text-white transition-all uppercase tracking-wider font-semibold"
        >
          Reset Tab
        </button>
      </div>
      
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isCompleted = checkedItems[index];
          const isActive = index === activeIndex;
          const isExpanded = isActive;
          // NEW: Identify if this step is locked away in the future
          const isFuture = index > activeIndex && activeIndex !== -1;

          return (
            <div 
              key={index} 
              className={`flex items-start group p-4 rounded-lg transition-all duration-500 ease-in-out ${
                isActive ? "bg-zinc-900/90 border border-red-900/50 shadow-[0_0_15px_rgba(153,27,27,0.2)]" : 
                isCompleted ? "border border-transparent opacity-50 grayscale-[50%]" : 
                "border border-transparent opacity-40"
              }`}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleCheck(index)}
                disabled={isFuture} // Physically disables clicking ahead
                className={`mt-1 flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  isCompleted
                    ? "bg-red-600 border-red-600 cursor-pointer"
                    : isActive 
                      ? "border-red-500 bg-zinc-900 shadow-[0_0_8px_rgba(239,68,68,0.4)] cursor-pointer"
                      : "border-zinc-800 bg-zinc-900/20 cursor-not-allowed" // UI feedback that it's locked
                }`}
              >
                {isCompleted && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              
              <div className="ml-4 flex-1">
                <span className={`text-xl font-semibold block transition-colors duration-300 ${
                  isCompleted ? 'line-through text-zinc-500' : 
                  isActive ? 'text-zinc-100 drop-shadow-md' : 'text-zinc-500'
                }`}>
                  {step.text}
                </span>
                
                <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="pt-4 pb-2 flex flex-col gap-4">
                      
                      {step.subSteps && step.subSteps.length > 0 && (
                        <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-300">
                          {step.subSteps.map((sub, i) => (
                            <li key={i} className="text-base leading-relaxed pl-1">{sub}</li>
                          ))}
                        </ul>
                      )}

                      {step.tip && (
                        <div className="p-3 rounded-lg bg-amber-900/20 border border-amber-700/50 text-amber-200/90 text-sm flex items-start">
                          <span className="mr-3 text-amber-500 text-lg leading-none">💡</span>
                          <span className="italic leading-relaxed">{step.tip}</span>
                        </div>
                      )}

                      {step.imageUrl && (
                        <img 
                          src={step.imageUrl} 
                          alt={step.text} 
                          className="rounded-lg border border-zinc-700 max-h-64 object-cover w-full opacity-90 shadow-md"
                        />
                      )}

                      {step.linkId && (
                        <button 
                          onClick={() => onNavigate(step.linkId!)}
                          className="self-start text-sm px-4 py-2 mt-2 bg-red-950/50 border border-red-900/50 rounded-md font-medium text-red-400 hover:text-red-300 hover:bg-red-900/80 transition-all"
                        >
                          {step.linkText}
                        </button>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}