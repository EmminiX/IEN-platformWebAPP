'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function AIArchitectureInfo() {
  const [isExpanded, setIsExpanded] = useState(true); // Start expanded
  
  // Auto-minimize after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Collapsed State - Floating Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">🤖</span>
            <span className="text-sm font-medium hidden sm:inline">AI Info</span>
          </div>
        </button>
      )}

      {/* Expanded State - Info Window */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-sm animate-in slide-in-from-right duration-300">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <span className="mr-2">🤖</span>
              4-Agent AI System
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Agent Cards */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Research Planner</h4>
                <p className="text-xs text-gray-600">Creates comprehensive research strategy</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
              <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Data Gatherer</h4>
                <p className="text-xs text-gray-600">Collects and analyzes information</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
              <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Content Writer</h4>
                <p className="text-xs text-gray-600">Compiles intelligent reports</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Email Designer</h4>
                <p className="text-xs text-gray-600">Codes HTML email and delivers to you</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t pt-3 mt-4 space-y-2">
            <p className="text-center text-xs text-gray-500 font-medium">
              ✨ Specialized agents working together
            </p>
            <p className="text-center text-xs text-gray-400">
              Powered by{' '}
              <a 
                href="https://emmi.zone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                PromptSage
              </a>
              {' '}framework for accuracy & consistency
            </p>
          </div>
        </div>
      )}
    </div>
  );
}