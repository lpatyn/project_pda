function generarPda(){
    let vesselName = document.getElementById("vesselName").value;
    let portStay = document.getElementById("portStay").value;
    let loa = document.getElementById("loa").value;
    let beam = document.getElementById("beam").value;
    let dm = document.getElementById("dm").value;
    let nrt = document.getElementById("nrt").value;
    let arrDraft = parseFloat(document.getElementById("arrDraft").value);
    let depDraft = parseFloat(document.getElementById("depDraft").value);
    let cabotajeIn = document.getElementById("cabotajeIn");
    let cabotajeOut = document.getElementById("cabotajeOut");
    let portDues = 0;
    let lightDues = nrt * 0.036;
    let ispsCharge = 800 * portStay;
    let portPilot = 0;
    let headClerk = 1100;
    let watchmen = 880;
    let libreSigres = "";
    let migra = "";
    let uf = Math.ceil((loa * beam * dm) / 800);
    let plural = "";
    document.getElementById("PDA").style = "background-color: white; box-shadow: 10px 10px 10px rgba(0,0,0,0.3)"

    if(portStay != 1){
        plural = "s"
    }
    
    if(uf < 65){
        uf = 65;
    }

    if(loa > 225){
        if((0.40 * nrt) > 4400){
            portDues = 0.40 * nrt * portStay;
        }
        else{
            portDues = 4400 * portStay;
        }
    }
    else{
        if((0.37 * nrt) > 4200){
            portDues = 0.37 * nrt * portStay;
        }
        else{
            portDues = 4200 * portStay;
        }
    }
    
    if(!cabotajeIn.checked){
        libreSigres = `-Free Pratique: usd 490.<br/>
        -Garbage Insp: &nbsp;usd 290.<br/>`;
    }

    if(!cabotajeIn.checked && !cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;usd 2,000. (In/out)<br/>`
    }
    else if(!cabotajeIn.checked && cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;usd 1,000. (In)<br/>`
    }
    else if(cabotajeIn.checked && !cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;usd 1,000. (Out)<br/>`
    }
    
    let tarifa = uf * 14;
    portPilot = ((tarifa + 2845) * 2) + (tarifa * arrDraft) + (tarifa * depDraft);

    document.getElementById("PDA").innerHTML = `${vesselName.toUpperCase()} – DELTA DOCK – ${portStay} day${plural} along:<br/>
    --------------------------------------<br/>
    -Port dues: &nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portDues).toLocaleString("en-US")}.<br/>
    -Light dues: &nbsp;&nbsp;&nbsp;usd ${Math.ceil(lightDues).toLocaleString("en-US")}.<br/>
    -ISPS Charge: &nbsp;&nbsp;usd ${Math.ceil(ispsCharge).toLocaleString("en-US")}.<br/>
    -Port Pilot: &nbsp;&nbsp;&nbsp;usd ${Math.ceil(portPilot).toLocaleString("en-US")}.<br/>
    -Mooring/Unm: &nbsp;&nbsp;usd 3,400. (NWH)<br/>
    -Custom House: &nbsp;usd 600. (Inward)<br/>
    ${migra}
    ${libreSigres}
    -Headclerk: &nbsp;&nbsp;&nbsp;&nbsp;usd ${(headClerk * portStay).toLocaleString("en-US")}.<br/>
    -Watchmen: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(watchmen * portStay).toLocaleString("en-US")}.<br/><br/>
    >>>En caso de no operar en OT se deberá habilitar permanencia, usd 350/shift.`

}