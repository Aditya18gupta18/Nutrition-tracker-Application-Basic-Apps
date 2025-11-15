
import React from 'react';
import type { FoodItem } from '../types';

interface FoodLogProps {
  items: FoodItem[];
}

const FoodLog: React.FC<FoodLogProps> = ({ items }) => {
  return (
    <div className="p-4 mt-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Today's Log</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {items.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500 dark:text-slate-400">Your food log is empty.</p>
            <p className="text-sm text-slate-400 dark:text-slate-500">Add a meal to get started!</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between transition-all hover:bg-slate-100 dark:hover:bg-slate-700">
              <p className="font-semibold text-slate-700 dark:text-slate-200 capitalize mb-2 sm:mb-0">{item.name}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
                <span className="text-orange-500">
                  <strong className="font-medium">{Math.round(item.calories)}</strong> kcal
                </span>
                <span className="text-sky-500">
                  <strong className="font-medium">{Math.round(item.protein)}g</strong> P
                </span>
                <span className="text-emerald-500">
                  <strong className="font-medium">{Math.round(item.carbohydrates)}g</strong> C
                </span>
                <span className="text-amber-500">
                  <strong className="font-medium">{Math.round(item.fat)}g</strong> F
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FoodLog;
