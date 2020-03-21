import React from 'react';
import './HomePage.css';
import diabetes from '../../Photo/diabetes.jpg';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className="page">
                <img className="wallpaper_page" src={diabetes} alt=""/>
                <Link to="/test_diabetes_mellitus">
                    <button className="button_login">Prediksi DiabetesMu</button>
                </Link>
            </div>
        );
    }
}

export default Home;