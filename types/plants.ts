export enum PlantLight {
  Low = "Low",
  Medium = "Medium",
  Bright = "Bright",
}

export enum WaterFrequency {
  Weekly = "Weekly",
  Biweekly = "Biweekly",
}

export enum petFriendly {
  Safe = "Safe",
  Toxic = "Toxic",
}

export type PlantFromDb = {
  name: string;
  imageKey: string;
  light: PlantLight;
  water: WaterFrequency;
  description: string;
  petFriendly: petFriendly;
};

export type Plant = PlantFromDb & {
  id: string;
  image: any;
};
