import React from 'react';
import './MenuBar.css';
import Drawer, { DrawerHeader, DrawerContent, DrawerTitle } from '@material/react-drawer';
import List, { ListItem, ListItemText } from '@material/react-list';
import "@material/react-drawer/dist/drawer.css";
import '@material/react-list/dist/list.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MenuBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0,
            hoverItem: ''
        }
    }

    // hover_list_item = () =>{
    //     document.getElementById("list_item").className = "hover";
    //     console.log(this.state.selectedIndex);
    // }

    // hover_out_list_item = () =>{
    //     document.getElementById("list_item").className = "nothover";
    // }

    // hover_list_item = () =>{
    //     document.getElementById("list_item").className = "hover";
    //     console.log(this.state.selectedIndex);
    // }

    // hover_out_list_item = () =>{
    //     document.getElementById("list_item").className = "nothover";
    // }

    //index masih belum keupdate ketika select menu
    handleClick = index => {
        const selectedItem = this.state.selectedIndex[index];
        this.setState({ selectedIndex: selectedItem });
        console.log(this.state.selectedIndex);
    }

    updateState = event => {
        this.setState({ selectedIndex: event.target.value, itemSelected: true });
        console.log(event.target.value);
        // eventually I want to render a DIV with data from the selected value
    }

    render() {
        return (
            <div className="menu">
                {/* <a href="#">Prediksi Diabetes</a>
                <a href="#">Diabetes</a>
                <a href="#">Diabetes Melitus</a>
                <a href="#">BMI & Obesitas</a> */}
                <Drawer className="drawer">
                    {/* <DrawerHeader>
                    <DrawerTitle></DrawerTitle>
                </DrawerHeader> */}

                    <DrawerContent className= "drawercontent">
                        <List
                            singleSelection
                            selectedIndex={this.state.selectedIndex}
                            handleSelect={(selectedIndex) => this.setState({ selectedIndex })}
                            className="drawercontent"
                        >
                            <ListItem>
                                <Link to="/test_diabetes_mellitus" exact>
                                    <ListItemText id="" className="list_item" primaryText='Deteksi Diabetes' />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/definisi_diabetes">
                                    <ListItemText id="" className="list_item" primaryText='Diabetes' />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/definisi_diabetes_mellitus">
                                    <ListItemText id="" className="list_item" primaryText='Diabetes Melitus' />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/definisi_BMI_obesitas">
                                    <ListItemText id="" className="list_item" primaryText='BMI & Obesitas' />
                                </Link>
                            </ListItem>

                        </List>
                    </DrawerContent>
                </Drawer>
            </div>
        );
    }

}

export default MenuBar;