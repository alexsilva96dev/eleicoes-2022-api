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

    // CDC (Código do cargo)
    // 1 - PRESIDENTE
    // 2 - VICE-PRESIDENTE
    // 3 - GOVERNADOR
    // 4 - VICE-GOVERNADOR
    // 5 - SENADOR
    // 9 - 1º SUPLENTE
    // 10 - 2º SUPLENTE
    // 6 - DEPUTADO FEDERAL
    // 7 - DEPUTADO ESTADUAL
    // 8 - DEPUTADO DISTRITAL

    try {
      // console.log(request.qs());
      const state = request.params().state

      const page = parseInt(request.qs().page)

      let pages = {}
      let dataPages = {}

      if (state) {
        if (states[state]) {
          const cdc = request.qs().cdc

          if (states[state][cdc]) {
            // let data = {}
            // data[cdc] = [ ...states[state][cdc] ]

            if (["6", "7", "8"].includes(cdc)) {
              if (page >= 1) {
                if (states[state][cdc]) {
                  pages[cdc] = states[state][cdc]["pages"]
                  dataPages[cdc] = states[state][cdc][page.toString()] ? states[state][cdc][page.toString()] : []
                }
        
                // if (states[state]["7"]) {
                //   pages["7"] = states[state]["7"]["pages"]
                //   dataPages["7"] = states[state]["7"][page.toString()] ? states[state]["7"][page.toString()] : []
                // }
        
                // if (states[state]["8"]) {
                //   pages["8"] = states[state]["8"]["pages"]
                //   dataPages["8"] = states[state]["8"][page.toString()] ? states[state]["8"][page.toString()] : []
                // }
              } else {
                if (states[state][cdc]) {
                  pages[cdc] = states[state][cdc]["pages"]
                  dataPages[cdc] = states[state][cdc]["1"]
                }
        
                // if (data["7"]) {
                //   pages["7"] = states[state]["7"]["pages"]
                //   dataPages["7"] = states[state]["7"]["1"]
                // }
        
                // if (data["8"]) {
                //   pages["8"] = states[state]["8"]["pages"]
                //   dataPages["8"] = states[state]["8"]["1"]
                // }
              }
            } else {
              // data[cdc] = [ ...states[state][cdc] ]
              dataPages[cdc] = [ ...states[state][cdc] ]
            }

            return { ...states.BR, ...dataPages, pages }
            // return { ...states.BR, ...data }
          } else {
            if (page >= 1) {
              if (states[state]["6"]) {
                pages["6"] = states[state]["6"]["pages"]
                dataPages["6"] = states[state]["6"][page.toString()] ? states[state]["6"][page.toString()] : []
              }
      
              if (states[state]["7"]) {
                pages["7"] = states[state]["7"]["pages"]
                dataPages["7"] = states[state]["7"][page.toString()] ? states[state]["7"][page.toString()] : []
              }
      
              if (states[state]["8"]) {
                pages["8"] = states[state]["8"]["pages"]
                dataPages["8"] = states[state]["8"][page.toString()] ? states[state]["8"][page.toString()] : []
              }
            } else {
              if (states[state]["6"]) {
                pages["6"] = states[state]["6"]["pages"]
                dataPages["6"] = states[state]["6"]["1"]
              }
      
              if (states[state]["7"]) {
                pages["7"] = states[state]["7"]["pages"]
                dataPages["7"] = states[state]["7"]["1"]
              }
      
              if (states[state]["8"]) {
                pages["8"] = states[state]["8"]["pages"]
                dataPages["8"] = states[state]["8"]["1"]
              }
            }
    
            return { ...states.BR, ...states[state], ...dataPages, pages }

            // return { ...states.BR, ...states[state] }
          }
        } else {
          if (page >= 1) {
            if (states["DF"]["6"]) {
              pages["6"] = states["DF"]["6"]["pages"]
              dataPages["6"] = states["DF"]["6"][page.toString()] ? states["DF"]["6"][page.toString()] : []
            }
    
            if (states["DF"]["7"]) {
              pages["7"] = states["DF"]["7"]["pages"]
              dataPages["7"] = states["DF"]["7"][page.toString()] ? states["DF"]["7"][page.toString()] : []
            }
    
            if (states["DF"]["8"]) {
              pages["8"] = states["DF"]["8"]["pages"]
              dataPages["8"] = states["DF"]["8"][page.toString()] ? states["DF"]["8"][page.toString()] : []
            }
          } else {
            if (states["DF"]["6"]) {
              pages["6"] = states["DF"]["6"]["pages"]
              dataPages["6"] = states["DF"]["6"]["1"]
            }
    
            if (states["DF"]["7"]) {
              pages["7"] = states["DF"]["7"]["pages"]
              dataPages["7"] = states["DF"]["7"]["1"]
            }
    
            if (states["DF"]["8"]) {
              pages["8"] = states["DF"]["8"]["pages"]
              dataPages["8"] = states["DF"]["8"]["1"]
            }
          }
  
          return { ...states.BR, ...states["DF"], ...dataPages, pages }

          // return { ...states.BR, ...states["DF"] }
        }

        // return { ...states.BR, ...states[request.params().state ? request.params().state : "DF"] }
      } else {
        if (page >= 1) {
          if (states["DF"]["6"]) {
            pages["6"] = states["DF"]["6"]["pages"]
            dataPages["6"] = states["DF"]["6"][page.toString()] ? states["DF"]["6"][page.toString()] : []
          }
  
          if (states["DF"]["7"]) {
            pages["7"] = states["DF"]["7"]["pages"]
            dataPages["7"] = states["DF"]["7"][page.toString()] ? states["DF"]["7"][page.toString()] : []
          }
  
          if (states["DF"]["8"]) {
            pages["8"] = states["DF"]["8"]["pages"]
            dataPages["8"] = states["DF"]["8"][page.toString()] ? states["DF"]["8"][page.toString()] : []
          }
        } else {
          if (states["DF"]["6"]) {
            pages["6"] = states["DF"]["6"]["pages"]
            dataPages["6"] = states["DF"]["6"]["1"]
          }
  
          if (states["DF"]["7"]) {
            pages["7"] = states["DF"]["7"]["pages"]
            dataPages["7"] = states["DF"]["7"]["1"]
          }
  
          if (states["DF"]["8"]) {
            pages["8"] = states["DF"]["8"]["pages"]
            dataPages["8"] = states["DF"]["8"]["1"]
          }
        }

        return { ...states.BR, ...states["DF"], ...dataPages, pages }
      }  
    } catch (error) {
      console.log(error)

      return {}
    }
  }
}
