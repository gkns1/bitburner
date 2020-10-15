export async function main(ns) {
    var act = ns.args[0];
    //run('runner.script');
    if (act == 'crime' || !act) {
        while (true) {
            if (ns.isBusy() === false) {
                var check = ns.read(2);
                ns.print(check);
                if (check == 1) {
                    var crimes = [
                        ['shoplift', 7500],
                        ['rob store', 6667],
                        ['mug', 9000],
                        ['larceny', 8889],
                        ['deal drugs', 12000],
                        ['bond forgery', 15000],
                        ['traffick arms', 15000],
                        ['homicide', 15000],
                        ['grand theft auto', 20000],
                        ['kidnap', 30000],
                        ['assassinate', 40000],
                        ['heist', 200000]
                    ];
                    var vps = [];
                    for (var i = 0; i < crimes.length; i++) {
                        var crimespec = crimes[i];
                        var crime = crimespec[0];
                        var crimecash = crimespec[1];
                        var chance = ns.getCrimeChance(crime);
                        var value = chance * crimecash;
                        //print(crime + ' nets ' + Math.floor(value) + ' per second');
                        vps.push(Math.floor(value));
                    }
                    //print(vps);
                    var max = Math.max.apply(Math, vps);
                    //print(max);
                    var crimeindex = vps.indexOf(max);
                    //print(crimeindex);
                    var bestCrime = crimes[crimeindex][0];
                    ns.print(bestCrime);
                    //print(bestCrime);
                    ns.write(2, 2);
                    check = 2;
                }
                while (check == 2) {
                    var crimetime = ns.commitCrime(bestCrime);
                    ns.print(check);
                    await ns.sleep(crimetime);
                    //check = read(1);
                }
            }
            if (ns.isBusy() === true) {
                await ns.sleep(5000);
            }
            await ns.sleep(5000);
        }
    }
    if (act == 'karma') {
        while (true) {
            if (ns.isBusy() === false) {
                var crimetime = ns.commitCrime('homicide')
            } else if (ns.isBusy() === true) {
                await ns.sleep(crimetime);
            }
        }
    }
}
