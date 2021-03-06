const net = require('net');

class Request {
  constructor(options) {
    this.method = options.method || 'GET';
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || '/';
    this.body = options.body || {};
    this.headers = options.headers || {};
    if(!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    //4种常用编码格式
    if(this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body);
    }else if(this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
    }

    this.headers['Content-Length'] = this.bodyText.length;
  }

  send() {
    return new Promise((resolve, reject) => {
      const parser = new ResponseParser;
      resolve('');
    });
  }
}

class ResponseParser {
  constructor() {

  }
  receive(string) {
    for(let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i));
    }
  }
  receiveChar(char) {
    
  }
}

void async function() {
  let request = new Request({
    method: 'POST',
    host: '127.0.0.1', //IP
    port: '8088', //TCP
    path: '/',
    headers: {
      ['X-Foo2']: 'customized'
    },
    body: {
      name: 'winter'
    }
  });

  let response = await request.send();

  console.log(response);

}();