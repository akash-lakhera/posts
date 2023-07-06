const axios = require("axios")
const request=require("request")
const home = (req, res, next) => {
  res.send(`
        <html>
            <head>
            </head>
            <body>
                <a href="https://api.instagram.com/oauth/authorize?client_id=286775973922262&redirect_uri=https://posts-pmim.onrender.com/posts/&scope=user_profile,user_media&response_type=code">Login Using Instagram</a>
            </body>
        </html>`);
};

const posts = async(req, res, next) => {
   let code=req.query.code
    console.log(code)
    let payload={
        client_secret:"d521835c5f30c6e62ce4ba5d107af00d",
        code:code,
        client_id:286775973922262,
        grant_type:"authorization_code",
        redirect_uri:"https://posts-pmim.onrender.com/posts/"
      }
      let response=await request.post({
        url:"https://api.instagram.com/oauth/access_token",
        form:payload
      })

  let data=response
  console.log(data)

  res.send("heyaaa");
};

module.exports = { home, posts };
