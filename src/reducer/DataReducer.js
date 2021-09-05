import data from "../data/data.json";

export const initialState = {
  products: [],
  sortBy: "",
  filterBy: "",
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: data.products };

    default:
      return state;
  }
};
