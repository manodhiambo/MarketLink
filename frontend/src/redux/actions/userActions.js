export const FETCH_USER_DETAILS_REQUEST = "FETCH_USER_DETAILS_REQUEST";
export const FETCH_USER_DETAILS_SUCCESS = "FETCH_USER_DETAILS_SUCCESS";
export const FETCH_USER_DETAILS_FAILURE = "FETCH_USER_DETAILS_FAILURE";

export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const fetchUserDetails = () => ({
	  type: FETCH_USER_DETAILS_REQUEST,
});

export const fetchUserDetailsSuccess = (user) => ({
	  type: FETCH_USER_DETAILS_SUCCESS,
	  payload: user,
});

export const fetchUserDetailsFailure = (error) => ({
	  type: FETCH_USER_DETAILS_FAILURE,
	  payload: error,
});

export const updateProfile = (profileData) => ({
	  type: UPDATE_PROFILE_REQUEST,
	  payload: profileData,
});

export const updateProfileSuccess = (updatedProfile) => ({
	  type: UPDATE_PROFILE_SUCCESS,
	  payload: updatedProfile,
});

export const updateProfileFailure = (error) => ({
	  type: UPDATE_PROFILE_FAILURE,
	  payload: error,
});
