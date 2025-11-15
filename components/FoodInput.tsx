
import React, { useState } from 'react';

interface FoodInputProps {
  onAddFood: (foodDescription: string) => void;
  isLoading: boolean;
}

const FoodInput: React.FC<FoodInputProps> = ({ onAddFood, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onAddFood(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-800/50 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">
      <form onSubmit={handleSubmit}>
        <label htmlFor="food-input" className="block text-lg font-semibold mb-2 text-slate-700 dark:text-slate-200">
          What did you eat?
        </label>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Enter your meal in natural language (e.g., "A bowl of oatmeal with blueberries and a coffee").
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="food-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g., 2 eggs and a slice of toast"
            disabled={isLoading}
            className="flex-grow w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="flex items-center justify-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-slate-900 transition duration-200 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </>
            ) : (
              'Add Food'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoodInput;
