{
    //função de configuração do menu
    const contextMenu = document.querySelector(".context");
    const updateMenuPosition = (x,y) => {
        const maxLeftValue = window.innerHeight - contextMenu.offsetWidth;
        const maxTopValue = window.innerHeight - contextMenu.offHeight;

        contextMenu.style.left=`${x}px`;
        contextMenu.style.top=`${y}px`;
        contextMenu.classList.add("active");
    };
    document.addEventListener("contextmenu", (ev) =>{
        ev.preventDefault();
        updateMenuPosition(ev.clientX, ev.clientY);
    })
    }
    window.addEventListener("click",function(){
        document.getElementById(".context").classList.remove("active");
    });
    //função de copiar
    function myFunction() {
       
        var copyText = document.getElementById("copy");
      
        
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
      
         
        navigator.clipboard.writeText(copyText.value);
      
        
        alert("O texto copiado foi: " + copyText.value);
      }
    
    //função de abrir uma nova página
    document.getElementById('newPag').addEventListener('click', function (eve){
        const li = eve.currentTarget
         window.open ('http://www.google.com/.');

    });
   

    //função de sumir o menu
    window.addEventListener("context", function (event){
        event.preventDefault();
        var contextElement = document.getElementById("context");
        contextElement.style.top = event.offsetY + "px";
        contextElement.style.left = event.offsetX + "px";
        contextElement.classList.add("active");

    });
    window.addEventListener("click", function(){
        document.getElementById("context-menu").classList.remove("active");
    })
    document.addEventListener("click", () =>{
        contextMenu.style.visibility = "visible";
    });
    document.addEventListener("click", () =>{
        contextMenu.style.visibility = null;
    })
    document.querySelector("#addUser").addEventListener("click", ()=>{
        alert("Você está adicionando um usuário ");
    })
   
   
    document.querySelector('#themeSwitcher').addEventListener('click', (evento)=>{
        evento.target.classList.toggle('ball-move');
        document.body.classList.toggle('dark');
        
    })
    //função de abrir uma nova página
    document.getElementById('create').addEventListener('click', function (vent){
        const li = vent.currentTarget
         window.open ('https://github.com/davitkblade?tab=repositories');

    });

