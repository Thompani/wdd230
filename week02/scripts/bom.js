


var chapterInput = document.getElementById("chapterInput");
var addChapterBtn = document.getElementById("addChapterBtn");
var chapterList = document.getElementById("chapterList");


function addChapter() {
    
    var chapterTitle = chapterInput.value.trim();


    if (chapterTitle === "") {
        alert("Chapter name cannot be blank.");
        chapterInput.focus(); 
        return; 
    }

    
    var li = document.createElement("li");

    
    var textNode = document.createTextNode(chapterTitle);
    li.appendChild(textNode);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌"; 
    deleteButton.className = "delete-btn"; 

    
    deleteButton.addEventListener("click", function() {
        chapterList.removeChild(li); 
    });

    
    li.appendChild(deleteButton);

    chapterList.appendChild(li);

    chapterInput.value = "";
}

addChapterBtn.addEventListener("click", addChapter);

chapterInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addChapter();
    }
});