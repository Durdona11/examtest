let questions=[
    {
        question:"Yumurtqa adabiy tilda nima bo'ladi?",
        variants:["a.tuxumbarak","b.jarkob","c.tuxum","d.qaynatma"],
        correctAnswer:"b",
    },
    {
        question: "Nyutonning 1-qonuni nomi?",
        variants: ["A. aks ta'sir", "B. inersiya", "C. butun olam tortishish", "D. traektoriya"],
        correctAnswer: "B"
    },
    {
        question: "Kamalakning 2-rangi nomi nima?",
        variants: ["A. qizil", "B. zarg'aldoq", "C. sariq", "D. binafsha"],
        correctAnswer: "B"
    },
    {
        question: "Ominaning 130 ming puli bor.U pulining 10% ukasiga berdi.U qancha pulni ukasiga bergan ?",
        variants: ["A. 11 ming", "B. 4 ming", "C. 10 ming", "D. 13 ming"],
        correctAnswer: "D"
    },
    {
        question: " ln e= nimaga teng ?",
        variants: ["A. 2", "B. 1", "C. 3.14", "D. 10"],
        correctAnswer: "B"
    },
    {
        question: "(2*3+6/3)+2= ?",
        variants: ["A. 10", "B. 4", "C. 5", "D. 6"],
        correctAnswer: "A"
    },
    {
        question: "100mN=...kN ?",
        variants: ["A. 1", "B. 0.001", "C. 0.01", "D.0.1"],
        correctAnswer: "D"
    },
 ];
 let counter=0;
 for (let i = 0; i < array.length; i++) {
    let userAnswer=prompt(i + 1 + ")"+ questions[i].question + questions[i].variants.join("\n") );
    if (userAnswer== questions[i].correctAnswer) {
       counter++; 
    }
 }
 alert("Siz :"+counter+"ta savolga to'g'ri javob berdingiz");