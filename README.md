# compiln-browserify

[Browserify](https://github.com/substack/node-browserify) plugin for [compiln](https://github.com/redhotvengeance/compiln).

## How to install

```bash
npm install compiln-browserify
```

## How to use

### Middleware (Connect or Express):

```js
var compiln_browserify = require('compiln-browserify');  
compiln.use(compiln_browserify);
```

### compiln.json

```json
{  
  "use": [  
    {  
      "plugin": "compiln-browserify",  
      "source": <source>,  
      "destination": <destination>,  
      "options": {  
        "debug": false,  
        "plugins": [  
          {  
            "plugin": "plugin-name",  
            "arguments": [  
              "plugin",  
              "arguments"  
            ]  
          }  
        ]  
      }  
    }  
  ]  
}
```

compiln-browserify optionally accepts the `debug` option, which will enable debug mode for browserify.

compiln-browserify also allows for integrating browserify plugins. Make sure to install the plugin via `npm` first, then pass the plugin name and optional arguments in the `options` (under the key `plugins`) when integrating compiln-browserify.

## Contribute

1. Fork
2. Create
3. Code
4. Push
5. Submit
6. Yay!

## License

(The MIT License)

Copyright (c) 2012 Ian Lollar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
