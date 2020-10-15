export const main = async function (ns) {
	var server = ns.args[0];
	if (!server) {
		server = "foodnstuff";
	}
  while(true){
  await ns.weaken(server);
  }
}
