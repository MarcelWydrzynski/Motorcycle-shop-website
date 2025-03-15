export type Motorcycle = {
  id: number;
  brand: string;
  model: string;
  cc?: number;
  horsepower: number;
  category: string;
  short_description: string;
  long_description: string;
  performance: {
    "0-100kph": string;
    topSpeed: string;
    fuelConsumption: string;
    weight: string;
    seatHeight: string;
    fuelCapacity: string;
  };
  image: string;
  price: string;
};
