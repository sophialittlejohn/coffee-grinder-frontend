import React, { useContext, useState } from "react";

import { Status } from "./types";

type SizeConfig = {
  type: "size";
  value: string;
};

type AmountConfig = {
  type: "amount";
  value: string;
};

type StatusConfig = {
  type: "status";
  value: Status;
};

// this creates a discrimitated union based on the common key type or value
// in the switch statement later on type assertions won't be necessary anymore
type ConfigureOptions = SizeConfig | AmountConfig | StatusConfig;

type Configuration = {
  amount: string;
  size: string;
  status?: Status;
};

interface ConfigureContext extends Configuration {
  configure: (configureOptions: ConfigureOptions) => void;
}

const defaultConfigurations: Configuration = {
  amount: "8.5",
  size: "7",
  status: "NONE",
};

const defaultConfigureContext: ConfigureContext = {
  ...defaultConfigurations,
  configure: (options) => undefined,
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

  // type inferance doens't work if options are desctrutured
  const configure = (options: ConfigureOptions) => {
    switch (options.type) {
      case "size":
        setSize(options.value);
        break;
      case "amount":
        setAmount(options.value);
        break;
      case "status":
        setStatus(options.value);
    }
  };

  return (
    <ConfigurationContext.Provider value={{ amount, size, status, configure }}>
      {props.children}
    </ConfigurationContext.Provider>
  );
};

export const useConfiguration = (): ConfigureContext => {
  const context = useContext(ConfigurationContext);
  if (!context) {
    throw new Error(
      `useConfiguration compound components cannot be rendered outside the Configuration component`
    );
  }
  return context;
};
