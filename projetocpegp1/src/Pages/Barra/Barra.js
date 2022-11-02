import React from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {useState} from 'react';
import "./barra.css";
import {Drawer, List,ListItem,ListItemText,Typography,AppBar,Toolbar,IconButton,Avatar} from "@mui/material";
import {AiFillHome} from "react-icons/ai";
import {FaRocket} from "react-icons/fa";
import {BsLightbulbFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {FiMenu} from "react-icons/fi";
import {BiTrendingUp,BiLogOut,BiSearchAlt2} from "react-icons/bi";
import {IconContext} from "react-icons/lib";
import {useNavigate} from "react-router-dom";

//import {Button} from 'react-bootstrap';

function Barra(){
    const navigate = useNavigate();
    const [currentPage] = useState("/plataforma");
    const [open, setOpen] = useState(false);

    function handleDrawerClose(isopen){
        setOpen(isopen);
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
              width: '30ch',
            },
          },
        },
      }));

    return(
        <>
        <AppBar position="static">
        <Toolbar className="toolbar">
            <div className="searchbar">
            <Search>
            <SearchIconWrapper>
              <BiSearchAlt2/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

            </div>
        <div className="position_logo"><Logo/></div>
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
          <div>
          <div className = "avatar" onClick = {() => {navigate ("/usuario")}}><Avatar alt="XxX_Josh_XxX" src="/images/Avatar.png" /></div>
          </div>
          </div>
          
          <div className = "logout" onClick = {() => {navigate ("/home")}}><
            IconContext.Provider value = {{top: "0.25px", size: "2.5em"}}>
                <BiLogOut/>
            </IconContext.Provider>
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

function Logo(){
    return(
    <div>
    <div class="logo"></div>
    <div class="logo-parte-roxa"></div>
    <div class="logo-parte-branca"></div>
    <div class="logo-texto">GAMECASTING</div>
    </div>
    );
}

export default Barra;