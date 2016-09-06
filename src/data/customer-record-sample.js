const customerinfo = {
  "photo": "http://placehold.it/160x160",
  "name": {
    "first": "Kyla",
    "last": "Gonzalez"
  },
  "phone": "(419) 555-3985",
  "email": "kgonzalez@gmail.com",
  "address": {
    "street": "5171 Horton",
    "city": "Mission",
    "state": "KS",
    "postal": 66202
  },
  "ebr": {
    "ebr": true,
    "expressConsent": true
  },
  "memo": "Kyla has two young kids and is always in a hurry to get things done. Please be quick.",
  "tasks": [
    {
      icon: "phone",
      primetext: "Reminder to Call Customer",
      secondarytext: "Assigned to Gene Smith",
      typetext: "Yesterday",
      taskbuttonlabel: "Log Call"
    },
    {
      icon: "reply",
      primetext: "Reply to Customer Email",
      secondarytext: "Assigned to Aaron Eggleston",
      typetext: "3 days ago",
      taskbuttonlabel: "Reply"
    },
    {
      icon: "new",
      primetext: "Prospect just viewed this email ",
      secondarytext: "Assigned to Jerry Fox ",
      typetext: "1 week ago",
      taskbuttonlabel: "",
      alert : true
    },
    {
      icon: "reply",
      primetext: "Reply to Customer Email",
      secondarytext: "Assigned to Aaron Eggleston",
      typetext: "3 days ago",
      taskbuttonlabel: "Reply"
    },
    {
      icon: "new",
      primetext: "Prospect just viewed this email ",
      secondarytext: "Assigned to Jerry Fox ",
      typetext: "1 week ago",
      taskbuttonlabel: "",
      alert : true
    },
  ]
};

/*

    {
      "title":"Reminder to Call Customer (1)"
    },
    {
      "title":"Reply to Customer Email (2)"
    },
    {
      "title":"Prospect just viewed this email (3)"
    },
    {
      "title":"This task is initially hidden (4)"
    }

  */
export default customerinfo;