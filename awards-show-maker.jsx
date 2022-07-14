/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":4,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"mainWindow","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Awards Maker Script","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"mainButtonsGrp","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-2":{"id":2,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"photoToCompButton","text":"Photos to Comps Tool","justify":"center","preferredSize":[155,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"awardsShowMakerButton","text":"Awards Show Maker","justify":"center","preferredSize":[155,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"helpButton","text":"Help...","justify":"center","preferredSize":[155,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,3,4],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// MAINWINDOW
// ==========
var mainWindow = new Window("palette"); 
    mainWindow.text = "Awards Maker Script"; 
    mainWindow.orientation = "column"; 
    //mainWindow.alignChildren = ["center","top"]; 
    mainWindow.spacing = 10; 
    mainWindow.margins = 16; 

// MAINBUTTONSGRP
// ==============
var mainButtonsGrp = mainWindow.add("group", undefined, {name: "mainButtonsGrp"}); 
    mainButtonsGrp.orientation = "column"; 
    mainButtonsGrp.alignChildren = ["center","center"]; 
    mainButtonsGrp.spacing = 10; 
    mainButtonsGrp.margins = 0; 

var photoToCompButton = mainButtonsGrp.add("button", undefined, undefined, {name: "photoToCompButton"}); 
    photoToCompButton.text = "Photos to Comps Tool"; 
    photoToCompButton.preferredSize.width = 155; 
    photoToCompButton.onClick = photosToCompsConverterFcn;

var awardsShowMakerButton = mainButtonsGrp.add("button", undefined, undefined, {name: "awardsShowMakerButton"}); 
    awardsShowMakerButton.text = "Awards Show Maker"; 
    awardsShowMakerButton.preferredSize.width = 155; 
    awardsShowMakerButton.onClick = awardsShowMakerFcn;

var helpButton = mainButtonsGrp.add("button", undefined, undefined, {name: "helpButton"}); 
    helpButton.text = "Help..."; 
    helpButton.preferredSize.width = 155; 
    helpButton.onClick = helpButtonFcn;

mainWindow.show();



/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":12,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"photosToCompsWindow","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Photos to Comps Tool","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"inputsGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"listGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-3":{"id":3,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"selectPhotosBtn","text":"Select Photos","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"compSettingsGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-5":{"id":5,"type":"StaticText","parentId":8,"style":{"enabled":true,"varName":"compWidthStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Comp Width:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"EditText","parentId":8,"style":{"enabled":true,"varName":"compWidthEditText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"720","justify":"left","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"StaticText","parentId":9,"style":{"enabled":true,"varName":"compHeightStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Comp Height","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Group","parentId":4,"style":{"enabled":true,"varName":"compWidthGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-9":{"id":9,"type":"Group","parentId":4,"style":{"enabled":true,"varName":"compHeightGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-10":{"id":10,"type":"EditText","parentId":9,"style":{"enabled":true,"varName":"compHeightEditText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1080","justify":"left","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-12":{"id":12,"type":"ListBox","parentId":2,"style":{"enabled":true,"varName":"selItemsList","creationProps":{"multiselect":false,"numberOfColumns":"2","columnWidths":"[]","columnTitles":"[Item Name,Item #]","showHeaders":true},"listItems":"No Items Selected","preferredSize":[300,300],"alignment":null,"helpTip":null,"selection":[]}},"item-13":{"id":13,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":"selItemsStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Selected Items:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Group","parentId":4,"style":{"enabled":true,"varName":"compDurationGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":"compDurationStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Comp Duration","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Button","parentId":2,"style":{"enabled":true,"varName":"createCompsButton","text":"Create Comps from Photos!","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-18":{"id":18,"type":"Divider","parentId":1,"style":{"enabled":true,"varName":null}},"item-19":{"id":19,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":"compSettingsStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Comp Settings:","justify":"left","preferredSize":[0,0],"alignment":"center","helpTip":null}}},"order":[0,1,3,18,4,19,8,5,6,9,7,10,14,15,16,11,2,13,12,17],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// PHOTOSTOCOMPSWINDOW
// ===================
var photosToCompsWindow = new Window("palette"); 
    photosToCompsWindow.text = "Photos to Comps Tool"; 
    photosToCompsWindow.orientation = "row"; 
    photosToCompsWindow.alignChildren = ["center","top"]; 
    photosToCompsWindow.spacing = 10; 
    photosToCompsWindow.margins = 16; 

// INPUTSGROUP
// ===========
var inputsGroup = photosToCompsWindow.add("group", undefined, {name: "inputsGroup"}); 
    inputsGroup.orientation = "column"; 
    inputsGroup.alignChildren = ["right","center"]; 
    inputsGroup.spacing = 10; 
    inputsGroup.margins = 0; 

var selectPhotosBtn = inputsGroup.add("button", undefined, undefined, {name: "selectPhotosBtn"}); 
    selectPhotosBtn.text = "Select Photos"; 
    selectPhotosBtn.onClick = function() {
        selectPhotos();
    }

var divider1 = inputsGroup.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// COMPSETTINGSGROUP
// =================
var compSettingsGroup = inputsGroup.add("group", undefined, {name: "compSettingsGroup"}); 
    compSettingsGroup.orientation = "column"; 
    compSettingsGroup.alignChildren = ["right","center"]; 
    compSettingsGroup.spacing = 10; 
    compSettingsGroup.margins = 0; 

var compSettingsStaticText = compSettingsGroup.add("statictext", undefined, undefined, {name: "compSettingsStaticText"}); 
    compSettingsStaticText.text = "Comp Settings:"; 
    compSettingsStaticText.alignment = ["center","center"]; 

// COMPWIDTHGROUP
// ==============
var compWidthGroup = compSettingsGroup.add("group", undefined, {name: "compWidthGroup"}); 
    compWidthGroup.orientation = "row"; 
    compWidthGroup.alignChildren = ["right","center"]; 
    compWidthGroup.spacing = 10; 
    compWidthGroup.margins = 0; 

var compWidthStaticText = compWidthGroup.add("statictext", undefined, undefined, {name: "compWidthStaticText"}); 
    compWidthStaticText.text = "Comp Width:"; 

var compWidthEditTextGlobalHolder = 720;
var compWidthEditText = compWidthGroup.add('edittext'); 
    compWidthEditText.text = compWidthEditTextGlobalHolder; 
    compWidthEditText.preferredSize.width = 50; 
    compWidthEditText.onChange = function() {
        var numErrorCheck = textBoxNumErrorChecker(compWidthEditText.text,"Comp Width");
        if(numErrorCheck == "notNum"){
            compWidthEditText.text = compWidthEditTextGlobalHolder;
        }else{
            compWidthEditTextGlobalHolder = Math.floor(numErrorCheck);
            compWidthEditText.text = compWidthEditTextGlobalHolder;
        };
    };

// COMPHEIGHTGROUP
// ===============
var compHeightGroup = compSettingsGroup.add("group", undefined, {name: "compHeightGroup"}); 
    compHeightGroup.orientation = "row"; 
    compHeightGroup.alignChildren = ["right","center"]; 
    compHeightGroup.spacing = 10; 
    compHeightGroup.margins = 0; 

var compHeightStaticText = compHeightGroup.add("statictext", undefined, undefined, {name: "compHeightStaticText"}); 
    compHeightStaticText.text = "Comp Height"; 

var compHeightEditTextGlobalHolder = 1080;
var compHeightEditText = compHeightGroup.add('edittext'); 
    compHeightEditText.text = compHeightEditTextGlobalHolder; 
    compHeightEditText.preferredSize.width = 50; 
    compHeightEditText.onChange = function() {
        var numErrorCheck = textBoxNumErrorChecker(compHeightEditText.text,"Comp Height");
        if(numErrorCheck == "notNum"){
            compHeightEditText.text = compHeightEditTextGlobalHolder;
        }else{
            compHeightEditTextGlobalHolder = Math.floor(numErrorCheck);
            compHeightEditText.text = compHeightEditTextGlobalHolder;
        };
    };

// COMPDURATIONGROUP
// =================
var compDurationGroup = compSettingsGroup.add("group", undefined, {name: "compDurationGroup"}); 
    compDurationGroup.orientation = "row"; 
    compDurationGroup.alignChildren = ["left","center"]; 
    compDurationGroup.spacing = 10; 
    compDurationGroup.margins = 0; 

var compDurationStaticText = compDurationGroup.add("statictext", undefined, undefined, {name: "compDurationStaticText"}); 
    compDurationStaticText.text = "Comp Duration (sec)"; 

var compDurationEditTextGlobalHolder = 10;
var compDurationEditText = compDurationGroup.add('edittext'); 
    compDurationEditText.text = compDurationEditTextGlobalHolder; 
    compDurationEditText.preferredSize.width = 50; 
    compDurationEditText.onChange = function() {
        var numErrorCheck = textBoxNumErrorChecker(compDurationEditText.text,"Comp Duration");
        if(numErrorCheck == "notNum"){
            compDurationEditText.text = compDurationEditTextGlobalHolder;
        }else{
            compDurationEditTextGlobalHolder = numErrorCheck;
            compDurationEditText.text = compDurationEditTextGlobalHolder;
        };
    };


// COMPFRAMERATEGROUP
// =================
var compFramerateGroup = compSettingsGroup.add("group", undefined, {name: "compFramerateGroup"}); 
compFramerateGroup.orientation = "row"; 
compFramerateGroup.alignChildren = ["left","center"]; 
compFramerateGroup.spacing = 10; 
compFramerateGroup.margins = 0; 

var compFramerateStaticText = compFramerateGroup.add("statictext", undefined, undefined, {name: "compFramerateStaticText"}); 
compFramerateStaticText.text = "Comp Frame Rate"; 

var compFramerateEditTextGlobalHolder = 60;
var compFramerateEditText = compFramerateGroup.add('edittext'); 
compFramerateEditText.text = compFramerateEditTextGlobalHolder; 
compFramerateEditText.preferredSize.width = 50; 
compFramerateEditText.onChange = function() {
    var numErrorCheck = textBoxNumErrorChecker(compFramerateEditText.text,"Comp Frame Rate");
    if(numErrorCheck == "notNum"){
        compFramerateEditText.text = compFramerateEditTextGlobalHolder;
    }else{
        compFramerateEditTextGlobalHolder = numErrorCheck;
        compFramerateEditText.text = compFramerateEditTextGlobalHolder;
    };
};

// COMPPIXELASPECTGROUP
// =================
var compPixelAspecteGroup = compSettingsGroup.add("group", undefined, {name: "compPixelAspecteGroup"}); 
compPixelAspecteGroup.orientation = "row"; 
compPixelAspecteGroup.alignChildren = ["left","center"]; 
compPixelAspecteGroup.spacing = 10; 
compPixelAspecteGroup.margins = 0; 

var compPixelAspectStaticText = compPixelAspecteGroup.add("statictext", undefined, undefined, {name: "compPixelAspectStaticText"}); 
compPixelAspectStaticText.text = "Comp Pixel Aspect"; 

var compPixelAspectEditTextGlobalHolder = 1;
var compPixelAspectEditText = compPixelAspecteGroup.add('edittext'); 
compPixelAspectEditText.text = compPixelAspectEditTextGlobalHolder; 
compPixelAspectEditText.preferredSize.width = 50; 
compPixelAspectEditText.onChange = function() {
    var numErrorCheck = textBoxNumErrorChecker(compPixelAspectEditText.text,"Comp Pixel Aspect");
    if(numErrorCheck == "notNum"){
        compPixelAspectEditText.text = compPixelAspectEditTextGlobalHolder;
    }else{
        compPixelAspectEditTextGlobalHolder = numErrorCheck;
        compPixelAspectEditText.text = compPixelAspectEditTextGlobalHolder;
    };
};

// PHOTOSTOCOMPSWINDOW
// ===================
var divider2 = photosToCompsWindow.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

// LISTGROUP
// =========
var listGroup = photosToCompsWindow.add("group", undefined, {name: "listGroup"}); 
    listGroup.orientation = "column"; 
    listGroup.alignChildren = ["left","center"]; 
    listGroup.spacing = 10; 
    listGroup.margins = 0; 

var selItemsStaticText = listGroup.add("statictext", undefined, undefined, {name: "selItemsStaticText"}); 
    selItemsStaticText.text = "Selected Items:"; 


var selItemsList = listGroup.add("listbox", undefined, undefined, {name: "selItemsList", items: ["No Items Selected"], numberOfColumns: 2, columnTitles: ["Footage Name","Footage ID#"], showHeaders: true, multiselect:true}); 
    selItemsList.preferredSize.width = 500; 
    selItemsList.preferredSize.height = 300; 

var removeSelectedPhotosButton = listGroup.add("button", undefined, undefined, {name: "removeSelectedPhotosButton"});
    removeSelectedPhotosButton.text = "Delete";
    removeSelectedPhotosButton.onClick = function(){deleteMultiSelectedListItems()};

var createCompsButton = listGroup.add("button", undefined, undefined, {name: "createCompsButton"}); 
    createCompsButton.text = "Create Comps from Photos!"; 
    createCompsButton.alignment = ["center","center"]; 
    createCompsButton.onClick = function(){createCompsFcn()};


/////////////////////////////////////////////////////////////
////////////     GENERAL TOOL FUNCTIONS       ///////////////
/////////////////////////////////////////////////////////////

function textBoxNumErrorChecker(userInput,alertItem){
    if(isNaN(userInput) == true){
        alert(alertItem+" Must Be a Number!");
        return "notNum";
    }else if(isNaN(userInput) == false){
        return userInput;
    };
};

function deleteMultiSelectedListItems(){
    for(var i = selItemsList.selection.length-1; i>-1; i--){
        selItemsList.remove(selItemsList.selection[i]);
    };
};

/////////////////////////////////////////////////////////////
////////////      MAIN WINDOW FUNCTIONS       ///////////////
/////////////////////////////////////////////////////////////

function photosToCompsConverterFcn(){
    photosToCompsWindow.show();
    mainWindow.hide();
};

function awardsShowMakerFcn(){
    alert("Awards Show Maker")
};

function helpButtonFcn(){
    alert("Help Button")
};


/////////////////////////////////////////////////////////////
////////////    PHOTOS TO COMPS FUNCTIONS     ///////////////
/////////////////////////////////////////////////////////////

////// GLOBAL VARIABLES ///////
//var selPhotoComps = [];


function selectPhotos(){
    
    var selPhotoItems = []; //Clears the global variable

    for (var i = 1; i <= app.project.numItems; i++){
        if(app.project.item(i).selected){
            if(app.project.item(i) == "[object FootageItem]"){
                selPhotoItems[selPhotoItems.length] = app.project.item(i); //Adds selected items to global variable
            }else{
                alert("Selected item MUST be a FootageItem");
                return false;
            };
        };
    };

    if(selPhotoItems.length == 0){
        //alert("No items selected, please select an item");
        return false;
    };

    selItemsList.removeAll(); //Clears displayed list
    for (var j = 0; j <= selPhotoItems.length; j++){
        var photoItemName = selPhotoItems[j].name;
        var photoItemID = selPhotoItems[j].id;
        var addToList = selItemsList.add("item",photoItemName);
            addToList.subItems[0].text = photoItemID;
    };


};

var photosToCompsCounter = 0;
function createCompsFcn(){

    app.beginUndoGroup("Photos to Comps");

    var selPhotoItemIDs = [];
    var selFootageItems = [];

    for(var i = 0; i <= selItemsList.items.length-1; i++){
        selPhotoItemIDs[selPhotoItemIDs.length] = selItemsList.items[i].subItems[0]; //creates array of item IDs
    };
    //alert(selPhotoItemIDs);

    for(var j = 0; j <= selPhotoItemIDs.length-1; j++){
        var footageID = selPhotoItemIDs[j];
        for(var k = 1; k <= app.project.numItems; k++){
            var itemID = app.project.item(k).id;
            if(footageID == itemID){
                selFootageItems[selFootageItems.length] = app.project.item(k); //matches item IDs and adds footage items to array
            };
        };
    };

    if(selFootageItems.length == 0){
        alert("No items selected to create comps from.\nPlease select items");
        return false;
    };

    photosToCompsCounter++

    var photosToCompsFolder = app.project.items.addFolder("Photos to Comps "+photosToCompsCounter);
    photosToCompsFolder.parentFolder = selFootageItems[0].parentFolder;

    var newCompWidth = parseInt(compWidthEditText.text);
    var newCompHeight = parseInt(compHeightEditText.text);
    var newCompDuration = parseInt(compDurationEditText.text);
    var newCompFramerate = parseInt(compFramerateEditText.text);
    var newCompPixelAspect = parseInt(compPixelAspectEditText.text);

    for(var m = 0; m <= selFootageItems.length-1; m++){
        var newComp = app.project.items.addComp(selFootageItems[m].name+" COMP",newCompWidth,newCompHeight,newCompPixelAspect,newCompDuration,newCompFramerate);
        newComp.parentFolder = photosToCompsFolder;

        var imageLayer = newComp.layers.add(selFootageItems[m]);
        var fitWidthScale = (newComp.width*newComp.pixelAspect)/(imageLayer.width*imageLayer.source.pixelAspect)*100; //This is essentially the same thing as "fit to comp width" just by using math instead
        imageLayer.property("Scale").setValue([fitWidthScale,fitWidthScale]);
        
        var tempAdjustmentLayer = newComp.layers.addSolid([0,0,0],"tempAdjustmentLayer",newCompWidth,newCompHeight,newCompPixelAspect,newCompDuration);
        tempAdjustmentLayer.adjustmentLayer = true;
        var pointControl = tempAdjustmentLayer.Effects.addProperty("ADBE Point Control");
        var point = pointControl.property(1);
        point.setValue([0,0]); //sets the point to be top center

        var tempTextLayer = newComp.layers.addText();
        tempTextLayer.property("Source Text").expression = 
            'target = thisComp.layer("tempAdjustmentLayer"); point = thisComp.layer("tempAdjustmentLayer").effect("Point Control")("Point"); target.sampleImage(point,[0.5,0.5], true, time)[3];';

        var topCenterPxAlpha = tempTextLayer.property("Source Text").value;
        if(topCenterPxAlpha == 0){
            var fitHeightScale = (newComp.height*newComp.pixelAspect)/(imageLayer.height*imageLayer.source.pixelAspect)*100;
            imageLayer.property("Scale").setValue([fitHeightScale,fitHeightScale]);
        };

        tempAdjustmentLayer.source.remove();
        tempTextLayer.remove();

            //alert(tempTextLayer.property("Source Text").value);
    };

    app.endUndoGroup();
    
};