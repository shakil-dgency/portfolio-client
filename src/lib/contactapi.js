export const sendContactForm = async (data) =>
	fetch("api/", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => {
		if (!res.ok) throw new Error("faild to send messsage");
        console.log(res);
		return res.json();
	});
