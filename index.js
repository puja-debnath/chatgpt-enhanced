
const   Configuration =require( "openai");
const  OpenAIApi =require( "openai");
const express = require("express");


const configuration = new Configuration({
    organization: "org-fmCPLd3oTc0O30dtOvDTvBAJ",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

//create a simple api that call the fucntion above

const app = express()
const PORT = 3080

app.post("/", async(req,res)=>{

  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion.data.choices[0].text);
  res.json({
    data:completion.data
  })

})

app.listen(PORT, () => {
  console.log(`sever is running in ${PORT}`)
})