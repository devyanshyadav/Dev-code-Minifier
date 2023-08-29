let styleTag=document.createElement('style')
styleTag.textContent=`
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

:root {
    --Color1: #202040;
    --Color2: #18122B;
    --Color3: white;
    --Color4: #343A40;
    --Color5: #4433ff;
}

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;

}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--Color1);
    color: white;
    font-family: 'Ubuntu', sans-serif;


}

button {
    cursor: pointer;
    background-color: var(--Color5);
    border: 1px solid var(--Color5);
    color: white;
    padding: 6px 10px;
    border-radius: 3px;
}

button:hover {
    background-color: #4433ff9e;

    cursor: pointer;
    transition: 0.3s;
}

.devArenaMinifierHeader h3 {
    font-size: 20px;
    font-weight: 400;
}

textarea {
    resize: none;
}

.devArenaMinifierHeader {
    width: 100%;
    height: 60px;
    background-color: var(--Color1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0px 10px;
    /* padding-bottom: 12px; */
}

.mainMinifierSection {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.InputMinifySection {
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.OutputMinifySection {
    width: 50%;
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

}

#OutputMinifydiv {
    width: 100%;
    height: 100%;
    background-color: var(--Color2);
    border-radius: 4px;
    border: 1px solid #4433ff83;
    font-family: 'Source Code Pro', 'cascadia code', Consolas, 'Courier New', monospace;
    padding: 10px;
    color: #a79ffd;
    font-size: 15px;

}

#OutputMinifydiv:focus {
    outline: 1px solid #4433ff;
}

#htmlMinifyEditor,
#jsMinifyEditor,
#cssMinifyEditor {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
    font-family: 'Source Code Pro', 'cascadia code', Consolas, 'Courier New', monospace;
}

#htmlMinifyEditor {
    display: block;
}

.minifierNavigation {
    width: 100%;
    height: 50px;
    background-color: var(--Color2);
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 10px 5px;
}

.runMinify {
    display: flex;
    align-items: center;
    justify-content: center;
}

.minifyOption {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 10px;
}

.notifyMinify,
.Outputnotify {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    padding: 6px;
    border-radius: 3px;
    background-color: var(--Color5);
    opacity: 0.4;
    font-size: 12px;
    font-weight: 200;

}

.copiedMinifyText {
    position: absolute;
    top: 7px;
    right: 7px;
    left: 7px;
    bottom: 7px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 35px;
    font-family: 'Dancing Script', cursive;
    background: linear-gradient(to right, #4433ff, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: none;



}

.copiedMinifyButton {
    position: absolute;
    border-radius: 4px;
    bottom: 20px;
    right: 20px;
}

.DevarenaLogo {
    font-weight: bold;
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    background: linear-gradient(to right, #4433ff, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    left: 10px;
}


@media(max-width:700px) {

    .mainMinifierSection {
        flex-direction: column;
    }

    .InputMinifySection {
        width: 100%;
    }

    #htmlMinifyEditor,
    #jsMinifyEditor,
    #cssMinifyEditor {
        width: 100%;
    }

    .OutputMinifySection {
        width: 100%;
    }

    .DevarenaLogo {
        position: static;

    }

    .devArenaMinifierHeader h3 {
        font-size: 18px;
    }

    .devArenaMinifierHeader {
        flex-direction: column;
        text-align: center;
        padding: 5px 0px;
        height: auto;
    }

    .copiedMinifyButton {
        bottom: 50%;
    }
}
`
document.body.appendChild(styleTag)