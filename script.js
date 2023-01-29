let pdf; //stores pdf data
let canvas; //renders pdf file
let isPageRendering;
let pageRenderingQueue = null; //next page number to render
let canvasContext;
let totalPages;
let currentPageNum = 1;

window.addEventListener('load', function () {
    isPageRendering = false;
    pageRenderingQueue = null;
    canvas = document.getElementById('pdf_canvas');
    canvasContext = canvas.getContext('2d');

    initEvents(); Add events
    initPDFRenderer(); //renders first page

)}