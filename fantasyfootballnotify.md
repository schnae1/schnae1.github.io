## Fantasy Football Notification (Python)

**[** Source Code **](https://github.com/schnae1/projects/tree/master/ffnotify)**

I wrote this program as a way to get notified when a team drops fantasy football player. Often times, teams will drop players that should not be dropped on account that they just don’t know any better. When they are dropped, the first one to pick them up gets them. So speed is a factor.

Instead of constantly logging onto the fantasy football website and checking for dropped players, I wrote a program that logs in every user designated time period, checks to see if any new players have been dropped, and notifies the user if there are.

The program uses Selenium API for navigating the website, Beautiful Soup API to retrieve data, and Twilio API to send the text message notification to the user.
