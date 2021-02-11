import React, { useContext, useState } from "react";
import { Status } from "./types";

type Configuration = {
  amount: number;
  size: number;
  status?: Status;
};

interface ConfigureContext extends Configuration {
  configure: (type: keyof Configuration, value: number | Status) => void;
}

const defaultConfigurations: Configuration = {
  amount: 0,
  size: 0,
  status: "NONE",
};

const defaultConfigureContext: ConfigureContext = {
  ...defaultConfigurations,
  configure: (type, value) => undefined,
};

const ConfigurationContext = React.createContext(defaultConfigureContext);

export const ConfigurationProvider: React.FC<Configuration> = (props) => {
  const [amount, setAmount] = useState(
    props.amount || defaultConfigurations.amount
  );
  const [size, setSize] = useState(props.size || defaultConfigurations.size);
  const [status, setStatus] = useState<Status>(
    props.status || defaultConfigurations.status || "NONE"
  );

  const configure = (type: string, value: number | Status) => {
    switch (type) {
      case "size":
        setSize(value as number);
        break;
      case "amount":
        setAmount(value as number);
        break;
      case "status":
        setStatus(value as Status);
    }
  };

  return (
    <ConfigurationContext.Provider value={{ amount, size, status, configure }}>
      {props.children}
    </ConfigurationContext.Provider>
  );
};

export const useConfiguration = () => {
  const context = useContext(ConfigurationContext);
  return context;
};
