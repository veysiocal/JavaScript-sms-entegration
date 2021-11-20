const fetch = require("node-fetch");
class Request{

    async post(url, data){
            const response = await fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers : {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
            })

            const resdata = await response.json();
            return resdata;
    }
}


const request = new Request();

request.post("https://api.iletimerkezi.com/v1/send-sms/json",{request: {
  authentication: {
      key: "",
      hash: "",
  },
  order: {
      sender: "APITEST",
      sendDateTime: [],
      iys: 0,
      message: {
          text: "Deneme test 1 2",
          receipents: {
              number: [
                  ""
              ]
          }
      }
  }
}})
.then(response => console.log(response))
.catch(err => console.log());
