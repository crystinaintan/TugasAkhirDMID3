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

            penampung_hasilDiabetes :''
        }
        
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // only update chart if the data has changed
    //     if (this.state !== prevState) {
    //       console.log("Component DId UPDATE() RESULTCOMPONENT");
    //       console.log("ResultComponent : ",prevProps);
    //       console.log("ResultComponent : ",this.state);
    //     }
    // }

    // callapi(){
    //     fetch("http://localhost:9000/api")
    //     .then(res => res.text())
    //     .then(res => this.setState({hasilDiabetes : res}));
    // }//Harusnya ada di form.js di panggil di method handleSubmit

    // componentWillReceiveProps(){
    //     this.setState({hasilImt : this.props.data.hasilCekFormImt});
    //     console.log("Result Component will recieve props");
    //     console.log(this.props.data.hasilCekFormDiabetes);
    // }

    // componentDidUpdate()
    // {
    //     console.log("Result Component did update");
        
    //     this.setState({hasilDiabetes : this.props.data.hasilCekFormDiabetes});
    //     this.setState({hasilImt : this.props.data.hasilCekFormImt});
    //     this.setState({hasilObesitas : this.props.data.hasilCekFormObesitas});
    //     this.setState({hasilTekananDarah : this.props.data.hasilCekFormTekananDarah});
    //     if(this.state.hasilCekFormImt!='gagal')
    //     {
    //         return false;
    //     }    
        
    // }

    // componentDidMount(){
    //     // this.callapi();
    //     console.log("Result Component did Mount");
    //     this.setState({hasilDiabetes : this.props.data.hasilCekFormDiabetes});
    //     this.setState({hasilImt : this.props.data.hasilCekFormImt});
    //     this.setState({hasilObesitas : this.props.data.hasilCekFormObesitas});
    //     this.setState({hasilTekananDarah : this.props.data.hasilCekFormTekananDarah});
    //     this.callapi();
    // }

    // shouldComponentUpdate(nextProps, nextState) {
        
    //     console.log("shouldcomponentUpdate working");
    //     console.log("Ini props data value : ", this.props.data.hasilCekFormDiabetes);
    //     console.log("Ini nextprops value : ", nextProps.data.hasilCekFormDiabetes);
    //    // this.changeValueResult(nextProps);
    //    //this.props.setProps({data : nextProps.data});
    //     return this.props.data.hasilCekFormDiabetes != nextProps.data.hasilCekFormDiabetes;
    // }

    // componentWillUpdate(nextProps, nextState){
    //     console.log("componentWillUpdate is working");
    //     console.log("Ini adalah value result sebelum setState :");
    //     console.log(this.state.hasilDiabetes);
    //     console.log(this.state.hasilImt);
    //     console.log(this.state.hasilObesitas);
    //     console.log(this.state.hasilTekananDarah);
    //     console.log("Ini adalah value result setelah setState :");
    //     var temp = nextProps.data.hasilCekFormDiabetes;
    //     console.log(temp);
    //     this.setState({hasilDiabetes : temp});

    //     var temp = nextProps.data.hasilCekFormImt;
    //     console.log(temp);
    //     this.setState({hasilImt : temp});

    //     var temp = nextProps.data.hasilCekFormObesitas;
    //     console.log(temp);
    //     this.setState({hasilObesitas : temp});

    //     var temp = nextProps.data.hasilCekFormTekananDarah
    //     console.log(temp);
    //     this.setState({hasilTekananDarah : temp});

    //     // console.log("Ini adalah value result setelah setState :");
    //     // console.log(nextProps.data.hasilCekFormDiabetes);
    //     // console.log(nextProps.data.hasilCekFormDiabetes);
    //     // console.log(nextProps.data.hasilCekFormImt);
    //     // console.log(nextProps.data.hasilCekFormTekananDarah);
    // }

    // changeValueResult(nextProps){
    //     this.setState({hasilDiabetes : this.props.data.hasilCekFormDiabetes});
    //     this.setState({hasilImt : this.props.data.hasilCekFormImt});
    //     this.setState({hasilObesitas : this.props.data.hasilCekFormObesitas});
    //     this.setState({hasilTekananDarah : this.props.data.hasilCekFormTekananDarah});
    // }

    back_predict = ()=> {
        var x = document.getElementById("hasil");
        var y = document.getElementById("prediksi");
        //if (x.style.display === "none") {
          x.style.display = "none";
          y.style.display = "inline-block";
        // } else {
        //   x.style.display = "none";
        // }
        // this.callapi();
    }
    
    render(){
        console.log("Render Result");
        console.log("Isi hasil imt : ", this.state.hasilImt);
        console.log("Ini value atribut given from middle : ", this.props.data.hasilCekFormDiabetes);
        return(
            <div className="result" id="hasil">
                    <h2>Hasil Prediksi</h2>
                    <p className="hasil_prediksi" id="hasil_diabetes"><a>Status Diabetes: <br></br>{this.props.data.hasilCekFormDiabetes} </a></p>
                    <p className="hasil_prediksi" id="hasil_imt"><a>IMT (Index Masa Tubuh): <br></br>{this.props.data.hasilCekFormImt} </a></p>
                    <p className="hasil_prediksi" id="hasil_obesitas"><a>Status Obesitas: <br></br>{this.props.data.hasilCekFormObesitas} </a></p>
                    <p className="hasil_prediksi" id="hasil_tekanan_darah"><a>Status Tekanan Darah: <br></br>{this.props.data.hasilCekFormTekananDarah} </a></p>
                    <button className="button_ulang" onClick={this.back_predict}>Mulai Ulang</button>
            </div>
        );
    }
}

export default Result;
