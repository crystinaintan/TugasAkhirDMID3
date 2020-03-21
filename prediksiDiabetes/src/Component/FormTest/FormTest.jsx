import React from 'react';
import './FormTest.css';

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

            resDiabetes :'Berhasil',
            resImt:'Berhasil',
            resObesitas:'Berhasil',
            resTekananDarah:'Berhasil'
        }
    }

    handleLahirChange = event => {
        this.setState({
            lahir : event.target.value
        })
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
        console.log(event.target.value);
        console.log(this.state.keluarga);
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.props.doTest.changeResultTestDiabetes(this.state.resDiabetes);
        this.props.doTest.changeResultTestImt(this.state.resImt);
        this.props.doTest.changeResultTestObesitas(this.state.resObesitas);
        this.props.doTest.changeResultTestTekananDarah(this.state.resTekananDarah);
    }

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
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                    <div className="content">
                        <div className="label">
                            <label>Tanggal Lahir</label><br></br><br></br>   
                            <label>Jumlah Kehamilan</label><br></br><br></br>
                            <label>Kadar Glukosa</label><br></br><br></br>
                            <label>Tekanan Sistol</label><br></br><br></br>
                            <label>Tekanan Diastol</label><br></br><br></br>
                            <label>Ketebalan Kulit</label><br></br><br></br>
                            <label>Kadar C-Peptida</label><br></br><br></br>
                            <label>Berat Badan</label><br></br><br></br>
                            <label>Tinggi Badan</label><br></br><br></br>
                            <label>Riwayat Keluarga Terserang</label><br></br><br></br>
                            <label>Jumlah Anggota Keluarga</label><br></br><br></br>
                        </div>
                        <div className="input">
                            <input className="input_component" type="date" value={this.state.lahir} id="myDate" onChange={this.handleLahirChange}></input> <br></br>
                            <input className="input_component" type="number" value={this.state.hamil} id="quantity_pregnancy" onChange={this.handleHamilChange} name="pregnancy" min="0" max="10"></input> <br></br>
                            <input className="input_component" type="number" value={this.state.glukosa} id="quantity_glucose" onChange={this.handleGlukosaChange} name="glucose" min="1" max="5"></input><label className="input_component">mg/dL</label> <br></br>
                            <input className="input_component" type="number" value={this.state.sistol} id="quantity_sistol" onChange={this.handleSistolChange} name="sistol" min="1" max="5"></input><label className="input_component">mmHg</label><br></br>
                            <input className="input_component" type="number" value={this.state.diastol} id="quantity_diastol" onChange={this.handleDiastolChange} name="diastol" min="1" max="5"></input><label className="input_component">mmHg</label><br></br>
                            <input className="input_component" type="number" value={this.state.kulit} id="quantity_skin_thickness" onChange={this.handleKulitChange} name="skin_thickness" min="1" max="5"></input> <br></br>
                            <input className="input_component" type="number" value={this.state.insulin} id="quantity_cpeptida" onChange={this.handleInsulinChange} name="cpeptida" min="1" max="5"></input><label className="input_component">ng/mL</label><br></br>
                            <input className="input_component" type="number" value={this.state.berat} id="quantity_weight" onChange={this.handleBeratChange} name="weight" min="1" max="5"></input><label className="input_component">Kg</label><br></br>
                            <input className="input_component" type="number" value={this.state.tinggi} id="quantity_height" onChange={this.handleTinggiChange} name="height" min="1" max="5"></input><label className="input_component">Cm</label><br></br>
                            <input className="input_component" type="number" value={this.state.keluargaD} id="quantity_family_diabetes" onChange={this.handleKeluargaDChange} name="family_diabetes" min="1" max="5"></input><label className="input_component">Orang</label><br></br>
                            <input className="input_component" type="number" value={this.state.keluarga} id="quantity_family" name="family" onChange={this.handleKeluargaChange} min="1" max="5"></input><label className="input_component">Orang</label>
                            <button className="button_proses" id="prediksi" onClick={this.go_predict_klik} onMouseOver={this.go_predict_hover}>Proses</button>
                        </div>
                    </div>

            </form>
            
        );
    }

}

export default FormTest;