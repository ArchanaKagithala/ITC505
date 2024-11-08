// Roll over effect
const hoverImage = document.getElementById('hoverImage');
hoverImage.addEventListener('mouseover', () => {
    hoverImage.style.transform = 'scale(1.1)';
});
hoverImage.addEventListener('mouseout', () => {
    hoverImage.style.transform = 'scale(1)';
});

// Button color change
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
    colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'green' ? 'blue' : 'green';
});

// Alert on form submission
const alertForm = document.getElementById('alertForm');
alertForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;
    if (textInput.trim() === '') {
        alert('Please enter some text before submitting.');
    } else {
        alert(`You entered: ${textInput}`);
    }
});