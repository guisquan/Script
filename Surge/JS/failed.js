/**
 *@supported E9F2C6C0
 */
/*
[Rule]
SCRIPT,falied,PROXY,requires-resolve

[Script]
rule falied script-path=https://Choler.github.io/Surge/Script/failed.js
*/

$done({matched: ($request.dnsResult.v4Addresses[0] === "127.0.0.1")});
