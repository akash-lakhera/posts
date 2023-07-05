const home=(req,res,next)=>{
    res.send(`
        <html>
            <head>

            </head>
            <body>
                <a href="https://api.instagram.com/oauth/authorize
  ?client_id=286775973922262&redirect_uri=https://posts-pmim.onrender.com/posts/&scope=user_profile,user_media&response_type=code">Login Using Instagram</a>
            </body>
        </html>`
    )
}

const posts=(req,res,next)=>{
    res.send("hey")
}

module.exports={home,posts}