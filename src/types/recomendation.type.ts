export interface IRecommendation {
  _id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  photos: string[];
  fuelType: string;
  transmission: string;
  engineCapacity: string;
  condition: string;
  description: string;
  owner: string;
  color: string;
  doors?: number;
  bodyType?: string;
  customsCleared: boolean;
  city: string;
  views: number;
  viewsToday: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  wheels?: number;
  bikeType?: string;
}
