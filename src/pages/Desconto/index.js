import React,{useEffect} from 'react';
import Depoimentos from './depoimentos';
import ReactPlayer from 'react-player';
import './style.css';
import imgOne from "../../assets/img/1img.png";
import imgTwo from "../../assets/img/2img.png";
import imgThree from "../../assets/img/3img.png";
import bonus from "../../assets/img/bonus.png";
import selo from "../../assets/img/selo.png";

function Desconto(){
    function openInNewTab(url) {
        window.open(url, '_blank').focus();
       }

    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
  
useEffect(()=>{
    const duration = 60*15; // Converter para segundos
        const display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
  
},[]);
return (

     <div className='container-dep'>
         <div className='content-dep'>
             <div className='header-desc'>
                 <h1>Espera un minuto, ¡acabas de obtener un 40 % de descuento en el método!</h1>
                 <h1 className='oferta'>Este descuento termina en:</h1>
             </div>
             <div id='timer'></div>
         
         {Depoimentos.map((dep,id) => {
             return(
        <div className='postagens'>
        <div className='postagens-name'>Testimonio de: {dep.nome}</div>
        <div className='postagens-video'><ReactPlayer url={dep.video} width="100%" height="100%" controls={false}/></div>
            </div>
             );
         })}
          <div className='button-create'>
             <h1 className='desconto-title'>Asegura tu descuento <span className='text-desc'>27,00 dólares por 23,00 dólares</span></h1>
         </div>
           <button onClick={() => openInNewTab('https://pay.hotmart.com/I72056899U?off=bfuoyjdv&checkoutMode=10')} className='button-desc'>CLIQUE AQUI PARA GARANTIR O SEU DESCONTO</button>
        <div className='slides'>
            <div className='content-header-top'><h1>(+) Depoimentos</h1></div>
     
        </div>

      
       
         <div className='garantia'>
            
             <h1 className='selo-text'>¡No tendrás ningún riesgo, ya que tienes 7 días de garantía si no te gusta el producto!</h1>
         </div>
         </div>
     </div>

);
}
export default Desconto;
