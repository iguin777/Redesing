import React from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SVG2 from "../../assets/Landing/SVG-2.svg";
import SVG3 from "../../assets/Landing/SVG-3.svg";
import SVG4 from "../../assets/Landing/SVG-4.svg";
import SVG5 from "../../assets/Landing/SVG-5.svg";
import SVG6 from "../../assets/Landing/SVG-6.svg";
import SVG from "../../assets/Landing/SVG.svg";
import SVG7 from "../../assets/Landing/SVG-7.svg";
import Item from "../../assets/Landing/Item1.svg"
import Item2 from "../../assets/group-2.svg";
import Image2 from "../../assets/Landing/imgsec-2.png";
import imag1 from "../../assets/Landing/imag1.png";
import imag2 from "../../assets/Landing/imag2.png";
import imag3 from "../../assets/Landing/imag3.png";
import imag4 from "../../assets/Landing/imag4.png"
import imag5 from "../../assets/Landing/imag5.png"
import imag6 from "../../assets/Landing/imag6.png"
import imag7 from "../../assets/Landing/imag7.png"
import imag9 from "../../assets/Landing/imag9.png"
import Game1 from "../../assets/Landing/game1.png"
import Game2 from "../../assets/Landing/game2.png"
import Game3 from "../../assets/Landing/game3.png"
import Game4 from "../../assets/Landing/game4.png"
import Game5 from "../../assets/Landing/game5.png"
import Game6 from "../../assets/Landing/game6.png"
import Game7 from "../../assets/Landing/game7.png"


const Landing = () => {
    const navigate = useNavigate();

    const forLogin = () => {
        navigate("/login");
    };

    const forSign = () => {
        navigate("/Signup")
    }

    return (
        <C.Container>
            <C.Nav>
                <Header Link1="Saiba mais" Link2="Log in" onClick={forLogin} />
            </C.Nav>
            <div className="section">
                <div className="list">
                    <div className="overlap-group">
                        <img className="item" alt="item" src={Item} />
                        <div className="div" />
                        <img className="item-2" alt="item-2" src={Item2} />
                    </div>
                </div>
                <div className="heading">
                    <p className="text-wrapper">Já pensou em fazer um jogo?</p>
                </div>
                <div className="container">
                    <p className="a-etec-game-jam-uma">
                        A Etec Game Jam é uma ótima oportunidade para isto —<br />
                        Venha desenvolver.
                    </p>
                </div>
                <div className="link-button" onClick={forSign}>
                    <div className="div-wrapper">
                        <div className="text-wrapper-2">Inscreva-se</div>
                    </div>
                </div>
                <div className="link-button-2" onClick={forLogin}>
                    <div className="background">
                        <img className="SVG" alt="Svg" src={SVG} />
                    </div>
                    <div className="container-2">
                        <div className="text-wrapper-3">Log in</div>

                    </div>

                </div>


                <div className="text-wrapper-4">Com apoio de</div>

                <div className="apoio">
                    <img className="SVG-2" alt="Svg" src={SVG2} />
                    <img className="SVG-3" alt="Svg" src={SVG3} />
                    <img className="SVG-4" alt="Svg" src={SVG4} />
                    <img className="SVG-5" alt="Svg" src={SVG5} />
                    <img className="SVG-6" alt="Svg" src={SVG6} />
                    <img className="img" alt="Svg" src={SVG7} />
                </div>
            </div>


            <div className="section-2">
                <img className="image-2" alt="img" src={Image2} />
            </div>

            <div className="section-game">
                <div className="container-g">
                    <div className="container-g1">
                        <img className="imageIcon" alt="1" src={imag1} />
                        <div className="overlayshadow" />
                    </div>
                    <div className="container-g2">
                        <img className="imageIcon" alt="2" src={imag2} />
                        <div className="overlayshadow" />
                    </div>
                    <div className="container-g3">
                        <img className="imageIcon" alt="3" src={imag3} />
                        <div className="overlayshadow" />
                    </div>
                    <img className="containerIcon" alt="4" src={imag4} />
                    <img className="containerIcon1" alt="5" src={imag5} />
                    <img className="containerIcon2" alt="6" src={imag6} />
                    <div className="container-g4">
                        <div className="image" />
                    </div>
                    <div className="container-g5">
                        <div className="image1" />
                    </div>
                    <img className="containerIcon3" alt="7" src={imag7} />
                    <img className="containerIcon4" alt="8" src={imag2} />
                    <div className="container-g6">
                        <div className="image2" />
                    </div>
                    <img className="containerIcon5" alt="9" src={imag9} />
                </div>
                <div className="heading2">
                    <b className="gamesNoBrasil">Games no Brasil movimentou</b>
                    <b className="jogos">+600 jogos</b>
                    <b className="bilhesDeDlares"> 2,3 bilhões de dólares </b>
                    <b className="milhesDePlayers">100 milhões de players</b>
                </div>
            </div>




            <div className="section-br">
                <div className="heading3">
                    <b className="conheaOsJogos">Conheça os jogos brasileiros</b>
                </div>
                <div className="radiogroup">
                    <div className="backgroundshadow" />
                    <div className="radioScreens">Destaques</div>
                    <div className="radioUi">Fantasia</div>
                    <div className="radioFlows">Ação</div>
                    <div className="radioText">Corrida & velocidade</div>
                </div>
                <div className="container-b1">
                    <div className="figure">
                        <div className="figcaptionProfile">Horizon Chase</div>
                        <div className="container-b2">
                            <img className="imageIcon1" alt="" src={Game1} />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure1">
                        <div className="figcaptionWallet">Dandara</div>
                        <div className="containerb2">
                            <img className="imageIcon1" alt="" src={Game2} />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure2">
                        <div className="figcaptionWelcome">Toren</div>
                        <div className="containerb2">
                            <img className="imageIcon1" alt="" src={Game3} />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure3">
                        <div className="figcaptionAccount">ARIDA</div>
                        <div className="containerb2">
                            <img className="imageIcon1" alt="" src={Game4} />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure4">
                        <div className="figcaptionHome">A Lenda do Herói</div>
                        <div className="containerb2">
                            <img className="imageIcon1" alt="" src={Game5} />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure5">
                        <div className="figcaptionSubscription">No Heroes Here</div>
                        <div className="containerb2">
                            <img className="imageIcon1" alt="" src={Game6} />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure6">
                        <div className="figcaptionLogin">Celeste</div>
                        <div className="containerb2">
                            <img className="imageIcon1" alt="" src={Game7} />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure7">
                        <div className="figcaptionSettings">Necrosphere</div>
                        <div className="containerb2">
                            <img className="imageIcon1" alt="" src="image.png" />
                            <div className="overlayshadow" />
                        </div>
                    </div>
                    <div className="figure8">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure9">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure10">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure11">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure12">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure13">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure14" >
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure15">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure16">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure17">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure18" >
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                    <div className="figure19">
                        <div className="figcaption" />
                        <div className="overlayshadow8" />
                    </div>
                </div>
            </div>



        </C.Container>
    )

}

export default Landing;

