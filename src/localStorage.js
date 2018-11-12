export const getLocalStorage = JSON.parse(localStorage.getItem(`state`));

export const settingLocalStorage = store =>
	localStorage.setItem(`state`, JSON.stringify(store.getState()));

export const clearingLocalStorage = () => localStorage.removeItem(`state`);

export const templateStorage = {
	FORM: {
		personalInformation: {
			name: ``,
			surname: ``,
		},
		importantInformation: {
			favoriteNumber: ``,
			favoriteMusician: ``,
		},
		additionalInformation: {
			favoriteColor: [],
		},
		step: `/`,
	},
};
