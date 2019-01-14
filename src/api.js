export const sendingData = data =>
	fetch(`https://successful-brace.glitch.me/poll-form/info`, {
		method: 'POST',
		body: JSON.stringify(data),
		mode: 'cors',
		headers: {
			'Content-type': 'application/json',
		},
	});
