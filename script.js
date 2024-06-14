// Definindo vetores no escopo global
var nomes = [];
var idades = [];
var empresas = [];


//PONTOS
document.addEventListener("DOMContentLoaded", () => {
    const pointsInput = document.getElementById("pointsInput");
    const imageSelector = document.getElementById("imageSelector");

    const totalPoints = {
        image1: 0,
        image2: 0,
        image3: 0,
        image4: 0,
        image5: 0
    };

    pointsInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const selectedImage = imageSelector.value;
            const value = parseInt(pointsInput.value, 10) || 0;
            totalPoints[selectedImage] += value;

            const image = document.getElementById(selectedImage);
            const left = totalPoints[selectedImage] * 10;
            image.style.left = `${left}px`;

            pointsInput.value = '';

            if (totalPoints[selectedImage] >= 115) {
                alert(`Parabéns! ${selectedImage} venceu!`);

                // Reiniciar o jogo
                for (let key in totalPoints) {
                    totalPoints[key] = 0;
                    const img = document.getElementById(key);
                    img.style.left = "0px";
                }
            }
        }
    });
});


    //Planilha
    ZOHO.CREATOR.init()
    .then(function(data) {
        var config = { 
            appName : "balons",
            reportName : "Planilha1_Report" 
        }
        
        ZOHO.CREATOR.API.getAllRecords(config).then(function(response){
            var recordArr = response.data;
            
            
            nomes = [];
            idades = [];
            empresas = [];

            for (var index in recordArr) {
                var Nome = recordArr[index].Nome;
                var Idade = recordArr[index].Idade;
                var Empresa = recordArr[index].Empresa;
                
                //Armazena os valores nos arrays
                nomes.push(Nome);
                idades.push(Idade);
                empresas.push(Empresa);
                
            }

        });
    });


// Função correta
function Cartinha(numero) {
    // Verificar se o número está dentro do intervalo de 0 a 4
    if (numero >= 0 && numero < nomes.length) {
        const info = {
            nome: nomes[numero],
            idade: idades[numero],
            empresa: empresas[numero]
        };

        // Atualizar os elementos do HTML com as informações do competidor selecionado
        document.getElementById("nomeht").innerText = `Nome: ${info.nome}`;
        document.getElementById("idadeht").innerText = `Idade: ${info.idade}`;
        document.getElementById("empresaht").innerText = `Empresa: ${info.empresa}`;
        
    }
}