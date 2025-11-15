
export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

export interface DailyTotals {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

export interface GeminiResponse {
  items: Omit<FoodItem, 'id'>[];
}
