# Forgot password
  **Functional requirements**

    - The user must be able to recovery your password providing your email;
    - The user must recive an e-mail with the instructions for the password
    recovery;
    - The user must be able to reset the password;


  **Not functional requirements**

    - Use Mailtrap for sending emails in development environment;
    - Use Amazon SES for production environment;
    - The sending mail must be in background job;

  **Business rules**

    - The link sended to reset the password by email must expires in two hours;
    - The user must confirm the new password at the password recovery;

# Profile update

  **Functional requirements**

    - The user must be able to update your profile;


  **Not functional requirements**


  **Business rules**

    - The user must not update your email to an used email;
    - For the password update, the user must inform the current password;
    - For the password update, the user must confirm the new password

# Provider dashboard

  **Functional requirements**

    - The provider must be able to list his own appointments in a specific day;
    - The provider must be able to recive an notification whenever a new ;appointment is registered;
    - The provider must be able to see his own unread notifications;

  **Not functional requirements**

    - The provider appointments must be stored in cache;
    - The provider notifications must be stored in a non relational database(MongoDB);
    -The provider notifications must be sended in realtime using socket.io;



  **Business rules**

    - The notification must have a unread or read status;



# Service appointment

  **Functional requirements**

    - The user must be able to list all the registered providers;
    - The user must be able to list all the available days in a month with at least one available appointment of a provider;
    - The user must be able to list all the available appointments in a specific day of a provider;
    - The user must be able to register a new appointment with a specific provider;

  **Not functional requirements**

    - The providers list must be stored in cache;


  **Business rules**

  - Every appointment must have exacly one hour time;
  - The appointments must be avaliable from 8am to 6pm;
  - The user cannot register an appointment in one already registered time;
  - The user cannot register in a past date;
  - The provider user cannot register an appointment with himself;







