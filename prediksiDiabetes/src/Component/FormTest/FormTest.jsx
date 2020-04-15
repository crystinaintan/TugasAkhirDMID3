import React from 'react';
import ReactDOM from 'react-dom';
import './FormTest.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

class FormTest extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            lahir: '',
            hamil:'',
            glukosa:'',
            sistol:'',
            diastol:'',
            kulit:'',
            insulin:'',
            berat:'',
            tinggi:'',
            keluargaD: '',
            keluarga:'',
            tahun : '',

            resDiabetes :'Berhasil',
            resImt:'Berhasil',
            resObesitas:'Berhasil',
            resTekananDarah:'Berhasil',
            resultExist : false
        }

    }

    handleLahirChange = event => {
        this.setState({
            lahir : event.target.value
        })
        this.getYearFromLahir();
        document.getElementById("myDate").style.borderColor = "";
    }

    handleHamilChange = event => {
        this.setState({
            hamil : event.target.value
        })
        document.getElementById("quantity_pregnancy").style.borderColor = "";
    }

    handleGlukosaChange = event => {
        this.setState({
            glukosa : event.target.value
        })
        document.getElementById("quantity_glucose").style.borderColor = "";
    }

    handleSistolChange = event => {
        this.setState({
            sistol : event.target.value
        })
        document.getElementById("quantity_sistol").style.borderColor = "";
    }

    handleDiastolChange = event => {
        this.setState({
            diastol : event.target.value
        })
        document.getElementById("quantity_diastol").style.borderColor = "";
    }

    handleKulitChange = event => {
        this.setState({
            kulit : event.target.value
        })
        document.getElementById("quantity_skin_thickness").style.borderColor = "";
    }

    handleInsulinChange = event => {
        this.setState({
            insulin : event.target.value
        })
        document.getElementById("quantity_cpeptida").style.borderColor = "";
    }

    handleBeratChange = event => {
        this.setState({
            berat : event.target.value
        })
        document.getElementById("quantity_weight").style.borderColor = "";
    }

    handleTinggiChange = event => {
        this.setState({
            tinggi : event.target.value
        })
        document.getElementById("quantity_height").style.borderColor = "";
    }

    handleKeluargaDChange = event => {
        this.setState({
            keluargaD : event.target.value
        })
        document.getElementById("quantity_family_diabetes").style.borderColor = "";
    }

    handleKeluargaChange = event => {
        this.setState({
            keluarga : event.target.value
        })
        document.getElementById("quantity_family").style.borderColor = "";
        // console.log(event.target.value);
        console.log("state keluarga : ", this.state.keluarga);
    }
    
    /*
        Transfer data ke api,
        Menerima hasil pengolahan api,
        Mengirim hasil ke ResultComponent (Diletakkan disini agar render dulu baru setState sehingga ga terjadi infinite loop)
    **/
    async callapi(){    //Knp async??
        var data= 
            { 
                "lahir": this.state.tahun,
                "hamil": this.state.hamil,
                "glukosa": this.state.glukosa,
                "sistol": this.state.sistol,
                "diastol": this.state.diastol,
                "kulit": this.state.kulit,
                "insulin": this.state.insulin,
                "berat": this.state.berat,
                "tinggi": this.state.tinggi,
                "keluargaD":  this.state.keluargaD,
                "keluarga": this.state.keluarga,
                "userBD" : this.state.lahir
            };
        //console.log("Ini Adalah var data : ", data);
        //console.log("Ini Adalah var stringify(data) : ", JSON.stringify(data));
        const url = "http://localhost:9000/api/prediksi_diabetes";
        
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
        .then(res =>  res.json())
        .then(res => { 
            //console.log(res)
            this.setState({resDiabetes : res[0].hasil.diabetes, 
                           resImt : res[0].hasil.imt,
                           resObesitas : res[0].hasil.obesitas,
                           resTekananDarah : res[0].hasil.tekananDarah})
              this.props.doTest.changeResultTestDiabetes(this.state.resDiabetes)
              this.props.doTest.changeResultTestImt(this.state.resImt)
              this.props.doTest.changeResultTestObesitas(this.state.resObesitas)
              this.props.doTest.changeResultTestTekananDarah(this.state.resTekananDarah)})
        // console.log("call API : ",this.state.resDiabetes);
        // console.log("call API : ",this.state.resImt);
        // console.log("call API : ",this.state.resObesitas);
        // console.log("call API : ",this.state.resTekananDarah);

        

        //--Sampah--       
        // fetch(url)
        // .then(res => res.json())
        // .then(res => this.setState({resDiabetes : res.result[0].diabetes, 
        //                             resImt : res.result[0].imt,
        //                             resObesitas : res.result[0].obesitas,
        //                             resTekananDarah : res.result[0].tekananDarah})
        // );

        // const response = await fetch(url, requestOptions);
        // const res = await response.json();
        // this.setState({ resDiabetes : res.result[0].diabetes, 
        //                 resImt : res.result[0].imt,
        //                 resObesitas : res.result[0].obesitas,
        //                 resTekananDarah : res.result[0].tekananDarah });



        // .then(function(res){ return res.json(); })
        // .then(function(data){ return JSON.stringify(data);})
        // const response = await fetch(url);
        // const res = await response.json();
        // console.log("Ini Isi Res : ", res);
    }

    /*
        Method untuk get local storage data input user
    **/
    callBackDataUser = () =>{  
        const date = new Date(localStorage.getItem('dulahir'));
        const resDb = localStorage.getItem('resDiabetes');
        const resImt = localStorage.getItem('resImt');
        const resOb = localStorage.getItem('resObesitas');
        const resTD = localStorage.getItem('resTekananDarah');

        localStorage.getItem('dulahir') && this.setState(
            {
                lahir: date,
                hamil: JSON.parse(localStorage.getItem('duhamil')),
                glukosa: JSON.parse(localStorage.getItem('duglukosa')),
                sistol: JSON.parse(localStorage.getItem('dusistol')),
                diastol: JSON.parse(localStorage.getItem('dudiastol')),
                kulit: JSON.parse(localStorage.getItem('dukulit')),
                insulin: JSON.parse(localStorage.getItem('duinsulin')),
                berat: JSON.parse(localStorage.getItem('duberat')),
                tinggi: JSON.parse(localStorage.getItem('dutinggi')),
                keluargaD: JSON.parse(localStorage.getItem('dukeluargaD')),
                keluarga: JSON.parse(localStorage.getItem('dukeluarga')),
                resultExist: JSON.parse(localStorage.getItem('resultExist')),

                resDiabetes: JSON.parse(resDb),
                resImt: JSON.parse(resImt),
                resObesitas: JSON.parse(resOb),
                resTekananDarah: JSON.parse(resTD)
            } 
        );
        this.props.doTest.changeResultTestDiabetes(resDb);
        this.props.doTest.changeResultTestImt(resImt);
        this.props.doTest.changeResultTestObesitas(resOb);
        this.props.doTest.changeResultTestTekananDarah(resTD);
    }

    /*
        Method untuk set local storage untuk data input user
    **/
   setLocalStorageForDataUser = (nextProps, nextState) =>{  
        localStorage.setItem('dulahir', JSON.stringify(nextState.lahir));
        localStorage.setItem('duhamil', JSON.stringify(nextState.hamil));
        localStorage.setItem('duglukosa', JSON.stringify(nextState.glukosa));
        localStorage.setItem('dusistol', JSON.stringify(nextState.sistol));
        localStorage.setItem('dudiastol', JSON.stringify(nextState.diastol));
        localStorage.setItem('dukulit', JSON.stringify(nextState.kulit));
        localStorage.setItem('duinsulin', JSON.stringify(nextState.insulin));
        localStorage.setItem('duberat', JSON.stringify(nextState.berat));
        localStorage.setItem('dutinggi', JSON.stringify(nextState.tinggi));
        localStorage.setItem('dukeluargaD', JSON.stringify(nextState.keluargaD));
        localStorage.setItem('dukeluarga', JSON.stringify(nextState.keluarga));
        localStorage.setItem('resultExist', JSON.stringify(nextState.resultExist));

        localStorage.setItem('resDiabetes', JSON.stringify(nextState.resDiabetes));
        localStorage.setItem('resImt', JSON.stringify(nextState.resImt));
        localStorage.setItem('resObesitas', JSON.stringify(nextState.resObesitas));
        localStorage.setItem('resTekananDarah', JSON.stringify(nextState.resTekananDarah));
   }

    alertReInputDataUser = () => {
        var r = window.confirm("Ingin Mengulangi Tes?");
        if (r == true) {
            document.getElementById("hasil").style.display = "none";
            document.getElementById("prediksi").style.display = "inline-block";
            this.setState({resultExist : false}); 
        }
    }

    callAlert = () =>{
        if(this.state.resultExist)
        {
            this.alertReInputDataUser();
        }
    }

    componentWillMount = () =>{
        this.callBackDataUser();
        console.log("Component FORM WILL AMOUNT");
    }

    componentDidMount = () => {
        
        console.log("Component FORM DID Mount");
        //Ini Untuk Bisa tetap munculin hasil kalau statusnya resultExist
        if(this.state.resultExist == true)
        {
            document.getElementById("hasil").style.display = "block";
            document.getElementById("prediksi").style.display = "none";
            console.log("State resultExist");
        }

    }

    componentWillUpdate = (nextProps, nextState) => {
        this.setLocalStorageForDataUser(nextProps,nextState);
        console.log("Component FORM WILL Update");
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log("Handle Submit Form");
        this.callapi();
        this.setState({resultExist : true});
        // console.log("Call API");
        // console.log(this.state.resDiabetes);
        // console.log(this.state.resImt);
        // console.log(this.state.resObesitas);
        // console.log(this.state.resTekananDarah);

        //--Sampah--
        // this.props.doTest.changeResultTestDiabetes(this.state.resDiabetes);
        // this.props.doTest.changeResultTestImt(this.state.resImt);
        // this.props.doTest.changeResultTestObesitas(this.state.resObesitas);
        // this.props.doTest.changeResultTestTekananDarah(this.state.resTekananDarah);
        // console.log("Handle submit Form update gagal jadi ", this.props.doTest.hasilCekFormDiabetes);
        // console.log("Isi state jumlah keluarga : ", this.state.keluarga);
        
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // only update chart if the data has changed
    //     if (this.state !== prevState) {
    //       console.log("Component DId UPDATE() FORM");
    //       console.log(ReactDOM.findDOMNode(this));
    //       console.log(prevProps);
    //       console.log(this.state);
    //     }
    // }

    go_predict_klik = ()=> {
        var x = document.getElementById("hasil");
        var y = document.getElementById("prediksi");
        if (this.state.berat!='' && this.state.sistol!='' && this.state.diastol!='' && this.state.glukosa!='' && this.state.hamil!='' && this.state.insulin!=''
            && this.state.keluarga!='' && this.state.keluargaD!='' && this.state.kulit!='' && this.state.lahir!='' && this.state.tinggi!='') 
        {
            //Panggil Fungsi untuk mengisi div hasil prediksi dengan hasil prediksi yg benar
            x.style.display = "block";
            y.style.display = "none";
        }
        else{
          alert("Harap Isi Seluruh Kotak yang Ada!");
          this.cek_Kolom();
        }
    }

    go_predict_hover = ()=> {
        var x = document.getElementById("hasil");
        var y = document.getElementById("prediksi");
        if (this.state.berat=='' || this.state.sistol=='' || this.state.diastol=='' || this.state.glukosa=='' || this.state.hamil=='' || this.state.insulin==''
            || this.state.keluarga=='' || this.state.keluargaD=='' || this.state.kulit=='' || this.state.lahir=='' || this.state.tinggi=='') 
        {
            document.getElementById("prediksi").style.cursor = "not-allowed";
            alert("Harap Isi Seluruh Kotak yang Ada!");
            this.cek_Kolom();
        }
        else{
            document.getElementById("prediksi").style.cursor = "pointer";
            document.getElementById("prediksi").style.backgroundColor = "rgb(156, 169, 182)";
        }
    }

    cek_Kolom = () =>{
        if(this.state.berat=='')
        {
            document.getElementById("quantity_weight").style.borderColor = "red";
            
        }
        //Untuk cek number
        // if(Number(document.getElementById("quantity_weight")) == "NaN"){
        //     alert("Isi dengan angka saja!");
        // }
        if(this.state.sistol=='')
        {
            document.getElementById("quantity_sistol").style.borderColor = "red";
        }
        if(this.state.diastol=='')
        {
            document.getElementById("quantity_diastol").style.borderColor = "red";
        }
        if(this.state.glukosa=='')
        {
            document.getElementById("quantity_glucose").style.borderColor = "red";
        }
        if(this.state.hamil=='')
        {
            document.getElementById("quantity_pregnancy").style.borderColor = "red";
        }
        if(this.state.insulin=='')
        {
            document.getElementById("quantity_cpeptida").style.borderColor = "red";
        }
        if(this.state.keluarga=='')
        {
            document.getElementById("quantity_family").style.borderColor = "red";
        }
        if(this.state.keluargaD=='')
        {
            document.getElementById("quantity_family_diabetes").style.borderColor = "red";
        }
        if(this.state.kulit=='')
        {
            document.getElementById("quantity_skin_thickness").style.borderColor = "red";
        }
        if(this.state.lahir=='')
        {
            document.getElementById("myDate").style.borderColor = "red";
        }
        if(this.state.tinggi=='')
        {
            document.getElementById("quantity_height").style.borderColor = "red";
        }
    }
    
    getYearFromLahir = () =>{
        var mydate = document.getElementById('myDate').value;
        var date = new Date(mydate);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        console.log("tahun lahir : ", year);
        this.setState({tahun : year});
    }

    render(){
        console.log("Render Form");
        return(
            <form onSubmit={this.handleSubmit}>
                    <div className="content">
                        <div className="label">
                            <label>Tanggal Lahir</label><br></br><br></br>   
                            <label>Jumlah Kehamilan</label><br></br><br></br>
                            <label>Kadar Glukosa</label><br></br><br></br>
                            <label>Tekanan Darah</label><br></br><br></br>
                            {/* <Tippy content='Batas Atas Tekanan Darah'><label>Tekanan Sistol</label></Tippy><br></br><br></br>
                            <Tippy content='Batas Bawah Tekanan Darah'><label>Tekanan Diastol</label></Tippy><br></br><br></br> */}
                            <label>Ketebalan Kulit</label><br></br><br></br>
                            <label>Kadar C-Peptida</label><br></br><br></br>
                            <label>Berat Badan</label><br></br><br></br>
                            <label>Tinggi Badan</label><br></br><br></br>
                            <label>Riwayat Keluarga Terserang</label><br></br><br></br>
                            <label>Jumlah Anggota Keluarga</label><br></br><br></br>
                        </div>
                        <div className="input">
                            <input className="input_component" type="date" value={this.state.lahir} id="myDate" onChange={this.handleLahirChange} onClick={this.callAlert}></input> <br></br>
                            <input className="input_component" type="number" value={this.state.hamil} id="quantity_pregnancy" onChange={this.handleHamilChange} onClick={this.callAlert} name="pregnancy" min="0" max="10"></input> <br></br>
                            <input className="input_component" type="" value={this.state.glukosa} id="quantity_glucose" onChange={this.handleGlukosaChange} onClick={this.callAlert} name="glucose" min="1" max=""></input><label className="input_component">mg/dL</label> <br></br>
                            <Tippy content='Tekanan Sistol / Batas Atas Tekanan Darah'><input className="input_component join" type="number" value={this.state.sistol} id="quantity_sistol" onChange={this.handleSistolChange} onClick={this.callAlert} name="sistol" min="1" max=""></input></Tippy>
                            <label className="icon">/</label>
                            <Tippy content='Tekanan Diastol / Batas Bawah Tekanan Darah'><input className="input_component join" type="number" value={this.state.diastol} id="quantity_diastol" onChange={this.handleDiastolChange} onClick={this.callAlert} name="diastol" min="1" max=""></input></Tippy><label className="input_component tipi">mmHg</label><br></br>
                            {/* <Tippy content='Batas Atas Tekanan Darah'><input className="input_component" type="number" value={this.state.sistol} id="quantity_sistol" onChange={this.handleSistolChange} name="sistol" min="1" max="5"></input></Tippy><label className="input_component">mmHg</label><br></br>
                            <Tippy content='Batas Bawah Tekanan Darah'><input className="input_component" type="number" value={this.state.diastol} id="quantity_diastol" onChange={this.handleDiastolChange} name="diastol" min="1" max="5"></input></Tippy><label className="input_component">mmHg</label><br></br> */}
                            <input className="input_component" type="" value={this.state.kulit} id="quantity_skin_thickness" onChange={this.handleKulitChange} onClick={this.callAlert} name="skin_thickness" min="1" max=""></input> <br></br>
                            <input className="input_component" type="" value={this.state.insulin} id="quantity_cpeptida" onChange={this.handleInsulinChange} onClick={this.callAlert} name="cpeptida" min="1" max=""></input><label className="input_component">ng/mL</label><br></br>
                            <input className="input_component" type="" value={this.state.berat} id="quantity_weight" onChange={this.handleBeratChange} onClick={this.callAlert} name="weight" min="1" max=""></input><label className="input_component">Kg</label><br></br>
                            <input className="input_component" type="" value={this.state.tinggi} id="quantity_height" onChange={this.handleTinggiChange} onClick={this.callAlert} name="height" min="1" max=""></input><label className="input_component">Cm</label><br></br>
                            <input className="input_component" type="number" value={this.state.keluargaD} id="quantity_family_diabetes" onChange={this.handleKeluargaDChange} onClick={this.callAlert} name="family_diabetes" min="1" max=""></input><label className="input_component">Orang</label><br></br>
                            <input className="input_component" type="number" value={this.state.keluarga} id="quantity_family" name="family" onChange={this.handleKeluargaChange} onClick={this.callAlert} min="1" max=""></input><label className="input_component">Orang</label>
                            <button className="button_proses" id="prediksi" onClick={this.go_predict_klik} onMouseOver={this.go_predict_hover}>Proses</button>
                        </div>
                    </div>
            </form>
        );
    }

}

export default FormTest;