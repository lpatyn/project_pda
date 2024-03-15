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
    let portDues = 8800 * portStay;
    let lightDues = nrt * 0.073;
    let portPilot = 0;
    let tallyClerk = 800;
    let watchmen = 880;
    let libreSigres = "";
    let migra = "";
    let uf = Math.ceil((loa * beam * dm) / 800);
    let plural = "";
    let freePratique = (((nrt-1001)*6.9429+416574)/840)+50;
    document.getElementById("PDA").style = "background-color: white; box-shadow: 10px 10px 10px rgba(0,0,0,0.3)"

    if(portStay != 1){
        plural = "s"
    }

    if(uf < 65){
        uf = 65;
    }

    if(!cabotajeIn.checked){
        libreSigres = `-Free Pratique: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(freePratique).toLocaleString("en-US")}
.<br/>
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
    portPilot = ((tarifa + 2320) * 2) + (tarifa * arrDraft) + (tarifa * depDraft);

    document.getElementById("PDA").innerHTML = `${vesselName.toUpperCase()} – CARBOCLOR – ${portStay} day${plural} along:<br/>
    ----------------------------------------<br/>
    -Port dues: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portDues).toLocaleString("en-US")} (usd 8,800 first 24 hrs + usd 320 per additional hour)<br/>
    (Sat/Sun/Holiday usd 13,300 24 hrs + usd 650 additional hour)<br/>
    -Mooring/Unmooring: &nbsp;&nbsp;&nbsp;&nbsp;included in port dues.<br/>
    -Oil Spill Prevention: &nbsp;included in port dues.<br/>
    -Light dues: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(lightDues).toLocaleString("en-US")}.<br/>
    -Port Pilot: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${Math.ceil(portPilot).toLocaleString("en-US")}.<br/>
    -Custom House: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd 600. (Inward)<br/>
    ${migra}
    ${libreSigres}
    -Tallyclerk: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(tallyClerk * portStay).toLocaleString("en-US")}.<br/>
    -Watchmen: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd ${(watchmen * portStay).toLocaleString("en-US")}.<br/>
    -Custom house overtime: usd 800`

}
