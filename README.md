# Crowdfunding Front End
Sheila S.

## Planning:
### Concept/Name
Crowdfunding for villain lair masquerading as knitting project for charity.

### Front End (Netlify) URL
https://yarnarchy.netlify.app/

### Intended Audience/User Stories
- Evil henchman who would like to fund a new/established villain lair, or who'd like to simply support their favourite villain.
- Villains with aspirations to be a supervillain. After all, you can't be considered a supervillain if don't have your own deadly lair.  

### Front End Pages/Functionality
- Home page
    - Featured campaigns
    - Most popular campaign (based off amount pledged)
- Create new campaigns
    - Form containing campaign details
    - Ability to submit
    - Nice error pages for validation
- Display campaign
    - Display campaign details
    - Display total amount pledged out of target total
    - Display comments from pledges with names/anonymous
    - Display a default message if there is no pledge
    - Nice error pages for validation
- Pledges
    - List all pledges made by the user with links to campaigns
    - Ability to add pledge for a campaign, for logged in user
    - User is able to pledge multiple times for the same campaign
    - Form containing pledge details (amount, comment, anonymity)
    - Nice error pages for validation for amount and ensuring that pledges are made only for active campaigns
- Logon
    - Form for username and password
    - Error message for validation
- Signup
    - Ability to create new user
    - Error message/page for duplicate usernames or duplicate email
- User page
    - Display username
    - Link to view pledges made by the user, with placeholder if no pledges
    - List campaigns created by the user, with placeholder if no campaigns
    - Ability to logoff
    - Ability to edit username/email/password is not supported
    - Ability to update pledge (changing pledge amount etc) is currently enabled 
- Admin page [PLANNED]
    - List all campaigns
    - Ability to edit campaign details
    - Ability to delete campaign
    - Ability to delete user
    - Ability to add stretch goal for selected campaign

#### Homepage
![Homepage when user is not logged in.]( ./img/readme/00_Homepage_Logged_Out.png )
![Homepage when user is logged in.]( ./img/readme/00_Homepage_Logged_In.png )

#### Creating a new user

* username
* email
* password
The rest of the fields are optional.

![Request and response on Insomnia to Heroku for creating a new user]( ./img/readme/POST_CreateUser.png )

#### Creating a new campaign
To create a new campaign, you must be logged in and send a POST request to the /campaigns/ endpoint with a JSON payload containing the following mandatory fields:
* title
* description
* goal
* image (URL)
* is_open
The rest of the fields are optional.

![Request and response on Insomnia to Heroku for creating a new campaign]( ./img/readme/POST_CreateCampaign.png )

#### Creating a new pledge
![Request and response on Insomnia to Heroku for creating a new pledge]( ./img/readme/POST_CreatePledge.png )



#### Getting campaign details
![Request and response on Insomnia to Heroku for getting campaign details]( ./img/readme/GET_CampaignDetails.png )

### DB Schema
![]( ./database.drawio.svg )

### Wouldn't it be cool if...

Below are ideas that seemed cool at the time, but abandoned due to complexity or time constraints.

- Campaign to have date created, date started and date ended, which would enable campaigns to be scheduled and to have its status automatically updated. But this would need an automated job to be running in the background, continuously checking for dates and updating the campaign status... too big of a scope for now.
- Related to the above, a campaign could have 1 of 4 possible statuses: DRAFT/ACTIVE/COMPLETED/CANCELLED - however this relates to the automatic status update in the point above.
- 