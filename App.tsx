
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import FoodInput from './components/FoodInput';
import NutritionSummary from './components/NutritionSummary';
import FoodLog from './components/FoodLog';
import { getNutritionalInfo } from './services/geminiService';
import type { FoodItem, DailyTotals } from './types';

const App: React.FC = () => {
  const [foodLog, setFoodLog] = useState<FoodItem[]>([]);
  const [dailyTotals, setDailyTotals] = useState<DailyTotals>({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddFood = useCallback(async (foodDescription: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const nutritionData = await getNutritionalInfo(foodDescription);
      const newItems: FoodItem[] = nutritionData.items.map(item => ({
        ...item,
        id: crypto.randomUUID(),
      }));

      setFoodLog(prevLog => [...prevLog, ...newItems]);
      
      setDailyTotals(prevTotals => {
        const newTotals = { ...prevTotals };
        newItems.forEach(item => {
          newTotals.calories += item.calories;
          newTotals.protein += item.protein;
          newTotals.carbohydrates += item.carbohydrates;
          newTotals.fat += item.fat;
        });
        return newTotals;
      });

    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <FoodInput onAddFood={handleAddFood} isLoading={isLoading} />
             {error && (
              <div className="p-4 bg-red-100 dark:bg-red-900/50 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded-xl" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <FoodLog items={foodLog} />
          </div>

          {/* Right Column (Sticky) */}
          <div className="lg:sticky lg:top-24">
             <NutritionSummary totals={dailyTotals} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
