const getActas = async()=>{

    var id = document.getElementById('nroMesa').value;
    console.log(id)
    /*const idd = (new URLSearchParams(window.location.search).get(`idd`))*/
    const data = await fetch(`http://localhost/onpe/actas/${id}`)

    if (data.status==200) {
        const actas = await data.json();
    
    let html=`
                <div id="divDetalle" class="ptop20">
                    <div class="contenido-resultados">
                        <div class="row">
                            <div class="tab-info">
                                <div class="tab-content">
                                    <div id="detMesa">
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane active" id="presidencial">
                                                <div class="tab-info-desc">
                                                    <div class="row">
                                                        <div class="col-xs-3 col-md-4">
                                                            <div class="mesap01">
                                                                <img src="images/mp-sin.jpg" class="img-responsive">
                                                                Si requiere la imagen del acta, solicítela a través del procedimiento de
                                                                acceso a la información pública.
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-9 col-md-8">
                                                            <div class="row">
                                                                <div class="col-xs-12">
                                                                    <p class="subtitle1">ACTA ELECTORAL</p>
                                                                    <div id="page-wrap">
                                                                        <table class="table13" cellspacing="0">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Mesa N°</th>
                                                                                    <th>N° Copia</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>${actas.idGrupoVotacion}</td>
                                                                                    <td>
                                                                                        ${actas.nCopia}
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <p class="subtitle1">INFORMACIÓN UBIGEO</p>
                                                                    <div id="page-wrap">
                                                                        <table class="table14" cellspacing="0">
                                                                            <tbody>
                                                                                <tr class="titulo_tabla">
                                                                                    <td>Departamento</td>
                                                                                    <td>Provincia</td>
                                                                                    <td>Distrito</td>
                                                                                    <td>Local de votación</td>
                                                                                    <td>Dirección</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>${actas.Departamento}</td>
                                                                                    <td>${actas.Provincia}</td>
                                                                                    <td>${actas.Distrito}</td>
                                                                                    <td>${actas.RazonSocial}</td>
                                                                                    <td>${actas.Direccion}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <p class="subtitle1">INFORMACIÓN MESA</p>
                                                                    <div id="page-wrap">
                                                                        <table class="table15" cellspacing="0">
                                                                            <tbody>
                                                                                <tr class="titulo_tabla">
                                                                                    <td>Electores Hábiles</td>
                                                                                    <td>Total votantes</td>
                                                                                    <td>Estado del acta</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>${actas.ElectoresHabiles}</td>
                                                                                    <td>${actas.TotalVotantes}</td>
                                                                                    <td>
                                                                                        ${actas.idEstadoActa}
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div class="col-xs-12 pbot30_acta">
                                                            <p class="subtitle1">LISTA DE RESOLUCIONES</p>
                                                            <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> No
                                                            hay resoluciones para el acta seleccionada
                                                            <div id="page-wrap">
                                                                <div class="col-md-12 resolu">
                                                                </div>
                                                            </div>
                                                            <!-- <p class="centro"># : El valor consignado en el acta presenta ilegibilidad.</p> -->
                                                        </div>

                                                    </div>

                                                    <div>
                                                        <div class="col-xs-12">
                                                            <p class="subtitle1">INFORMACIÓN DEL ACTA ELECTORAL</p>
                                                            <div id="page-wrap" class="cont-tabla1">
                                                                <table class="table06">
                                                                    <tbody>
                                                                        <tr class="titulo_tabla">
                                                                            <td colspan="2">Organización política</td>
                                                                            <td>Total de Votos</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <td>PERUANOS POR EL KAMBIO</td>
                                                                            <td><img width="40px" height="40px" src="images/simbolo_pkk.jpg"></td>
                                                                            <td>
                                                                            ${actas.P1} 
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                        <td>FUERZA POPULAR</td>
                                                                            <td><img width="40px" height="40px" src="images/simbolo_keyko.jpg"></td>
                                                                            <td>
                                                                            ${actas.P2}  
                                                                                                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">VOTOS EN BLANCO</td>
                                                                            <td>
                                                                                ${actas.VotosBlancos}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">VOTOS NULOS</td>
                                                                            <td>
                                                                                ${actas.VotosNulos}

                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">VOTOS IMPUGNADOS</td>
                                                                            <td>
                                                                                ${actas.VotosImpugnados}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">TOTAL DE VOTOS EMITIDOS</td>
                                                                            <td>

                                                                                ${actas.ElectoresHabiles}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div><h2></h2></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
    ` 
    document.getElementById('contenido-interno').innerHTML = html;
    };
}

getActas();

