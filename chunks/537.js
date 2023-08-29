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