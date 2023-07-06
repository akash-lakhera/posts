const axios = require("axios")
const request=require("request")
const qs=require("qs")
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
    
      url="https://api.instagram.com/oauth/access_token"
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(payload),
        url,
      };
      let data=await axios(options);
      

  
  console.log(data)

  res.send("heyaaa");
};

module.exports = { home, posts };
