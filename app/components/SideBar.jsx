"use client"
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Sidebar = ({vis,setVis,theme,path}) => {
    const sideItem = {
        padding: "1rem",
        display: vis ? "flex" : "",
        justifyContent : "flex-end",
        fontSize :20,
        paddingRight : "25px" 
    }
    const sideBarStyle = {
        display: vis ? "block" : "none",
        borderRadius: "10px",
        height: "100vh", 
        width: vis ? "100vw" : 0,
        position: "absolute", 
        zIndex: 20,
        top: 0,
        right: 0,
        backgroundColor: "white",
        overflowY: "hidden", 
        paddingTop: "20px",
        paddingLeft:"10px", 
        transition: "0.5s",      
    }
    return ( 
        <div id="sideBar" style={sideBarStyle}>
            <div style = {sideItem}>
                <button onClick={() => {setVis(false)}}>
                    <RxCross2 style={{textDecoration:"none",color:"black",fontSize:25}}/>
                </button>
            </div>
            <div className={`${theme} ${path !== "/home" ? "hidden" : ""}`}>
              <Link href={{
                pathname : "/",
                query : {theme:theme}
              }} className={"hover:opacity-60 dark:text-white"}>
                  Change Theme?
              </Link>
            </div>
            <div style = {sideItem}>
                <Link href={{
                    pathname : "/about",
                    query : {theme:theme}
                    }} className={path === "/about" ? "blue-gradient_text hover:opacity-60 dark:dark-gradient_text" : "hover:opacity-60 dark:text-white" }>
                        About
                </Link>
            </div>
            
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link href={{
                    pathname : "/projects",
                    query : {theme:theme}
                    }} className={ path === "/projects" ? "blue-gradient_text hover:opacity-60 dark:dark-gradient_text" : "hover:opacity-60 dark:text-white"}>
                        Projects
                </Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link href={{
                    pathname : "/contact",
                    query : {theme:theme}
                    }} className={path === "/contact" ? "blue-gradient_text hover:opacity-60 dark:dark-gradient_text" : "hover:opacity-60 dark:text-white"}>
                        Contact
                </Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            
            
        </div>
     );
}
 
export default Sidebar
