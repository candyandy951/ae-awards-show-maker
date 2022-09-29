/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":4,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"mainWindow","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Awards Maker Script","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"mainButtonsGrp","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-2":{"id":2,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"photoToCompButton","text":"Photos to Comps Tool","justify":"center","preferredSize":[155,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"awardsShowMakerButton","text":"Awards Show Maker","justify":"center","preferredSize":[155,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"helpButton","text":"Help...","justify":"center","preferredSize":[155,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,3,4],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// MAINWINDOW
// ==========
var mainWindow = new Window("palette"); 
    mainWindow.text = "Awards Show Maker Menu"; 
    mainWindow.orientation = "column"; 
    mainWindow.spacing = 10; 
    mainWindow.margins = 16; 
    mainWindow.preferredSize = [200,100];

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
    photoToCompButton.onClick = function(){windowSwap(mainWindow,photosToCompsWindow)};

var awardsShowMakerButton = mainButtonsGrp.add("button", undefined, undefined, {name: "awardsShowMakerButton"}); 
    awardsShowMakerButton.text = "Awards Show Maker"; 
    awardsShowMakerButton.preferredSize.width = 155; 
    awardsShowMakerButton.onClick = function(){windowSwap(mainWindow,awardsShowMakerWindow)};

var helpButton = mainButtonsGrp.add("button", undefined, undefined, {name: "helpButton"}); 
    helpButton.text = "Help..."; 
    helpButton.preferredSize.width = 155; 
    helpButton.onClick = function(){windowSwap(mainWindow,helpWindow)};

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
    compWidthEditText.helpTip = "Width to create comps at in pixels";
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
    compHeightEditText.helpTip = "Height to create comps at in pixels";
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
    compDurationEditText.helpTip = "Duration to set new comps to in seconds";
    compDurationEditText.onChange = function() {
        var numErrorCheck = textBoxNumErrorChecker(compDurationEditText.text,"Comp Duration");
        if(numErrorCheck == 0){
            alert("Comp Duration cannot be zero!");
            compDurationEditText.text = compDurationEditTextGlobalHolder;
        }else if(numErrorCheck == "notNum"){
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
compFramerateEditText.helpTip = "Frame rate to set created comps to";
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
compPixelAspectEditText.helpTip = "Pixel aspect to set the created comps to";
compPixelAspectEditText.onChange = function() {
    var numErrorCheck = textBoxNumErrorChecker(compPixelAspectEditText.text,"Comp Pixel Aspect");
    if(numErrorCheck == "notNum"){
        compPixelAspectEditText.text = compPixelAspectEditTextGlobalHolder;
    }else{
        compPixelAspectEditTextGlobalHolder = numErrorCheck;
        compPixelAspectEditText.text = compPixelAspectEditTextGlobalHolder;
    };
};

var divider1 = inputsGroup.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// RETURNBUTTON

var ptcReturnButton = inputsGroup.add("button", undefined, undefined, {name: "ptcReturnButton"});
    ptcReturnButton.text = "Return to Menu";
    ptcReturnButton.onClick = function(){windowSwap(photosToCompsWindow,mainWindow);};


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

// SELECT/DELETE BUTTONS GROUP

var selDelGroup = listGroup.add("group", undefined, {name: "selDelGroup"});
    selDelGroup.orientation = "row";

var selectPhotosBtn = selDelGroup.add("button", undefined, undefined, {name: "selectPhotosBtn"}); 
    selectPhotosBtn.text = "Select Photos"; 
    selectPhotosBtn.helpTip = "Click to add all currently highlighted footage items in the project to the 'selected items' list above";
    selectPhotosBtn.onClick = function() {
        selectItemNameIDList("[object FootageItem]","FootageItem",selItemsList);
    };

var removeSelectedPhotosButton = selDelGroup.add("button", undefined, undefined, {name: "removeSelectedPhotosButton"});
    removeSelectedPhotosButton.text = "Delete";
    removeSelectedPhotosButton.helpTip = "Click to remove highlighted items from the 'Selected Items' list";
    removeSelectedPhotosButton.onClick = function(){deleteMultiSelectedListItems(selItemsList)};

var createCompsButton = listGroup.add("button", undefined, undefined, {name: "createCompsButton"}); 
    createCompsButton.text = "Create Comps from Photos!"; 
    createCompsButton.alignment = ["right","center"]; 
    createCompsButton.onClick = function(){createCompsFcn()};




/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":48,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"awardsShowMakerWindow","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Awards Show Maker","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":49,"style":{"enabled":true,"varName":"templatePanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Template Input","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"Panel","parentId":49,"style":{"enabled":true,"varName":"csvPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"CSV Input","preferredSize":[0,304],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"Panel","parentId":4,"style":{"enabled":true,"varName":"photoCompsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Photo Comps","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"mainPanelsGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-5":{"id":5,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"reviewButton","text":"REVIEW INPUTS","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Button","parentId":7,"style":{"enabled":true,"varName":"templateSelBtn","text":"Select Template","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"selTemplateButton","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"EditText","parentId":7,"style":{"enabled":true,"varName":"templateCompSelEditText","creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"No Comp Selected","justify":"left","preferredSize":[200,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"photoLayerCheckBox","text":"Template Includes a Photo Layer","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-10":{"id":10,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"photoLayerSelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"Button","parentId":10,"style":{"enabled":true,"varName":"photoLayerSelButton","text":"Select Photo Layer","justify":"center","preferredSize":[140,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"asmReturnButton","text":"Return to Menu","justify":"center","preferredSize":[0,0],"alignment":"left","helpTip":null}},"item-13":{"id":13,"type":"EditText","parentId":10,"style":{"enabled":true,"varName":"photoLayerEditText","creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"No Layer Selected","justify":"left","preferredSize":[182,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"nameLayerCheckBox","text":"Template Includes a \"Name\" Text Layer","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-15":{"id":15,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"nameLayerSelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-16":{"id":16,"type":"Button","parentId":15,"style":{"enabled":true,"varName":"nameLayerSelButton","text":"Select Name Layer","justify":"center","preferredSize":[140,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"EditText","parentId":15,"style":{"enabled":true,"varName":"nameLayerEditText","creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"No Layer Selected","justify":"left","preferredSize":[182,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"subtitle1LayerCheckBox","text":"Template Includes a \"Subtitle\" Text Layer","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-19":{"id":19,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"subtitle1LayerSelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-20":{"id":20,"type":"Button","parentId":19,"style":{"enabled":true,"varName":"subtitle1LayerSelButton","text":"Select Subtitle 1 Layer","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"EditText","parentId":19,"style":{"enabled":true,"varName":"subtitle1EditText","creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"No Layer Selected","justify":"left","preferredSize":[164,0],"alignment":null,"helpTip":null}},"item-22":{"id":22,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"subtitle2LayerCheckBox","text":"Template Includes a second \"Subtitle\" Text Layer","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-23":{"id":23,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"subtitle2LayerSelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-24":{"id":24,"type":"Button","parentId":23,"style":{"enabled":true,"varName":"subtitle2LayerSelButton","text":"Select Subtitle 2 Layer","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-25":{"id":25,"type":"EditText","parentId":23,"style":{"enabled":true,"varName":"subtitle2EditText","creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"No Layer Selected","justify":"left","preferredSize":[164,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"csvSelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-27":{"id":27,"type":"Button","parentId":26,"style":{"enabled":true,"varName":"csvBrowseButton","text":"Choose CSV File...","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"EditText","parentId":26,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"No CSV Selected","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-29":{"id":29,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"csvListSepGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-30":{"id":30,"type":"StaticText","parentId":29,"style":{"enabled":true,"varName":"csvListSepStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Character Used in CSV as List Separator:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"EditText","parentId":29,"style":{"enabled":true,"varName":"csvListSepEditText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":",","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"Checkbox","parentId":2,"style":{"enabled":true,"varName":"csvHeaderRowCheckbox","text":"Does the CSV have a Header Row?","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-33":{"id":33,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"csvNameGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-34":{"id":34,"type":"StaticText","parentId":33,"style":{"enabled":true,"varName":"csvNameColStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Column in CSV with Names:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-35":{"id":35,"type":"EditText","parentId":33,"style":{"enabled":true,"varName":"csvNameColEditText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-36":{"id":36,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"csvLastNameColGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-37":{"id":37,"type":"Checkbox","parentId":36,"style":{"enabled":true,"varName":"csvLastNameColCheckBox","text":"Last Names are in a Separate Column","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-38":{"id":38,"type":"EditText","parentId":36,"style":{"enabled":true,"varName":"csvLastNameColEditText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-39":{"id":39,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"csvSubtitle1ColGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-40":{"id":40,"type":"StaticText","parentId":39,"style":{"enabled":true,"varName":"csvSubtitle1ColStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Column in CSV with Subtitles:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-41":{"id":41,"type":"EditText","parentId":39,"style":{"enabled":true,"varName":"csvSubtitle1ColEditText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"2","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"csvSubtitle2ColGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-43":{"id":43,"type":"StaticText","parentId":42,"style":{"enabled":true,"varName":"csvSubtitle2ColStaticText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Column in CSV with Second Subtitle:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-44":{"id":44,"type":"EditText","parentId":42,"style":{"enabled":true,"varName":"csvSubtitle2ColEditText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"3","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-45":{"id":45,"type":"Button","parentId":47,"style":{"enabled":true,"varName":"selectPhotoCompsButton","text":"Select Photo Comps","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-46":{"id":46,"type":"Button","parentId":47,"style":{"enabled":true,"varName":"removeSelectedCompsButton","text":"Delete","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-47":{"id":47,"type":"Group","parentId":3,"style":{"enabled":true,"varName":"photoCompsButtonsGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-48":{"id":48,"type":"ListBox","parentId":3,"style":{"enabled":true,"varName":"selectedPhotoCompsList","creationProps":{"multiselect":false,"numberOfColumns":1,"columnWidths":"[]","columnTitles":"[]","showHeaders":false},"listItems":"No Comps Selected","preferredSize":[757,300],"alignment":null,"helpTip":null,"selection":[]}},"item-49":{"id":49,"type":"Group","parentId":4,"style":{"enabled":true,"varName":"templateCSVPanelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}}},"order":[0,4,49,1,7,6,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,3,47,45,46,48,12,5],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// AWARDSSHOWMAKERWINDOW
// =====================
var awardsShowMakerWindow = new Window("palette"); 
    awardsShowMakerWindow.text = "Awards Show Maker"; 
    awardsShowMakerWindow.orientation = "column"; 
    awardsShowMakerWindow.alignChildren = ["center","top"]; 
    awardsShowMakerWindow.spacing = 10; 
    awardsShowMakerWindow.margins = 16; 

// MAINPANELSGROUP
// ===============
var mainPanelsGroup = awardsShowMakerWindow.add("group", undefined, {name: "mainPanelsGroup"}); 
    mainPanelsGroup.orientation = "column"; 
    mainPanelsGroup.alignChildren = ["left","center"]; 
    mainPanelsGroup.spacing = 10; 
    mainPanelsGroup.margins = 0; 

// TEMPLATE & PANELGROUP
// =====================
var templateCSVPanelGroup = mainPanelsGroup.add("group", undefined, {name: "templateCSVPanelGroup"}); 
    templateCSVPanelGroup.orientation = "row"; 
    templateCSVPanelGroup.alignChildren = ["left","center"]; 
    templateCSVPanelGroup.spacing = 10; 
    templateCSVPanelGroup.margins = 0; 

// TEMPLATEPANEL
// =============
var templatePanel = templateCSVPanelGroup.add("panel", undefined, undefined, {name: "templatePanel"}); 
    templatePanel.text = "Template Input"; 
    templatePanel.orientation = "column"; 
    templatePanel.alignChildren = ["left","top"]; 
    templatePanel.spacing = 10; 
    templatePanel.margins = 10; 

// SELTEMPLATEBUTTON
// =================
var selTemplateButton = templatePanel.add("group", undefined, {name: "selTemplateButton"}); 
    selTemplateButton.orientation = "row"; 
    selTemplateButton.alignChildren = ["left","center"]; 
    selTemplateButton.spacing = 10; 
    selTemplateButton.margins = 0; 

var templateSelBtn = selTemplateButton.add("button", undefined, undefined, {name: "templateSelBtn"}); 
    templateSelBtn.text = "Select Template"; 
    templateSelBtn.helpTip = "Highlight the template comp in the project panel, then click this button to choose it.";
    templateSelBtn.onClick = function(){
        asmTemplateCompID = selectSingleProjectItem("[object CompItem]","Comp Item",templateCompSelEditText);
    };

var templateCompSelEditText = selTemplateButton.add('edittext {properties: {name: "templateCompSelEditText", readonly: true}}'); 
    templateCompSelEditText.text = "No Comp Selected"; 
    templateCompSelEditText.helpTip = "The name of the selected template comp will appear here";
    templateCompSelEditText.preferredSize.width = 200; 

// PHOTO LAYER CHECKBOX
// =============
var photoLayerCheckBox = templatePanel.add("checkbox", undefined, undefined, {name: "photoLayerCheckBox"}); 
    photoLayerCheckBox.text = "Template Includes a Photo Layer"; 
    photoLayerCheckBox.value = true; 
    photoLayerCheckBox.helpTip = "Check this box if the template comp includes a photo procomp layer";
    photoLayerCheckBox.onClick = function(){itemHideUnhider(photoLayerSelGroup);itemHideUnhider(photoCompsPanel);};

// PHOTOLAYERSELGROUP
// ==================
var photoLayerSelGroup = templatePanel.add("group", undefined, {name: "photoLayerSelGroup"}); 
    photoLayerSelGroup.orientation = "row"; 
    photoLayerSelGroup.alignChildren = ["left","center"]; 
    photoLayerSelGroup.spacing = 10; 
    photoLayerSelGroup.margins = 0; 

var photoLayerSelButton = photoLayerSelGroup.add("button", undefined, undefined, {name: "photoLayerSelButton"}); 
    photoLayerSelButton.text = "Select Photo Layer"; 
    photoLayerSelButton.preferredSize.width = 140; 
    photoLayerSelButton.helpTip = "Highlight the photo precomp layer within the template comp, then click this button to choose it";
    photoLayerSelButton.onClick = function(){
        asmPhotoLayerIndex = selectSingleCompLayer(asmTemplateCompID,"[object AVLayer]","AV (with a replaceable source)",photoLayerEditText);
    };

var photoLayerEditText = photoLayerSelGroup.add('edittext {properties: {name: "photoLayerEditText", readonly: true}}'); 
    photoLayerEditText.text = "No Layer Selected"; 
    photoLayerEditText.helpTip = "The layer index and name will appear here in the format: (Index) Name";
    photoLayerEditText.preferredSize.width = 182; 

// NAME LAYER CHECKBOX
// =============
var nameLayerCheckBox = templatePanel.add("checkbox", undefined, undefined, {name: "nameLayerCheckBox"}); 
    nameLayerCheckBox.text = "Template Includes a \u0022Name\u0022 Text Layer"; 
    nameLayerCheckBox.value = true; 
    nameLayerCheckBox.helpTip = "Check this box if the template comp includes a name text layer";
    nameLayerCheckBox.onClick = function(){
        itemHideUnhider(nameLayerSelGroup);
        itemHideUnhider(csvNameColGroup);
        itemHideUnhider(csvLastNameColGroup);
    };

// NAMELAYERSELGROUP
// =================
var nameLayerSelGroup = templatePanel.add("group", undefined, {name: "nameLayerSelGroup"}); 
    nameLayerSelGroup.orientation = "row"; 
    nameLayerSelGroup.alignChildren = ["left","center"]; 
    nameLayerSelGroup.spacing = 10; 
    nameLayerSelGroup.margins = 0; 

var nameLayerSelButton = nameLayerSelGroup.add("button", undefined, undefined, {name: "nameLayerSelButton"}); 
    nameLayerSelButton.text = "Select Name Layer"; 
    nameLayerSelButton.preferredSize.width = 140; 
    nameLayerSelButton.helpTip = "Highlight the name text layer within the template comp, then click this button to choose it";
    nameLayerSelButton.onClick = function(){
        asmNameLayerIndex = selectSingleCompLayer(asmTemplateCompID,"[object TextLayer]","Text",nameLayerEditText);
    };

var nameLayerEditText = nameLayerSelGroup.add('edittext {properties: {name: "nameLayerEditText", readonly: true}}'); 
    nameLayerEditText.text = "No Layer Selected"; 
    nameLayerEditText.helpTip = "The name layer index and name will appear here in the format: (Index) Name";
    nameLayerEditText.preferredSize.width = 182; 

// SUBTITLE1 LAYER CHECKBOX
// =============
var subtitle1LayerCheckBox = templatePanel.add("checkbox", undefined, undefined, {name: "subtitle1LayerCheckBox"}); 
    subtitle1LayerCheckBox.text = "Template Includes a \u0022Subtitle\u0022 Text Layer"; 
    subtitle1LayerCheckBox.value = true; 
    subtitle1LayerCheckBox.helpTip = "Check this box if the template comp includes a subtitle text layer"
    subtitle1LayerCheckBox.onClick = function(){
        itemHideUnhider(subtitle1LayerSelGroup);
        itemHideUnhider(csvSubtitle1ColGroup);
    };

// SUBTITLE1LAYERSELGROUP
// ======================
var subtitle1LayerSelGroup = templatePanel.add("group", undefined, {name: "subtitle1LayerSelGroup"}); 
    subtitle1LayerSelGroup.orientation = "row"; 
    subtitle1LayerSelGroup.alignChildren = ["left","center"]; 
    subtitle1LayerSelGroup.spacing = 10; 
    subtitle1LayerSelGroup.margins = 0; 

var subtitle1LayerSelButton = subtitle1LayerSelGroup.add("button", undefined, undefined, {name: "subtitle1LayerSelButton"}); 
    subtitle1LayerSelButton.text = "Select Subtitle 1 Layer"; 
    subtitle1LayerSelButton.preferredSize.width = 140;
    subtitle1LayerSelButton.onClick = function(){
        asmSubtitle1LayerIndex = selectSingleCompLayer(asmTemplateCompID,"[object TextLayer]","Text",subtitle1EditText);
    };

var subtitle1EditText = subtitle1LayerSelGroup.add('edittext {properties: {name: "subtitle1EditText", readonly: true}}'); 
    subtitle1EditText.text = "No Layer Selected"; 
    subtitle1EditText.preferredSize.width = 164; 

// SUBTITLE2 LAYER CHECKBOX
// =============
var subtitle2LayerCheckBox = templatePanel.add("checkbox", undefined, undefined, {name: "subtitle2LayerCheckBox"}); 
    subtitle2LayerCheckBox.text = "Template Includes a second \u0022Subtitle\u0022 Text Layer"; 
    subtitle2LayerCheckBox.value = false;
    subtitle2LayerCheckBox.onClick = function(){
        itemHideUnhider(subtitle2LayerSelGroup);
        itemHideUnhider(csvSubtitle2ColGroup);
    };

// SUBTITLE2LAYERSELGROUP
// ======================
var subtitle2LayerSelGroup = templatePanel.add("group", undefined, {name: "subtitle2LayerSelGroup"}); 
    subtitle2LayerSelGroup.orientation = "row"; 
    subtitle2LayerSelGroup.alignChildren = ["left","center"]; 
    subtitle2LayerSelGroup.spacing = 10; 
    subtitle2LayerSelGroup.margins = 0; 

var subtitle2LayerSelButton = subtitle2LayerSelGroup.add("button", undefined, undefined, {name: "subtitle2LayerSelButton"}); 
    subtitle2LayerSelButton.text = "Select Subtitle 2 Layer"; 
    subtitle2LayerSelButton.preferredSize.width = 140;
    subtitle2LayerSelButton.onClick = function(){
        asmSubtitle2LayerIndex = selectSingleCompLayer(asmTemplateCompID,"[object TextLayer]","Text",subtitle2EditText);
    };

var subtitle2EditText = subtitle2LayerSelGroup.add('edittext {properties: {name: "subtitle2EditText", readonly: true}}'); 
    subtitle2EditText.text = "No Layer Selected"; 
    subtitle2EditText.preferredSize.width = 164; 

    subtitle2LayerSelGroup.hide()

// CSVPANEL
// ========
var csvPanel = templateCSVPanelGroup.add("panel", undefined, undefined, {name: "csvPanel"}); 
    csvPanel.text = "CSV Input"; 
    csvPanel.preferredSize.height = 304; 
    csvPanel.orientation = "column"; 
    csvPanel.alignChildren = ["left","top"]; 
    csvPanel.spacing = 10; 
    csvPanel.margins = 10; 

// CSVSELGROUP
// ===========
var csvSelGroup = csvPanel.add("group", undefined, {name: "csvSelGroup"}); 
    csvSelGroup.orientation = "row"; 
    csvSelGroup.alignChildren = ["left","center"]; 
    csvSelGroup.spacing = 10; 
    csvSelGroup.margins = 0; 

var csvBrowseButton = csvSelGroup.add("button", undefined, undefined, {name: "csvBrowseButton"}); 
    csvBrowseButton.text = "Choose CSV File..."; 
    csvBrowseButton.onClick = function(){
        filePathBrowse("Select your CSV file","Acceptable Files:*.csv,*.txt",false,asmCSVFilePath,csvFilePathEdittext);
    };

var csvFilePathEdittext = csvSelGroup.add('edittext {properties: {name: "edittext1", readonly: true}}'); 
    csvFilePathEdittext.text = "No CSV Selected"; 
    csvFilePathEdittext.preferredSize.width = 250; 

// CSVLISTSEPGROUP
// ===============
var csvListSepGroup = csvPanel.add("group", undefined, {name: "csvListSepGroup"}); 
    csvListSepGroup.orientation = "row"; 
    csvListSepGroup.alignChildren = ["left","center"]; 
    csvListSepGroup.spacing = 10; 
    csvListSepGroup.margins = 0; 

var csvListSepStaticText = csvListSepGroup.add("statictext", undefined, undefined, {name: "csvListSepStaticText"}); 
    csvListSepStaticText.text = "Character Used in CSV as List Separator:"; 

var csvListSepEditText = csvListSepGroup.add('edittext {properties: {name: "csvListSepEditText"}}'); 
    csvListSepEditText.text = ","; 
    csvListSepEditText.preferredSize.width = 40; 

// CSV HEADER ROW CHECKBOX
// ========
var csvHeaderRowCheckbox = csvPanel.add("checkbox", undefined, undefined, {name: "csvHeaderRowCheckbox"}); 
    csvHeaderRowCheckbox.text = "Does the CSV have a Header Row?"; 
    csvHeaderRowCheckbox.value = true; 

// CSVNAMEGROUP
// ============
var csvNameColGroup = csvPanel.add("group", undefined, {name: "csvNameColGroup"}); 
    csvNameColGroup.orientation = "row"; 
    csvNameColGroup.alignChildren = ["left","center"]; 
    csvNameColGroup.spacing = 10; 
    csvNameColGroup.margins = 0; 

var csvNameColStaticText = csvNameColGroup.add("statictext", undefined, undefined, {name: "csvNameColStaticText"}); 
    csvNameColStaticText.text = "Column in CSV with Names:"; 

var csvNameColEditText = csvNameColGroup.add('edittext {properties: {name: "csvNameColEditText"}}'); 
    csvNameColEditText.text = "0"; 
    csvNameColEditText.preferredSize.width = 40; 

// CSVLASTNAMECOLGROUP
// ===================
var csvLastNameColGroup = csvPanel.add("group", undefined, {name: "csvLastNameColGroup"}); 
    csvLastNameColGroup.orientation = "row"; 
    csvLastNameColGroup.alignChildren = ["left","center"]; 
    csvLastNameColGroup.spacing = 10; 
    csvLastNameColGroup.margins = 0; 

var csvLastNameColCheckBox = csvLastNameColGroup.add("checkbox", undefined, undefined, {name: "csvLastNameColCheckBox"}); 
    csvLastNameColCheckBox.text = "Last Names are in a Separate Column"; 
    csvLastNameColCheckBox.onClick = function(){itemHideUnhider(csvLastNameColEditText)};

var csvLastNameColEditText = csvLastNameColGroup.add('edittext {properties: {name: "csvLastNameColEditText"}}'); 
    csvLastNameColEditText.text = "1"; 
    csvLastNameColEditText.preferredSize.width = 40; 
    csvLastNameColEditText.hide();

// CSVSUBTITLE1COLGROUP
// ====================
var csvSubtitle1ColGroup = csvPanel.add("group", undefined, {name: "csvSubtitle1ColGroup"}); 
    csvSubtitle1ColGroup.orientation = "row"; 
    csvSubtitle1ColGroup.alignChildren = ["left","center"]; 
    csvSubtitle1ColGroup.spacing = 10; 
    csvSubtitle1ColGroup.margins = 0; 

var csvSubtitle1ColStaticText = csvSubtitle1ColGroup.add("statictext", undefined, undefined, {name: "csvSubtitle1ColStaticText"}); 
    csvSubtitle1ColStaticText.text = "Column in CSV with Subtitles:"; 

var csvSubtitle1ColEditText = csvSubtitle1ColGroup.add('edittext {properties: {name: "csvSubtitle1ColEditText"}}'); 
    csvSubtitle1ColEditText.text = "2"; 
    csvSubtitle1ColEditText.preferredSize.width = 40; 

// CSVSUBTITLE2COLGROUP
// ====================
var csvSubtitle2ColGroup = csvPanel.add("group", undefined, {name: "csvSubtitle2ColGroup"}); 
    csvSubtitle2ColGroup.orientation = "row"; 
    csvSubtitle2ColGroup.alignChildren = ["left","center"]; 
    csvSubtitle2ColGroup.spacing = 10; 
    csvSubtitle2ColGroup.margins = 0; 

var csvSubtitle2ColStaticText = csvSubtitle2ColGroup.add("statictext", undefined, undefined, {name: "csvSubtitle2ColStaticText"}); 
    csvSubtitle2ColStaticText.text = "Column in CSV with Second Subtitle:"; 

var csvSubtitle2ColEditText = csvSubtitle2ColGroup.add('edittext {properties: {name: "csvSubtitle2ColEditText"}}'); 
    csvSubtitle2ColEditText.text = "3"; 
    csvSubtitle2ColEditText.preferredSize.width = 40; 

    csvSubtitle2ColGroup.hide();

// PHOTOCOMPSPANEL
// ===============
var photoCompsPanel = mainPanelsGroup.add("panel", undefined, undefined, {name: "photoCompsPanel"}); 
    photoCompsPanel.text = "Photo Comps"; 
    photoCompsPanel.orientation = "column"; 
    photoCompsPanel.alignChildren = ["left","top"]; 
    photoCompsPanel.spacing = 10; 
    photoCompsPanel.margins = 10; 

// PHOTOCOMPSBUTTONSGROUP
// ======================
var photoCompsButtonsGroup = photoCompsPanel.add("group", undefined, {name: "photoCompsButtonsGroup"}); 
    photoCompsButtonsGroup.orientation = "row"; 
    photoCompsButtonsGroup.alignChildren = ["left","center"]; 
    photoCompsButtonsGroup.spacing = 10; 
    photoCompsButtonsGroup.margins = 0; 

var selectPhotoCompsButton = photoCompsButtonsGroup.add("button", undefined, undefined, {name: "selectPhotoCompsButton"}); 
    selectPhotoCompsButton.text = "Select Photo Comps"; 
    selectPhotoCompsButton.onClick = function(){selectItemNameIDList("[object CompItem]","CompItem",selectedPhotoCompsList);};

var removeSelectedCompsButton = photoCompsButtonsGroup.add("button", undefined, undefined, {name: "removeSelectedCompsButton"}); 
    removeSelectedCompsButton.text = "Delete"; 
    removeSelectedCompsButton.onClick = function(){deleteMultiSelectedListItems(selectedPhotoCompsList);};

// PHOTOCOMPSPANEL
// ===============
var selectedPhotoCompsList_array = ["No Comps Selected"]; 
var selectedPhotoCompsList = photoCompsPanel.add("listbox", undefined, undefined, {name: "selectedPhotoCompsList", items: ["No Items Selected"], numberOfColumns: 2, columnTitles: ["Comp Name","Comp ID#"], showHeaders: true, multiselect:true}); 
    selectedPhotoCompsList.preferredSize.width = 757; 
    selectedPhotoCompsList.preferredSize.height = 300; 

// AWARDSSHOWMAKERWINDOW
// =====================
var asmReturnButton = awardsShowMakerWindow.add("button", undefined, undefined, {name: "asmReturnButton"}); 
    asmReturnButton.text = "Return to Menu"; 
    asmReturnButton.alignment = ["left","top"]; 
    asmReturnButton.onClick = function(){windowSwap(awardsShowMakerWindow,mainWindow)};

var reviewButton = awardsShowMakerWindow.add("button", undefined, undefined, {name: "reviewButton"}); 
    reviewButton.text = "REVIEW"; 
    reviewButton.onClick = function(){ //The review button has a lot of error checks on it before it actually builds the review list
        //Error check for template selection
        if(templateCompSelEditText.text == "No Comp Selected"){
            alert("No Template Comp Chosen!\r\rYou MUST select a template comp to create the awards show with");
            return false;
        };
        //Error check for having chosen any content to inject into the template
        if(photoLayerCheckBox.value == false &&  nameLayerCheckBox.value == false && subtitle1LayerCheckBox.value == false && subtitle2LayerCheckBox.value == false){
            alert("Your template MUST include at least one of the following: \r A Photo, a Name, or a Subtitle.");
            return false;
        };
        //Error checks for template layers being toggled but not being selected
        if(photoLayerCheckBox.value == true && photoLayerEditText.text == "No Layer Selected"){
            alert("Photo layer option checked, but no photo layer has been selected\r\rPlease select a photo layer in your template");
            return false;
        };

        if(nameLayerCheckBox.value == true && nameLayerEditText.text == "No Layer Selected"){
            alert("Name layer option checked, but no name layer has been selected\r\rPlease select a name layer in your template");
            return false;
        };

        if(subtitle1LayerCheckBox.value == true && subtitle1EditText.text == "No Layer Selected"){
            alert("Subtitle 1 layer option checked, but no layer has been selected\r\rPlease select a subtitle layer in your template");
            return false;
        };

        if(subtitle2LayerCheckBox.value == true && subtitle2EditText.text == "No Layer Selected"){
            alert("Subtitle 2 layer option checked, but no layer has been selected\r\rPlease select a subtitle layer in your template");
            return false;
        };

        var reviewWindowErrorCheck = asmReviewFcn();

        if(reviewWindowErrorCheck == false){
            return false //This is here to stop the windows from swapping if the ReviewFunction itself throws an error.
        }else{
            windowSwap(awardsShowMakerWindow,reviewWindow);
        };
    };



//REVIEW WINDOW
var reviewWindow = new Window("palette","Review",undefined,{resizeable: true}); 
reviewWindow.text = "Photos to Comps Tool"; 
reviewWindow.orientation = "column"; 
//reviewWindow.alignChildren = ["center","top"]; 
reviewWindow.alignChildren = ["fill","fill"]; 
reviewWindow.spacing = 10; 
reviewWindow.margins = 16;
reviewWindow.preferredSize = [500,300];

var reviewGroup = reviewWindow.add("group", undefined, {name: "reviewGroup"});
reviewGroup.orientation = "column"

var returnToAWSButton = reviewGroup.add("button", undefined, undefined, {name: "returnToAWSButton"});
returnToAWSButton.text = "Return to Awards Show Maker Window";
returnToAWSButton.alignment = ["left","top"]; 
returnToAWSButton.onClick = function(){windowSwap(reviewWindow,awardsShowMakerWindow)};

var reviewStaticText = reviewGroup.add("statictext", undefined, undefined, {name: "reviewStaticText"});
reviewStaticText.text = "Review Selections:"
reviewStaticText.alignment = ["left","top"];

var reviewListGroup = reviewGroup.add("group", undefined, {name: "reviewListGroup"});
reviewListGroup.alignment=["fill","fill"];
var reviewList = undefined; //Creates the variable for the review listbox, which gets created and filled in when the review function gets called

var runAWSButton = reviewGroup.add("button", undefined, undefined, {name: "runAWSButton"});
runAWSButton.text = "CONFIRM & RUN";
runAWSButton.alignment = ["center","bottom"];
runAWSButton.onClick = function(){awsFunction()};

reviewWindow.onShow = reviewWindow.onResize = reviewWindow.onResizing = function(){
    this.layout.resize();
};

//HELP WINDOW
var helpWindow = new Window("palette","Help",undefined,{resizeable: false});
helpWindow.text = "Help";
helpWindow.orientation = "column";

var helpReturnToMenuButton = helpWindow.add("button",undefined);
helpReturnToMenuButton.text = "Return to Menu";
helpReturnToMenuButton.onClick = function(){windowSwap(helpWindow,mainWindow)};
helpReturnToMenuButton.alignment = ["left","top"];

var helpText1 = helpWindow.add("statictext",undefined,undefined,{name: "helpText1"});
helpText1.text = "For help, please visit the GitHub page for this script at:"

var helpURL = "https://github.com/candyandy951/ae-awards-show-maker"
var helpEditText2 = helpWindow.add("edittext",undefined,helpURL,{readonly:true});
helpEditText2.preferredSize.width = 300;

var helpText3 = helpWindow.add("statictext",undefined,undefined,{multiline:true});
helpText3.text = "(Copy and paste the above URL into your browser)\r\r...I probably could have created a hyperlink here, but that turned out to be complicated and I know you're smart enough to do a little bit of copy-paste!";

/////////////////////////////////////////////////////////////
////////////    GLOBAL VARIABLES     ////////////////////////
/////////////////////////////////////////////////////////////
var photosToCompsCounter = 0;
var asmCounter = 0;

var asmTemplateCompID = "None";
var asmPhotoLayerIndex = "None";
var asmNameLayerIndex = "None";
var asmSubtitle1LayerIndex = "None";
var asmSubtitle2LayerIndex = "None";
var asmCSVFilePath = "None";

var nameReviewCol = "None";
var sub1ReviewCol = "None";
var sub2ReviewCol = "None";
var photoCompIDReviewCol = "None";

/////////////////////////////////////////////////////////////
////////////     GENERAL UTILITY FUNCTIONS       ///////////////
/////////////////////////////////////////////////////////////

//This function is used to determine if an entry into an EditText box is a number or not
function textBoxNumErrorChecker(userInput,alertItem){
    if(isNaN(userInput) == true){
        alert(alertItem+" Must Be a Number!");
        return "notNum";
    }else if(isNaN(userInput) == false){
        return userInput;
    };
};

//This function is used to delete items from a given list
function deleteMultiSelectedListItems(listVar){
    for(var i = listVar.selection.length-1; i>-1; i--){
        listVar.remove(listVar.selection[i]);
    };
};

//WindowSwap function hides one window and shows another
function windowSwap(winToHide,winToShow){
    winToHide.hide();
    winToShow.show();
};

//itemHideUnhider toggles the hidden status of a given item depending on its current status
function itemHideUnhider(item){
    if(item.visible == true){
        item.hide();
    }else if(item.visible == false){
        item.show();
    };
};

function selectItemNameIDList(itemTypeString,alertItemType,listToAdd){ //function runs through the project and puts selected item names and IDs into a given list, list must have at least 2 columns
    
    var selItems = []; //Clears the global variable

    for (var i = 1; i <= app.project.numItems; i++){
        if(app.project.item(i).selected){
            if(app.project.item(i) == itemTypeString){
                selItems[selItems.length] = app.project.item(i); //Adds selected items to global variable
            }else{
                alert("Selected item MUST be a " + alertItemType);
                return false;
            };
        };
    };

    if(selItems.length == 0){
        //alert("No items selected, please select an item"); //Removed this error throw since it's arguably clear that a selection is needed when nothing happens
        return false;
    };

    listToAdd.removeAll(); //Clears displayed list
    for (var j = 0; j <= selItems.length; j++){ //For loop adds newly selected items into the list
        var itemName = selItems[j].name;
        var itemID = selItems[j].id;
        var addToList = listToAdd.add("item",itemName);
            addToList.subItems[0].text = itemID; //This function will probably only work for lists with two columns...
    };


};

//Function returns a selected item's ID and also changes an edit text to the item's name.
function selectSingleProjectItem(itemTypeString,alertItemType,textToChange){
    var selItem = [];

    for (var i = 1; i <= app.project.numItems; i++){
        if(app.project.item(i).selected){
            if(app.project.item(i) == itemTypeString){
                selItem[selItem.length] = app.project.item(i);
            }else{
                alert("Selected item MUST be a " + alertItemType);
                return false;
            };
        };
    };

    if(selItem.length == 0){
        return false;
    }else if(selItem.length > 1){
        alert("Multiple Items Selected,\nPlease Select Only ONE Item.");
    }else{
        textToChange.text = selItem[0].name;
        var selItemID = selItem[0].id;
        return selItemID;
    };
};

//This function finds a selected layer in a given comp then returns the index of the selected layer while also changing an EditText to the layer's name
function selectSingleCompLayer(givenCompID,itemTypeString,alertItemType,textToChange){
    if(givenCompID == "None"){
        alert("Please Select a Template Comp First!")
        return false;
    };

    for(var i = 1; i<= app.project.items.length; i++){
        var itemQuery = app.project.item(i);
        var selLayers = [];
        if(itemQuery.id == givenCompID){
            for(j = 1; j <= itemQuery.layers.length; j++){
                if(itemQuery.layer(j).selected == true){
                    if(itemQuery.layer(j).toString() == itemTypeString){
                        selLayers[selLayers.length] = itemQuery.layer(j);
                    }else{
                        alert("Selected Layer MUST be a " + alertItemType + " Layer");
                        return false
                    };
                };
            };
            if(selLayers.length == 0){
                return false;
            }else if(selLayers.length > 1){
                alert("Please Select Only ONE Layer");
                return false;
            }else{
                textToChange.text = "(" + selLayers[0].index + ") " + selLayers[0].name;
                return selLayers[0].index;
            };       
        };
    };
};

//Function to open a browser window and select a file
function filePathBrowse(promptString,acceptedFiletypeString,multiItemBoolean,globalStringVar,returnTextbox){
    var file = new File;
    file = file.openDlg(promptString,acceptedFiletypeString,multiItemBoolean); //Prompt string is what the text box says on top, accepted filetype string is the accepted filetypes, multiitemboolean is T/F for multiple file selections
    globalStringVar = file.fsName; //This sends the filepath to a given global variable
    returnTextbox.text = file.fsName; //This sends the filepath to a given ScriptUI textbox
};

//Function to replace the text content of a text layer given a specific comp and layer index
function textReplacer(textCompIndex,textLayerIndex,textToReplaceWith){

    var textLayer = app.project.item(textCompIndex).layer(textLayerIndex);
    var textLayerSourceText = textLayer.property("Source Text");
    var textLayerTextDocument = textLayerSourceText.value;
    textLayerTextDocument.text = textToReplaceWith;
    textLayerSourceText.setValue(textLayerTextDocument);
};

//Function to replace the source of a given layer in a given comp with another source
function layerReplacer(layerCompIndex,layerToReplaceIndex,itemToReplaceWithID){
    var itemToReplaceWithIndex;
    for(var i = 1; i <= app.project.numItems; i++){
        if(app.project.item(i).id == itemToReplaceWithID){
            itemToReplaceWithIndex = i;
        };
    };
    
    var replacementItem = app.project.item(itemToReplaceWithIndex);
    app.project.item(layerCompIndex).layer(layerToReplaceIndex).replaceSource(replacementItem,true);

};

//Function to read list and pull/return data from it
function pullFromList(listName,columnNumber,rowNumber){
    var valToReturn;
    if(columnNumber == "None"){
        return "None";
    };

    if(columnNumber == 0){ //Since list items call the first column differently from all others, we need this if statement to see if we're looking at the first column or not
        valToReturn = listName.items[rowNumber].text;
        return valToReturn;
    }else{
        var subItemNum = columnNumber-1;
        valToReturn = listName.items[rowNumber].subItems[subItemNum].text;
        return valToReturn;
    };
};

/////////////////////////////////////////////////////////////
////////////    PHOTOS TO COMPS FUNCTIONS     ///////////////
/////////////////////////////////////////////////////////////

function createCompsFcn(){

    app.beginUndoGroup("Photos to Comps");

    var selPhotoItemIDs = [];
    var selFootageItems = [];

    for(var i = 0; i <= selItemsList.items.length-1; i++){
        selPhotoItemIDs[selPhotoItemIDs.length] = selItemsList.items[i].subItems[0]; //creates array of item IDs
    };

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

    var photosToCompsFolder = app.project.items.addFolder("Photos to Comps "+photosToCompsCounter); //Creates a folder for all the newly created comps
    photosToCompsFolder.parentFolder = selFootageItems[0].parentFolder; //Places the folder in the same parent folder as the footage items

    var newCompWidth = parseInt(compWidthEditText.text);
    var newCompHeight = parseInt(compHeightEditText.text);
    var newCompDuration = parseInt(compDurationEditText.text);
    var newCompFramerate = parseInt(compFramerateEditText.text);
    var newCompPixelAspect = parseInt(compPixelAspectEditText.text);

    for(var m = 0; m <= selFootageItems.length-1; m++){
        var newComp = app.project.items.addComp(selFootageItems[m].name+" COMP",newCompWidth,newCompHeight,newCompPixelAspect,newCompDuration,newCompFramerate); //Creates a new comp to place the footage item into
        newComp.parentFolder = photosToCompsFolder;

        var imageLayer = newComp.layers.add(selFootageItems[m]); //adds the footage item to the comp
        var fitWidthScale = (newComp.width*newComp.pixelAspect)/(imageLayer.width*imageLayer.source.pixelAspect)*100; //This is essentially the same thing as "fit to comp width" just by using math instead
        imageLayer.property("Scale").setValue([fitWidthScale,fitWidthScale]);
        
        //In order to detect if a fit to height needs to occur, we need to add an adjustment layer to detect pixel content
        var tempAdjustmentLayer = newComp.layers.addSolid([0,0,0],"tempAdjustmentLayer",newCompWidth,newCompHeight,newCompPixelAspect,newCompDuration);
        tempAdjustmentLayer.adjustmentLayer = true;
        var pointControl = tempAdjustmentLayer.Effects.addProperty("ADBE Point Control"); //Add a point control to determine a pixel to "look" at
        var point = pointControl.property(1);
        point.setValue([0,0]); //sets the point to be top center

        var tempTextLayer = newComp.layers.addText(); //New text layer receives an expression on the source text to sample the image of the temp adjustment layer (which is effectively seeing all content of the comp as it is index 1)
        tempTextLayer.property("Source Text").expression = 
            'target = thisComp.layer("tempAdjustmentLayer"); point = thisComp.layer("tempAdjustmentLayer").effect("Point Control")("Point"); target.sampleImage(point,[0.5,0.5], true, time)[3];'; //the [3] at the end is what is pulling the alpha channel specifically, since sampleImage returns an array of 4 values: [R,G,B,A]

        var topCenterPxAlpha = tempTextLayer.property("Source Text").value; //reads the output of the expression as presented in the text layer to determine the alpha of the top center pixel
        if(topCenterPxAlpha == 0){ //If the top center pixel has no alpha (has a value of 0) then we can assume we need to run a "fit to height" on the newly added layer
            var fitHeightScale = (newComp.height*newComp.pixelAspect)/(imageLayer.height*imageLayer.source.pixelAspect)*100;
            imageLayer.property("Scale").setValue([fitHeightScale,fitHeightScale]);
        };

        tempAdjustmentLayer.source.remove(); //removes the tempAdjustment layer from the project
        tempTextLayer.remove(); //removes the tempText layer from the comp
    };

    app.endUndoGroup();

    for(var t = 1; t <= app.project.numItems; t++){ //deselects all of the selected footage items
        app.project.item(t).selected = false;
    };
    photosToCompsFolder.selected = true; //selects the newly created folder to draw the user's eye to it

};

/////////////////////////////////////////////////////////////
//////////// AWARDS SHOW MAKER FUNCTIONS    /////////////////
/////////////////////////////////////////////////////////////

//This function builds the review list, which the actual run function pulls from
function asmReviewFcn(){

    if(reviewList){ //This checks to see if the reviewList exists yet, the first time the script runs it does not exist. If a list from a previous run does exist, this will remove the old one to be replaced
        reviewListGroup.remove(reviewList);
    };

    //This whole section prepares variables to be used to create the review list by re-asserting them or clearing the globals
    var numReviewColumns = 0;
    nameReviewCol = "None";
    sub1ReviewCol = "None";
    sub2ReviewCol = "None";
    photoCompIDReviewCol = "None";
    var reviewColumnTitles = [];
    if(nameLayerCheckBox.value == true){
        numReviewColumns++;
        reviewColumnTitles[reviewColumnTitles.length] = "Name:";
        nameReviewCol = numReviewColumns-1;
    };
    if(subtitle1LayerCheckBox.value == true){
        numReviewColumns++;
        reviewColumnTitles[reviewColumnTitles.length] = "Subtitle 1:";
        sub1ReviewCol = numReviewColumns-1;
    };
    if(subtitle2LayerCheckBox.value == true){
        numReviewColumns++;
        reviewColumnTitles[reviewColumnTitles.length] = "Subtitle 2:";
        sub2ReviewCol = numReviewColumns-1;
    };
    if(photoLayerCheckBox.value == true){
        numReviewColumns++;
        numReviewColumns++;
        reviewColumnTitles[reviewColumnTitles.length] = "Photo Comp:";
        reviewColumnTitles[reviewColumnTitles.length] = "Photo Comp ID:";
        photoCompIDReviewCol = numReviewColumns-1;
    };

    reviewList = reviewListGroup.add("listbox", undefined, undefined, {name: "reviewListBox", numberOfColumns: numReviewColumns, columnTitles: reviewColumnTitles, showHeaders: true, multiselect:true});
    reviewList.alignment=["fill","fill"]; //setting the list alignment to ["fill","fill"] makes it so it always fills the window on resize
    reviewListGroup.layout.layout(true); //This refreshes the reviewListGroup's layout, it's not necessary for the first run, but is needed to replace the review list with any changes made to it
    reviewListGroup.layout.resize(); //Sizes the review list to fit in the window

    //Populate review list if a CSV is present, will add photo comps if applicable
    var csvChecker = false; //this checker is used while populating the list to determine if a CSV is in use or not
    if(nameLayerCheckBox.value == true || subtitle1LayerCheckBox.value == true || subtitle2LayerCheckBox.value == true){ //If statement will skip parsing CSV if it's not needed (for example, if only photos are involved)
        csvChecker = true;
        var csvFile;
        var csvData = [];

        if(csvFilePathEdittext.text == "No CSV Selected"){ //Error checks to make sure a CSV filepath was chosen
            alert("A CSV file must be selected to use the current settings");
            return false;
        };
        
        csvFile = File(csvFilePathEdittext.text);
        csvFile.open("r"); //opens the CSV in "read" mode

        do{
            csvData.push(csvFile.readln());
        }while(!csvFile.eof);

        csvFile.close();

        var csvOffset; //This variable is used in the for loop that inserts the csv data into the review list, it's needed due to the header row checkbox
        if(csvHeaderRowCheckbox.value == true){
            csvOffset = 1;
        }else{
            csvOffset = 0;
        };

        if(photoLayerCheckBox.value == true && (csvData.length-csvOffset) !== selectedPhotoCompsList.items.length){
            alert("The number of photo comps must match the number of entries in the CSV!\r\r"  + (csvData.length-csvOffset) + " Entries in CSV\r" + selectedPhotoCompsList.items.length + " Selected Photo Comps" + "\r\r*You may need to double check that your header row toggle is correct");
            return false //This could be considered a bug, I can probably fix it by having multiple lists in the review page instead of only one with multiple columns, but that creates additional issues so it is yet to be implemented
        };

        for(var i = 0; i < (csvData.length-csvOffset); i++){ //The CSV length drives the for loop duration, hence the error check above, if the contents of one exceed the contents of the other the script will error out
            var csvRow = csvData[i+csvOffset].split(csvListSepEditText.text);
            var itemsToAddToReview = []; //We're basically building an array that will then be plugged into the review list as a new item

            if(nameLayerCheckBox.value == true){
                if(csvLastNameColCheckBox.value == true){ //If separate last name is checked, the two entries are combined with a space between as it enters the review list
                    itemsToAddToReview[itemsToAddToReview.length] = csvRow[csvNameColEditText.text] + " " + csvRow[csvLastNameColEditText.text];
                }else{
                    itemsToAddToReview[itemsToAddToReview.length] = csvRow[csvNameColEditText.text];
                };
            };
            if(subtitle1LayerCheckBox.value == true){
                itemsToAddToReview[itemsToAddToReview.length] = csvRow[csvSubtitle1ColEditText.text];
            };
            if(subtitle2LayerCheckBox.value == true){
                itemsToAddToReview[itemsToAddToReview.length] = csvRow[csvSubtitle2ColEditText.text];
            };
            if(photoLayerCheckBox.value == true){
                itemsToAddToReview[itemsToAddToReview.length] = selectedPhotoCompsList.items[i].text;
                itemsToAddToReview[itemsToAddToReview.length] = selectedPhotoCompsList.items[i].subItems[0];
            };
            
            
            var addToReviewList = reviewList.add("item",itemsToAddToReview[0]); //Creates a new item in the reviewlist, then adds the first value of the array into the first column
            
            for(var v = 1; v < numReviewColumns; v++){ //This for loop will sift through the remaining array values and insert them into the subsequent subitem/column
                addToReviewList.subItems[v-1].text = itemsToAddToReview[v];
            };
            
        };
    };

    

    //DUPLICATE PHOTO COMP LIST INTO REVIEW LIST IF NO CSV IS USED
    if(csvChecker == false){
        //To point to a listitem, you need to specify the list.items[0] which dictates the row (running .text on this will give the first column's result), then subsequent columns can be called with .subItems[X] with X starting at 0 to call column 2
        
        for(var p = 0; p < selectedPhotoCompsList.items.length; p++){ //If no CSV is needed, this duplicates the contents of the selected photo comps list into the review list
            var photoCompNameToAdd = selectedPhotoCompsList.items[p].text;
            var addToReviewList = reviewList.add("item",photoCompNameToAdd);

            var photoCompIDToAdd = selectedPhotoCompsList.items[p].subItems[0];
            addToReviewList.subItems[0].text = photoCompIDToAdd;
        };
    };

};

function awsFunction(){
    app.beginUndoGroup("Awards Show Maker");

    //CONVERT TEMPLATE COMP ID TO INDEX
    var asmTemplateCompIndex;
    for(var q = 1; q <= app.project.numItems; q++){
        if(app.project.item(q).id == asmTemplateCompID){
            asmTemplateCompIndex = q;
        };
    };

    var asmTemplateComp = app.project.item(asmTemplateCompIndex);
    
    //CREATE NEW FOLDER
    asmCounter++;
    var awardShowMakerFolder = app.project.items.addFolder("Award Show Maker "+asmCounter);
    awardShowMakerFolder.parentFolder = asmTemplateComp.parentFolder;

    for(var a = 0; a < reviewList.items.length; a++){

        var numIter; //This whole section makes it so the newly created comps sort correctly by adding a numeral to the start of the comp name
        if(a < 9){
            numIter = "0"+(a+1);
        }else{
            numIter = (a+1);
        };

        //This section pulls the information from the review list and applies it to a variable
        var nameInsert = pullFromList(reviewList,nameReviewCol,a);
        var subtitle1Insert = pullFromList(reviewList,sub1ReviewCol,a);
        var subtitle2Insert = pullFromList(reviewList,sub2ReviewCol,a);
        var photoIDPull = pullFromList(reviewList,photoCompIDReviewCol,a);

        var compName; //This section specifies what the name of the new comp will be
        if(nameLayerCheckBox.value == false){
            compName = numIter; //If there isn't a name column from the CSV, the new comp will just be named with a number counter
        }else{
            compName = numIter + " " + nameInsert; //If there IS a name from the CSV, that will be included in the name of the comp
        };
    
        //DUPLICATE TEMPLATE COMP
        var dupTempComp = asmTemplateComp.duplicate();
        dupTempComp.name = compName;
        dupTempComp.parentFolder = awardShowMakerFolder;
        var dupCompID = dupTempComp.id;

        var dupCompIndex;
        for(var i = 1; i <= app.project.numItems; i++){ //For loop needs to find the index of the new comp based on the comp's ID, since you can't just have that apparently
            if(app.project.item(i).id == dupCompID){
                dupCompIndex = i;
            };
        };
        
        if(photoLayerCheckBox.value == true){ //Replaces photo source if applicable
            layerReplacer(dupCompIndex,asmPhotoLayerIndex,photoIDPull);
        };

        if(nameLayerCheckBox.value == true){ //Replaces text in given layer if applicable
            textReplacer(dupCompIndex,asmNameLayerIndex,nameInsert);
        };

        if(subtitle1LayerCheckBox.value == true){ //Replaces text in given layer if applicable
            textReplacer(dupCompIndex,asmSubtitle1LayerIndex,subtitle1Insert);
        };

        if(subtitle2LayerCheckBox.value == true){ //Replaces text in given layer if applicable
            textReplacer(dupCompIndex,asmSubtitle2LayerIndex,subtitle2Insert);
        };
        
    };

    app.endUndoGroup;
};