import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	loginData: {
		email: "",
		password: "",
	},
	details: [],
	errors: {
		email: "",
		password: "",
	},
	referenceData: [],
	visible: 20,
	isWidthChange: false,
	loading: { visibleLoading: false, getLoading: false },
	activeTab: "All",
	savedData: {
		email: "",
		password: "",
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoginData(state, action) {
			state.loginData = { ...state.loginData, ...action.payload };
		},
		setSavedData(state, action) {
			state.savedData = { ...state.savedData, ...action.payload };
		},
		setActiveTab(state, action) {
			state.activeTab = action.payload;
		},
		setLoading(state, action) {
			state.loading = { ...state.loading, ...action.payload };
		},
		setIsWidthChange(state, action) {
			state.isWidthChange = action.payload;
		},
		setDetails(state, action) {
			state.details = action.payload;
		},
		setReferenceData(state, action) {
			state.referenceData = action.payload;
		},
		setVisible(state, action) {
			state.visible = action.payload;
		},
		setErrors(state, action) {
			state.errors = { ...state.errors, ...action.payload };
		},
	},
});

export const {
	setLoginData,
	setDetails,
	setErrors,
	setReferenceData,
	setVisible,
	setIsWidthChange,
	setLoading,
	setActiveTab,setSavedData
} = authSlice.actions;

export default authSlice.reducer;
