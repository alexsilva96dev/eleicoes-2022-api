import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const BRASIL = require("../../../assets/vagas/BRASIL.json")

export default class VagasController {
  public async show({ request }: HttpContextContract) {
    const states = BRASIL;

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

    try {
      // console.log(request.qs());
      const state = request.params().state

      if (state) {
        if (states[state]) {
          return { ...states.BR, ...states[state] }
          
          // const cdc = request.qs().cdc

          // if (states[state][cdc]) {
          //   let data = {}
          //   data[cdc] = [ ...states[state][cdc] ]

          //   return { ...states.BR, ...data }
          // } else {
          //   return { ...states.BR, ...states[state] }
          // }
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
