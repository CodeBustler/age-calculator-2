function calculateAge() {
	// Get the birthdate input value and create Date objects for birthdate and today
	let birthDate = new Date(document.querySelector("#birthDate").value);
	let today = new Date();

	// Check if the entered birthdate is valid
	if (birthDate == "Invalid Date") {
		alert("Please select a valid date!"); // Show an alert if the date is invalid
	} else {
		// Calculate the difference in years, months, and days
		let years = today.getFullYear() - birthDate.getFullYear();
		let months = today.getMonth() - birthDate.getMonth();
		let days = today.getDate() - birthDate.getDate();

		// Adjust months and days if they are negative
		if (days < 0) {
			months--;
			days += new Date(
				today.getFullYear(),
				today.getMonth(),
				0,
			).getDate();
		}
		if (months < 0) {
			years--;
			months += 12;
		}

		// Display the calculated age in years, months, and days
		document.querySelector(".years").innerHTML = years;
		document.querySelector(".months").innerHTML = months;
		document.querySelector(".days").innerHTML = days;
	}
}
