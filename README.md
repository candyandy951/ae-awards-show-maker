# After Effects Awards Show Maker
This script is designed to automate the process of creating an awards show-esque "slideshow" in After Effects. It takes a slide template designed by the user then duplicates it and inserts data from a CSV and/or photos prepared by the user to generate all slides for the presentation for the user to then add to their "master" comp and sequence the layers.

## Tip Jar
If you enjoy this script and it has helped you save time on your projects, consider sending me a [tip](https://ko-fi.com/candyandy951)!
(https://ko-fi.com/candyandy951)

# Index


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
When you first launch the script in After Effects, it will open a menu window from which you can launch the **Photos to Comps** tool, the **Award Show Maker** tool, or open the help window.