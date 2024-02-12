export type CarModel = "Seville 4";
export type CarMake = "Range Rover";

export interface UserModel {
  uid: number;
  name: string;
  active: boolean;
  car?: {
    make?: CarMake;
    model?: CarModel;
  };
  createdAt: number;
}
