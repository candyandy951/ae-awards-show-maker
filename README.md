# After Effects Awards Show Maker
This script is designed to automate the process of creating an awards show-esque "slideshow" in After Effects. It takes a slide template designed by the user then duplicates it and inserts data from a CSV and/or photos prepared by the user to generate all slides for the presentation for the user to then add to their "master" comp and sequence the layers.

## Tip Jar
If you enjoy this script and it has helped you save time on your projects, consider sending me a [tip](https://ko-fi.com/candyandy951)!
(https://ko-fi.com/candyandy951)

# Index

 - [Overview](https://github.com/candyandy951/ae-awards-show-maker#overview)
	 - [How it Works](https://github.com/candyandy951/ae-awards-show-maker#how-it-works)
	 - [Additional Details](https://github.com/candyandy951/ae-awards-show-maker#additional-details)
 - [Installation](https://github.com/candyandy951/ae-awards-show-maker#installation)
 - [How to Use](https://github.com/candyandy951/ae-awards-show-maker#how-to-use)
	 - [Step 1: Prep your Assets](https://github.com/candyandy951/ae-awards-show-maker#step-1-prep-your-assets)
	 - [Step 2: Create Your Template](https://github.com/candyandy951/ae-awards-show-maker#step-2-create-your-template)
	 - [Step 3: Convert Your Photos to Comps](https://github.com/candyandy951/ae-awards-show-maker#step-3-convert-your-photos-to-comps)
	 - [Step 4: The Award Show Maker Tool](https://github.com/candyandy951/ae-awards-show-maker#step-4-the-award-show-maker-tool)
	 - [Step 5: Assemble your "Master Comp"](https://github.com/candyandy951/ae-awards-show-maker#step-5-assemble-your-master-comp)
 - [Appendix](https://github.com/candyandy951/ae-awards-show-maker#appendix)
	 - [Changing the Character Used as List Separator in Excel on Windows 10](https://github.com/candyandy951/ae-awards-show-maker#changing-the-character-used-as-list-separator-in-excel-on-windows-10)

# Overview
## How it Works:
This script is specifically designed for **After Effects**, there's no telling what horrors lie ahead for you if you attempt to run this script in a different application (aside from it generally just not working of course).

As described above, this script is meant to help automate the process of creating an "awards show" style slideshow inside of After Effects. The script expects the user to design their own template slide with whatever animations or assets they deem necessary. Then when the user runs the script, it will duplicate that template comp and update the photo and/or text within to match the awards show data the user provides.

When designing the template comp for use with this script, the user should keep the following in mind:

 1. If a photo is used in the template (a headshot for example), it MUST be added as a precomp.
	 - The script expects you to have photos of various resolutions throughout the "slideshow." By precomping all of the photos, you standardize the resolution of the photo layer and make it easy for the script to reliably replace.
2. Any text included in the template must be a text layer within the template comp. Effects, masks, track matts, etc. can be added, but you cannot do things that alter the layer's classification as a "text layer" like have the text nested in a precomp or convert the text to shapes.
3. The script currently only supports the automation of replacing 3 text fields/layers - typically a name and two subtitles. Any additional text fields would need to be edited after the script generates the slideshow.

This script is broken into two separate tools: the **Photos to Comps** tool, and the **Awards Show Maker** tool.

The **Photos to Comps** tool aids the user in generating precomps from photos to use in the slideshow. This tool is here because if a photo is used in the template comp, it must be a precomp, otherwise you're asking for trouble when dealing with photos of varying resolution.

The **Awards Show Maker** tool is the advertised portion of the script, it takes the template comp along with the photo comps (easily generated using the photos to comps tool) and a CSV of text data (if applicable) and combines them to create multiple duplicates of the template comp with updated photos and/or text fields.

## Additional Details:

 - If you have text elements in your template comp, this script requires a CSV to feed it the data that will be inserted into the subsequent comps it creates. This script will not create a CSV for you, it is the user's responsibility to generate and export a properly formatted CSV from their spreadsheet editor of choice for use with this script.

- Similar to my [CSV to Credits script](https://github.com/candyandy951/ae-csv-to-credits), this script relies on reading a CSV file if there is text information in the template "slide." Also similar to that other script, this script is not smart enough to actually read a CSV file as a proper CSV file the way After Effects would if you were to import the CSV as footage. Instead, this script manually splits apart the data in the CSV based on a user defined character. This poses problems for data that includes commas (for example a cell that has the text "Firstname, Lastname" in it). Normally in a CSV, cells that include commas will be surrounded by quotation marks to designate to the program reading it that the comma should be read as part of the text and not as a cell break. THIS SCRIPT IS NOT SMART ENOUGH TO DO THAT. If you do have commas inside of your cells, you will need to use a different character as a list separator when exporting your CSV. See the appendix of this README for guidance on how to do this using Excel on Windows 10.

# Installation:
-   Download the latest .jsx release file.
-   Open the script from the After Effects "File>Scripts>Run Script File..." menu
-   OR copy the script file into your After Effects scripts folder to quick select it from the File>Scripts menu.

# How to Use:
## Step 1: Prep your Assets
This script is all about combining all of your assets together into one coherent awards show slideshow by generating each of your "slides" and injecting the appropriate assets into those slides.
Assets you may have that this script will help you with are:
**Photos** - Perhaps you have a collection of headshots for each awardee that need to be displayed on a slide as their name is read out.
**Names, Subtitles, or other text** - Awardee names and subtitles are most common here, but really these can really be anything that needs to be displayed on the award slides. Your text based assets should be collected in a spreadsheet that can be converted into a CSV, since that's how the script will be reading your text assets. Each row of the CSV should include the text data for each award "slide," so make sure to arrange your CSV in columns. For example, a column of names, a column of subtitles, etc.
*NOTE: As mentioned above, you need to keep the text content in mind when generating your CSV, if your text content includes commas, you will need to export or create your CSV with a separator other than a comma!
## Step 2: Create Your Template
Before using this script, you first need to create a template "slide" for your awards show. This template can include up to:

 - 1 Photo (As a Nested Comp)
	 - It is recommended that your nested photo comp contain be some sort of generic placeholder image - perhaps something like a thematically appropriate silhouette if your photos will be headshots. This generic photo comp may come in handy later if you do not have a photo for a given awardee and need to use a placeholder.
 - 3 Text Layers/Fields. Typical text fields include:
   - One Name
   - First Subtitle
   - Second Subtitle
  
You are able to mix and match any of the above, a template can be made with no photo and two text layers, or can just be a photo with no text layers.
Your template can include any variety of animation you wish so long as your photo remains as a nested comp and your text layers remain text layers (no converting text to shapes). I recommend having a template that has the assets animate in, then animate out.
You may want to create a background for your template as well, I recommend doing this in a separate comp and only having your template comp include the animation for the photo and text fields. This way, after you create your award show "slides" you can drop them all into a MASTER COMP and then lay the background comp behind them.
## Step 3: Convert Your Photos to Comps
If you have photos that need to be used in your awards show "slides," all of those photos need to be inserted into comps. The Photos to Comps tool is built to automate this process for you.

First, import your photo assets into the After Effects project.

To get to the Photos to Comps tool, launch the script.
When you first launch the script in After Effects, it will open a menu window. This is the central hub from which you can access the two tools packaged with the script. Clicking the **Photos to Comps Tool** button will open the tool.
![A window prompt with a header reading "Awards Show Maker Menu" and three buttons in a vertical column. The top button reads "Photos to Comps Tool", the middle button reads "Awards Show Maker", and the bottom button reads "Help..."](https://i.imgur.com/OsaO3QT.png)
The Photos to Comps tool includes two panels, the panel on the left is for inputting the comp creation values and the panel on the right is for adding your photo footage items to the tool.
![](https://i.imgur.com/nPlpEJ7.png)
### The Comp Settings Panel
![](https://i.imgur.com/0Mnxcgm.png)

This panel is where you tell the tool the aspects of the comps you want your images to be inserted into. You should make these settings MATCH the settings of the embedded photo comp in your template.

 1. **Comp Width** - This is the width that the photo comps will be created at. It's recommended that this match the width of the photo comp in your template.
 2. **Comp Height** - This is the height that the photo comps will be created at. It's recommended that this match the height of the photo comp in your template.
 3. **Comp Duration** - The duration of the created comps. It's recommended that this is set to be AT LEAST as long as the duration of your template comp, if not longer.
 4. **Comp Frame Rate** - The frame rate of the created comps. It's recommended that this match the framerate of your template.
 5. **Comp Pixel Aspect** - The pixel aspect of the created comps. It's recommended that this match the pixel aspect of your template.
### The Item Selection List Panel
![](https://i.imgur.com/mvnEpu4.png)
This panel on the right side of the window is where you select your photo footage items to turn into comps.
 1. **Selected Items List** - This area is where the footage items that you select will appear for you to review. The first column will display the name of the footage item and the second column will display the ID number of the footage item. The ID number is a unique number that is assigned to each project item in After Effects and is what the script uses to reference your selected items
 2. **Select Photos Button** - Clicking this button after selecting/highlighting the photo footage items in your project panel will pull those items into the Selected Items List for you to review. This button will REFRESH your selected items list every time you click it to select items, it does not act as an "add" button.
 3. **Delete Button** - If you accidentally add an item that you do not wish to create a comp out of, you can select it in the Selected Items List and click this delete button to remove it from the list.
 4. **Create Comps from Photos! Button** - This button will execute the Photos to Comps process using the comp information you input on the left and the footage items in the Selected Items List.

### Running the Photos to Comps Tool
When the Photos to Comps process runs, it will create a new folder next to your footage items with the name "Photos to Comps [# of times you've run the script]", then for EACH footage item in the Selected Items List it will:

 - Create a new comp using the settings you specified in the Comp Settings Panel
 - Add the footage item to that comp
 - Size the footage item so it fills the comp canvas area
 - Puts the comp in the newly created folder next to the footage items

After running the tool, it is recommended that you open and check each comp it created to make sure the photos are placed in an aesthetically pleasing way within their new comps. This script is not smart enough to do any sort of face detection when resizing the images to fit , so you will likely need to reposition some photos.

NOTE: If your awards show will include text content, it is IMPERITIVE that when your photo comps sort alphabetically, they match the order of the text data in your CSV. It is recommended that you rename the source footage files ahead of time so they sort in the correct order as the photo comps created by the Photos to Comps tool adopt the same names as the footage they contain.
(technically speaking, this is more of a bug/fault in the script in the way that it pulls your selections from the project panel and how it is not intelligent in matching the resulting photo comps with the CSV data. I may implement a fix for this in the future... but for now you need to make sure your photos and photo comps sort in your desired order.)

## Step 4: The Award Show Maker Tool:
Return to the script's main menu, then select the "Awards Show Maker" button to open the Awards Show Maker tool.
![](https://i.imgur.com/FYYGyV4.png)
The Awards Show Maker tool window is dynamic, when you check certain boxes, other items in the window may appear or vanish.
### The Template Input Panel
The template input panel is where you tell the script which comp in the project is your template comp and what layers in it are relevant.
![](https://i.imgur.com/HMcJ8mW.png)

 1. **Select Template Button** - Highlight/Select your template comp in the project panel then click this button to tell the script which comp is your template comp. The box to the right of the window will populate with the name of your template comp when selected.
 2. **Template Includes a Photo Layer Checkbox** - If your template includes a photo layer, check this box. You will notice certain items in the rest of the window appear or disappear when checking the box.
 3. **Select Photo Layer Button** - Open your template comp so the layers are visible. Highlight/Select the layer with your embedded photo comp in it, then click this button to tell the script which layer contains your photo. When you do, the layer's index and name will populate the box to the right of the button.
 4. **Template Includes a "Name" Text Layer Checkbox** - If your template includes a Name Text Layer (really, this can be any text layer, it doesn't need to be a Name specifically), check this box. You will notice certain items in the rest of the window appear or disappear when checking the box.
	 - Note: The script names each "Award Slide" comp based on the data for the "Name" text layer
 5. **Select Name Layer Button**- Open your template comp so the layers are visible. Highlight/Select the layer with your Name text layer in it, then click this button to tell the script which layer contains the Name text. When you do, the layer's index and name will populate the box to the right of the button.
 6. **Template Includes a "Subtitle" Text Layer Checkbox** - If your template includes a Subtitle Text Layer, check this box. You will notice certain items in the rest of the window appear or disappear when checking the box.
 7. **Select Subtitle 1 Layer Button** - Open your template comp so the layers are visible. Highlight/Select the layer with your subtitle text layer in it, then click this button to tell the script which layer contains the first subtitle text. When you do, the layer's index and name will populate the box to the right of the button.
 8. **Template Includes a second "Subtitle" Text Layer Checkbox** - If your template includes a second Subtitle Text Layer, check this box. You will notice certain items in the rest of the window appear or disappear when checking the box.
 9. **Select Subtitle 2 Layer Button** - Open your template comp so the layers are visible. Highlight/Select the layer with your second subtitle text layer in it, then click this button to tell the script which layer contains the second subtitle text. When you do, the layer's index and name will populate the box to the right of the button.
### The CSV Input Panel
The text-based components of this script are driven by CSV data which you will need to prepare ahead of time. This panel is where you tell the script how to read the CSV file and which parts of your CSV to read for which things.
![](https://i.imgur.com/o6MqGqh.png)
 10. **Choose CSV File Button** - Clicking this button will open a File Explorer/Finder window for you to browse for and select your CSV file.
 11. **Character Used in CSV as List Separator** - This box is where you specify what character your CSV uses as a list separator. By default, spreadsheet applications will export CSV files with commas as the list separator. However, this script is not smart, and as such if your CSV cell content includes commas and it also uses commas as the list separator that will confuse the script and cause unwanted behavior. If your text content includes commas, you will need to export/create a CSV that uses a different character as a list separator, I usually use pipes | when commas are not an option.
 12. **Does the CSV have a Header Row? Checkbox** - Header rows are often useful for the user when creating spreadsheets so you know what information is in each column, they're typically the very first row in a spreadsheet. Normally, if you were to import a CSV into After Effects, it assumes that the first row is a header row and ignores it completely. This script does NOT do that and relies on the user to tell it whether or not it should ignore the first row. With this box checked, it will ignore the first row, if not it will assume the first row has data you want to be included in the first slide.
 13. **Column in CSV with Names** - This box will appear if you have toggled the "Name Text Layer Checkbox". This box is where you specify which column in your CSV contains the text data that you want to be inserted into the layer you selected with the "Select Name Layer" button.
	 - REMEMBER: CSV's start counting at ZERO, so your first column is actually column 0, not column 1.
 14. **Last Names are in a Separate Column** - Some spreadsheets will have a separate column for first names and last names. This script is designed to work with those as well. If your CSV has full names in a single column, uncheck this box. If your CSV does have separate columns for first and last names, check this box. When this box is checked, a new text box will appear, this is where you specify the column that contains the LAST NAMES. If this is the case, the regular "Names" column is where you specify the column containing the FIRST NAMES.
 15. **Column in CSV with Subtitles** - This box will appear if you have toggled the "Template Includes a Subtitle Text Layer" checkbox. This is where you specify which column in your CSV contains the text data that you want to be inserted into the layer you selected with the "Select Subtitle 1 Layer" button.
 16. **Column in CSV with Second Subtitle** - This box will appear if you have toggled the "Template Includes a second Subtitle Text Layer" checkbox. This is where you specify which column in your CSV contains the text data that you want to be inserted into the layer you selected with the "Select Subtitle 2 Layer" button.
### The Photo Comps Panel
This panel is where you select the photo comps that you want to be inserted into your "slides" - most likely, these will be the comps generated by the Photos to Comps tool.
![](https://i.imgur.com/dGoEHFq.png)
 1. **Select Photo Comps Button** - Highlight/Select your photo comps (likely the ones created by the Photos to Comps tool) then click this button to populate them into the selection list.
 2. **Delete Button** - With items populating the list you can select them and delete any accidentally added items.
 3. **Selected Photo Comps List** - When you select the photo comps using the "Select Photo Comps" button, the selected comp names and ID numbers will populate here.
 4. **Return to Menu Button** This will bring you back to the Award Show Maker Script's main menu.
 5. **REVIEW Button** - Barring any missing data or errors, clicking this button will assemble all of your CSV data and photo comps in the Review Window (see below).

**IMPORTANT NOTE** - You will NOT be able to trigger the Review Window if you have a different quantity of CSV entries (rows) and Photo Comps. If you have 15 rows of CSV data, you MUST have 15 photo comps selected. This means that if you are missing a photo for a given slide (and as such, the Photos to Comps tool did not create a comp as there was no photo in the first place), you will need to duplicate a placeholder Photo Comp and rename that duplicate so it sorts into the correct spot among your other photo comps. That way it is also grabbed in the correct order position when selecting the Photo Comps and populating the Selected Photo Comps List with them. This is why it is recommended that you build your template with an aesthetically appropriate placeholder Photo Comp, so it can be reused in this exact situation.

### The Review Window
This window opens when you click the "REVIEW" button in the Award Show Maker Tool window, its intention is to give you an opportunity to review what the script pulled from all of the data you gave it and ensure that the entries all match and the data is correct before you execute the script.
![](https://i.imgur.com/2s3ejpR.png)

 1. **Return to Awards Show Maker Window** - Clicking this button will bring you back to the Awards Show Maker window. Be sure to use this button to return to the previous window as Xing out this window will close the entire script and you'll need to re-enter your data again.
 2. **Review List** - This is where the script will assemble all the data from your CSV and your photo comps. You should take some time to browse through this list to make sure each row has all of the data correct, that the script successfully pulled the text from your CSV and that it has associated the correct photo comp with that CSV (remember, it's up to YOU to make sure the photo comps are in the correct order alphabetically to match your CSV data). Each row in this list will be a new "slide" so make sure you check this for errors so you aren't going back after the fact to figure out what happened if something went wrong.
 3. **CONFIRM & RUN Button** - This button runs the Award Show Maker script and turns all of the data in the review box into new "slide" comps.

### Running the Awards Show Maker Script
When you click the "CONFIRM & RUN" button in the review window the script will create a new folder named "Award Show Maker [# of times you've run the script]" in the same location as your Template Comp to house all of the "slide" comps that it is about to make, then it will do the following for every entry in the Review List:

 1. Make a duplicate of your Template Comp and place it in the newly created folder.
 2. Replace the source of the photo layer with the new Photo Comp associated with the "slide" (if you checked the "Photo Layer" checkbox).
    - The name of the associated photo comp was shown in the Review Window if applicable.
 3. Replace the source text in the "Name" text layer with the associated data from the CSV (if you checked the "Name Layer" checkbox).
	 - the "Name" text was shown in the Review Window if applicable.
 4. Replace the source text in the "Subtitle 1" text layer with the associated data from the CSV (if you checked the "Subtitle Layer" checkbox).
	 - The "Subtitle 1" text was shown in the Review Window if applicable.
5. Replace the source text in the "Subtitle 2" text layer with the associated data from the CSV (if you checked the "second Subtitle" checkbox).
	- The "Subtitle 2" text was shown in the Review Window if applicable.

## Step 5: Assemble your "Master Comp"
Now that you have all of your individual "slide" comps, you should arrange them into one clean "Master Comp" so they can be rendered as one coherent video. Currently this script does not have functionality to do this for you (but it may eventually), so I'll outline my usual next-steps below:

 1. Create a new "Master Comp" - it'll likely have the same specs as your Template Comp, but will be long enough to fit the combined durations of each of your newly created "slide" comps.
 2. Add all of your newly created "slide" comps to the Master Comp.
 3. Select all of the "slide" comps, right click, then navigate to "Keyframe Assistant>Sequence Layers...":
![](https://i.imgur.com/EFaL3Vf.png)
4. Make sure the "Overlap" box is unchecked (unless you want that) then click "OK". This will sequence all of your awards "slides" so they play one after the other. This works best if you've created your Template Comp with an animate in from and animate out to a blank screen.
	- NOTE: The Sequence Layers tool DOES care about the order you selected your layers in when butting them against one another in the timeline. If your layers sequence in the incorrect order, reselect them in the opposite order and try again.
5. Now add a nice background behind all of your "slides" and render!

# Appendix
## Changing the Character Used as List Separator in Excel on Windows 10
Below are the steps to take to change what character is used as the list separator when exporting a CSV from Excel on Windows 10. I don't currently know of any other solutions to export a CSV with a list separator other than a comma, if you do know I'm hungry for the knowledge.

Excel uses the settings in Windows to determine what your list separator should be in a CSV, by default (in North America at least) is to use a comma (,). To change this default:
- Open the Windows Control Panel
- Navigate to "Region"
- Click "Additional Settings"
In this Additional Settings window, there should be a box for "List Separator". For use with this script, change this to a character that does NOT appear in your spreadsheet data AT ALL. Click "Apply". Now when you File>Export>CSV from Excel, it should use the list separator you specified in the Windows settings.
![](https://i.imgur.com/qbJeMCI.png)

