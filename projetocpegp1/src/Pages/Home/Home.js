import React from 'react';
import "./home.css";

function Home(){
    return(
        <div> <div class="header">
        <a href="/home" > <Logo /> </a>
        <div class="header-right">
             <a class="active" href="/cadastro">Vire um membro já!</a>
            <a href="/login">Acesse sua conta</a>
        </div>
        </div>
        <div class="page">

        <div className="background">
    </div> 


        <div className="containerQuadradoeCrash">
            <div className="quadradoCinza">
            " Jogue centenas de jogos de alta qualidade diretamente pelo seu PC ou via nuvem. Atualizações constantes, você sempre terá o que jogar!!";
            </div>
            <div className="crash4"></div>
        </div>
       
       <div className="container2RetanguloeJogos">

             <div className="retanguloCinza1">"Os maiores sucessos estão aqui!!"</div>

        <div className="containerRetangulosJogosHome"> 
                <div className="retanguloJogo1"></div>
                <div className="retanguloJogo2"></div>
                <div className="retanguloJogo3"></div>
                <div className="retanguloJogo4"></div>
            </div>
       </div>
    
        <div className="containerFarCryeJogos">

            <div className="elipseFarCry"></div>

        </div>

        <div className="containerJogosDebaixo">
                    <div className="quadradoMenorJogoAcima"></div>
                    <div className="quadradoMenorJogoAbaixo"></div>
                    <div className="quadradoMenorJogoDireita"></div>
                    <div className="quadradoMenorJogoEsquerda"></div>
                </div>

        

        <div className="quadradoRoxoCentral"></div>

        <div className="containerEscolhaDePlanos">

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Iceland"></link>
          
        
          <div className="container_planos">
            <div className="SelecioneOPlano">
                <h1 className="selecione"> Selecione o plano de interesse</h1>
            </div>
           
              <div className="planos">
              
                
                <div className="planoStarter">
                  <h2>Starter</h2>
                    <p>
                    - Acesso a 100 jogos
                    <br/>
                    - Qualidade Full-HD
                    <br/>
                    - Catálogo atualizado constantemente
                    <br/>
                    </p>
                    <br/> <br/> <br/> <br/> <br/>
                    <br/> <br/> <br/> <br/> <br/>
                    <br/> <br/> <br/> <br/>
                    <h4>
                    <a href="/cadastro">R$ 14,90</a>
                    </h4>
                  
                </div>
                

                <div className="planoMedium">
                <h2>Medium</h2>
                  <p>
                    - Acesso a 100 jogos
                    <br/>
                    - Qualidade Full-HD
                    <br/>
                    - Catálogo atualizado constantemente
                    <br/>
                    - Retrocompatibilidade
                    <br/>
                    - Descontos exclusivos
                    <br/>
                  </p>
                  <br/> <br/> <br/> <br/> <br/>
                  <br/> <br/> <br/> <br/> <br/>
                  <br/> <br/>
                  
                  <h4>
                  <a href="/cadastro">R$ 24,90</a>
                    </h4>
               
                </div>
                

                <div className="planoPro">
                <h2>Pro</h2>
                <p>
                    - Biblioteca completa
                    <br/>
                    - Qualidade Full-HD
                    <br/>
                    - Catálogo atualizado constantemente
                    <br/>
                    - Retrocompatibilidade
                    <br/>
                    - Descontos exclusivos
                    <br/>
                    - Use em vários dispositivos simultaneamente
                    <br/>
                    - Lançamentos disponíveis no primeiro dia
                    <br/> 
                    - Acesso a serviços parceiros
                    <br/> <br/> <br/> <br/> <br/> 
                    <h4>
                    <a href="/cadastro">R$ 32,90</a>
                    </h4>     
                </p>
               
                </div>


                <div className="planoUltimate">
                  <h2>Ultimate</h2>
                  <p>
                      - Biblioteca completa
                      <br/>
                      - Qualidade 4K
                      <br/>
                      - Catálogo atualizado constantemente
                      <br/>
                      - Retrocompatibilidade
                      <br/>
                      - Descontos exclusivos
                      <br/>
                      - Use em vários dispositivos simultaneamente
                      <br/>
                      - Jogos na nuvem
                      <br/>
                      - Lançamentos disponíveis no primeiro dia
                      <br/> 
                      - Acesso a serviços parceiros
                      <br/>
                      - Acesso vitalício a 2 jogos todo mês     
                  </p>
                  <br/>
                      <h4>
                      <a href="/cadastro">R$ 39,90</a>
                      </h4>
                
                </div>

              </div>  
          </div>
        

        </div>
        

        <div class="quadradoFeedbacks">
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Iceland"></link>
            <div className="tituloDoFeedback">
                <h1 className="vejaFeedback">Veja o feedback de nossos usuários</h1>
            </div>
        
        <div className="containerdosFeedbacks">

        
            
            <div class="feedback1"></div>

            <div class="feedback2"></div>

            <div class="feedback3"></div>

            <div class="feedback4"></div>

            <div class="feedback5"></div>
        </div>
        </div>
      
      <div className="retânguloCinzaAbaixo"></div>

      <div className="espacoAbaixoNulo"></div>

      
     
    
      

      <div className="footer"></div>
      <a href="/home" > <Logo /> </a>
    </div>
    
    </div>
    

    
    );    
   
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



export default Home;



