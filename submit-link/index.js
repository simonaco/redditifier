const axios = require('axios')
const URL = 'https://oauth.reddit.com/api/submit'
const submitLink = async data => {
  /* 
    sr: name of a subreddit
    title: title of the submission. up to 300 characters long
    url: a valid URL
    api_type: the string json
    kind: one of (link, self, image, video, videogif)
    resubmit: boolean
  */
  const link = {
    title: data.title,
    sr: data.sr,
    url: data.url,
    api_type: 'json',
    kind: 'link',
  }
  const response = await axios({
    url: URL,
    method: 'post',
    headers: {
      Authorization: `bearer ${process.env.REDDIT_KEY}`,
      'user-agent': 'node.js',
    },
    params: link,
  })
  return response.data
}

module.exports = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  try {
    const res = await submitLink(req.body)

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: res,
    }
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`)
    context.res = {
      status: 500,
      body: { message: 'An error has occured, please try again later' },
    }
  }
}
