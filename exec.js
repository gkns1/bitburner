export const main = async function(ns) {
    var type = ns.args[0];
    var server = ns.args[1];
    var ram = ns.getServerRam(ns.getHostname());
    if (!server){
        server = "foodnstuff";
    }
    if (type === "exp" || (!type)) {
        await ns.run("exp.js", Math.floor((ram[0] - ram[1]) / 1.75), server);
    }
    else if (type == "grow") {
        await ns.run("sharegrow.js", Math.floor((ram[0] - ram[1]) / 1.75), server);
    }
    else if (type === "hack") {
        await ns.run("sharehack.js", Math.floor((ram[0] - ram[1]) / 1.70), server);
    }
}
