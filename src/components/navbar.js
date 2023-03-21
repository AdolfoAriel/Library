import { Link } from "react-router-dom";

export default function NavBar(){
    const linkstyle ={
        padding: "10px",
        display:"block",
        fontsize:"18px",
        color:"white",
        textDecoration:"none",
    };
    const navContainerStyle ={
        backgroundColor:"#181d27",
        padding: "18px",
        display:"flex",
        gap:"5px",
        justifyContent:"center"
    };
    return( 
    <div style={navContainerStyle}>
       <Link to ="/" style={linkstyle}>Home</Link>
       <Link to = "/create" style={linkstyle}>Create</Link>
    </div>
);
}