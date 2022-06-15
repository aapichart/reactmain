import { useLocation } from "react-router";
import {useState, useEffect} from "react";
import ButtonBT from '../components/ButtonBT'
import {useContext} from "react";
import DataContext from "../data/DataContext";

const Dashboard = (props) => {
    const [state, setState] = useState(props);
    const location = useLocation(props);
    useEffect(()=>{
        if (location.state != null)  {
            setState(location.state); 
        } else {
            setState(props)
        };
    },[props, location.state]);
    let {isLoggedIn} = useContext(DataContext);
    const hellome = () => {
       alert(`show isLoggedIn: ${isLoggedIn}`);
    };
    return(
        <div>
            <p>
                <ButtonBT children={'Infomation'} linktoutl={'/'} onClick={hellome}/>
                <ButtonBT children={'History'} linktoutl={'/signup'}/>
                <ButtonBT children={'Billing'} linktoutl={'/about'}/>
                <ButtonBT children={'Profile'} linktoutl={'/contact'}/>
                <br />
                <br />
                <br />
                This is Dashboard Pages !!!
                <br />
                Context variable - isLoggedIn : { isLoggedIn ? "True": "False"}
                <br />
                This is a msg:{state.outMsg1} / {state.outMsg2}
                <br />
            </p>
        </div>
    );
};
export default Dashboard;
