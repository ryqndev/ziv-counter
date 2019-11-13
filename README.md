# Ziv's Law Counter

## What is it?

After nearly three weeks of Informatics 43 lecture at UCI, Ziv is continuously 
reminding us of the famous law, "Ziv's Law." Noticing his constant love and passion 
for this concept, I decided to create a live counter that tracks every mention of
Ziv's Law during lecture.

## How does it work?

Ziv's Law Counter is a website written in React that pulls its data from a static JSON
file that acts as the primary database. Whenever I hear the words "Ziv's Law" during 
lecture, I will run a quick bash script (update.sh) that will execute a node script
that gets the current time, converts it into an ISO string, and adds it to the static
JSON file. After that, it will gh-pages script to push the new version into production.


## What are the future plans?

I hope for this to be a tradition for INF43 under Ziv where I will pass along write
privileges to future incoming students taking this class and they will keep the counter
going throughout the years.