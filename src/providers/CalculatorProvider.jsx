import { createContext, useReducer } from "react";
import { evaluate } from "../utils/evaluate";

export const CalculatorContext = createContext();

const initialState = {
    current: "0",
    previous: "null",
    operator: "null",
    overwrite: false,
};

function reducer(state, action){
    switch (action.type) {
        case "ADD_DIGIT":
            if (state.overwrite){
                return{
                    ...state,
                    current: action.payload,
                    overwrite: false,
                };
            }

            

            break;
    
        default:
            break;
    }
}

export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};
