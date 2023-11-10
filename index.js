
const { Configuration, OpenAIAPI } = require("openai");
const configuration = new Configuration({
    organization: "org-fmCPLd3oTc0O30dtOvDTvBAJ",
    apiKey: "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",
});
const openai = new OpenAIAPI(configuration);



async function callApi() {
  const response = await openai.Completion.create({
    model: "text-davinci-003",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(response.data.choices[0].text);
}
callApi();