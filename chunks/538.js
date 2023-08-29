
let copiedMinifyText = document.querySelector('.copiedMinifyText');
let copiedMinifyButton = document.querySelector('.copiedMinifyButton')
//TO copy text from Clipboard

copiedMinifyButton.addEventListener('click', () => {
    var copyMinifyText = outputMinifydiv;

    // Select the text field
    copyMinifyText.select();
    copyMinifyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyMinifyText.value);

    // Alert the copied text
    copiedMinifyText.style.display = 'flex'

    setTimeout(() => {
        copiedMinifyText.style.display = 'none';
    }, 1000)
});

window.onload = function () {
    runHtmlMinify.click();
}
