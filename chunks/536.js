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