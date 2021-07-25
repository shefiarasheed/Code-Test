import {
    FETCHING_ASSISTANT_REQUEST,
    FETCHING_ASSISTANT_SUCCESS,
    FETCHING_ASSISTANT_FAILURE
  } from "./types";
  
  export function fetchAssistantRequest() {
    return {
      type: FETCHING_ASSISTANT_REQUEST
    };
  }
  
  export function fetchAssistantFailure(errorMessage) {
    return {
      type: FETCHING_ASSISTANT_FAILURE,
      errorMessage
    };
  }
  
  export const fetchAssistant = () => {
    return async dispatch => {
      dispatch(fetchAssistantRequest());
      try {
        let response = await fetch(
          "https://facebook.github.io/react-native/movies.json"
        );
        let json = await response.json();
        dispatch(fetchAssistantSuccess(json.results));
      } catch (error) {
        dispatch(fetchAssistantFailure(error));
      }
    };
  };