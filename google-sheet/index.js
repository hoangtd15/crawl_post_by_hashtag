const express = require("express");
const {google} = require("googleapis");
var bodyParser = require('body-parser')
// const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");

// const cheerio = require("cheerio");
// const fs = require("fs");

const app = express();
var jsonParser = bodyParser.json()
var cors = require('cors')

app.use(cors())

app.post("/",jsonParser, async (req,res)=>{
    console.log(req.body)
    const {value} = req.body

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    })

    const client = await auth.getClient();
    const spreadsheetId = "1BlPg-7clpyf91DE9Kr51R8mcRsV2rMYTU4-SJLe8_TY";

    const googleSheets = google.sheets({version:"v4", auth: client});

    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range:"Sheet1!A:E",
        valueInputOption:"USER_ENTERED",
        resource:{
            values: value
            
        }

    })
    res.send(value)

})


const getSheets = async (auth, spreadsheetId) => {
    const sheets = google.sheets({version: "v4", auth});
    const result = (await sheets.spreadsheets.get({ 
      spreadsheetId 
    })).data.sheets.map((sheet) => {
      return sheet.properties.title
    })
    return result
  }
  

app.listen(1337,(req,res)=>{
    console.log("1337")
})

