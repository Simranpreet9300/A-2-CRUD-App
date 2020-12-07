# Hospital Management System
# A-2-CRUD-App

The reason behind choosing this topic is, as everyone knows that it is the time of covid pandemic, hosiptal management plays important role in every place, so i choose this.
Ok when it comes to authorisation and authentication, though docotors are experts in their field, they might not be able to handle the authorisation 
whatever the reasons it is like may be they were busy or lack of knowldege on security , we managed to add an admin role in our topic which has one or two user and performs the actions like to whom the acess should be given, till what extent the access should be given and also for veryfying the users before giving the access.This application contain full Create-Read-Update-Delete functionality.

In this application i created one view within which we (as a admin) can add, edit and delete information. This view is Doctor. It shows name, gender of doctor and which doctor is available and what kind of specialist they are and what are the priority of people towards them. We can say this as their rating. To view this page, only register user or admin can view this doctor page and rest of the pages. But who did not register or who are not authorized for this view, they do not have the authority to view it. They can view rest of the pages but not this doctor page.

Futhermore, there are four options with login. User can login in four different ways who are authorised. They can login either through their registered username and password or through google, facebook and github. I implement Authentication so only my Home page, Register page, Login
page, and Read-Only page that displays doctor data are public. All other pages that perform CRUD operations are Private.

So, last i created these much CRUD functionality in my Hospital Management Application.
