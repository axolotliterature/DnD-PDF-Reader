let pdf; //stores pdf data
let canvas; //renders pdf file
let viewport;
let isPageRendering;
let pageRenderingQueue = null; //next page number to render
let canvasContext; //ctx
let totalPages;
let currentPageNum = 1;

let pdfState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
}

pdfjsLib.getDocument('./my_Document.pdf').then((pdf) => {
    pdfState.pdf = pdf;
    render();
});

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
