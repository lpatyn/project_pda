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
    let ispsCharge = 750 * portStay;
    let portPilot = 0;
    let headClerk = 1100;
    let watchmen = 880;
    let libreSigres = "";
    let migra = "";
    let uf = Math.ceil((loa * beam * dm) / 800);
    let plural = "";
    let vesselType = document.getElementById("vesselType").value;
    document.getElementById("PDA").style = "background-color: white; box-shadow: 10px 10px 10px rgba(0,0,0,0.3)"

    if(portStay != 1){
        plural = "s"
    }

    if(uf < 65){
        uf = 65;
    }

    if(vesselType == "bulker"){
        if(loa > 225){
            if((0.45 * nrt) > 5200){
                portDues = 0.45 * nrt * portStay;
            }
            else{
                portDues = 5200 * portStay;
            }
        }
        else{
            if((0.43 * nrt) > 4800){
                portDues = 0.43 * nrt * portStay;
            }
            else{
                portDues = 4800 * portStay;
            }
        }
    }
    else if(vesselType == "tanker"){
        if(loa < 150){
            portDues = 4200 * portStay;
        }
        else if(loa >= 150 && loa < 175){
            portDues = 4800 * portStay;
        }
        else if(loa >= 175){
            portDues = 5800 * portStay;
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
    portPilot = ((tarifa + 2620) * 2) + (tarifa * arrDraft) + (tarifa * depDraft);

    document.getElementById("PDA").innerHTML = `${vesselName.toUpperCase()} – TERMINAL DEL GUAZU – ${portStay} day${plural} along:<br/>
    ----------------------------------------------<br/>
    -Port dues: &nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portDues).toLocaleString("en-US")}.<br/>
    -ISPS Charge: &nbsp;&nbsp;usd ${Math.ceil(ispsCharge).toLocaleString("en-US")}.<br/>
    -Port Pilot: &nbsp;&nbsp;&nbsp;usd ${Math.ceil(portPilot).toLocaleString("en-US")}.<br/>
    -Mooring/Unm: &nbsp;&nbsp;usd 3,400. (NWH)<br/>
    -Custom House: &nbsp;usd 600. (Inward)<br/>
    ${migra}
    ${libreSigres}
    -Headclerk: &nbsp;&nbsp;&nbsp;&nbsp;usd ${(headClerk * portStay).toLocaleString("en-US")}.<br/>
    -Watchmen: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(watchmen * portStay).toLocaleString("en-US")}.<br/>
    -Tugboat: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 16,500. (Compulsory only for departure of vessels exceeding 120 m LOA)`

}
