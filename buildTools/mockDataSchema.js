export const schema = {
  "type": "object",
  "properties": {
    "dealerTeam": {
      "type": "array",
      "minItems": 40,
      "maxItems": 40,
      "items": {
        "enum": [
          {
            id: 6,
            name: "Jordon Cremin",
            role: "Manager"
          },
          {
            id: 35,
            name: "Anahi Bogisich",
            role: "CSI Agent"
          },
          {
            id: 12,
            name: "Amy Mayert",
            role: "Parts Sales Lead"
          },
          {
            id: 161,
            name: "Desmond Dach",
            role: "Sales Rep"
          },
          {
            id: 195,
            name: "Vince Fisher",
            role: "Service Rep"
          },
          {
            id: 128,
            name: "Bret Davis",
            role: "BD Agent"
          }, {
            id: 45,
            name: "Queen Hegmann",
            role: "Service Rep"
          },
          {
            id: 127,
            name: "Emma Rogahn",
            role: "Parts Sales Lead"
          },
          {
            id: 44,
            name: "Steve Blick",
            role: "Service Sales Lead"
          },
          {
            id: 105,
            name: "Idell Streich",
            role: "Service Rep"
          },
          {
            id: 29,
            name: "Miss Prince Jacobson",
            role: "Sales Rep"
          },
          {
            id: 134,
            name: "Percy Koepp III",
            role: "Service Rep"
          },
          {
            id: 188,
            name: "Leslie Kozey",
            role: "Service Sales Lead"
          },
          {
            id: 106,
            name: "Rene Schultz",
            role: "CSI Agent"
          },
          {
            id: 93,
            name: "Maryse Gleichner",
            role: "BD Agent"
          },
          {
            id: 102,
            name: "Bonita Kutch DVM",
            role: "Parts Sales Lead"
          },
          {
            id: 124,
            name: "Quinton Bashirian III",
            role: "Manager"
          },
          {
            id: 1,
            name: "Lempi Batz",
            role: "CSI Agent"
          },
          {
            id: 2,
            name: "Elijah Gorczany",
            role: "Parts Sales Lead"
          },
          {
            id: 122,
            name: "Aracely Predovic",
            role: "Manager"
          },
          {
            id: 175,
            name: "Adah Stehr",
            role: "Sales Rep"
          },
          {
            id: 96,
            name: "Kenton Wisoky",
            role: "Service Sales Lead"
          },
          {
            id: 52,
            name: "Clarabelle Mosciski V",
            role: "CSI Agent"
          },
          {
            id: 66,
            name: "Anastasia O'Hara",
            role: "Service Sales Lead"
          },
          {
            id: 35,
            name: "Dr. Robyn Daugherty",
            role: "CSI Agent"
          },
          {
            id: 200,
            name: "Isabel Waelchi",
            role: "Service Rep"
          },
          {
            id: 175,
            name: "Scotty Shanahan",
            role: "Service Sales Lead"
          },
          {
            id: 182,
            name: "Sid Upton Sr.",
            role: "Manager"
          },
          {
            id: 150,
            name: "Alvera Davis",
            role: "Sales Rep"
          },
          {
            id: 175,
            name: "Mr. Adrien Crist",
            role: "Parts Sales Lead"
          },
          {
            id: 46,
            name: "Osborne Ernser",
            role: "Split Sales Rep"
          },
          {
            id: 102,
            name: "Mohamed Rodriguez",
            role: "BD Agent"
          },
          {
            id: 162,
            name: "Brionna Shanahan",
            role: "BD Agent"
          },
          {
            id: 41,
            name: "Alycia Armstrong",
            role: "Parts Sales Lead"
          }, {
            id: 12,
            name: "Alexane Turcotte",
            role: "Service Sales Lead"
          },
          {
            id: 32,
            name: "Kayla Zieme",
            role: "Sales Rep"
          },
          {
            id: 180,
            name: "Enos Medhurst",
            role: "Manager"
          },
          {
            id: 188,
            name: "Buddy Adams",
            role: "Service Rep"
          },
          {
            id: 40,
            name: "Godfrey Pagac",
            role: "CSI Agent"
          },
          {
            id: 136,
            name: "Merritt Baumbach",
            role: "BD Agent",
          }
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "role": {
            "type": "string",
            "pattern": "Sales Rep|Manager|BD Agent|CSI Agent|Service Sales Lead|Service Rep|Parts Sales Lead",
          }
        },
        "required": ['id', 'name', 'role']
      }
    },
    "customer": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "minimum": 1,
          "maximum": 1
        },
        "photo": {
          "type": "string",
          "faker": "image.avatar"
        },
        "firstName": {
          "faker": "name.firstName"
        },
        "lastName": {
          "faker": "name.lastName"
        },
        "phone": {
          "type": "string",
          "faker": "phone.phoneNumber"
        },
        "email": {
          "faker": "internet.email"
        },
        "address": {
          "type": "object",
          "properties": {
            "street": {
              "faker": "address.streetAddress"
            },
            "street2": {
              "faker": "address.secondaryAddress"
            },
            "city": {
              "faker": "address.city"
            },
            "state": {
              "faker": "address.stateAbbr"
            },
            "postal": {
              "faker": "address.zipCode"
            }
          },
          required: ['street', 'city', 'state', 'postal'],
        },
        "ebr": {
          "type": "boolean",
        },
        "ebrExpressConsent": {
          "type": "boolean"
        },
        "memo": {
          "type": "string",
          "faker": "lorem.paragraph"
        },
        "tasks": {
          "type": "array",
          "minItems": 2,
          "maxItems": 15,
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number",
                "minimum": 1
              },
              "type": {
                "type": "string",
                "pattern": "phone|reply|new"
              },
              "primaryText": {
                "type": "string",
                "faker": "lorem.sentence"
              },
              "secondaryText": {
                "type": "string",
                "faker": "lorem.sentence"
              }
            },
            "required": ['id', 'type', 'primaryText', 'secondaryText']
          }
        },
        "appointments": {
          "type": "array",
          "minItems": 0,
          "maxItems": 20,
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number",
                "minimum": 1
              },
              "time": {
                "type": "string",
                "faker": "date.future"
              },
              "type": {
                "type": "string",
                "pattern": "Meeting|Phone|Email|Letter|Fax|Other"
              },
              "status": {
                "type": "string",
                "pattern": "Not Confirmed|Confirmed|Past Due|Service Appointment|Missed|Cancelled|Completed"
              },
              "isUrgent": {
                "type": "boolean"
              },
              "editors": {
                "type": "object",
                "properties": {
                  "lastUpdatedBy": {
                    "type": "string",
                    "faker": "name.findName"
                  },
                  "createdBy": {
                    "type": "string",
                    "faker": "name.findName"
                  },
                  "confirmedBy": {
                    "type": "string",
                    "faker": "name.findName"
                  }
                }
              },
              "vehicle": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "number",
                    "minimum": 1
                  },
                  "year": {
                    "type": "number",
                    "minimum": 1997,
                    "maximum": 2017
                  },
                  "make": {
                    "type": "string",
                    "pattern": "Ford|Chevrolet|Chrysler|Nissan"
                  },
                  "model": {
                    "type": "string",
                    "pattern": "F150|Sierra|Taurus|Maxima|Altima"
                  },
                  "trim": {
                    "type": "string",
                    "pattern": "Evolution FE|LX|SXT|LTZ|SEL|XLE|"
                  }
                },
                "required": ['id', 'year', 'make', 'model']
              },
              "description": {
                "type": "string",
                "faker": "lorem.sentence"
              },
              "notes": {
                "type": "string",
                "faker": "lorem.paragraph"
              }
            },
            "required": ['id', 'time', 'type', 'status', 'editors', 'vehicle']
          }
        },
        "team": {
          "type": "object",
          "properties": {
            "salesRepId": {
              "type": "number",
              "minimum": 195,
              "maximum": 195
            },
            "splitSalesRepId": {
              "type": "number",
              "minimum": 46,
              "maximum": 46
            },
            "managerId": {
              "type": "number",
              "minimum": 124,
              "maximum": 124
            },
            "bdAgentId": {
              "type": "number",
              "minimum": 93,
              "maximum": 93
            },
            "csiAgentId": {
              "type": "number",
              "minimum": 35,
              "maximum": 35
            },
            "serviceSalesLeadId": {
              "type": "number",
              "minimum": 12,
              "maximum": 12
            },
            "serviceRepId": {
              "type": "number",
              "minimum": 188,
              "maximum": 188
            },
            "partsLeadId": {
              "type": "number",
              "minimum": 41,
              "maximum": 41
            },
          }
        },
        "required": ['salesRepId', 'splitSalesRepId', 'managerId', 'bdAgentId', 'csiAgentId', 'serviceSalesLeadId', 'serviceRepId', 'partsLeadId']
      },
      "required": ['id', 'photo', 'firstName', 'lastName', 'phone', 'email', 'address', 'ebr', 'ebrExpressConsent', 'memo', 'tasks', 'appointments', 'team']
    }
  },
  "required": ['appointments', 'dealerTeam', 'customer']
};


