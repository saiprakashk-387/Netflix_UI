import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  //state
  name: 'auth',
  initialState: {
    LoginDetails: {},
    AllUsersList: {},
    profileUpdate:{},
    isLoading: true,
    movieAnalytics:[],
    analyticsData:{},
    addAnalytics:{},
  },
  ///reducer
  reducers: {
    ///action 
    LoginAction: (state, { payload }) => {
      state.LoginDetails = payload;
      state.isLoading=false;
    },
    AdminAllUsersListAction: (state, { payload }) => {
      state.AllUsersList = payload;
      state.isLoading = false;
    },
    ProfileUpdateAction: (state, { payload }) => {
      state.profileUpdate = payload;
      state.isLoading = false;
    },
    AnalyticsAction: (state, { payload }) => 
     {
      state.movieAnalytics = [...state.movieAnalytics,payload];
      state.isLoading = false;
    },
    getAnalyticsAction: (state, { payload }) => 
     {
      state.analyticsData = payload;
      state.isLoading = false;
    },
    addAnalyticsAction: (state, { payload }) => 
     {
      state.addAnalytics = payload;
      state.isLoading = false;
    },
  },
});

export const { AdminAllUsersListAction,LoginAction ,ProfileUpdateAction,AnalyticsAction,getAnalyticsAction ,addAnalyticsAction} = sampleSlice.actions;

export const LoginSelector = (state) => state.auth;
export const AdminAllUsersListSelector = (state) => state.auth;
export const profileUpdatetSelector = (state) => state.auth;
export const AnalyticsSelector = (state) => state.auth;
export const GetAnalyticsSelector = (state) => state.auth;
export const AddAnalyticsSelector = (state) => state.auth;


//export reducer
const sampleReducer = sampleSlice.reducer;
export default sampleReducer;