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
    let portDues = 8900;
    let lightDues = nrt * 0.036;
    let portPilot = 0;
    let tallyClerk = 800;
    let watchmen = 880;
    let libreSigres = "";
    let migra = "";
    let uf = Math.ceil((loa * beam * dm) / 800);
    let plural = "";
    document.getElementById("PDA").style = "background-color: white; box-shadow: 10px 10px 10px rgba(0,0,0,0.3)"

    if(portStay != 1){
        plural = "s"
    }

    if(portStay > 1){
        portDues += (4600 * (portStay - 1))
    }

    if(uf < 65){
        uf = 65;
    }

    if(!cabotajeIn.checked){
        libreSigres = `-Free Pratique: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 490.<br/>
        -Garbage Insp: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 290.<br/>`;
    }

    if(!cabotajeIn.checked && !cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 2,000. (In/out)<br/>`
    }
    else if(!cabotajeIn.checked && cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 1,000. (In)<br/>`
    }
    else if(cabotajeIn.checked && !cabotajeOut.checked){
        migra = `-Migrations: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 1,000. (Out)<br/>`
    }
    
    let tarifa = uf * 14;
    portPilot = ((tarifa + 2370) * 2) + (tarifa * arrDraft) + (tarifa * depDraft);

    document.getElementById("PDA").innerHTML = `${vesselName.toUpperCase()} – VITCO – ${portStay} day${plural} along:<br/>
    -----------------------------------<br/>
    -Port dues: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portDues).toLocaleString("en-US")}<br/>
    (usd 8,900 first day + usd 2,300 per each additional 12 hours / add 20% if vessel has steel wires).<br/>
    -Mooring/Unmooring: &nbsp;&nbsp;&nbsp;&nbsp;included in port dues.<br/>
    -Oil Spill Prevention: &nbsp;included in port dues.<br/>
    -Light dues: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(lightDues).toLocaleString("en-US")}.<br/>
    -Port Pilot: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portPilot).toLocaleString("en-US")}.<br/>
    -Custom House: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 600. (Inward)<br/>
    ${migra}
    ${libreSigres}
    -Tallyclerk: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(tallyClerk * portStay).toLocaleString("en-US")}.<br/>
    -Watchmen: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(watchmen * portStay).toLocaleString("en-US")}.<br/>
    -Custom house overtime: usd 1,600`

}
