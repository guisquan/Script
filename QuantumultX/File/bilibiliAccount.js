/**
 *@supported E9F2C6C0
 */
let body = $response.body
body=JSON.parse(body)
body['data']['sections'].splice(2,1)
body=JSON.stringify(body)
$done({body})
