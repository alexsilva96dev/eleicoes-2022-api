import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const BR = require("../../../assets/data/BR.json")

const AC = require("../../../assets/data/AC.json")
const AL = require("../../../assets/data/AL.json")
const AM = require("../../../assets/data/AM.json")
const AP = require("../../../assets/data/AP.json")
const BA = require("../../../assets/data/BA.json")
const CE = require("../../../assets/data/CE.json")
const DF = require("../../../assets/data/DF.json")
const ES = require("../../../assets/data/ES.json")
const GO = require("../../../assets/data/GO.json")
const MA = require("../../../assets/data/MA.json")
const MG = require("../../../assets/data/MG.json")
const MS = require("../../../assets/data/MS.json")
const MT = require("../../../assets/data/MT.json")
const PA = require("../../../assets/data/PA.json")
const PB = require("../../../assets/data/PB.json")
const PE = require("../../../assets/data/PE.json")
const PI = require("../../../assets/data/PI.json")
const PR = require("../../../assets/data/PR.json")
const RJ = require("../../../assets/data/RJ.json")
const RN = require("../../../assets/data/RN.json")
const RO = require("../../../assets/data/RO.json")
const RR = require("../../../assets/data/RR.json")
const RS = require("../../../assets/data/RS.json")
const SC = require("../../../assets/data/SC.json")
const SE = require("../../../assets/data/SE.json")
const SP = require("../../../assets/data/SP.json")
const TO = require("../../../assets/data/TO.json")

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
            let data = {}
            data[cdc] = [ ...states[state][cdc] ]
            
            return { ...states.BR, ...data }
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
