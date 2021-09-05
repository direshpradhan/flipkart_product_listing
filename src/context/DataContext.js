import { createContext, useContext } from "react";
import { initialState, dataReducer as reducer } from "../reducer/DataReducer";
import { useReducer } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        sortBy: state.sortBy,
        products: state.products,
        filterByBrands: state.filterByBrands,
        filterBySizes: state.filterBySizes,
        filterByIdealFor: state.filterByIdealFor,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
