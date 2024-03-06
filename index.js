

function radioChangeBG(id){
    var storeBG = document.getElementById(id).value
    document.body.style.backgroundColor = storeBG
}
function colorStyle(id){
    var storeColorStyle = document.getElementById(id).value
    document.getElementById('styleHeadingID').style.color = storeColorStyle
}
// alignment of the heading
function changeAlignment(id){
var storeAligment = document.getElementById(id).value
document.getElementById('styleHeadingID').style.textAlign = storeAligment
}

// change heading font size
function changeFontSize(){
    var storeChangeFontSize = document.getElementById('changeFont').value
    document.getElementById('styleHeadingID').style.fontSize = storeChangeFontSize + 'px'
}

//function for font style alignment underline

function changeFontStyle(){
    //.check property help to check 
    // -if we select checkbox or deselect checkbox for italic
if (document.getElementById('italic').checked==true){
    document.getElementById('styleHeadingID').style.fontStyle = 'italic'
}else{
    document.getElementById('styleHeadingID').style.fontStyle = 'normal'
}


//.check property help to check 
    // -if we select checkbox or deselect checkbox for underline
    if (document.getElementById('underline').checked==true){
        document.getElementById('styleHeadingID').style.textDecoration = 'underline'
    }else{
        document.getElementById('styleHeadingID').style.textDecoration = 'none'
    }

}

function onChangePColor(){
var storeColorP = document.getElementById('changePColorWholeList').value
document.getElementById('styleParagraphID').style.color = storeColorP
}

function changeAlignmentFunc(id){
    var storeAlignment = document.getElementById(id).value
    document.getElementById('styleParagraphID').style.textAlign = storeAlignment
}

function changeSizePFunc(){
    var storeSizePFunction = document.getElementById('changeSizeP').value
    document.getElementById('styleParagraphID').style.fontSize = storeSizePFunction + "px"
}