function generarPda(){
    let vesselName = document.getElementById("vesselName").value;
    let portStay = document.getElementById("portStay").value;
    let loa = document.getElementById("loa").value;
    let beam = document.getElementById("beam").value;
    let dm = document.getElementById("dm").value;
    let nrt = document.getElementById("nrt").value;
    let grt = document.getElementById("grt").value;
    let usd = document.getElementById("usd").value;
    let arrDraft = parseFloat(document.getElementById("arrDraft").value);
    let depDraft = parseFloat(document.getElementById("depDraft").value);
    let cabotajeIn = document.getElementById("cabotajeIn");
    let cabotajeOut = document.getElementById("cabotajeOut");
    let portDues = 0.4 * nrt * portStay;
    let ispsCharge = (((6 * portStay) * 3 * 17556.11) + nrt * 1.8) / usd;
    let portPilot = 0;
    let headClerk = 1100;
    let watchmen = 880;
    let libreSigres = "";
    let migra = "";
    let uf = Math.ceil((loa * beam * dm) / 800);
    let ft = 0;
    let plural = "";
    document.getElementById("PDAsp").style = "background-color: white; box-shadow: 10px 10px 10px rgba(0,0,0,0.3);"

    if(portStay != 1){
        plural = "s"
    }

    if(uf < 65){
        uf = 65;
    }

    if(grt > 20000){
        ft = 1.15;
    }
    else{
        ft = 1.00;
    }

    let lightDues = grt * 0.25 * 1.10 * ft;

    let tarifa = uf * 14;
    portPilot = ((tarifa + 1350) * 2) + (tarifa * arrDraft) + (tarifa * depDraft);
    
    if(!cabotajeIn.checked){
        libreSigres = `-Free Pratique: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 490.<br/>
        -Garbage Insp: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 290.<br/>`;
    }

    if(!cabotajeIn.checked && !cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 2,000. (In/out at berth)<br/>`
    }
    else if(!cabotajeIn.checked && cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 1,000. (In at berth)<br/>`
    }
    else if(cabotajeIn.checked && !cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 1,000. (Out at berth)<br/>`
    }    

    document.getElementById("PDAsp").innerHTML = `${vesselName.toUpperCase()} – SAN PEDRO – ${portStay} day${plural} along - ELEVATOR BERTH<br/>
    --------------------------------------------------<br/>
    -Port dues: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portDues).toLocaleString("en-US")}.<br/>
    -Light dues: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(lightDues).toLocaleString("en-US")}.<br/>
    -ISPS Charge: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(ispsCharge).toLocaleString("en-US")}.<br/>
    -Port Pilot: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portPilot).toLocaleString("en-US")}.<br/>
    -Mooring/Unm: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 4,800.<br/>
    -Boat for mooring/unm: usd 2,900.<br/>
    -Custom House: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 600. (Inward)<br/>
    ${migra}
    ${libreSigres}
    -Headclerk: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(headClerk * portStay).toLocaleString("en-US")}.<br/>
    -Watchmen: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(watchmen * portStay).toLocaleString("en-US")}.<br/><br/>
    Tener en cuenta habilitación de aduana por permanencia en caso que el buque no opere en OT: usd 300-350/turno.<br/>
    (*) Port safety dues will be increased depending on total vessel´s stay.<br/>
    (**) Recordar que los prácticos recomiendan no superar los 180 mtrs LOA`

}
