
import React from 'react';
import type { DailyTotals } from '../types';
import { DAILY_GOALS } from '../constants';
import NutrientCard from './NutrientCard';
import { CalorieIcon } from './icons/CalorieIcon';
import { ProteinIcon } from './icons/ProteinIcon';
import { CarbIcon } from './icons/CarbIcon';
import { FatIcon } from './icons/FatIcon';

interface NutritionSummaryProps {
  totals: DailyTotals;
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ totals }) => {
  return (
    <div className="w-full p-4 lg:p-0">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Daily Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <NutrientCard
          label="Calories"
          value={totals.calories}
          goal={DAILY_GOALS.calories}
          unit="kcal"
          icon={<CalorieIcon className="w-6 h-6 text-orange-500" />}
          color="bg-orange-500"
        />
        <NutrientCard
          label="Protein"
          value={totals.protein}
          goal={DAILY_GOALS.protein}
          unit="g"
          icon={<ProteinIcon className="w-6 h-6 text-sky-500" />}
          color="bg-sky-500"
        />
        <NutrientCard
          label="Carbs"
          value={totals.carbohydrates}
          goal={DAILY_GOALS.carbohydrates}
          unit="g"
          icon={<CarbIcon className="w-6 h-6 text-emerald-500" />}
          color="bg-emerald-500"
        />
        <NutrientCard
          label="Fat"
          value={totals.fat}
          goal={DAILY_GOALS.fat}
          unit="g"
          icon={<FatIcon className="w-6 h-6 text-amber-500" />}
          color="bg-amber-500"
        />
      </div>
    </div>
  );
};

export default NutritionSummary;
