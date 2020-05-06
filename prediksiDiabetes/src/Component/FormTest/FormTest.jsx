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

            resDiabetes :'Loading...',
            resImt:'Loading...',
            resObesitas:'Loading...',
            resTekananDarah:'Loading...',

            resultExist : false,
            statusInput : true
        }

    }

    handleLahirChange = event => {
        if(!this.state.resultExist)
        {
            this.setState({
                lahir : event.target.value
            })
           
            document.getElementById("myDate").style.borderColor = "";
        }
    }

    handleHamilChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                hamil : afterTrim
            })
        }
        document.getElementById("quantity_sistol").style.borderColor = "";

        var val = document.getElementById("quantity_pregnancy").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        
        var length_input = (val+"").length;
        console.log(length_input);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                
                console.log("STATE INPUT TRUE");
                console.log((val+"").charAt(length_input-1) == '.');
                var posisi_koma_akhir = (val+"").charAt(length_input-1);
                var posisi_koma = val.indexOf('.');
                if(posisi_koma_akhir === '.' || posisi_koma>=0)
                {
                    this.setState({
                        hamil : JSON.parse(localStorage.getItem('duhamil')).trim()
                    })
                }
                else
                {
                    document.getElementById("quantity_pregnancy").style.borderColor = "";
                    this.setState({
                        hamil : afterTrim
                    }) 
                }
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                if(length_input>0)
                {
                    this.setState({
                        hamil : JSON.parse(localStorage.getItem('duhamil')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleGlukosaChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                glukosa : afterTrim
            })
        }
        document.getElementById("quantity_glucose").style.borderColor = "";
        
        var val = document.getElementById("quantity_glucose").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                document.getElementById("quantity_glucose").style.borderColor = "";
                this.setState({
                    glukosa : afterTrim
                })  
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        glukosa : JSON.parse(localStorage.getItem('duglukosa')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleSistolChange = event => {
        var afterTrim =  event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                sistol : afterTrim
            })
        }
        document.getElementById("quantity_sistol").style.borderColor = "";
        
        var val = document.getElementById("quantity_sistol").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                document.getElementById("quantity_sistol").style.borderColor = "";
                this.setState({
                    sistol : afterTrim
                })  
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        sistol : JSON.parse(localStorage.getItem('dusistol')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleDiastolChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                diastol : afterTrim
            })
        }
        document.getElementById("quantity_diastol").style.borderColor = "";

        var val = document.getElementById("quantity_diastol").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                document.getElementById("quantity_diastol").style.borderColor = "";
                this.setState({
                    diastol : afterTrim
                })  
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        diastol : JSON.parse(localStorage.getItem('dudiastol')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleKulitChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                kulit : afterTrim
            })
        }
        document.getElementById("quantity_skin_thickness").style.borderColor = "";

        var val = document.getElementById("quantity_skin_thickness").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                document.getElementById("quantity_skin_thickness").style.borderColor = "";
                this.setState({
                    kulit : afterTrim
                })  
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        kulit : JSON.parse(localStorage.getItem('dukulit')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleInsulinChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                insulin : afterTrim
            })
        }
        document.getElementById("quantity_cpeptida").style.borderColor = "";

        var val = document.getElementById("quantity_cpeptida").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                document.getElementById("quantity_cpeptida").style.borderColor = "";
                this.setState({
                    insulin : afterTrim
                })  
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        insulin : JSON.parse(localStorage.getItem('duinsulin')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleBeratChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                berat : afterTrim
            })
        }
        document.getElementById("quantity_weight").style.borderColor = "";

        var val = document.getElementById("quantity_weight").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                document.getElementById("quantity_weight").style.borderColor = "";
                this.setState({
                    berat : afterTrim
                })  
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        berat : JSON.parse(localStorage.getItem('duberat')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleTinggiChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                tinggi : afterTrim
            })
        }
        document.getElementById("quantity_height").style.borderColor = "";

        var val = document.getElementById("quantity_height").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                document.getElementById("quantity_height").style.borderColor = "";
                this.setState({
                    tinggi : afterTrim
                })  
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        tinggi : JSON.parse(localStorage.getItem('dutinggi')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleKeluargaDChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                keluargaD : afterTrim
            })
        }
        document.getElementById("quantity_family_diabetes").style.borderColor = "";

        var val = document.getElementById("quantity_family_diabetes").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);

        var length_input = (val+"").length;
        console.log(length_input);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                console.log((val+"").charAt(length_input-1) == '.');
                var posisi_koma_akhir = (val+"").charAt(length_input-1);
                var posisi_koma = val.indexOf('.');
                if(posisi_koma_akhir === '.' || posisi_koma>=0)
                {
                    this.setState({
                        keluargaD : JSON.parse(localStorage.getItem('dukeluargaD')).trim()
                    })
                }
                else
                {
                    document.getElementById("quantity_family_diabetes").style.borderColor = "";
                    this.setState({
                        keluargaD : afterTrim
                    }) 
                }
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                if(length_input>0)
                {
                    this.setState({
                        keluargaD : JSON.parse(localStorage.getItem('dukeluargaD')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleKeluargaChange = event => {
        var afterTrim = event.target.value.trim()
        if(!this.state.resultExist)
        {
            this.setState({
                keluarga : afterTrim
            })
        }
        document.getElementById("quantity_family").style.borderColor = "";
        
        var val = document.getElementById("quantity_family").value;
        console.log("Value dari Input : ", val);
        var status = this.isNumeric(val);
        console.log("TEST ISNUMERIC : ", status);

        var length_input = (val+"").length;
        console.log(length_input);
        console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                console.log("STATE INPUT TRUE");
                console.log((val+"").charAt(length_input-1) == '.');
                var posisi_koma_akhir = (val+"").charAt(length_input-1);
                var posisi_koma = val.indexOf('.');
                if(posisi_koma_akhir === '.' || posisi_koma>=0)
                {
                    this.setState({
                        keluarga : JSON.parse(localStorage.getItem('dukeluarga')).trim()
                    })
                }
                else
                {
                    document.getElementById("quantity_family").style.borderColor = "";
                    this.setState({
                        keluarga : afterTrim
                    }) 
                }
            }
            else if(!status){
                console.log("STATE INPUT FALSE");
                if(length_input>0)
                {
                    this.setState({
                        keluarga : JSON.parse(localStorage.getItem('dukeluarga')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
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
            // this.setState({resDiabetes : res[0].hasil.diabetes, 
            //                resImt : res[0].hasil.imt,
            //                resObesitas : res[0].hasil.obesitas,
            //                resTekananDarah : res[0].hasil.tekananDarah})
              this.setState({resDiabetes : res.diabetes, 
                               resImt : res.imt,
                               resObesitas : res.obesitas,
                               resTekananDarah : res.tekananDarah})
              this.props.doTest.changeResultTestDiabetes(this.state.resDiabetes)
              this.props.doTest.changeResultTestImt(this.state.resImt)
              this.props.doTest.changeResultTestObesitas(this.state.resObesitas)
              this.props.doTest.changeResultTestTekananDarah(this.state.resTekananDarah)})
    }

    /*
        Method untuk get local storage data input user
    **/
    callBackDataUser = () =>{  
        const dateUser = localStorage.getItem('dulahir');
        const resDb = localStorage.getItem('resDiabetes');
        const resImt = localStorage.getItem('resImt');
        const resOb = localStorage.getItem('resObesitas');
        const resTD = localStorage.getItem('resTekananDarah');

        localStorage.getItem('dulahir') && this.setState(
            {
                lahir: JSON.parse(dateUser),
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
                resTekananDarah: JSON.parse(resTD),
                statusInput: JSON.parse(localStorage.getItem('statusInput'))
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
        localStorage.setItem('statusInput', JSON.stringify(nextState.statusInput));
   }

    alertReInputDataUser = () => {
        var r = window.confirm("Ingin Mengulangi Tes?");
        if (r == true) {
            document.getElementById("hasil").style.display = "none";
            document.getElementById("prediksi").style.display = "inline-block";
            this.setState({resultExist : false}); 
        }
        else{
            document.getElementById("hasil").style.display = "block";
            document.getElementById("prediksi").style.display = "none";
        }
    }

    alertTanggalLahir = () => {
        alert("Umur Harus > 20 Tahun");
    }

    callAlert = () =>{
        console.log("Result Exist di Form Test : ", this.state.resultExist);
        if(this.state.resultExist)
        {
            this.alertReInputDataUser();
        }
    }

    componentWillMount = () =>{
        if(this.state.statusInput == true)
        {
            this.callBackDataUser()
        }
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

    /**
     * Method untuk tetap mencatat value yang ada di form meski sudah melakukan submit
     */
    handleSubmit = event =>{
        event.preventDefault();
    }

    isNumeric = (n) => {
        var status = !isNaN(parseFloat(n)) && isFinite(n);
        this.setState({
            statusInput :  status
        }); 
        return status;
    }

    go_predict_klik = ()=> {
        var x = document.getElementById("hasil");
        var y = document.getElementById("prediksi");
        var status = this.getAgeFromLahir();

        this.cek_Kolom(status);
        if (this.state.berat!='' && this.state.sistol!='' && this.state.diastol!='' && this.state.glukosa!='' && this.state.hamil!='' && this.state.insulin!=''
            && this.state.keluarga!='' && this.state.keluargaD!='' && this.state.kulit!='' && this.state.lahir!='' && this.state.tinggi!='' && status) 
        {
            this.callapi(); //Panggil Fungsi untuk mengisi div hasil prediksi dengan hasil prediksi yg benar

            x.style.display = "block";
            y.style.display = "none";
            this.setState({resultExist : true});
        }
        else if(!status)
        {
            this.alertTanggalLahir();
        }
        else
        {
          alert("Harap Isi Seluruh Kotak yang Ada!");
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

    cek_Kolom = (status) =>{
        if(this.state.berat=='')
        {
            document.getElementById("quantity_weight").style.borderColor = "red";
            
        }
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
        if(this.state.lahir=='' || !status)
        {
            document.getElementById("myDate").style.borderColor = "red";
        }
        if(this.state.tinggi=='')
        {
            document.getElementById("quantity_height").style.borderColor = "red";
        }
    }
    
    getAgeFromLahir = () =>{
        var mydate = document.getElementById('myDate').value;
        var date = new Date(mydate);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        var curr_year = new Date().getFullYear();
        var age =  curr_year - year;
        console.log("tahun lahir : ", year);
        this.setState({tahun : age});
        console.log("Age : ", age);
        var status = (age>20)? true : false;
        return status;
    }

    render(){
        console.log("Render Form");
        //fetch("http://localhost:9000");
        return(
            <form onSubmit={this.handleSubmit}>
                    <div className="content">
                        <div className="label">
                            <label>Tanggal Lahir</label><br></br><br></br>   
                            <label>Jumlah Kehamilan</label><br></br><br></br>
                            <label>Kadar Glukosa</label><br></br><br></br>
                            <label>Tekanan Darah</label><br></br><br></br>
                            <label>Ketebalan Kulit</label><br></br><br></br>
                            <label>Kadar C-Peptida</label><br></br><br></br>
                            <label>Berat Badan</label><br></br><br></br>
                            <label>Tinggi Badan</label><br></br><br></br>
                            <label>Riwayat Keluarga Terserang</label><br></br><br></br>
                            <label>Jumlah Anggota Keluarga</label><br></br><br></br>
                        </div>
                        <div className="input">
                            <input className="input_component" type="date" value={this.state.lahir} id="myDate" onChange={this.handleLahirChange} onClick={this.callAlert}></input> <br></br>
                            <input className="input_component" type="" value={this.state.hamil} id="quantity_pregnancy" onChange={this.handleHamilChange} onClick={this.callAlert} name="pregnancy" min="0" max="10"></input> <br></br>
                            <input className="input_component" type="" value={this.state.glukosa} id="quantity_glucose" onChange={this.handleGlukosaChange} onClick={this.callAlert} name="glucose" min="1" max=""></input><label className="input_component">mg/dL</label> <br></br>
                            <Tippy content='Tekanan Sistol / Batas Atas Tekanan Darah'><input className="input_component join" type="" value={this.state.sistol} id="quantity_sistol" onChange={this.handleSistolChange} onClick={this.callAlert} name="sistol" min="1" max=""></input></Tippy>
                            <label className="icon">/</label>
                            <Tippy content='Tekanan Diastol / Batas Bawah Tekanan Darah'><input className="input_component join" type="" value={this.state.diastol} id="quantity_diastol" onChange={this.handleDiastolChange} onClick={this.callAlert} name="diastol" min="1" max=""></input></Tippy><label className="input_component tipi">mmHg</label><br></br>
                            <input className="input_component" type="" value={this.state.kulit} id="quantity_skin_thickness" onChange={this.handleKulitChange} onClick={this.callAlert} name="skin_thickness" min="1" max=""></input> <br></br>
                            <Tippy content='Kadar Insulin dari Hasil Tes Darah'><input className="input_component" type="" value={this.state.insulin} id="quantity_cpeptida" onChange={this.handleInsulinChange} onClick={this.callAlert} name="cpeptida" min="1" max=""></input></Tippy><label className="input_component">ng/mL</label><br></br>
                            <input className="input_component" type="" value={this.state.berat} id="quantity_weight" onChange={this.handleBeratChange} onClick={this.callAlert} name="weight" min="1" max=""></input><label className="input_component">Kg</label><br></br>
                            <input className="input_component" type="" value={this.state.tinggi} id="quantity_height" onChange={this.handleTinggiChange} onClick={this.callAlert} name="height" min="1" max=""></input><label className="input_component">Cm</label><br></br>
                            <input className="input_component" type="" value={this.state.keluargaD} id="quantity_family_diabetes" onChange={this.handleKeluargaDChange} onClick={this.callAlert} name="family_diabetes" min="1" max=""></input><label className="input_component">Orang</label><br></br>
                            <input className="input_component" type="" value={this.state.keluarga} id="quantity_family" name="family" onChange={this.handleKeluargaChange} onClick={this.callAlert} min="1" max=""></input><label className="input_component">Orang</label>
                            <button className="button_proses" id="prediksi" onClick={this.go_predict_klik} onMouseOver={this.go_predict_hover}>Proses</button>
                        </div>
                    </div>
            </form>
        );
    }

}

export default FormTest;