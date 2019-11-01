/**
 *@supported E9F2C6C0
 */
var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)}); 
