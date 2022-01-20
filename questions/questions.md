_Question 1_

From: marissa@startup.com  
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,  
Marissa

Answer:

Hi Marissa,

Thanks for reaching out to me. We actually value all the feedback coming from out customers. Honest feedback allows us to continuously improve our solution and make it easier to use for our customers. 
I'll follow up internally with our product team to convey the message. Out of curiosity, for what reason are you deleting and clearing indexes that often? If I better understand the problem you are trying to solve, I may be able to help you find a more efficient way of working.

Best, Vincent

--

_Question 2_:

From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

Answer:

Hi Carrie,

Thanks for getting in touch. To ensure optimal performance of our solution, we have a maximum size of 100kb for every document stored in Algolia. 
Given the error that your are refering to, I suspect that the meta data your are attaching to the feedback of customers is increasing the document size past this threshold. 
Please review all the meta data that your are sending to Algolia to see which data can be omited. This will help resolve the issue and improve the performance of the solution.

Best,
Vincent

--

_Question 3_:

From: marc@hotmail.com  
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

Answer:

Hi Marc,

Thanks for getting in touch.
Without having access to your code, it is hard for me to diagnose the issue.
I presume you are using searchkit to build an search UI?
It sounds like you are trying to use the widget without having properly created it.

To create a search interface, we recommend using Algolia Instantsearch and Algolia Autocomplete, for which we have SDKs for the morec common front-end languages.
Please have a look at our documentation.
https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/
https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/

Best,
Vincent

