export type User = {
  id: number;
  login: string;
  password: string;
  name: string;
};

export type Player = {
  id: number;
  name: string;
  isOnline: boolean;
  x: number;
  y: number;
};
