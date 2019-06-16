Calculadora = {
    resultado: document.getElementById('display'),
    reset: document.getElementById('on'),
    igual: document.getElementById('igual'),
    punto: document.getElementById('punto'),
    suma: document.getElementById('mas'),
    resta: document.getElementById('menos'),
    multiplicar: document.getElementById('por'),
    dividir: document.getElementById('dividido'),
    signo: document.getElementById('sign'),
    cero: document.getElementById('0'),
    uno: document.getElementById('1'),
    dos: document.getElementById('2'),
    tres: document.getElementById('3'),
    cuatro: document.getElementById('4'),
    cinco: document.getElementById('5'),
    seis: document.getElementById('6'),
    siete: document.getElementById('7'),
    ocho: document.getElementById('8'),
    nueve: document.getElementById('9'),

    init: function() {
        operandoa= '';
        operandob= '';
        operando = '';
        this.mostrar()
        this.animate()
        
        
       
    },
    

    
    
    

    mostrar: function() {
        this.uno.addEventListener('click', function() {
            document.getElementById('display').textContent += '1';
        });
        this.dos.addEventListener('click',function(){
            document.getElementById('display').textContent += '2';
        });
        this.tres.addEventListener('click',function(){
            document.getElementById('display').textContent += '3';
        });
         this.cuatro.addEventListener('click',function(){
            document.getElementById('display').textContent += '4';
        });
          this.cinco.addEventListener('click',function(){
            document.getElementById('display').textContent += '5';
        });
           this.seis.addEventListener('click',function(){
            document.getElementById('display').textContent += '6';
        });
            this.siete.addEventListener('click',function(){
            document.getElementById('display').textContent += '7';
        });
             this.ocho.addEventListener('click',function(){
            document.getElementById('display').textContent += '8';
        });
              this.nueve.addEventListener('click',function(){
            document.getElementById('display').textContent += '9';
        });
               this.cero.addEventListener('click',function(){
            document.getElementById('display').textContent += '0';
        });
             this.reset.addEventListener('click',function(){
            document.getElementById('display').textContent = '0';
        });
            this.suma.addEventListener('click',function(){
            operandoa = document.getElementById('display').textContent
            operando = '+'; 
            document.getElementById('display').textContent= '';
        });
            this.resta.addEventListener('click',function(){
            operandoa = document.getElementById('display').textContent
            operando = '-'; 
            document.getElementById('display').textContent= '';
        });
            this.multiplicar.addEventListener('click',function(){
            operandoa = document.getElementById('display').textContent
            operando = '*'; 
            document.getElementById('display').textContent= '';
        });
            this.dividir.addEventListener('click',function(){
            operandoa = document.getElementById('display').textContent
            operando = '/'; 
            document.getElementById('display').textContent= '';
        });
            this.signo.addEventListener('click',function(){
            if(document.getElementById('display').textContent == document.getElementById('display').textContent){
            document.getElementById('display').textContent = -document.getElementById('display').textContent
            }

        });
            this.punto.addEventListener('click',function(){
                if(document.getElementById('display').textContent.indexOf('.') == -1){
            document.getElementById('display').textContent = document.getElementById('display').textContent + '.'
        }
    
        });
            this.igual.addEventListener('click',function(){
                operandob = document.getElementById('display').textContent
                var res = 0;
            switch(operando){
                case '+':
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;

                 case '-':
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;

                case '*':
                res= parseFloat(operandoa) * parseFloat(operandob);
                break;

                case '/':
                res = parseFloat(operandoa) / parseFloat(operandob);
            };
            
                document.getElementById('display').textContent = res;
        });
            },

    
    animate: function() {
        this.uno.addEventListener("click", function() {
            document.getElementById('1').style.transform="scale(0.9)";
        setTimeout(function() {document.getElementById('1').style.transform="scale(1)";}, 200);
        });
        this.dos.addEventListener('click',function(){
            document.getElementById('2').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('2').style.transform='scale(1)';},200);
        });
        this.tres.addEventListener('click',function(){
            document.getElementById('3').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('3').style.transform='scale(1)';},200);
        });
        this.cuatro.addEventListener('click',function(){
            document.getElementById('4').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('4').style.transform='scale(1)';},200);
        });
        this.cinco.addEventListener('click',function(){
            document.getElementById('5').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('5').style.transform='scale(1)';},200);
        });
        this.seis.addEventListener('click',function(){
            document.getElementById('6').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('6').style.transform='scale(1)';},200);
        });
        this.siete.addEventListener('click',function(){
            document.getElementById('7').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('7').style.transform='scale(1)';},200);
        });
        this.ocho.addEventListener('click',function(){
            document.getElementById('8').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('8').style.transform='scale(1)';},200);
        });
        this.nueve.addEventListener('click',function(){
            document.getElementById('9').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('9').style.transform='scale(1)';},200);
        });
        this.cero.addEventListener('click',function(){
            document.getElementById('0').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('0').style.transform='scale(1)';},200);
        });
        this.suma.addEventListener('click',function(){
            document.getElementById('mas').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('mas').style.transform='scale(1)';},200);
        });
        this.resta.addEventListener('click',function(){
            document.getElementById('menos').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('menos').style.transform='scale(1)';},200);
        });
        this.multiplicar.addEventListener('click',function(){
            document.getElementById('por').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('por').style.transform='scale(1)';},200);
        });
        this.dividir.addEventListener('click',function(){
            document.getElementById('dividido').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('dividido').style.transform='scale(1)';},200);
        });
        this.reset.addEventListener('click',function(){
            document.getElementById('on').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('on').style.transform='scale(1)';},200);
        });
        this.signo.addEventListener('click',function(){
            document.getElementById('sign').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('sign').style.transform='scale(1)';},200);
        });
        this.punto.addEventListener('click',function(){
            document.getElementById('punto').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('punto').style.transform='scale(1)';},200);
        });
        this.igual.addEventListener('click',function(){
            document.getElementById('igual').style.transform='scale(0.9)';
        setTimeout(function(){document.getElementById('igual').style.transform='scale(1)';},200);
        });
    },
   
    }
        
    


Calculadora.init();
