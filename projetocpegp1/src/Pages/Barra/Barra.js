import React from "react";
import {useState} from 'react';
import "./barra.css";
import {Drawer, List,ListItem,ListItemText,Typography,AppBar,Toolbar,IconButton,Avatar} from "@mui/material";
import {AiFillHome} from "react-icons/ai";
import {FaRocket} from "react-icons/fa";
import {BsLightbulbFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {FiMenu} from "react-icons/fi";
import {BiTrendingUp} from "react-icons/bi";
import {IconContext} from "react-icons/lib";
import {useNavigate} from "react-router-dom";
import "./barra.css"

function Barra(){
    const navigate = useNavigate();
    const [currentPage] = useState("/plataforma");
    const [open, setOpen] = useState(false);

    function handleDrawerClose(isopen){
        setOpen(isopen);
    }

    return(
        <>
        <AppBar position="static">
        <Toolbar className="toolbar">
        <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {()=> handleDrawerClose(!open)}
          >
            <FiMenu />
          </IconButton>
          <div className="userContainer">
          <p className="userName">XxX_Josh_XxX</p>
          <Avatar alt="XxX_Josh_XxX" src="/images/Avatar.png" />
          </div>
        </Toolbar>
      </AppBar>

        <Drawer open = {open} onClose = {()=> handleDrawerClose(false)}>
            <List className="list"> 
                <ListItem button 
                selected = {currentPage === "/plataforma"}
                onClick={() => {navigate("/plataforma")}}>
                    <IconContext.Provider value = {{color: "#7A04EB", size: "2.5em"}}>
                        <AiFillHome/>
                    </IconContext.Provider>
                    <ListItemText className="list_item_text">
                        <Typography>HOME</Typography>
                    </ListItemText>    
                </ListItem>
                <ListItem button
                selected = {currentPage === "/plataforma/lançamentos"}
                onClick={() => {navigate("/plataforma/lançamentos")}}>
                    <IconContext.Provider value = {{color: "#7A04EB", size: "2.5em"}}>
                        <FaRocket/>
                    </IconContext.Provider>
                    <ListItemText className="list_item_text">
                        <Typography>LANÇAMENTOS</Typography>
                    </ListItemText> 
                </ListItem>
                <ListItem button
                selected = {currentPage === "/plataforma/recomendados"}
                onClick={() => {navigate("/plataforma/recomendados")}}>
                    <IconContext.Provider value = {{color: "#7A04EB", size: "2.5em"}}>
                        <BsLightbulbFill/>
                    </IconContext.Provider>
                    <ListItemText className="list_item_text">
                        <Typography>RECOMENDADOS</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button
                selected = {currentPage === "/plataforma/favoritos"}
                onClick={() => {navigate("/plataforma/favoritos")}}>
                    <IconContext.Provider value = {{color: "#7A04EB", size: "2.5em"}}>
                        <AiFillStar/>
                    </IconContext.Provider>
                    <ListItemText className="list_item_text">
                        <Typography>FAVORITOS</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button
                selected = {currentPage === "/plataforma/maisjogados"}
                onClick={() => {navigate("/plataforma/maisjogados")}}>
                    <IconContext.Provider value = {{color: "#7A04EB", size: "2.5em"}}>
                        <BiTrendingUp/>
                    </IconContext.Provider>
                    <ListItemText className="list_item_text">
                        <Typography>EM ALTA</Typography>
                    </ListItemText>
                </ListItem>    
            </List>
        </Drawer>
        </>
    )
}

export default Barra;