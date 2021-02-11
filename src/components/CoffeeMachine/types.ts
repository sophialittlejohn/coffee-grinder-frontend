export type ConnectCoffeeMachineMutation = {
  connectCoffeeMachineToUser: {
    id: number;
  };
};

export type CoffeeMachineQuery = {
  coffeeMachines: CoffeeMachine[];
};

export type CoffeeMachine = {
  id: number;
  name?: string;
  brand?: string;
  code?: string;
};
