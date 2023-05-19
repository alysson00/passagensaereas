var readline= require('readline-sync');

console.log('+ _ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
console.log('|                                              |')
console.log('|    1 - Comprar Passagem                      |')
console.log('|    2 - Consultar Voos                        |')
console.log('|    3 - Mapa de Assento                       |')
console.log('|    4 - Emitir Ticket                         |')
console.log('|    0 - Encerrar o programa                   |')
console.log('+ _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ +')

var informacao = readline.question('Digite uma opcao:')

if(informacao != 1 && informacao != 2 && informacao != 3 && informacao != 4 && informacao != 0){
    console.log('Opção inexistente')
}
else if(informacao){
    if(informacao != 0){

        if(informacao == 1){
            console.log('Você está em -> Comprar Passagem')
            var nome = readline.question('Nome: ');
            var sobrenome = readline.question('Sobrenome: ');
            var idade = readline.question('Idade: ');
            while(idade <= 17){
                var idade = readline.question('Idade: ');
            }
            var assento = readline.question('Assento: ');
            var origem = readline.question('Origem: ');
            var destino = readline.question('Destino: ');
            var svoo = ('Confirmado')
            
            console.log('                                                ')
            console.log('+ _ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
            console.log('                                                ')
            console.log(' Você está em -> Comprar Passagem               ')
            console.log('                                                ')
            console.log(' *Resumo da Compra*                             ')
            console.log('                                                ')
        
            var cliente = console.log('Cliente: '+nome+" "+sobrenome)
                          console.log('Idade: '+idade)
                          console.log('Assento: '+assento)
                          console.log('Voo: '+origem+' X '+destino)
                          console.log('Status do voo: '+svoo)
                          console.log('Valor: R$422,00')         
        }
        else if(informacao == 2){
            console.log('+ _ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
            console.log('| Você está em -> Consulta de Voos             |')
            console.log('| Origem                    X         Destino  |')
            console.log('| _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ |')
            console.log('| Presidente Prudente                 Dublin   |')
            console.log('| Presidente Prudente                 Ceará    |')
            console.log('| Presidente Prudente                 São Paulo|')
            console.log('| Presidente Prudente                 New York |')
            console.log('+ _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ +')
        
            var escolha = readline.question('Escolha seu destino: ')
        }
        else if(informacao == 3){
            console.log('+ _ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
            console.log('| Você está em -> Mapa de Assento              |')
            console.log('------------------------------------------------')
            console.log('      A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12       ')
            console.log('      B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12     ')
            console.log('------------------------------------------------')
        
            var escolha1 = readline.question('Escolha seu assento: ')
        
            var assentoValido = false
        
            while(assentoValido == false){

                for(let assento = 1; assento < 13; assento ++){
                    if(escolha1 == "A" + assento || escolha1 == "B" + assento){
                        assentoValido = true
                    }
                }
                if(assentoValido == false){
                    console.log("|  Este assento não está disponível")
                    console.log("|  Tente escolher entre: A1 - A2 - A3 - A4 - A5 - A6 - A7 - A8 - A9 - A10 - A11 - A12")
                    console.log("|                        B1 - B2 - B3 - B4 - B5 - B6 - B7 - B8 - B9 - B10 - B11 - B12")
                    escolha1 = readline.question('Escolha seu assento: ')
                }
            }


        }
        else if(informacao == 4){
            console.log('+ _ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
            console.log('  Você está em -> Emitir Ticket                 ')
            console.log('                                                ')
            console.log('************************************************')
            console.log('*  OBRIGADO POR VIAJAR CONOSCO                 *')
            console.log('*  Cliente: '+cliente+'                     '+'*')
            console.log('*  Idade: '+idade+'                         '+'*')
            console.log('*  Origem/Destino: '+origem+' '+destino+'   '+'*')
            console.log('*  Status do voo: '+svoo+'                  '+'*')
            console.log('*                                              *')
            console.log('************************************************')
        }
    
    }
}
