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
    let portDues = 0.26 * nrt * portStay;
    let lightDues = nrt * 0.073;
    let ispsCharge = 950;
    let portPilot = 0;
    let headClerk = 1100;
    let watchmen = 880;
    let libreSigres = "";
    let migra = "";
    let uf = Math.ceil((loa * beam * dm) / 800);
    let plural = "";
    let muelle = document.getElementById("muelle").value;
    let freePratique = (((nrt-1001)*6.9429+416574)/840)+50;
    document.getElementById("PDA").style = "background-color: white; box-shadow: 10px 10px 10px rgba(0,0,0,0.3)"

    if(portStay != 1){
        plural = "s"
    }
    
    if((nrt * 0.26) < 1625){
        portDues = 1625 * portStay;
    }

    if(portStay > 5){
        let aux = 2
        if(portStay != 6 && portStay != 13 && portStay != 20){
            portDues = (0.26 * nrt * (portStay - (aux * (Math.floor(portStay / 7))))) + (0.32 * nrt * (aux * (Math.floor(portStay / 7))))
        }
        else if(portStay == 6){
            portDues = (0.26 * nrt * 5) + (0.32 * nrt * 1)
        }
        else if(portStay == 13){
            portDues = (0.26 * nrt * 10) + (0.32 * nrt * 3)
        }
        else if(portStay == 20){
            portDues = (0.26 * nrt * 15) + (0.32 * nrt * 5)
        }
    }

    if(portStay > 5 && (nrt * 0.26) < 1625){
        let aux = 2
        if(portStay != 6 && portStay != 13 && portStay != 20){
            portDues = (1625 * (portStay - (aux * (Math.floor(portStay / 7))))) + (2000 * Math.floor(portStay / 7))
        }
        else if(portStay == 6){
            portDues = (1625 * 5) + (2000 * 1)
        }
        else if(portStay == 13){
            portDues = (1625 * 10) + (2000 * 3)
        }
        else if(portStay == 20){
            portDues = (1625 * 15) + (2000 * 5)
        }
    }

    if(uf < 65){
        uf = 65;
    }

    if(!cabotajeIn.checked){
        libreSigres = `-Free Pratique: usd ${Math.ceil(freePratique).toLocaleString("en-US")}.<br/>
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
    portPilot = ((tarifa + 2320) * 2) + (tarifa * arrDraft) + (tarifa * depDraft);

    document.getElementById("PDA").innerHTML = `${vesselName.toUpperCase()} – ${muelle} – ${portStay} day${plural} along:<br/>
    ------------------------------------------<br/>
    -Port dues: &nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portDues).toLocaleString("en-US")}. (bss fm Mon-Fri at usd 0.26xNRTxday) (if she is along during Sat/Sun/Hol: usd 0.32xNRTxday)<br/>
    -Light dues: &nbsp;&nbsp;&nbsp;usd ${Math.ceil(lightDues).toLocaleString("en-US")}.<br/>
    -ISPS Charge: &nbsp;&nbsp;usd ${Math.ceil(ispsCharge).toLocaleString("en-US")}.<br/>
    -Port Pilot: &nbsp;&nbsp;&nbsp;usd ${Math.ceil(portPilot).toLocaleString("en-US")}.<br/>
    -Mooring/Unm: &nbsp;&nbsp;usd 3,281. (NWH)<br/>
    -Custom House: &nbsp;usd 600. (Inward)<br/>
    ${migra}
    ${libreSigres}
    -Headclerk: &nbsp;&nbsp;&nbsp;&nbsp;usd ${(headClerk * portStay).toLocaleString("en-US")}.<br/>
    -Watchmen: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(watchmen * portStay).toLocaleString("en-US")}.`
    
}
