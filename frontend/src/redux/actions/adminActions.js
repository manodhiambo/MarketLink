export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_ANALYTICS_REQUEST = "FETCH_ANALYTICS_REQUEST";
export const FETCH_ANALYTICS_SUCCESS = "FETCH_ANALYTICS_SUCCESS";
export const FETCH_ANALYTICS_FAILURE = "FETCH_ANALYTICS_FAILURE";

export const fetchUsers = () => ({
	  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
	  type: FETCH_USERS_SUCCESS,
	  payload: users,
});

export const fetchUsersFailure = (error) => ({
	  type: FETCH_USERS_FAILURE,
	  payload: error,
});

export const fetchAnalytics = () => ({
	  type: FETCH_ANALYTICS_REQUEST,
});

export const fetchAnalyticsSuccess = (data) => ({
	  type: FETCH_ANALYTICS_SUCCESS,
	  payload: data,
});

export const fetchAnalyticsFailure = (error) => ({
	  type: FETCH_ANALYTICS_FAILURE,
	  payload: error,
});
