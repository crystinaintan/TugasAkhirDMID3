import React from 'react';
import './ResultComponent.css';
// import FormTest from '../FormTest/FormTest';

class Result extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            hasilDiabetes: 'Selamat! Anda Tidak terkena diabetes Mellitus.',
            hasilImt:'28.1',
            hasilObesitas:'Berat badan anda berlebihan (cenderung obesitas)',
            hasilTekananDarah:'Anda mengalami Hipotensi (tekanan darah rendah).',
        }
    }

    callapi(){
        fetch("http://localhost:9000/api")
        .then(res => res.text())
        .then(res => this.setState({hasilDiabetes : res}));
    }//Harusnya ada di form.js di panggil di method handleSubmit

    componentWillMount(){
        this.callapi();
        this.setState({hasilDiabetes : this.props.data.hasilCekFormDiabetes});
        this.setState({hasilImt : this.props.data.hasilCekFormImt});
        this.setState({hasilObesitas : this.props.data.hasilCekFormObesitas});
        this.setState({hasilTekananDarah : this.props.data.hasilCekFormTekananDarah});
    }

    back_predict = ()=> {
        var x = document.getElementById("hasil");
        var y = document.getElementById("prediksi");
        //if (x.style.display === "none") {
          x.style.display = "none";
          y.style.display = "inline-block";
        // } else {
        //   x.style.display = "none";
        // }
        this.callapi();
    }
    
    render(){
        return(
            <div className="result" id="hasil">
                    <h2>Hasil Prediksi</h2>
                    <p className="hasil_prediksi" id="hasil_diabetes"><a>Status Diabetes: <br></br>{this.state.hasilDiabetes} </a></p>
                    <p className="hasil_prediksi" id="hasil_imt"><a>IMT (Index Masa Tubuh): <br></br>{this.state.hasilImt} </a></p>
                    <p className="hasil_prediksi" id="hasil_obesitas"><a>Status Obesitas: <br></br>{this.state.hasilObesitas} </a></p>
                    <p className="hasil_prediksi" id="hasil_tekanan_darah"><a>Status Tekanan Darah: <br></br>{this.state.hasilTekananDarah} </a></p>
                    <button className="button_ulang" onClick={this.back_predict}>Mulai Ulang</button>
            </div>
        );
    }
}

export default Result;
