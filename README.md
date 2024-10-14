# vue3-blog-page

This is a website I developed for a construction company. You can access the live version of the project from this url : https://mnsyapi.vercel.app/

## I used the following technologies in the project:

-> Front-end
  - Vue 3
  - Tailwind Css
    
-> Back-end
  - Nest.js
  - Prisma
  - MsSql

## Project features:

 - Responsive structure
 - Google maps
 - Contact form
 - Device control for phone calls

## Project description

When you first enter the site, there is a “Call Us” button on the homepage. When the button is clicked, I check whether the site is opened from a phone or a laptop. If the site is opened from a phone, I redirect the number on the “Call Us” button to the phone's dialing field.

When I click on the email address in the contact information in the footer, I provide an email address using the “mailto:” protocol. This creates a window ready to send an email to the default email address by opening the default email client (e.g. Outlook, Gmail) when the user clicks on this link. 

On the contact page I added a contact form, which is directly connected to the back-end I wrote with Nest.js.  After entering all the required fields, I press the send button and save the data to the database. Here I print a return message indicating whether the message was successfully sent or not. I also show the address of the company on the map with the latitude and longitude information I have specified via google maps that I have added to the contact page.

## İmages
## Home Page
![image](https://github.com/user-attachments/assets/2694f0fd-3b8e-4d19-bb44-f05972c12cda)

## About Page
![image](https://github.com/user-attachments/assets/2ab3fedc-fbac-49b7-9f76-4158b39c277f)

## Contact Page 1
![image](https://github.com/user-attachments/assets/d7c02da7-0431-434e-b351-fe246fa62f87)

## Contact Page 2
![image](https://github.com/user-attachments/assets/30c029e9-ba19-4a73-9a31-62a9b000a064)

## Footer
![image](https://github.com/user-attachments/assets/dbc09ff2-6079-4e57-bc6a-1456ea196334)




