export const ADD_DATA = "ADD_DATA";
export const UPDATE_NAV = "UPDATE_NAV";

export const addData = (data) => ({
  type: ADD_DATA,
  data,
});

export const updateNav = (location) => ({
  type: UPDATE_NAV,
  location,
});

export const initialState = {
  nav: "Build Health Profile",
  data: {
    doctors: [
      {
        name: "Dr. Li",
        clinic: "Alma Clinic",
        specialization: "Internal Medicine",
      },
    ],
    supplementaryBenefits: [],
  },
};

export const wizardDataReducer = (state = initialState, action) => {
  if (action.type === ADD_DATA) {
    return {
      ...state,
      data: action.data,
    };
  }

  if (action.type === UPDATE_NAV) {
    return {
      ...state,
      nav: action.location,
    };
  }
};
