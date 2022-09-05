import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const BR = require("./BR.json")

const AC = require("./AC.json")
const AL = require("./AL.json")
const AM = require("./AM.json")
const AP = require("./AP.json")
const BA = require("./BA.json")
const CE = require("./CE.json")
const DF = require("./DF.json")
const ES = require("./ES.json")
const GO = require("./GO.json")
const MA = require("./MA.json")
const MG = require("./MG.json")
const MS = require("./MS.json")
const MT = require("./MT.json")
const PA = require("./PA.json")
const PB = require("./PB.json")
const PE = require("./PE.json")
const PI = require("./PI.json")
const PR = require("./PR.json")
const RJ = require("./RJ.json")
const RN = require("./RN.json")
const RO = require("./RO.json")
const RR = require("./RR.json")
const RS = require("./RS.json")
const SC = require("./SC.json")
const SE = require("./SE.json")
const SP = require("./SP.json")
const TO = require("./TO.json")

export default class CandidatesController {
  public async show({ request }: HttpContextContract) {
    const states = {
      BR,
      AC,
      AL,
      AM,
      AP,
      BA,
      CE,
      DF,
      ES,
      GO,
      MA,
      MG,
      MS,
      MT,
      PA,
      PB,
      PE,
      PI,
      PR,
      RJ,
      RN,
      RO,
      RR,
      RS,
      SC,
      SE,
      SP, 
      TO
    }

    try {
      // console.log(request.qs());
      const state = request.params().state

      if (state) {
        if (states[state]) {
          const cdc = request.qs().cdc

          if (states[state][cdc]) {
            // return { ...states[state][cdc] }
            return { ...states.BR, ...states[state][cdc] }
          } else {
            return { ...states.BR, ...states[state] }
          }
        } else {
          return { ...states.BR, ...states["DF"] }
        }
        // return { ...states.BR, ...states[request.params().state ? request.params().state : "DF"] }
      } else {
        return { ...states.BR, ...states["DF"] }
      }  
    } catch (error) {
      console.log(error)

      return {}
    }
  }
}
