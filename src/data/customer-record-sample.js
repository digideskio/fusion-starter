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
  ],
  "DealerTeam": [
    {
      role: "Sales Rep",
      assignment: "Jerry Wells",
    },
    {
      role: "Manager",
      assignment: "Diane Huff",
    },
    {
      role: "BD Agent",
      assignment: "Corey Owen",
    },
    {
      role: "CSI Agent",
      assignment: "Joe Murphy",
    },
    {
      role: "Service Sales Lead",
      assignment: "Bobby Jordan",
    },
    {
      role: "Service Rep",
      assignment: "Owen Glover",
    },
    {
      role: "Parts Sales Lead",
      assignment: undefined,
    }
  ],
  "Appointments": [
    {
      time: "8/9/16 4:00pm",
      editors: {
        lastUpdatedBy: 'Aaron Eggleston',
        createdBy: 'Aaron Eggleston',
        confirmedBy: 'Aaron Eggleston'
      },
      type: "meeting",
      isUrgent: false,
      status: "Confirmed",
      vehicle: "2017 Misubishi Lancer Evolution FE",
      description: "Showroom visit",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate id mauris eget vulputate. Morbi porttitor tellus quis aliquet feugiat. Nullam at faucibus justo. Integer ultricies turpis at metus commodo elementum. Nullam euismod sem in ligula commodo, eu pretium elit tristique. Fusce auctor convallis arcu. Nulla laoreet pretium felis, non hendrerit libero gravida quis. Mauris mollis laoreet justo, nec pretium erat pretium vel. Ut porttitor vulputate nulla, vel eleifend enim sollicitudin ac. Phasellus elit libero, feugiat suscipit magna vitae, dignissim volutpat diam. Etiam scelerisque gravida urna quis tempor."
    },
    {
      time: "8/9/16 5:00pm",
      editors: {
        lastUpdatedBy: 'Aaron Eggleston',
        createdBy: 'Aaron Eggleston',
        confirmedBy: 'Aaron Eggleston'
      },
      type: "phone",
      isUrgent: true,
      status: "Completed",
      vehicle: "2017 Misubishi Lancer Evolution FE",
      description: "Showroom visit",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate id mauris eget vulputate. Morbi porttitor tellus quis aliquet feugiat. Nullam at faucibus justo. Integer ultricies turpis at metus commodo elementum. Nullam euismod sem in ligula commodo, eu pretium elit tristique. Fusce auctor convallis arcu. Nulla laoreet pretium felis, non hendrerit libero gravida quis. Mauris mollis laoreet justo, nec pretium erat pretium vel. Ut porttitor vulputate nulla, vel eleifend enim sollicitudin ac. Phasellus elit libero, feugiat suscipit magna vitae, dignissim volutpat diam. Etiam scelerisque gravida urna quis tempor."
    },
    {
      time: "9/19/16 2:00pm",
      editors: {
        lastUpdatedBy: 'Aaron Eggleston',
        createdBy: 'Aaron Eggleston',
        confirmedBy: 'Aaron Eggleston'
      },
      type: "email",
      isUrgent: false,
      status: "Not Confirmed",
      vehicle: "2017 Misubishi Lancer Evolution FE",
      description: "Showroom visit",
      notes: "Lorem ipsum dolor sit amet. Fusce auctor convallis arcu. Nulla laoreet pretium felis, non hendrerit libero gravida quis. Mauris mollis laoreet justo, nec pretium erat pretium vel. Ut porttitor vulputate nulla, vel eleifend enim sollicitudin ac. Phasellus elit libero, feugiat suscipit magna vitae, dignissim volutpat diam. Etiam scelerisque gravida urna quis tempor."
    }
  ]
};


export default customerinfo;
