import '../Style/hero.css'

function Hero(){
    return(
    <div className='hero'>
        <div className='container'>
            <h1>Little Lemon </h1>
            <h2>Chicago</h2>
            <p> Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado po</p>
            <button>login</button>
        </div>
        <div className='img'>
        <img className='image'
        src={require('../Imagen/icons_assets/restaurant chef B.jpg')}
        alt='photo-chef'
        />
        </div>
        </div> 
    )
 }

 export default Hero