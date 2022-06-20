/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./CenterBar.css";
import Blog from "../Blog/Blog";
import { useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function CenterBar() {
        const navigate= useNavigate();
        const nextPage= () =>{
            navigate.push()
        }
        const SecondOne="HOW TO COPE \n WITH ANXIETY \n & DEPRESSION";
        const ThirdOne="Do you sometimes worry so much that it \n interferes with your everyday activities? Or \n feel so blue that it completely clouds your \n outlook? You’re not the only one.";
    return (
             <div className="CenterBar">
                <div className="FirstPage">
                    <button className="Button" onClick={nextPage}>
                        <p className="Word-button" >
                            Read More
                        </p>
                    </button>
                    <div className="Content">
                        <p className="FirstOne">
                            KHOI'S BLOG
                        </p>
                        <p className="SecondOne"> 
                            {SecondOne}
                        </p>
                        <p className="ThirdOne">
                            {ThirdOne}
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="Social">
                        <FacebookIcon className="Icon"/>
                        <InstagramIcon className="Icon"/>
                        <RedditIcon className="Icon"/>
                    </div>
                    <div className="bckg">
                        <img src={require("/Users/lele/Downloads/Dev/Lekhoi-web/src/UI/CenterBar/2E78478BE29C8DF4.png")} className="Sad-girl"/>
                    </div>
                    <div className="sad">
                            <img src={require("/Users/lele/Downloads/Dev/Lekhoi-web/src/UI/CenterBar/lele.png")} className="Sadboy"/>
                            <img src={require("/Users/lele/Downloads/Dev/Lekhoi-web/src/UI/CenterBar/hehe.png")} className="rainy"/>
                    </div>
                </div>
            </div>
        )
}