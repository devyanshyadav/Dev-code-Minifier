let htmlMinifyEditor;
let cssMinifyEditor;
let jsMinifyEditor;
let outputMinifydiv = document.querySelector('#OutputMinifydiv');


htmlMinifyEditor = ace.edit("htmlMinifyEditor");
htmlMinifyEditor.setTheme("ace/theme/default");
htmlMinifyEditor.session.setMode("ace/mode/html");
htmlMinifyEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    useWorker: false // Disable message and warning features
});

cssMinifyEditor = ace.edit("cssMinifyEditor");
cssMinifyEditor.setTheme("ace/theme/default");
cssMinifyEditor.session.setMode("ace/mode/css");
cssMinifyEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    useWorker: false // Disable message and warning features
});
jsMinifyEditor = ace.edit("jsMinifyEditor");
jsMinifyEditor.setTheme("ace/theme/default");
jsMinifyEditor.session.setMode("ace/mode/javascript");
jsMinifyEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    useWorker: false // Disable message and warning features
});





let runHtmlMinify = document.querySelector('.runHtmlMinify')
let runCssMinify = document.querySelector('.runCssMinify')
let runJsMinify = document.querySelector('.runJsMinify')
let changeSection = document.querySelectorAll('#changeSection')
let htmlMinifySection = document.querySelector('#htmlMinifyEditor')
let cssMinifySection = document.querySelector('#cssMinifyEditor')
let jsMinifySection = document.querySelector('#jsMinifyEditor')
let sectionTog = document.querySelectorAll('.sectionTog')
let notifyMinify = document.querySelector('.notifyMinify')




changeSection.forEach((elem) => {
    elem.addEventListener('click', () => {

        let commonSwitch = elem.textContent.toLowerCase();

        sectionTog.forEach(elem => elem.style.display = 'none')
        if (commonSwitch === 'html') {
            htmlMinifySection.style.display = 'block';
            notifyMinify.textContent = `Minify Html`;





        }
        else if (commonSwitch === 'css') {
            cssMinifySection.style.display = 'block';
            notifyMinify.textContent = `Minify Css`;


        }
        else if (commonSwitch === 'js') {
            jsMinifySection.style.display = 'block';
            notifyMinify.textContent = `Minify Js`;



        }

    })

});

let runMinify = document.querySelector('.runMinify');

runMinify.addEventListener('click', () => {

    if (htmlMinifySection.style.display == 'block') {
        var input = htmlMinifyEditor.getValue();
        var output = input.replace(/<!--[\s\S]*?-->/g, '') // remove HTML comments
            .replace(/\s+/g, ' ') // replace multiple spaces with one
            .replace(/\s*>\s*/g, '>') // remove space before and after >
            .replace(/\s*</g, '<') // remove space after <
            .replace(/\s*\/>/g, '/>') // remove space before and after />
            .replace(/\s*=\s*/g, '=') // remove space before and after =
            .replace(/\s+/g, ' ') // replace multiple spaces with one
            .trim(); // remove leading and trailing spaces
        outputMinifydiv.value = output

    }
    else if (cssMinifySection.style.display == 'block') {


        var input = cssMinifyEditor.getValue();
        var output = input.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '') // remove comments
            .replace(/\s+/g, ' ') // replace multiple spaces with one
            .replace(/\s*{\s*/g, '{') // remove space before and after {
            .replace(/\s*}\s*/g, '}') // remove space before and after }
            .replace(/\s*:\s*/g, ':') // remove space before and after :
            .replace(/\s*;\s*/g, ';') // remove space before and after ;
            .replace(/\s*,\s*/g, ','); // remove space before and after ,
        outputMinifydiv.value = output

    }
    else if (jsMinifySection.style.display == 'block') {
        Terser.minify(jsMinifyEditor.getValue()).then(result => {
            outputMinifydiv.value = result.code
        }).catch(err => {
            outputMinifydiv.value = 'Error'
        });


    }
});


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



