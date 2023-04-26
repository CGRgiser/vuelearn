let axios = require('axios');
let data = JSON.stringify({
    "data": [
        {
            "role": "user",
            "content": "你好"
        },{"content":"你好！有什么我可以帮助你的吗？","role":"assistant"},{"content":"以我的小姨为题写篇小说，先写出五章的标题和该要","role":"user"}
    ]
});

let config = {
    method: 'post',
    url: 'http://127.0.0.1:5000/chatapi',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};


let getResponse = async () => {
let response =await axios(config);
console.log(JSON.stringify(response.data));}

getResponse().then(r => console.log(r));