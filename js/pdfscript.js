// const pdfLoc = 'pdf-demo.pdf'

let pdfLoc;
let typedarray;

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null,
    scale = 1.5,
    files;

// const scale = 1.5;
const canvas = document.getElementById("pdfCanvas");
const ctx = canvas.getContext("2d");

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

// render the page
const renderPage = num => {
    pageIsRendering = true;

    //get page
    pdfDoc.getPage(num).then(page => {
        //set scale based on viewport
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if(pageNumIsPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });
        
        //output or update current page to display
        document.querySelector('#page-num').textContent = num;
    });
};

//check for pages rendering
const queueRenderPage = num => {
    if(pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
};

//show previous page
const showPrevPage = () => {
    if(pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
};

//show next page
const showNextPage = () => {
    if(pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
};

//zoom in
const zoomIn = () => {
    scale += 0.1;
    queueRenderPage(pageNum);
};

//zoom out
const zoomOut = () => {
    scale -= 0.1;
    queueRenderPage(pageNum);
};

// --------------------------------------------------- ** BUTTON EVENTS **

// Page Navigation
//next and previous page buttons
document.querySelector('#prevPage').addEventListener('click', showPrevPage);
document.querySelector('#nextPage').addEventListener('click', showNextPage);

//zoom in and out buttons
document.querySelector('#zoomIn').addEventListener('click', zoomIn);
document.querySelector('#zoomOut').addEventListener('click', zoomOut);

//button that covers hidden input element, triggers inputpdf
function fileBrowser() {
    document.getElementById('importpdf').click();
};

//importpdf input imports file type pdf and renders page
document.querySelector('#importpdf').addEventListener('change', function(event) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function () {
        let typedarray = new Uint8Array(this.result);
        pdfjsLib.getDocument(typedarray).promise.then(pdfDoc_ => {
            pdfDoc = pdfDoc_;

            //get total number of pages in doc and update page-count display
            document.querySelector('#page-count').textContent = pdfDoc.numPages;
            
            renderPage(pageNum);
        });
    };
    fileReader.readAsArrayBuffer(file);
});