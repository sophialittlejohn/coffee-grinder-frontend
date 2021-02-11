export type Status = "PERFECT" | "TOO_LATE" | "TOO_EARLY" | "NONE";

export type Configuration = {
  id: number;
  amount: string;
  size: string;
  createdAt: string;
  status: Status;
};
