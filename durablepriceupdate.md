# Durable Price Update (Java)

**[** Source Code **](https://github.com/schnae1/projects/tree/master/prjDurablePriceUpdate)**

Last summer I had the opportunity to work for a company that sold industrial supplies. They had a particular product line that included thousands of different parts, many were posted on their ecommerce website.

The manufacturer that produces these parts had a huge price increase on nearly all of the products they made. The company that I worked for had a need to go through and adjust the prices of all these products. The only way to get the current pricing from the manufacturer was to log onto the vendor website, enter eight part numbers at a time into the input text boxes, hit the submit button, record the updated prices and then repeat the process. 

This would have taken hours and hours to complete and most likely would have had to be done again later on down the road, since the manufacturer said that they probably would have to adjust the prices again a few months later. So, I created a java program the would automate this process.

The company used QuickBooks software for inventory control. I was able to export an Excel spreadsheet with all of the part numbers and the costs that needed to be updated. From there, I used the JExcel API to read all of the Excel file and store all of the numbers and costs in two arrays items[] and itemPrices[]. 

Once the data was read in, I used the HtmlUnit API to navigate to the manufacturer’s website, log in, enter eight part numbers at a time, retrieve the new prices, record the updates, and then continue until out of data.

The updated prices were then written to another Excel file and from there that file was imported back into QuickBooks. This cut the time down from several hours to about a couple of minutes.

The amount of time you can save automating work is amazing!


```markdown

```
