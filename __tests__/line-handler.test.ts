import { transformErrorLines } from '../src/line-handler'

describe('Line Handler', () => {
  const errorLine = '2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}'
  const expectedErrorLine = '{"timestamp": 1628475171259, "loglevel": "error", "transactionId": "9abc55b2-807b-4361-9dbe-aa88b1b2e978", "err": "Not found"}'
  it('Should convert line correctly', () => {
    expect(transformErrorLines([errorLine])).toStrictEqual([expectedErrorLine])
  })
})
