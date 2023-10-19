  let data = {
    module: {
      number: 1,
      name: "Mixed",
      questions: 10,
      revision: "2023-10-18",
    },
    questions: [
      {
        number: 1,
        question: "Eighteen thousandths, written as a decimal, is:",
        answers: ["0.0018", "0.018", "0.18", "1.8"],
        correct_answer: "0.0018",
      },
      {
        number: 2,
        question: "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
        answers: ["12", "13", "14", "15"],
        correct_answer: "15",
      },
      {
        number: 3,
        question: "What is 7 multiplied by 9?",
        answers: ["56", "63", "72", "81"],
        correct_answer: "63",
      },
      {
        number: 4,
        question: "What is the square root of 144?",
        answers: ["12", "14", "16", "18"],
        correct_answer: "12",
      },
      {
        number: 5,
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Jupiter", "Mars", "Venus"],
        correct_answer: "Mars",
      },
      {
        number: 6,
        question: "What is the capital of France?",
        answers: ["Berlin", "London", "Madrid", "Paris"],
        correct_answer: "Paris",
      },
      {
        number: 7,
        question: "What is the largest mammal in the world?",
        answers: ["African Elephant", "Blue Whale", "Giraffe", "Lion"],
        correct_answer: "Blue Whale",
      },
      {
        number: 8,
        question: "Which gas do plants absorb from the atmosphere?",
        answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
        correct_answer: "Carbon Dioxide",
      },
      {
        number: 9,
        question: "What is the largest organ in the human body?",
        answers: ["Brain", "Heart", "Liver", "Skin"],
        correct_answer: "Skin",
      },
      {
        number: 10,
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Argon"],
        correct_answer: "Nitrogen",
      },
    ],
  }
    let stopApp=true;
    while (stopApp) {
        let a= +prompt ( "1.Testni boshlash\n2.Testni tahrirlash\n3.Savollar ro'yhati\n4.Test qo'shish\n5.Testni o'chirish\n 0.Chiqish");
        switch (a) {
            case 1:
                startTest(data.questions);
                break;
            case 2:
                let password = prompt("Parolni kiriting:","12341234");
                if(password=="12341234")editTest(data.questions);
                break;
            case 3:
                alert("Savollar ro'yhati: \n" +getQuestionsList(data.questions) );
                break;
            case 4:
                addTest(data.questions);
                break;
                case 5:
                  let n=prompt(getQuestionsList(data.questions));
                  if(n){
                  alert(
                    "Savol "+data.questions[n-1]+"\n"+"Javoblar "+data.questions[n-1]+"\n"+"To'g'ri javob "+
                    data.questions[n-1].correct_answer
                  );
                  }
                  break;
            case 0:
                stopApp = false;
                break;
                default:
                  alert("Yuqoridagi variantlardan birini tanlang!!!");
        }
      }
      function getQuestionsList(questions) {
        let List = "";
        for (let i = 0; i < questions.length; i++) {
          List += i + 1 + questions[i].question + "\n";
        }
        return List;
      }
    function toVariant(arr) {
       let newArr = arr.map((el, i) => {
        return String.fromCharCode(65 + i) + ") " + el;
      });
      return newArr;
    }
    function startTest(questions) {
      let counter = 0;
    for (let i = 0; i < questions.length; i++) {
      let userAnswer = prompt(i + 1 + ") " + questions[i].question + "\n" + toVariant(questions[i].answers).join("\n") );
      let  n = userAnswer.toLowerCase().charCodeAt(0) - 97 ;
      if (questions[i].answers[n]==questions[i].correct_answer) {
        counter++;
      }
    }
    alert("siz:" + counter + " ta savolga to'g'ri javob berdingiz");
    } 
    function editTest(questions) {
      let questionsList =
        "Tahrirlamoqchi bo`lgan savolning raqamini kiriting:\n " +
        getQuestionsList(questions);
    
      let editIndex = +prompt(questionsList);
      questions[editIndex - 1] = {
        question: prompt("Savolni kiriting: ", questions[editIndex - 1].question),
    
        answers: [
          prompt("a) variantni kiriting: ", questions[editIndex - 1].answers[0]),
          prompt("b) variantni kiriting: ", questions[editIndex - 1].answers[1]),
          prompt("c) variantni kiriting: ", questions[editIndex - 1].answers[2]),
          prompt("d) variantni kiriting: ", questions[editIndex - 1].answers[3]),
        ],
        correctAnswer: prompt(
          "To`g`ri javobni kiriting: ",
          questions[editIndex - 1].correct_answer
        ),
      };
      alert(getQuestionsList(questions));
    }
    function addTest(questions) {
      const question = prompt("Savolni kiriting: ");
      const a =prompt("1-variantni kiriting: ");
      const b =prompt("2-variantni kiriting: ");
      const c =prompt("3-variantni kiriting: ");
      const d =prompt("4-variantni kiriting: ");
      const correct_answer = prompt("To'g'ri javobni kiriting");
    
      const quizItem = {
        number: questions.length + 1,
        question: question,
        answers: [a, b,c, d],
        correct_answer: correct_answer,
      };
      questions.push(quizItem);
      alert("Savol muvafaqqiyatli qo'shildi!!!");
    }
    function deleteTest(questions) {
      let n = +prompt(
        "O'chirmoqchi bo'lgan savol raqamini kiriting\n\n" + getQuestionsList(questions)
      );
      questions.splice(n - 1, 1);
      alert(n + "-Savolni o'chirish");
    } 