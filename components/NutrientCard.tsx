
import React from 'react';

interface NutrientCardProps {
  label: string;
  value: number;
  goal: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

const NutrientCard: React.FC<NutrientCardProps> = ({ label, value, goal, unit, icon, color }) => {
  const percentage = goal > 0 ? Math.min((value / goal) * 100, 100) : 0;

  return (
    <div className="bg-white dark:bg-slate-800/50 p-4 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2 rounded-full ${color} bg-opacity-10`}>
          {icon}
        </div>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{label}</span>
      </div>
      <div className="text-center my-4">
        <p className="text-3xl font-bold text-slate-800 dark:text-slate-100">{Math.round(value)}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">/ {goal} {unit}</p>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className={`${color} h-2.5 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default NutrientCard;
