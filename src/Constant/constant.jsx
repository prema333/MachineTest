export function isValidate(value) {
	const pattern = new RegExp(
		/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
	);
	return pattern.test(value);
}

export function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export const dummyData = [
	{
		id: 1,
		image: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg",
	},
	{
		id: 2,
    image:"https://www.rd.com/wp-content/uploads/2020/07/GettyImages-1205535631.jpg"
	},
  {
		id: 3,
		image:
			"https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Download-Free-Images-HD.jpg",
	},
];
