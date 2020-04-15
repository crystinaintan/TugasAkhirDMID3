import React,  {Component, Fragment} from 'react';
import './MiddleComponent.css';
import FormTest from '../FormTest/FormTest';
import Result from '../ResultComponent/ResultComponent';
import diabetes from '../../Photo/diabetes.jpg';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Middle extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            hasilCekFormDiabetes: 'gagal',
            hasilCekFormImt:'gagal',
            hasilCekFormObesitas:'gagal',
            hasilCekFormTekananDarah:'gagal'
        }
    }

    // changeResultTest(data)
    // {
    //     this.setState({hasilCekFormDiabetes : data.diabetes});
    //     this.setState({hasilCekFormImt : data.imt});
    //     this.setState({hasilCekFormObesitas : data.obesitas});
    //     this.setState({hasilCekFormTekananDarah : data.tekananDarah});
    // }

    changeResultTestDiabetes(diabetes)
    {
        this.setState({hasilCekFormDiabetes : diabetes});
    }

    changeResultTestImt(imt)
    {
        this.setState({hasilCekFormImt : imt});
    }

    changeResultTestObesitas(obesitas)
    {
        this.setState({hasilCekFormObesitas : obesitas});
    }

    changeResultTestTekananDarah(darah)
    {
        this.setState({hasilCekFormTekananDarah : darah});
    }

    render(){
        console.log("Render MiddleComponent");
        return(
            <div className="main_page">
                <img className="wallpaper" src={diabetes} alt=""/>
                {/* <Router>
                    <Fragment>
                        <Switch>
                            <Route exact path="/test_diabetes_mellitus/lakukan_test_diabetes_mellitus"> */}
                                <FormTest doTest = {
                                    {
                                        hasilCekFormDiabetes : this.state.hasilCekFormDiabetes,
                                        changeResultTestDiabetes : this.changeResultTestDiabetes.bind(this),
                                        changeResultTestImt : this.changeResultTestImt.bind(this),
                                        changeResultTestObesitas : this.changeResultTestObesitas.bind(this),
                                        changeResultTestTekananDarah : this.changeResultTestTekananDarah.bind(this)
                                    }
                                }/>
                                <Result data = {{
                                    hasilCekFormDiabetes: this.state.hasilCekFormDiabetes,
                                    hasilCekFormImt: this.state.hasilCekFormImt,
                                    hasilCekFormObesitas: this.state.hasilCekFormObesitas,
                                    hasilCekFormTekananDarah: this.state.hasilCekFormTekananDarah}}/>
                            {/* </Route>
                            <Route exact path="/test_diabetes_mellitus/definisi_Diabetes">
                                <DiabetesDefinition/>
                            </Route>
                        </Switch>
                    </Fragment>
                </Router> */}
                
            </div>
        );
    }
    
}

export default Middle;