document.addEventListener("DOMContentLoaded", function () {
    const addTextButton = document.getElementById("add-text");
    const addImageButton = document.getElementById("add-image");
    const addVideoButton = document.getElementById("add-video");
    const contentArea = document.querySelector(".content-area");
    const previewContent = document.getElementById("preview-content");

    addTextButton.addEventListener("click", function () {
        contentArea.innerHTML += "<p>Enter your text here</p>";
    });

    addImageButton.addEventListener("click", function () {
        contentArea.innerHTML += "<img src='image.jpg' alt='Image'>";
    });

    addVideoButton.addEventListener("click", function () {
        contentArea.innerHTML += "<video controls><source src='video.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
    });

    contentArea.addEventListener("input", function () {
        previewContent.innerHTML = contentArea.innerHTML;
    });
});
