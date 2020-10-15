export async function main(ns) {

    // 
    var smawindow = 1;
    var momentum = 1;

    var ecp = ["ECP", 0, 0, 0, 0, 0, 0, 0];
    var mgcp = ["MGCP", 0, 0, 0, 0, 0, 0, 0];
    var bld = ["BLD", 0, 0, 0, 0, 0, 0, 0];
    var clrk = ["CLRK", 0, 0, 0, 0, 0, 0, 0];
    var omtk = ["OMTK", 0, 0, 0, 0, 0, 0, 0];
    var fsig = ["FSIG", 0, 0, 0, 0, 0, 0, 0];
    var kgi = ["KGI", 0, 0, 0, 0, 0, 0, 0];
    var flcm = ["FLCM", 0, 0, 0, 0, 0, 0, 0];
    var stm = ["STM", 0, 0, 0, 0, 0, 0, 0];
    var dcomm = ["DCOMM", 0, 0, 0, 0, 0, 0, 0];
    var hls = ["HLS", 0, 0, 0, 0, 0, 0, 0];
    var vita = ["VITA", 0, 0, 0, 0, 0, 0, 0];
    var icrs = ["ICRS", 0, 0, 0, 0, 0, 0, 0];
    var unv = ["UNV", 0, 0, 0, 0, 0, 0, 0];
    var aero = ["AERO", 0, 0, 0, 0, 0, 0, 0];
    var omn = ["OMN", 0, 0, 0, 0, 0, 0, 0];
    var slrs = ["SLRS", 0, 0, 0, 0, 0, 0, 0];
    var gph = ["GPH", 0, 0, 0, 0, 0, 0, 0];
    var nvmd = ["NVMD", 0, 0, 0, 0, 0, 0, 0];
    var wds = ["WDS", 0, 0, 0, 0, 0, 0, 0];
    var lxo = ["LXO", 0, 0, 0, 0, 0, 0, 0];
    var rhoc = ["RHOC", 0, 0, 0, 0, 0, 0, 0];
    var aphe = ["APHE", 0, 0, 0, 0, 0, 0, 0];
    var sysc = ["SYSC", 0, 0, 0, 0, 0, 0, 0];
    var ctk = ["CTK", 0, 0, 0, 0, 0, 0, 0];
    var ntlk = ["NTLK", 0, 0, 0, 0, 0, 0, 0];
    var omga = ["OMGA", 0, 0, 0, 0, 0, 0, 0];
    var fns = ["FNS", 0, 0, 0, 0, 0, 0, 0];
    var sgc = ["SGC", 0, 0, 0, 0, 0, 0, 0];
    var jgn = ["JGN", 0, 0, 0, 0, 0, 0, 0];
    var ctys = ["CTYS", 0, 0, 0, 0, 0, 0, 0];
    var mdyn = ["MDYN", 0, 0, 0, 0, 0, 0, 0];
    var titn = ["TITN", 0, 0, 0, 0, 0, 0, 0];
    //declare arrays for each stock data
    var ecpdata, mgcpdata, blddata, clrkdata, omtkdata, fsigdata, kgidata, flcmdata, stmdata, dcommdata, hlsdata, vitadata, icrsdata, unvdata, aerodata, omndata, slrsdata, gphdata, nvmddata, wdsdata, lxodata, rhocdata, aphedata, syscdata, ctkdata, ntlkdata, omgadata, fnsdata, sgcdata, jgndata, ctysdata, mdyndata, titndata;
    ecpdata = mgcpdata = blddata = clrkdata = omtkdata = fsigdata = kgidata = flcmdata = stmdata = dcommdata = hlsdata = vitadata = icrsdata = unvdata = aerodata = omndata = slrsdata = gphdata = nvmddata = wdsdata = lxodata = rhocdata = aphedata = syscdata = ctkdata = ntlkdata = omgadata = fnsdata = sgcdata = jgndata = ctysdata = mdyndata = titndata = [];
    //declare arrays for SMA of each stock
    var ecpsma, mgcpsma, bldsma, clrksma, omtksma, fsigsma, kgisma, flcmsma, stmsma, dcommsma, hlssma, vitasma, icrssma, unvsma, aerosma, omnsma, slrssma, gphsma, nvmdsma, wdssma, lxosma, rhocsma, aphesma, syscsma, ctksma, ntlksma, omgasma, fnssma, sgcsma, jgnsma, ctyssma, mdynsma, titnsma;
    ecpsma = mgcpsma = bldsma = clrksma = omtksma = fsigsma = kgisma = flcmsma = stmsma = dcommsma = hlssma = vitasma = icrssma = unvsma = aerosma = omnsma = slrssma = gphsma = nvmdsma = wdssma = lxosma = rhocsma = aphesma = syscsma = ctksma = ntlksma = omgasma = fnssma = sgcsma = jgnsma = ctyssma = mdynsma = titnsma = [];

    var symbols = [ntlk, omga,
        fns, sgc, jgn, ctys, ecp, mgcp, bld, clrk, omtk, fsig, kgi, flcm, stm,
        dcomm, hls, vita, icrs, unv, aero, omn, slrs, gph,
        nvmd, wds, lxo, rhoc, aphe, sysc, ctk, mdyn, titn
    ];
    var datatables = [ntlkdata, omgadata,
        fnsdata, sgcdata, jgndata, ctysdata, ecpdata, mgcpdata, blddata, clrkdata, omtkdata, fsigdata, kgidata, flcmdata, stmdata,
        dcommdata, hlsdata, vitadata, icrsdata, unvdata, aerodata, omndata, slrsdata, gphdata,
        nvmddata, wdsdata, lxodata, rhocdata, aphedata, syscdata, ctkdata, mdyndata, titndata
    ];
    var smatables = [ntlksma, omgasma,
        fnssma, sgcsma, jgnsma, ctyssma, ecpsma, mgcpsma, bldsma, clrksma, omtksma, fsigsma, kgisma, flcmsma, stmsma,
        dcommsma, hlssma, vitasma, icrssma, unvsma, aerosma, omnsma, slrssma, gphsma,
        nvmdsma, wdssma, lxosma, rhocsma, aphesma, syscsma, ctksma, mdynsma, titnsma
    ];
    //var timeline = [];

    //var n = 1;
    var limit = ns.args[0];
    if (limit === 0 || isNaN(limit)) {
        limit = symbols.length;
    }
    var limiter = limit;
    var moneystart = ns.getServerMoneyAvailable("home");
    while (true) {
        var money = ns.getServerMoneyAvailable("home");
        var stocksworth = 0;
        var stocksnow = 0;
        for (var j = 0; j < limiter; j++) {
            var stockCash = symbols[j];
            //var cashcheck = ns.getStockBidPrice(stockCash[0]);
            var stockforcash = ns.getStockPosition(stockCash[0]);
            //ns.print(stockCash);
            //stocksnow += ((ns.getStockSaleGain(stockCash[0], stockforcash[0], "L") - (stockforcash[0] * stockforcash[1])) + ((stockforcash[2] * stockforcash[3]) - (stockforcash[2] * cashcheck)));
            stocksworth += ns.getStockSaleGain(stockCash[0], stockforcash[0], "L") + ns.getStockSaleGain(stockCash[0], stockforcash[2], "S");
        }
        //ns.print(networth);
        //var startworth = stocksworth + money;
        var networth = stocksworth + money;
        ns.print('Total worth: $' + networth.toFixed(2));
        ns.print('Total gain since script started: ' + (((stocksworth / moneystart) * 100) - 100).toFixed(2) + '%')
        // the percentage of total money to be invested in stocks
        var totalInvestment = networth * 0.99;
        //timeline.push(n);
        //n++;
        var ignoreInMaxCalc = 0;
        var totalInvestmentFixed = totalInvestment;
        var perStockInvestment = 0;
        for (var l = 0; l < limiter; l++) {
            var maxStock = ns.getStockMaxShares(symbols[l][0]);
            var maxLong = ns.getStockPurchaseCost(symbols[l][0], maxStock, 'L');
            var maxShort = ns.getStockPurchaseCost(symbols[l][0], maxStock, 'S');
            if ((totalInvestment / limiter) > maxLong) {
                ignoreInMaxCalc += 1;
                totalInvestmentFixed -= maxLong;
            }
            else if ((totalInvestment / limiter) > maxShort) {
                ignoreInMaxCalc += 1;
                totalInvestmentFixed -= maxShort; 
            }
        }
        for (var i = 0; i < limiter; i++) {
            //ns.print(symbols[i]);
            //ns.print(datatables[i]);
            // [symbol, Short price, Long price, current price, min price, max price, owned Long, owned Short]
            var stockArray = symbols[i];
            var stock = stockArray[0];
            var stockdata = datatables[i];
            //if (stockArray[3] != ns.getStockPrice(stock)) {
            stockArray[3] = ns.getStockBidPrice(stock);
            var positionheld = ns.getStockPosition(stock);
            stockArray[1] = positionheld[3]; //Short Price
            stockArray[2] = positionheld[1]; //Long Price
            stockArray[6] = positionheld[0]; //Long Owned
            stockArray[7] = positionheld[2]; //Short Owned
            var currentPrice = ns.getStockAskPrice(stock); // ask Price for stock buy calculation
            stockdata.push(currentPrice);
            stockArray[4] = Math.min.apply(null, stockdata);
            stockArray[5] = Math.max.apply(null, stockdata);
            //ns.print(stock + ' ' + currentPrice);
            //ns.print(stockArray);
            //ns.print(stockdata);
            //if (stockdata.length > smawindow) {
            //    var sum = 0;
            //    for (var w = 0; w < smawindow; w++) {
            //        sum += stockdata[stockdata.length - w - 1];
            //    }
            //    var smatable = smatables[i];
            //    smatable.push(sum / smawindow);
            //    if (smatable.length > momentum) {
            //        smatable.shift();
            //ns.print(smatable[momentum - 1])
            //ns.print(smatable[0])
            //        var mom = smatable[momentum - 1] > smatable[0];
            //ns.print(mom)
            //ns.print(stock + " momentum is " + mom + "%");

            maxStock = ns.getStockMaxShares(stockArray[0]);
            maxLong = ns.getStockPurchaseCost(stockArray[0], maxStock, 'L');
            maxShort = ns.getStockPurchaseCost(stockArray[0], maxStock, 'S');
            if ((totalInvestment / limiter) > maxLong) {
                perStockInvestment = maxLong;
            } else if ((totalInvestment / limiter) > maxShort) {
                perStockInvestment = maxShort;
            } else {
                perStockInvestment = totalInvestmentFixed / (limiter - ignoreInMaxCalc);
            }
            var ownedLong = positionheld[0];
            var ownedShort = positionheld[2];
            var LongProfit = ns.getStockSaleGain(stockArray[0], ownedLong, "L");
            var ShortProfit = ns.getStockSaleGain(stockArray[0], ownedShort, "S");
            var forecast = ns.getStockForecast(stockArray[0]);
            perStockInvestment -= (LongProfit + ShortProfit)
            var toBuyLong = (perStockInvestment >= (maxStock - (ownedLong + ownedShort)) * currentPrice) ? (maxStock - ownedLong) : Math.floor((perStockInvestment / currentPrice)) - (ownedLong + ownedShort); //edit after short available
            var toBuyShort = (perStockInvestment >= (maxStock - (ownedLong + ownedShort)) * stockArray[3]) ? (maxStock - ownedShort) : Math.floor((perStockInvestment / stockArray[3])) - (ownedLong + ownedShort);
            var costLongOrder = ns.getStockPurchaseCost(stockArray[0], toBuyLong, 'L');
            var costShortOrder = ns.getStockPurchaseCost(stockArray[0], toBuyShort, 'S');
            //ns.print(LongProfit);
            //ns.print(ShortProfit);

            //if (ns.purchase4SMarketDataTixApi()){

            //ns.print(forecast);// add max number of shares
            if (forecast >= 0.5) {
                ns.sellShort(stock, ownedShort);
                //await ns.sleep(500)
                if (100000 / (costLongOrder) <= 0.05 && (ownedLong + ownedShort) != maxStock) {
                    ns.buyStock(stock, toBuyLong);
                }
            }
            if (forecast < 0.5) {
                ns.sellStock(stock, ownedLong);
                //await ns.sleep(500)
                if (100000 / (costShortOrder) <= 0.05 && (ownedShort + ownedLong) != maxStock) {
                    ns.shortStock(stock, toBuyShort);
                }
            }
            //}
            //}
            //}
            //}
        }
        await ns.sleep(10000);

    }
}
