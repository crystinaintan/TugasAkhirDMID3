import React from 'react';
import './ResultComponent.css';
import { Link } from 'react-router-dom';

class Result extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            hasilDiabetes: 'Loading...',
            hasilImt:'Loading...',
            hasilObesitas:'Loading...',
            hasilTekananDarah:'Loading...',

            penampung_hasilDiabetes :''
        }
        
    }

    render(){
        console.log("Render Result");
        console.log("Isi hasil imt : ", this.state.hasilImt);
        console.log("Ini value atribut given from middle : ", this.props.data.hasilCekFormDiabetes);
        return(
            <div className="result" id="hasil">
                    <h2>Hasil Deteksi</h2>
                    <p className="hasil_prediksi" id="hasil_diabetes"><a>Status Diabetes: <br></br>{this.props.data.hasilCekFormDiabetes} </a></p>
                    <p className="hasil_prediksi" id="hasil_imt"><a>IMT (Index Masa Tubuh): <br></br>{this.props.data.hasilCekFormImt} </a></p>
                    <p className="hasil_prediksi" id="hasil_obesitas"><a>Status Obesitas: <br></br>{this.props.data.hasilCekFormObesitas} </a></p>
                    <p className="hasil_prediksi" id="hasil_tekanan_darah"><a>Status Tekanan Darah: <br></br>{this.props.data.hasilCekFormTekananDarah} </a></p>
                    <p id="warning">** HUBUNGI DOKTER UNTUK HASIL yang LEBIH AKURAT **</p><br></br>
                    <p id="warning">!!Klik <Link to="/definisi_diabetes_mellitus">disini</Link> Untuk Membaca Lebih Banyak!!</p>
            </div>
        );
    }
}

export default Result;
