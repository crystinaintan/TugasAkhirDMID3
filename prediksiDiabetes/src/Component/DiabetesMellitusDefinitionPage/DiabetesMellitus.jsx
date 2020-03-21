import React from 'react';
import './DiabetesMellitus.css';
import diabetes from '../../Photo/diabetes.jpg';
import dm from '../../Photo/DM.jpg';
import { Link } from 'react-router-dom';

class DiabetesMellitus extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className="main_page">
                <img className="wallpaper" src={diabetes} alt=""/>
                <h2>Diabetes Mellitus</h2>
                <div className="definisi">        
                    <img className="gambar" src={dm} alt="diabetes mellitus"/>
                    <p className="itemList"> Pada diabetes tipe 2 (dua) atau biasa dikenal dengan diabetes mellitus, tubuh akan tetap menghasilkan hormon insulin tetapi dalam jumlah yang sedikit. 
                        Hal ini membuat tubuh tidak dapat menggunakan insulin untuk mengolah gula darah menjadi energi secara efektif. 
                        Dalam istilah medis, kondisi ini disebut dengan resistensi insulin.
                        Ketika resistensi insulin terjadi maka akan semakin banyak insulin yang dibutuhkan agar kadar gula dalam tubuh dapat tetap stabil. 
                        Hal itu terjadi untuk mengimbangi peningkatan kebutuhan insulin, sel-sel penghasil insulin di pankreas (disebut sel beta) akan menghasilkan insulin yang lebih besar. 
                        Oleh karena itu, diharapan semakin banyak insulin yang dihasilkan maka semakin banyak juga darah yang dapat masuk ke dalam tubuh.
                        Namun karena sel beta terus menerus dipaksa untuk menghasilkan banyak insulin, sel beta justru tidak mampu merespons perubahan gula darah dalam tubuh dengan baik. 
                        Respons sel tubuh yang tidak wajar ini mengakibatkan insulin tidak bekerja sesuai fungsinya. 
                        Akibatnya, banyak glukosa yang tidak terserap oleh sel tubuh dan mengalir bebas dalam pembuluh darah dalam jumlah banyak. 
                    </p>
                    <p className="itemList">
                    Gejala diabetes mellitus dapat dijabarkan sebagai berikut : 
                    
                    <ol>
                        <li>Calon penderita sering merasa kehausan</li>
                        <li>Calon penderita cepat merasa lapar</li>
                        <li>Calon penderita mengalami buang air kecil yang sering, khususnya pada malam hari</li>
                        <li>Calon penderita mengalami luka yang lambat pulih</li>
                        <li>Calon penderita mempunyai Berat badan menurun secara drastis tanpa sebab yang jelas</li>
                        <li>Calon penderita merasa lemas, lesu, dan tidak bertenaga</li>
                        <li>Calon penderita mempunyai pandangan yang buram</li>
                        <li>Calon penderita mengalami rasa sakit atau mati rasa pada kaki dan tangan</li>
                        <li>Calon penderita mudah terkena infeksi, entah itu di kulit, gusi dan mulut, atau di area genital</li>
                        <li>Calon penderita merasakan gatal di area selangkangan atau area genital</li>
                        <li>Calon penderita mengalami kulit yang menghitam, terutama di bagian lipatan ketiak. leher, dan selangkangan</li>
                    </ol>
                    </p>

                    <p className="itemList">
                    Faktor-faktor diabetes mellitus dapat dijabarkan sebagai berikut : 
                    
                    <ol>
                        <li>Kelebihan berat badan atau obesitas</li>
                        <p className="itemList">Memiliki kelebihan berat badan merupakan faktor risiko utama untuk diabetes mellitus. 
                        Hal ini terjadi karena semakin tebal jaringan lemak, sel-sel semakin kebal juga terhadap insulin. Cara mengukur berat badan
                        dapat dilihat <Link to="/definisi_BMI_obesitas">disini</Link>.
                        </p>
                        <li>Faktor genetik (adanya riwayat keluarga yang pernah menderita diabetes mellitus)</li>
                        <p className="itemList">Risiko mengalami diabetes mellitus semakin besar 
                        jika orangtua atau saudara kandung memiliki diabetes mellitus. 
                        </p>
                        <li>Umur</li>
                        <p className="itemList">Risiko dari diabetes mellitus meningkat seiring manusia bertambah umur, 
                        khususnya setelah umur 45 tahun. Hal ini mungkin karena manusia di usia ini cenderung kurang melakukan aktivitas tubuh sehingga 
                        lama kelamaan tubuh akan kehilangan massa otot dan berat badan akan bertumbuh seiring bertambahnya umur/usia. 
                        Selain itu, proses penuaan juga mengakibatkan penurunan fungsi sel beta pankreas sebagai penghasil insulin. 
                        Namun hal ini tidak berarti diabetes tipe mellitus hanya menyerang lansia atau orangtua. 
                        Diabetes mellitus juga dapat menyerang remaja, dan masa awal dewasa karena faktor gaya hidup 
                        yang tidak sehat (sering mengkonsumsi minuman manis, kurang minum air putih, kurang berolahraga, dan lain-lain). 
                        </p>
                        <li>Gaya hidup sedentari</li>
                        <p className="itemList">Sedentari adalah pola perilaku minim aktivitas fisik atau gerakan fisik. 
                        Pada manusia, aktivitas fisik dapat membantu tubuh untuk mengontrol berat badan sehingga tubuh tidak menghasilkan lemak visceral 
                        (lemak berlebih dekat organ internal). 
                        Tidak adanya gangguan dari lemak visceral, sel-sel beta akan semakin sensitif terhadap insulin sehingga tubuh akan mudah untuk 
                        memecah glukosa menjadi energi. Oleh karena itu, semakin manusia pasif bergerak maka manusia akan semakin besar berisiko mengalami obesitas. 
                        Oleh karena itu, semakin besar juga risiko manusia mengalami diabetes mellitus.
                        </p>
                        <li>Diabetes saat kehamilan</li>
                        <p className="itemList">Penderita yang mengalami diabetes saat hamil memiliki kecenderungan lebih besar
                        untuk mengalami diabetes mellitus. Diabetes gestasional atau diabetes kehamilan terjadi karena ibu hamil melahirkan 
                        bayi dengan berat yang lebih dari 4 kilogram. Bayi dari ibu yang mengalami diabetes gestasional
                        juga akan berisiko mengalami diabetes mellitus seperti ibunya di masa dewasanya.</p>
                        <li>Sindrom ovarium polikistik (PCOS)</li>
                        <p className="itemList">PCOS erat kaitannya dengan resistensi insulin. 
                        Penderita yang sudah pernah mengalami resistensi insulin akan memiliki risiko terserang penyakit diabetes meningkat.
                         Sejumlah kondisi medis lain seperti pankreatitis, sindrom Cushing, dan glucagonoma juga dilaporkan bisa meningkatkan risiko terkena diabetes.
                         </p>
                        <li>Obat-obatan tertentu</li>
                        <p className="itemList">
                        Konsumsi beberapa obat yang digunakan untuk mengatasi masalah kesehatan juga dapat memengaruhi kadar gula dalam darah. 
                        Obat steroid, statin, diuretik, dan beta-blocker merupakan beberapa jenis obat yang diketahui dapat memengaruhi kadar
                         gula dalam darah. Kadar gula dalam darah yang terlau tinggi dapat mengakibatkan meningkatkan risiko terserang diabetes mellitus.
                        </p>
                    </ol>
                    </p>
                </div>
                
            </div>
        );
    }
}

export default DiabetesMellitus;
