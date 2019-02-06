# Durable Price Update (Java)

**[** Source Code **](https://github.com/schnae1/projects/tree/master/prjDurablePriceUpdate)**

Last summer I had the opportunity to work for a company that sells industrial supplies. They sell products locally as well as on their ecommerce website. One of their major product lines consist of thousands of different part numbers. The manufacturer who produces the products had a price increase on nearly all of their products last year. The increase wasn’t a fixed increase percentage across all products, but differed from product to product.

The company that I worked for had to go through each item and update the current cost and then update the sale price of each item to reflect the price increase.The only way to get the current prices is to go to the manufacturer’s website and enter eight part numbers in at a time, click the submit button and record the output current prices. Given that the company has thousands of part numbers to do this for, it would takes hours and hours for someone to complete. Also, the manufacturer said that they would be continuing to adjust pricing a few months later.

![image tooltip here](schnae1.github.io/durablePricing.png)

Instead of doing the price updates manually, I decided to write a Java program that automated the process. The company uses QuickBooks software for inventory control so I was able to export an Excel spreadsheet with all of the part numbers and the costs that needed to be updated. From there, I used the JExcel API to read the data from the Excel file and store all of the part numbers and costs in two arrays, items[] and itemPrices[]. 

Once the data was read in, I used the HtmlUnit API to navigate to the manufacturer’s website, log in, enter eight part numbers at a time, retrieve the new prices, record the updates, and then continue until all of data was processed.

The updated prices were then written to another Excel file and from there that file was imported back into QuickBooks. This cut the time down from several hours to about a few minutes.

The amount of time you can save automating work is amazing!


```markdown

```
