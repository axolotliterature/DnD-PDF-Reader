let pdf; //stores pdf data
let canvas; //renders pdf file
let viewport;
let pageRenderingQueue = null; //next page number to render
let canvasContext; //ctx
let totalPages;
let currentPageNum = 1;

let files;

let pdfState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
}

//takes onclick event, opens file browser for user to select a pdf to load
//function borrowed from https://codepen.io/udaymanvar/pen/MWaePBY
function importData() {
    let input = document.createElement('input');
    input.type='file';
    input.onchange = _ => {
        files = Array.from(input.files); //use this method to get file and perform respective operations

        console.log(files);
    };
    input.click();

}

pdfjsLib.getDocument(files).then((pdf) => {
    pdfState.pdf = pdf;
    render();
});

// pdfjsLib.getDocument('./my_Document.pdf').then((pdf) => {
//     pdfState.pdf = pdf;
//     render();
// });

//opens pdf in browser, rendered in a canvas element, gets default size by user's viewport size
function render () {
    pdfState.pdf.getPage(pdfState.currentPage).then((page) => {
        canvas = document.getElementById("pdfCanvas");
        canvasContext = canvas.getContext('2d');

        viewport = page.getViewport(pdfState.zoom);

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        page.render({
            canvasContext: canvasContext,
            viewport: viewport
        });
    });
}
