export const schema = {
  "type": "object",
  "properties": {
    "dealerTeam": {
      "type": "array",
      "minItems": 20,
      "maxItems": 20,
      "items": {
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
            "pattern": "Sales Rep|Manager|BD Agent|CSI Agent|Service Sales Lead|Service Rep|Parts Sales Lead"
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
                  "lastUpdatedBy":{
                    "type": "string",
                    "faker": "name.findName"
                  },
                  "createdBy":{
                    "type": "string",
                    "faker": "name.findName"
                  },
                  "confirmedBy":{
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
            "required": ['id', 'time', 'type', 'status', 'editors', 'vehicle' ]
          }
        },
        "team": {
          "type": "object",
          "properties": {
            "salesRepId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
            },
            "splitSalesRepId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
            },
            "managerId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
            },
            "bdAgentId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
            },
            "csiAgentId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
            },
            "serviceSalesLeadId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
            },
            "serviceRepId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
            },
            "partsLeadId": {
              "type": "number",
              "minimum": 1,
              "maximum": 8
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


