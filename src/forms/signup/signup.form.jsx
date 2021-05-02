import React from "react";

import PhaseOneForm from "./step-one.signup";
import PhaseTwoForm from "./step-two.signup";

const reducer = (state, action) => {
  switch (action.type) {
    case "stepComplete":
      return {
        ...state,
        stepOneComplete: true,
      };
    case "setUser":
      return { ...state, user: { ...state.user, ...action.payload } };
  }
};

const SignupForm = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    stepOneComplete: false,
    user: {},
  });

  return state.stepOneComplete ? (
    <PhaseTwoForm user={state.user} />
  ) : (
    <PhaseOneForm localDispatch={dispatch} />
  );
};

export default SignupForm;
