//get the static landing page skeleton
var page = document.getElementById("page");
var sidebar = document.getElementById("sidebar");
var modal = document.getElementById("modal");
var modalContent = document.getElementById("modalContent");
var clickedID = null;
var clickedElement;
var backgroundColor = document.getElementById("backgroundColor");
var textColor = document.getElementById("textColor");	
var content = document.getElementById("copy");
var bodyContent = {
headlineOne: {backgroundColor: '', textColor: '', content: '', dateModified: ''}	
};

function getContent()
{
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200)
		{
		page.innerHTML = ajax.responseText;	
		}
	}	
ajax.open("GET", "/public/landingPages/skeleton.html", true);
ajax.send();
}

function setupModal()
{
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1";
modal.style.left = "0";
modal.style.top = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";	

modalContent.style.backgroundColor = "#fefefe";
modalContent.style.margin = "15% auto";
modalContent.style.padding = "20px";
modalContent.style.border = "1px; solid #888";
modalContent.style.width = "80%";
}

function setupSidebar()
{
sidebar.style.position = "fixed";
sidebar.style.left = "0px";
sidebar.style.top = "0px";
sidebar.style.width = "30%";
sidebar.style.height = "100%";	
sidebar.style.zIndex = "2";
}

setupModal();
setupSidebar();
getContent();
//function for modal to show which has the style and text on it.

var ids = ["headlineOne", "subHeadlineOne"];

document.body.addEventListener("click", function(event) {
if (ids.indexOf(event.target.id) != -1)
	{
	clickedID = event.target.id;
	clickedElement = document.getElementById(clickedID);
	console.log('background color: ' + clickedElement.style.backgroundColor + ' text color: ' + clickedElement.style.color);
	backgroundColor.value = clickedElement.backgroundColor;
	textColor.value = clickedElement.textColor;
	modal.style.display = "block";		
	}
		
});

function saveElement()
{
modal.style.display = "none";
var element = bodyContent[clickedID];
element.backgroundColor = backgroundColor.value;
element.textColor = textColor.value;
element.content = content.value;
element.dateModified = Date.now();

clickedElement.style.backgroundColor = backgroundColor.value;
clickedElement.style.color = textColor.value
clickedElement.innerHTML = content.value;
console.log("item saved");	
}

//add setInterval to save json object every 5 seconds

//add new row to end of page
function newRow(cols)
{
var row = document.createElement("DIV");
row.classList.add("row");
var HTML = '  <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"> <div class="my-3 p-3"> <h2 class="display-5">This is a new row</h2> <p class="lead">This is some witty subtext.</p> </div> <div class="bg-white shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> </div>';
switch(cols)
	{
	case 1:
	var oneColumn = document.createElement("DIV");
	oneColumn.classList.add("col-md-12");
	oneColumn.innerHTML = HTML;
	row.appendChild(oneColumn);
	console.log("one");
	break;	
	case 2:
	var firstColumn = document.createElement("DIV");
	firstColumn.classList.add("col-md-6");
	firstColumn.innerHTML = HTML;
	row.appendChild(firstColumn);
	var secondColumn = document.createElement("DIV");
	secondColumn.classList.add("col-md-6");
	secondColumn.innerHTML = HTML;
	row.appendChild(secondColumn);
	console.log("two");
	break;
	case 3:
	firstColumn = document.createElement("DIV");
	firstColumn.classList.add("col-md-4");
	firstColumn.innerHTML = HTML;
	row.appendChild(firstColumn);
	secondColumn = document.createElement("DIV");	
	secondColumn.classList.add("col-md-4");
	secondColumn.innerHTML = HTML;
	row.appendChild(secondColumn);
	thirdColumn = document.createElement("DIV");	
	thirdColumn.classList.add("col-md-4");
	thirdColumn.innerHTML = HTML;
	row.appendChild(thirdColumn);
	console.log("three");
	break;
	}
page.appendChild(row);
}
//add new modal to body with: image src(text field), image preview(img), image size(select), image 


//toggle sidebar
function toggleSidebar()
{
sidebar.classList.toggle('active');
console.log("sidebar toggled");
}

function addComponent(name)
{
console.log("adding component " + name);	
}

function allowDrop(ev)
{
ev.preventDefault();	
}

function drag(ev)
{
ev.dataTransfer.setData("text", ev.target.id);	
}

function drop(ev)
{
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementByid(data));	
}
//document.getElementById("sidebarCollapse").addEventListener("click", toggleSidebar());	
	





















































































 
function newImage()
{
div = document.createElement("DIV");

var img = document.createElement("IMG");
img.src = "/public/images/example.jpg";
img.style.zIndex = 2;
img.style.position = "absolute";
img.style.left = "45%";
img.style.top =	"45%";
img.style.width = "10%";
img.style.height = "10%";
page.appendChild(img);
console.log("this works.");
}

//add new text to body
function newText()
{
alert("new Text");	
}

