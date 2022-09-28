import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
function Home({props,statusOne}){
    const [ButtonO, setButtonO] = useState(false);
    const [ButtonS, setButtonS] = useState(false);
const navigate = useNavigate();


const dados = [
   ["¿Tienes sobrepeso?"],
   ["Enhorabuena has sido seleccionado para descubrir el secreto de la tónica india"],
];

function MoveVideo(){
    setTimeout(() => {
        navigate("/video");
    }, 100);
    
}
function Dados(){
    if(ButtonO===false && ButtonS===false){
      return  dados[0];
    }else if(ButtonS===true && ButtonO===true){
       return dados[1]
    }else{
        return dados[1];
    }
}
useEffect(()=>{
   
    if(ButtonS===true){
        MoveVideo();
    }
},[ButtonS]);


 return (
     <div className="container">
        <div className="button-content">
            <div className="top-text">
               ¡Todo listo!, ¿qué necesitas?
            </div>
            <div className="center-text">
             
            <div className='header-post'>{Dados()}</div>
           
               {ButtonO===false ? 
                <>
                <button onClick={() => setButtonO(true)}  className="button-enter">SÍ</button>
                <button onClick={() => setButtonO(true)}  className="button-enter-red">NO</button>
                </> :
                 <>
                <button onClick={() => setButtonS(true)}  className="button-enter">HAZ CLICK PARA CONTINUAR</button>
                </>
                }
           

       

            </div>
        
        </div>
       
     </div>
 );
}



export default Home;