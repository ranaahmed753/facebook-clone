import React, { createContext } from 'react';

const CustomContext = React.createContext();
const ParentProvider = CustomContext.Provider;
const ChildConsumer = CustomContext.Consumer;

export default {ParentProvider,ChildConsumer};