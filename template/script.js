const inputText = document.getElementById('inputText');
const reverseButton = document.getElementById('reverseButton');
const copyButton = document.getElementById('copyButton');
const result = document.getElementById('result');

function reverseString(value) {
	return value.split('').reverse().join('');
}

inputText.addEventListener('input', () => {
	const value = inputText.value.trim();
	reverseButton.hidden = value.length <= 3;
	copyButton.hidden = true;

	if (value.length <= 3) {
		result.textContent = '';
	}
});

reverseButton.addEventListener('click', () => {
	const value = inputText.value.trim();
	const reversedValue = reverseString(value);
	result.textContent = reversedValue;
	copyButton.hidden = reversedValue.length === 0;
});

copyButton.addEventListener('click', async () => {
	const valueToCopy = result.textContent.trim();
	if (!valueToCopy) {
		return;
	}

	try {
		await navigator.clipboard.writeText(valueToCopy);
		copyButton.textContent = '✅ Copied!';
		setTimeout(() => {
			copyButton.textContent = '📋 Copy';
		}, 1200);
	} catch (error) {
		copyButton.textContent = '⚠️ No se pudo copiar';
		setTimeout(() => {
			copyButton.textContent = '📋 Copy';
		}, 1500);
	}
});
