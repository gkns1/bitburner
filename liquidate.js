export const main = async function (ns) {
    let symbols = ["ECP", "MGCP", "BLD", "CLRK", "OMTK", "FSIG", "KGI", "FLCM", "STM", "DCOMM", "HLS", "VITA", "ICRS", "UNV", "AERO", "OMN", "SLRS", "GPH", "NVMD", "WDS", "LXO", "RHOC", "APHE", "SYSC", "CTK", "NTLK", "OMGA", "FNS", "SGC", "JGN", "CTYS", "MDYN", "TITN"];

    for (let i = 0; i < symbols.length; i++)
    {
      let pos = ns.getStockPosition(symbols[i]);
      ns.sellStock(symbols[i],pos[0]);
      ns.sellShort(symbols[i],pos[2]);
    }
}
