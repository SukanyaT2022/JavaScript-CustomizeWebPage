

function radioChangeBG(id){
    var storeBG = document.getElementById(id).value
    document.getElementById('targetTextImage').style.backgroundColor = storeBG
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
// chnage paragrape to itlalic, bold, and underline
function changeStyleP(){
    if(document.getElementById('changeItalicP').checked==true){
        document.getElementById('styleParagraphID').style.fontStyle = 'italic'
    }else{
        document.getElementById('styleParagraphID').style.fontStyle = 'normal'
    }


    if(document.getElementById('underLineP').checked==true){
        document.getElementById('styleParagraphID').style.textDecoration = 'underline'
    }else{
        document.getElementById('styleParagraphID').style.textDecoration = 'none'
    }

    if(document.getElementById('changeBoldP').checked==true){
        document.getElementById('styleParagraphID').style.fontWeight = 'bold'
    }else{
        document.getElementById('styleParagraphID').style.fontWeight = 'normal'
    }
}


// <!-- change image height and width -->
//parint coz it number
function changeImageHeight(){
    var storeImageHeight = parseInt(document.getElementById('changeImageHeight').value)
    document.getElementById('targetImage').style.height = storeImageHeight + "px"
}

// change image width
function changeImageWidth(){
    var storeImageWidth = parseInt(document.getElementById('changeImageWidth').value)
    document.getElementById('targetImage').style.width = storeImageWidth + "px"
}

function leftImage(){
var storeLeftImage = document.getElementById('leftImage').value
document.getElementById('alignBorderImage').style.textAlign = storeLeftImage
}
