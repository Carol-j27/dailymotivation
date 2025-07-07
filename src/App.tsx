import React, { useState } from 'react';
import { Heart, Brain, Zap, Shield, Target, Coffee, Sparkles, RefreshCw } from 'lucide-react';

interface MoodOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

interface Quote {
  text: string;
  author: string;
}

const moodOptions: MoodOption[] = [
  {
    id: 'anxious',
    label: 'Feeling Anxious',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 hover:bg-pink-100'
  },
  {
    id: 'focus',
    label: 'Need Focus',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    id: 'energy',
    label: 'Low Energy',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 hover:bg-yellow-100'
  },
  {
    id: 'confidence',
    label: 'Need Confidence',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100'
  },
  {
    id: 'stressed',
    label: 'Feeling Stressed',
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100'
  },
  {
    id: 'tired',
    label: 'Feeling Tired',
    icon: Coffee,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 hover:bg-orange-100'
  }
];

const quotes: Record<string, Quote[]> = {
  anxious: [
    {
      text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
      author: "A.A. Milne"
    },
    {
      text: "Anxiety is the dizziness of freedom. Choose your next step with courage.",
      author: "Søren Kierkegaard"
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha"
    },
    {
      text: "You have been assigned this mountain to show others it can be moved.",
      author: "Mel Robbins"
    },
    {
      text: "The cave you fear to enter holds the treasure you seek.",
      author: "Joseph Campbell"
    }
  ],
  focus: [
    {
      text: "The successful warrior is the average person with laser-like focus.",
      author: "Bruce Lee"
    },
    {
      text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.",
      author: "Alexander Graham Bell"
    },
    {
      text: "Focus is a matter of deciding what things you're not going to do.",
      author: "John Carmack"
    },
    {
      text: "The art of being wise is knowing what to overlook.",
      author: "William James"
    },
    {
      text: "Single-tasking is the new multitasking.",
      author: "Paulo Coelho"
    }
  ],
  energy: [
    {
      text: "Energy and persistence conquer all things.",
      author: "Benjamin Franklin"
    },
    {
      text: "The energy of the mind is the essence of life.",
      author: "Aristotle"
    },
    {
      text: "Your energy introduces you before you even speak.",
      author: "Unknown"
    },
    {
      text: "Take time to recharge. You can't pour from an empty cup.",
      author: "Unknown"
    },
    {
      text: "The higher your energy level, the more efficient your body becomes.",
      author: "Tony Robbins"
    }
  ],
  confidence: [
    {
      text: "Confidence is not 'they will like me'. Confidence is 'I'll be fine if they don't'.",
      author: "Christina Grimmie"
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis"
    },
    {
      text: "The way to develop self-confidence is to do the thing you fear and get a record of successful experiences behind you.",
      author: "William Jennings Bryan"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "You are enough just as you are.",
      author: "Meghan Markle"
    }
  ],
  stressed: [
    {
      text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius"
    },
    {
      text: "Stress is caused by being 'here' but wanting to be 'there'.",
      author: "Eckhart Tolle"
    },
    {
      text: "Take time to make your soul happy.",
      author: "Unknown"
    },
    {
      text: "Nothing can harm you as much as your own thoughts unguarded.",
      author: "Buddha"
    },
    {
      text: "The greatest weapon against stress is our ability to choose one thought over another.",
      author: "William James"
    }
  ],
  tired: [
    {
      text: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.",
      author: "Ralph Marston"
    },
    {
      text: "Sometimes the most productive thing you can do is rest.",
      author: "Unknown"
    },
    {
      text: "Take rest; a field that has rested gives a bountiful crop.",
      author: "Ovid"
    },
    {
      text: "Almost everything will work again if you unplug it for a few minutes, including you.",
      author: "Anne Lamott"
    },
    {
      text: "Sleep is the best meditation.",
      author: "Dalai Lama"
    }
  ]
};

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    generateQuote(moodId);
  };

  const generateQuote = (moodId: string) => {
    const moodQuotes = quotes[moodId];
    if (moodQuotes && moodQuotes.length > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
        setCurrentQuote(randomQuote);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleRefresh = () => {
    if (selectedMood) {
      generateQuote(selectedMood);
    }
  };

  const reset = () => {
    setSelectedMood(null);
    setCurrentQuote(null);
    setIsAnimating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Daily Motivation Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you're feeling right now, and discover the perfect motivation to brighten your day
            </p>
          </div>

          {!selectedMood ? (
            /* Mood Selection */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {moodOptions.map((mood) => {
                const IconComponent = mood.icon;
                return (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood.id)}
                    className={`${mood.bgColor} border-2 border-transparent hover:border-gray-200 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`${mood.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-12 h-12" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                        {mood.label}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Quote Display */
            <div className="space-y-6">
              {/* Selected Mood Indicator */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="bg-white rounded-full px-6 py-3 shadow-md border">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const selectedMoodOption = moodOptions.find(m => m.id === selectedMood);
                      if (selectedMoodOption) {
                        const IconComponent = selectedMoodOption.icon;
                        return (
                          <>
                            <IconComponent className={`w-5 h-5 ${selectedMoodOption.color}`} />
                            <span className="font-medium text-gray-700">{selectedMoodOption.label}</span>
                          </>
                        );
                      }
                      return null;
                    })()}
                  </div>
                </div>
              </div>

              {/* Quote Card */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                {currentQuote && (
                  <div className="text-center">
                    <div className="mb-8">
                      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-6">
                        "{currentQuote.text}"
                      </blockquote>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
                      <cite className="text-xl text-gray-600 font-medium">
                        — {currentQuote.author}
                      </cite>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRefresh}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>New Quote</span>
                </button>
                <button
                  onClick={reset}
                  className="bg-white text-gray-700 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-gray-200 hover:border-gray-300"
                >
                  Choose Different Mood
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-16 text-gray-500">
            <p>Take a moment to breathe, reflect, and let these words inspire your day.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;