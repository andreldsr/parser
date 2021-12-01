# Log parser app

*Log parser app* is a command line node.js based application created to parse log files.
It works by finding error messages and printing them into a output file.

## Input format
```
<ISO Date> - <Log Level> - {"transactionId: "<UUID>", "details": "<message event/action description>", "err": "<Optionall, error description>", ...<additional log information>}
```
Example
```
2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}
```

## Output format
```
[{"timestamp": <Epoch Unix Timestamp>, "loglevel": "<loglevel>", "transactionId: "<UUID>", "err": "<Error message>" }]
```
Example
```
[{"timestamp":1628475171259,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"Not found"}]
```

## Usage
Clone the project and run the command bellow inside its folder:
```bash
$ yarn build
```
Then run the command bellow to execute the app:
```bash
$ node node dist/parser.js --input file/app.log --output file/logs.json
```

The file "file/app.log" can be used as a testing example. After executing the app a file will be created under the path "file/logs.json".
