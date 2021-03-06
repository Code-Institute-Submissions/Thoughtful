![banner](assets/images/man.jpg)

# **Thoughtful Men** 

## **Contents**

* [UX](#ux)
    * [Project Goals](#project-goals)
    * [User Stories](#user-stories)
    * [Site Owner Goals](#site-owner-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
    * [Wireframes](#wireframes)
    * [Features](#features)
    * [Technologies](#technologies-used)
* [Testing](#testing)
    * [Chrome DevTools](#chrome-devtools)
    * [W3C](#w3c-html-validator)
    * [Autoprefixer](#autoprefixer)
    * [Manual testing](#manual-testing)
    * [Responsiveness](#responsiveness)
    * [Speed](#speed)
* [Bugs](#bugs)
* [Deployment](#deployment)
* [Credit](#credits) 

---

## **UX** 

### **Project Goals**

Mental health has become a mainstream topic in recent years and it's no wonder considering our busy, stressful, sedentary, and often disconnected lifes. 
[Men in particular seem to suffer and ofter suffer in silence](https://www.healthline.com/health-news/how-can-we-reduce-mens-mental-health-stigma) as they can find it difficult to talk about their thoughts & feelings for fear of judgement. Thoughtful Men 
is based on a combination of a mindfullness technique called [noting](https://www.headspace.com/blog/2017/07/18/noting-technique-take-advantage/) and a [psychology exercises of writing down your thoughts and then throwing away after](https://www.psychologytoday.com/us/blog/choke/201301/throw-those-nasty-thoughts-away). The goal of the site then
is to be able to offer a safe and private place for men to write what thoughts come up and then discard them. It is not meant as a replacement for professional help but a way of 
being able to note a thought or feeling and then to discard it to offer some release, or just to simply be mindful of your thoughts. 


### **User Goals**

* In the modern world I am more likely to be close to a computer, tablet or mobile than pen or paper so this has to be accesible on all devices so I can quickley write my thoughts. 
* To provide a simple but beautiful site where I can dive straight in to noting thoughts without prior navigation.  
* Users must be able to trash thoughts for both the effect of psychology release and privacy.  
* To be able to add multiple thoughts in a list with the option of deleting.  
* To offer different color schemes depending on mood of user with a simple click. 
* A contact email to contact the site creator. 
* To provide links for additonal help. 


### **User Stories**

* As a user I want to be able to access the site either at home on a desktop or on the go with mobile/tablet. 
* As a user I want to be able to write my thought or feeling with the option of deleting immediately or later.  
* As a user I want to be able to be able to do this without prior navigation.  
* As a user I want to be able to contact the site owner. 
* As a user I want to have links to additional information on mental health and meditation. 

### **Site Owner Goals**

* As a site owner I want the user to be able to note thoughts as soon as the site is loaded.
* As a site owner I want the site to be accesible on mobile, tablet, laptop, and desktop. 
* As a site owner I want the site to be clear, simple and beautiful to the eye. 
* As a site owner I want to provide the option for the user to change the colour scheme depending on the users mood. 
* As a site owner I want to provide an option to add multiple thoughts. 
* As a site owner I want to provide the option to trash thoughts. 
* As a site owner I want the user to be able to contact me via email. 
* As a site owner I want to provide links to professional mental health workers for those in need of something more serious. 

### **User Requirements and Expectations**

#### Requirements

* User must be able to write thoughts immediately and it must be clear how to do this. 
* User must able to trash thoughts and it must be clear how to do this.  
* Site is clean, clear and visually appealing.
* Able to change the colour of site to reflect mood with buttons.   
* To have a footer with email address. 
* To have links to additional help.

#### Expectations

* Content is visually clear, concise and appealing. 
* Site can be viewed on any device. 
* Thought input box and add button works correctly. 
* Trash button works correctly. 
* Navigation links work correctly.
* Navigation links open in a separate tab. 
* Email links works. 
 
---

## **Design Choices**

As the idea of the site is to provide a simple page where the user can dive straight in and enter thoughts. 
The designs reflect this with a brief introduction to the purpose and then an input field where the the user can add thoughts. I center aligned everything
as I feel it would look odd with the minimal amout of content to be left or right aligned and its more grabbing. In the input field there will be a plus symbol which I feel is a good representation
to add the thought. Once the user has entered the thought it will appear below the input field with a trash symbol to give the option to discard. 
There will be also be four buttons to allow the user to be able to change the backround color of the site to reflect the mood of the user. 

### **Fonts**

I have decided to go with Roboto regular 400 as my font as it is a clear, concise and common font on the web. It made no sense to use something alternative as it would not fit in with the designs. 


### **Icons**

Icons will be used on the site to provide further usability. There will be an email icon to direct the user to email in the footer and a plus/trash sign for adding and deleting thoughts. They will be taken from [font awesome](https://fontawesome.com/) and chosen to be self explanatory. 


### **Colours**

I want to offer the user the option to be able to change the background colour depending on mood which is what I have done. I have gone for more pastel looking colours as I think 
bright colours or very dark colours would not look very visually appealing on a single simple page. The site will load with a blue colour which is a nice neutral colour. 
Icons will be black in colour to make them stand out and will change to a grey shade when the user hovers on them. 
![Colours](/wireframes/Colours.png)

* Blue is 92D0D6. 
* Green is 91DBA9 
* Yellow is FFEE90. 
* Red is FF8D43. 
* Text colour is black as it shows up clearly on the selected colours and is a very common colour for typing or writing. 

---
## **Wireframes**

To create my wireframes I uses a word processor called pages to create low fidelity frames of the site. 
I chose pages as it is free software with apple mac's and comes with a number of drawing tools and graphical images to help with sketching and visualising the site. 

* [Wireframes](https://github.com/TobyGreet/Thoughtful/tree/master/wireframes)

![Wireframes](/wireframes/index.png)


## **Changes to UX with finished site**

Please see below changes to orginal UX designs and reasons why. 

### **Background colours changed to images**

During the making of the site I decided against using background colours and instead changed to background images. The reason for this 
is because I feel the images give a better experience to the theme of the site. They are more suited and also frankley visually more appealing than a 
plain background colour. I chose three images which I think suit the site nicley, as they thoughtful and even spiritual. 

### **Removing of links to additional sites**

I decided to remove any links to additional sites as I wanted to keep the site minimal, with the main focus being on the inputting of thoughts. I also thought
it would of been a bit random to have these links in the site. 
Removing these links also meant removing the footer. 

### **Removing of email and social media links**

As with the taking out of additional links I also decided to remove my links to email contact and linkedIn. Firstly I felt there was no real reason to have them
but also they were adding clutter to the site and I preferred to keep it minimal.

---

## **Features**

Features on the site:

* Index/landing page 
* Input box to write thoughts 
* Add button to add thoughts 
* Colour scheme buttons 
* Delete button to trash thoughts 
* Footer with email & links to additional help sites. 

---

## **Technologies Used**

### **Languages Used**

* [HTML](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 

### **Tools and Libaries**

* [Bootstrap](https://getbootstrap.com/)
* [Git](https://git-scm.com/) 
* [Github](https://github.com/) 
* [Gitpod](https://www.gitpod.io/)
* [Font Awesome](https://fontawesome.com/) 
* [Google Fonts](https://fonts.google.com/)

---

## **Testing**

### [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
Google Chrome Tools was used during the building of the site to help find issues and bugs in the code. It is also useful 
for helping with visulise placements of elements but altering positions, margins and paddings. 

### [W3C HTML validator](https://validator.w3.org/) 
This was used to for errors in my HTML code. It returned the below errors and warnings. 

![W3C HTML](assets/images/W3HTML.png)

The error in line 46 was an easy fix as all I needed to do was add the space. In regards to the warnings for headings I decided to 
ignore these as it was unnecessary for my site to have headings in these sections. 

### [W3C CSS Jigsaw validator](https://jigsaw.w3.org/css-validator/)

Like W3C HTML validator they also have an option to test CSS for errors. Luckily mine returned no errors. 

![W3C CSS](assets/images/W3CSS.png)

## Manual Testing

## Browsers
![Manual Testing Browsers](/assets/images/Browser.png)

## Responsiveness

I also tested the site on different devices (small, medium, and large) and bootstrap media breakpoints using Chrome Developer tools. Below are my results:
![Manual Testing Responsive](/assets/images/Responsiveness.png)

---

## Speed

To test the speed of the site I used a free website called [Pingdom](https://tools.pingdom.com/). I was pleased to see my site returned grade B and loads well under a second. 
Below are my results:

![Speed](/assets/images/speed.png)

## **Bugs**

The two main bugs I encountered during the making of my site were:

### **Background images**

The site allows users to add as many thoughts as they wish and this caused a problem as the images did not continue as the thought built up causing a white background to appear. 
I had to fix this with background-attachment: fixed.

### **Footer**

I also had a problem with the footer as the thoughts would overlap it and make the site look messy. I decided to remove the footer due to this and also design reasons. 


## **Finished site**

---

## **Deployment** 

Thoughtful Men was developed on GitPod, using git and GitHub to host the repository.

To deploy Thoughtful Men on GitHub Pages I had to make the follow the steps below:

* Opened up GitHub in my browser
* Signed in using my username and password
* Selected my Thoughtful repositories
* Navigated to https://github.com/TobyGreet/Thoughtful
* Click on setting in the top right of the navigation bar
* Scrolled down to the GitHub Pages area
* Selected 'Master Branch' from the 'Source' dropdown menu
* Clicked save to confirm my selection.
* African Explorers is now live on GitHub Pages: 

### How to run/clone locally:

Running Thoughtful Men Locally
Cloning Thoughtful Men from GitHub:

* Navigate to https://github.com/TobyGreet/Thoughtful
* Click the green code button
* Copy the url in the dropdown box that will appear
* Using your favourite IDE open up your preferred terminal
* Navigate to your desired file location
* Copy the following code and input it into your terminal to clone Thoughtful Men:

---

## **Credits** 

* [Coolors.co](https://coolors.co/)

* Images
    * Man in sunrise image provided by [Greg Rakozy at Unsplash](https://unsplash.com/@grakozy)
    * Tree in forest image provided by [Veeterzy at Unsplash](https://unsplash.com/@veeterzy)
    * City at night image provided by [Henning Witzel at Unsplash](https://unsplash.com/@henning)
    

