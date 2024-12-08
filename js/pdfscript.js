// const pdfLoc = 'pdf-demo.pdf'

let pdfLoc;
let typedarray;

let pdfDoc = null,
    pageNum = 1,
    goToNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null,
    scale = 1.5,
    files,
    topBarExpanded = true;

// const scale = 1.5;
const canvas = document.getElementById("pdfCanvas");
const ctx = canvas.getContext("2d");

var { pdfjsLib } = globalThis;

//first option is pdf.js version 2+, lower commented out option is version 1.9- and is removed for version 2+
//third option is cloudfare link matched to script in html
// pdfjsLib.GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.mjs';
// pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js';

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
        document.getElementById("pageSelector").value = num;
    });
};

//check for pages rendering
const queueRenderPage = num => {
    if(pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
        // console.log(num);
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

const goToPage = () => {
    const input = document.getElementById("pageSelector");
    const inputValue = input.value;
    if(inputValue > pdfDoc.numPages || inputValue < 1) {
        return;
    }
    pageNum = Number(inputValue);
    queueRenderPage(pageNum);
    // console.log(inputValue);
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

// --------------------------------------------------- ** TOP BAR COLLAPSE **

function triggerTopBar() {
    if(topBarExpanded) {
        shrinkTopBar();
    } else {
        expandTopBar();
    }
}
function shrinkTopBar() {
    document.getElementById("top-bar").style.width = "200px";
    document.getElementById("pdfDialog").style.display = "none";
    document.getElementById("page-info").style.display = "none";
    document.getElementById("pdfCanvas").style.margin = "0 0 0 0";
    document.getElementById("top-bar-caret").className="fa-solid fa-chevron-down";
    
    topBarExpanded = false;
}
function expandTopBar() {
    document.getElementById("top-bar").style.width = "100%";
    document.getElementById("pdfDialog").style.display = "inline-block";
    document.getElementById("page-info").style.display = "inline-block";
    document.getElementById("pdfCanvas").style.margin = "45px 0 0 0";
    document.getElementById("top-bar-caret").className="fa-solid fa-chevron-up";
    
    topBarExpanded = true;
}

// --------------------------------------------------- ** BUTTON EVENTS **

// Page Navigation
//next and previous page buttons
document.querySelector('#prevPage').addEventListener('click', showPrevPage);
document.querySelector('#nextPage').addEventListener('click', showNextPage);

//Page selector by text field input trigger
document.querySelector('#pageSelector').addEventListener('change', goToPage);

//zoom in and out buttons
document.querySelector('#zoomIn').addEventListener('click', zoomIn);
document.querySelector('#zoomOut').addEventListener('click', zoomOut);


//button that covers a hidden input element, triggers inputpdf when button 'pressed'
//if this hidden element is removed, file input will not work properly
//button element stays for functionality and accessibility
function fileBrowser() {
    document.getElementById('importpdf').click();
};

//html button id=importpdf prompts user input, imports file type pdf and renders page
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