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
