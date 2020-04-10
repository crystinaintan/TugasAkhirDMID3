var express = require("express");
var router = express.Router();
var DecisionTree = require('decision-tree'); 

const csvFilePath='./dataset/diabetes.csv'; 
const csv=require('csvtojson'); //import modul csvtojson untuk mengubah data diabetes.csv menjadi kumpulan / array of json (Harus npm i --save csvtojson)
const fs = require('fs');       // import modul fs untuk membaca dan menulis data kedalam file (menyimpan model tree yang telah digenerate ke dalam file message.json)
    

function diabetesPedigreeFunction(n_keluargaDm, n_keluarga){
    return n_keluargaDm/n_keluarga;
}

function calculate_bmi(berat, tinggi){
    console.log(berat/Math.pow((tinggi/100), 2));
    return berat/Math.pow((tinggi/100), 2);
}
    
function status_BMI(bmi){
    var status = "";
    if(bmi < 18.5)
    {
        status = "Berat badan kurang";
    }
    else if(bmi >= 18.5 && bmi<= 22.9 )
    {
        status = "Berat badan normal";
    }
    else if(bmi >= 23 && bmi<= 29.9 )
    {
        status = "Berat badan berlebih";
    }
    else if(bmi >= 30)
    {
        status = "Obesitas";
    }
    console.log(status);
    return status;
}
    
function status_hipertensi(sistol, diastol){
    var status = "";
    if(sistol < 90 && diastol <60)
    {
        status = "hipotensi";
    }
    else if(sistol >= 90 && sistol <=120 && diastol >= 60 && diastol <=80)
    {
        status = "normotensi";
    }
    else if(sistol > 120 && diastol >=80)
    {
        status = "hipertensi";
    }
    console.log(status);
    return status;
} 

function status_diabetes(status){
    if(status == 1)
    {
        return "Anda terduga Positif Diabetes Mellitus.";
    }
    else if(status == 0)
    {
        return "Anda terduga Negatif Diabetes Mellitus.";
    }
} 


router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/prediksi_diabetes/:data", function(req, res, next){
    // var predicted_class_a = dt_a.predict({                          //memprediksi berdasarkan data baru, predicted_class_a (hasil prediksi data baru)
    //     Pregnancies: req.params.hamil,
    //     Glucose: req.params.glukosa,
    //     BloodPressure: req.params.diastol,//diastolic
    //     SkinThickness: req.params.kulit,
    //     Insulin: req.params.insulin,
    //     BMI: calculate_bmi(req.params.berat, req.params.tinggi),
    //     DiabetesPedigreeFunction: diabetesPedigreeFunction(this.req.params.keluargaD, req.params.keluarga),                          
    //     Age: req.params.lahir
    // });
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{              //jsonObj adalah variable yang memuat data file diabetes.csv yang sudah dalam bentuk json
        //console.log(jsonObj);
        var class_name_a = "Outcome"; //atribut yang akan ditebak
        var features_a = ["Pregnancies", "Glucose","BloodPressure","SkinThickness","Insulin","BMI","DiabetesPedigreeFunction","Age"]; //atribut feature
        var dt_a = new DecisionTree(jsonObj, class_name_a, features_a);  //generate model tree
        var predicted_class_a = dt_a.predict({                          //memprediksi berdasarkan data baru, predicted_class_a (hasil prediksi data baru)
            Pregnancies: '6',
            Glucose: '148',
            BloodPressure: '72',
            SkinThickness: '35',
            Insulin: '0',
            BMI: '33.6',
            DiabetesPedigreeFunction: '0.627',                          
            Age: '50'
        });
        const hasil =  {result:[{
            "diabetes" : status_diabetes(predicted_class_a),
            "imt" : "33.6",
            "obesitas" : status_BMI(33.6),
            "tekananDarah" : status_hipertensi(118,72)
        }]};
        console.log(res.diabetes);
        res.send(hasil);
        
    });
    
    // res.send(hasil);
});

module.exports = router; 