# Log parser app

A command line node.js application, which parses the input log file. 
The application finds all the log messages with the level error and print them into the output file. Formats of input and outfit files are described below.

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
After cloning the project run the build process:
```bash
$ yarn build
```
And test the application running the command:
```bash
$ node node dist/parser.js --input file/app.log --output file/logs.json
```

The base file for the test "file/app.log" is ready for tests and based on the initial challenge. It should create the "file/logs.json" output file.
