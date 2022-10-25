import { NavLink } from "react-router-dom";
import '../../stylesheets/CloseReturnBtn.css';

function CloseBtn(){
  return (
    <NavLink
    to="/"
    exact="true"
    id="close"
    className="close-return-btn"
    >
      <span>&times;</span>
    </NavLink>
  )
}

export default CloseBtn;