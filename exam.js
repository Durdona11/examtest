function testYourKnowledge() {
    const Savollar = [
        {
            savol: "Nyutonning 1-qonuni nomi?",
            variant: ["A. aks ta'sir", "B. inersiya", "C. butun olam tortishish", "D. traektoriya"],
            javobi: "B"
        },
        {
            savol: "Kamalakning 2-rangi nomi nima?",
            variant: ["A. qizil", "B. zarg'aldoq", "C. sariq", "D. binafsha"],
            javobi: "B"
        },
        {
            savol: "O'zbekistonning poytaxti qayshi shahar ?",
            variant: ["A. Toshkent", "B.Buxoro", "C. Samarqand", "D. Qo'qon"],
            javobi: "A"
        },
        {
            savol: "Ominaning 130 ming puli bor.U pulining 10% ukasiga berdi.U qancha pulni ukasiga bergan ?",
            variant: ["A. 11 ming", "B. 4 ming", "C. 10 ming", "D. 13 ming"],
            javobi: "D"
        },
        {
            savol: "lne nimaga teng ?",
            variant: ["A. 2", "B. 1", "C. 3.14", "D. 10"],
            javobi: "B"
        },
        {
            savol: "(2*3+6/3)+2= ?",
            variant: ["A. 10", "B. 4", "C. 5", "D. 6"],
            javobi: "A"
        },
        {
            savol: "100mN=...kN ?",
            variant: ["A. 1", "B. 0.001", "C. 0.01", "D.0.1"],
            javobi: "D"
        },
        {
            savol: "Bir kunda necha soat bor ?",
            variant: ["A. 11", "B. 24", "C. 10", "D. 13"],
            javobi: "B"
        },
        {
            savol: "Bir soatda necha daqiqa bor ?",
            variant: ["A. 30", "B. 40", "C. 60", "D. 50"],
            javobi: "C"
        },
        {
            savol: "5x2?",
            variant: ["A. 11", "B. 4", "C. 10", "D. 13"],
            javobi: "C"
        },
    ];

    let True = 0;
    let startTime = new Date();
    let userJavobi1 = " "

    for (let i = 0; i < Savollar.length; i++) {
        if ((null === userJavobi1)) break;
        userJavobi1 = prompt(Savollar[i].savol + "\nVariantlar: \n" + Savollar[i].variant.join("\n"), " ");
        let userJavobi = (null !== userJavobi1) ? (userJavobi1.toUpperCase()[0]) : " ";
        if (!(null === userJavobi1)) {
           
            while (1) {
                userJavobi = userJavobi1.toUpperCase()[0]
                if (userJavobi == Savollar[i].javobi) {
                    True++;
                    break;
                } else if ((userJavobi.charCodeAt() >= 65 && userJavobi.charCodeAt() <= 68)) {
                   
                    break;
                } else {
                    userJavobi1 = prompt("Variant belgilashda xato !!! \n Qayta urinib koring:" + Savollar[i].savol + "\nVariantlar: \n" + Savollar[i].variant.join("\n"), );
                    if ((null === userJavobi1)) break;
                }
            }
        } 
        else {
            alert("Afsuski siz birorta ham savolga to'g'ri javob bera olmadiz.Bilmizni oshirib yana qayta urinib ko'ring")
            break;
        }
    }
    let finishTime = new Date();
    alert(Savollar.length + " ta savoldan " + True + " ta to'g'ri bajardingiz.\n" + `Siz ${calculateDate(finishTime,startTime)} sekundda tugatdingiz!!`);
}
const calculateDate = (finish,start) => {
    let a = (finish.getTime()-finish.getTime()%1000)/1000;
    let b = (start.getTime()-start.getTime()%1000)/1000;
    return a - b;
} 

testYourKnowledge()