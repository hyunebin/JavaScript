//클라이언트 > 서버 : 요청
// 목적전달!
// HTTP : 메서드 + URL

//서버 > 클라이언트 : 응답
// 상태 코드 [Status code] 
// 200 OK
// 404 Not Found

const http = require("http")

const server = http.createServer((request, Response) => {
    //요청 정보 확인
    request.method
    console.log(request.url)
    console.log()
    
    //응답 방법
    Response.writeHead(200,{
        "Content-Type":"text/html"
    })
    Response.write("<h1>Hello world</h1>")
    Response.end()
})

server.listen(52273, () =>{
    console.log("server Running at http://127.0.0.1:52273")
})