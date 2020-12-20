import { Zabbix } from "https://deno.land/x/zabbix/mod.ts";

const zabbix: Zabbix = new Zabbix({
  url: "http://127.0.0.1/api_jsonrpc.php",
  user: "Admin",
  password: "zabbix",
});

const main = async () => {
  try {
    await zabbix.login()
    const host = await zabbix.request('host.get', {
      selectInterfaces: 'extend',
      limit: 1
    })
    console.log(JSON.stringify(host, null, 2))
    zabbix.logout()
  } catch (error) {
    console.error(error)
  }
}
main()
