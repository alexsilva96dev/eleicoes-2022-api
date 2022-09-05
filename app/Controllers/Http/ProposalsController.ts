// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Application from '@ioc:Adonis/Core/Application'
// const fs = require('fs');

export default class ProposalsController {
  public async show({ response }) {
    try {
      // const PdfFile = fs.createReadStream('./proposals/BR/2022BR280001612393.pdf')
      // response.stream(PdfFile)

      // const filePath = Application.tmpPath('assets/proposals/BR/2022BR280001612393.pdf')
      return response.attachment('assets/proposals/BR/2022BR280001612393.pdf')
    } catch (error) {
      console.log(error)

      return {}
    }
  }
}
