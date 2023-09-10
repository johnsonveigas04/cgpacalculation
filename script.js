function fetchData(){
    regNo=document.getElementById('RegNo').value;
   
    const apiUrlFor4 = `https://api.apispreadsheets.com/data/Ba4mipcuwFhRAmDN/?query=select * from Ba4mipcuwFhRAmDN where RegNo='${regNo}'`;
    const apiUrlFor3=`https://api.apispreadsheets.com/data/AADDTgDwZnlLeqDv/?query=select * from AADDTgDwZnlLeqDv where RegNo='${regNo}'`;
    const apiUrlFor1=`https://api.apispreadsheets.com/data/PONSQkiOxtKZ345r/?query=select * from PONSQkiOxtKZ345r where RegNo='${regNo}'`;
    //console.log(reqUrl);
    fetch(apiUrlFor4)
  .then((res) => {
    if (res.status === 200) {
      // SUCCESS
      res
        .json()
        .then((data) => {
          if (data.data.length > 0) {
            // Assuming there's only one record for the given RegNo
            const studentData = data.data[0]; // Get the first record
            const { SUB1, SUB2, SUB3, SUB4, SUB5 } = studentData;
            
            document.getElementById('ce17').value = studentData.SUB1;
            document.getElementById('ce18').value = studentData.SUB2;
            document.getElementById('ce19').value = studentData.SUB3;
            document.getElementById('ce20').value = studentData.SUB4;
            document.getElementById('ce21').value = studentData.SUB5;
                                    

            // Now you have the subject marks in separate variables
          } else {
            console.log("No data found for the given RegNo");
          }
        })
        .catch((err) => console.log(err));
    } else {
      // ERROR
    }
  });
  fetch(apiUrlFor3)
  .then((res) => {
    if (res.status === 200) {
      // SUCCESS
      res
        .json()
        .then((data) => {
          if (data.data.length > 0) {
            // Assuming there's only one record for the given RegNo
            const studentData = data.data[0]; // Get the first record
            const { SUB1, SUB2, SUB3, SUB4, SUB5 } = studentData;
            
            document.getElementById('ce12').value = studentData.SUB1;
            document.getElementById('ce13').value = studentData.SUB2;
            document.getElementById('ce14').value = studentData.SUB3;
            document.getElementById('ce15').value = studentData.SUB4;
            document.getElementById('ce16').value = studentData.SUB5;
                                    

            // Now you have the subject marks in separate variables
          } else {
            console.log("No data found for the given RegNo");
          }
        })
        .catch((err) => console.log(err));
    } else {
      // ERROR
    }
  });

  fetch(apiUrlFor1)
  .then((res) => {
    if (res.status === 200) {
      // SUCCESS
      res
        .json()
        .then((data) => {
          if (data.data.length > 0) {
            // Assuming there's only one record for the given RegNo
            const studentData = data.data[0]; // Get the first record
            const { SUB1, SUB2, SUB3, SUB4, SUB5 } = studentData;
            
            document.getElementById('ce1').value = studentData.SUB1;
            document.getElementById('ce2').value = studentData.SUB2;
            document.getElementById('ce3').value = studentData.SUB3;
            document.getElementById('ce4').value = studentData.SUB4;
            document.getElementById('ce5').value = studentData.SUB5;
                                    

            // Now you have the subject marks in separate variables
          } else {
            console.log("No data found for the given RegNo");
          }
        })
        .catch((err) => console.log(err));
    } else {
      // ERROR
    }
  });
}




function myFunction() {
    const resultElement = document.getElementById("cc1");
    const resulttable = document.getElementById("resulttable");
    

// Initialize arrays to store input and credit values for each semester
const input = [];
const cred = [];
const elements=[];
let sem=1;
let creditTotal;
let cgpa1;

// Loop through 4 semesters
for (let i = 1; i <= 21; i++) {
  // Get the input and credit values for each semester
  const inputs = parseFloat(document.getElementById(`ce${i}`).value);
  const credit = parseFloat(document.getElementById(`credit${i}`).value);

  // Push the values into the respective arrays
  input.push(inputs);
  cred.push(credit);
}

// Now, you have the input and credit values for all 4 semesters in the arrays 'inputs' and 'credits'.


const grades = CalculateGrade(sem,input[0], input[1], input[2], input[3], input[4],input[5],cred[0],cred[1],cred[2],cred[3],cred[4],cred[4]);
sem=2;

const grades1 = CalculateGrade(sem,input[5], input[6], input[7], input[8], input[9],input[10],cred[5],cred[6],cred[7],cred[8],cred[9],cred[10]);
sem=3;
const grades2 = CalculateGrade(sem,input[11], input[12], input[13], input[14], input[15],input[14],cred[11],cred[12],cred[13],cred[14],cred[15],cred[14]);
sem=4;
const grades3 = CalculateGrade(sem,input[16], input[17], input[18], input[19], input[20],input[19],cred[16],cred[17],cred[18],cred[19],cred[20],cred[19]);

let creditEarned= grades[0]+grades1[0]+grades2[0]+grades3[0];
let totalgrade= grades[1]+grades1[1]+grades2[1]+grades3[1];

for(let i=1; i<=12; i++){
    const elementId = `cc${i}`;
   
    
    const elementName = document.getElementById(elementId);
    elements.push(elementName);

}
resulttablediv=document.getElementById('resulttable');
resulttablediv.style.display="block";
elements[0].textContent=grades[0];
elements[4].textContent=grades[1];
elements[8].textContent=grades[2];
elements[1].textContent=grades1[0];
elements[5].textContent=grades1[1];
elements[9].textContent=grades1[2];
elements[2].textContent=grades2[0];
elements[6].textContent=grades2[1];
elements[10].textContent=grades2[2];
elements[3].textContent=grades3[0];
elements[7].textContent=grades3[1];
elements[11].textContent=grades3[2];

const creditval=document.getElementById('creditval');
const cgpavalue=document.getElementById('cgpaval');
const conversionvalue=document.getElementById('conversionval');

creditval.textContent=creditEarned;
let tempval=totalgrade/creditEarned;

const roundedNumber1 = (Math.round(tempval * 100) / 100).toFixed(2);
let conversiontotal=((roundedNumber1-0.75)*10);
cgpavalue.textContent=roundedNumber1;
conversionvalue.textContent=conversiontotal;


    

/*

   const result1=number2/number1;
   const result2=number4/number3;
   const result3=number6/number5;
   const result4=number8/number7;

   const TotalCredit= number1+number3+number5+number7;

   const roundedNumber1 = parseFloat(result1.toFixed(2));
const roundedNumber2 = parseFloat(result2.toFixed(2));
const roundedNumber3 = parseFloat(result3.toFixed(2));
const roundedNumber4 = parseFloat(result4.toFixed(2));
   const cgpaTotal= (roundedNumber1+roundedNumber2+roundedNumber3+roundedNumber4)/4;
   const roundedNumber = (Math.round(cgpaTotal * 100) / 100).toFixed(2);
   const temp=parseFloat(roundedNumber);
  const conversionresult= (temp-0.75)*10;
 resulttable.style.display="block";

  th1.textContent=number1;
  th2.textContent=number3;

  th3.textContent=number5;
  th4.textContent=number7;

  th5.textContent=number2;
  th6.textContent=number4;

  th7.textContent=number6;
  th8.textContent=number8;


  sg1.textContent=roundedNumber1;
  sg2.textContent=roundedNumber2;

  sg3.textContent=roundedNumber3;
  sg4.textContent=roundedNumber4;  
  
  creditEarned.textContent=TotalCredit;
  cgpaval.textContent=roundedNumber;
  conversionval.textContent=conversionresult;

  */ 
        
  function CalculateGrade(sem,a, b, c, d, e,f,grade1,grade2,grade3,grade4,grade5,grade6) {
    
    function calculateGradePoint(marks) {
        let points;
    
        switch (true) {
            case marks >= 91 && marks <= 100:
                points = 10;
                break;
            case marks >= 81 && marks <= 90:
                points = 9;
                break;
            case marks >= 71 && marks <= 80:
                points = 8;
                break;
            case marks >= 61 && marks <= 70:
                points = 7;
                break;
            case marks >= 51 && marks <= 60:
                points = 6;
                break;
            case marks >= 41 && marks <= 50:
                points = 5;
                break;
            case marks >= 31 && marks <= 40:
                points = 4;
                break;
            case marks >= 21 && marks <= 30:
                points = 3;
                break;
            case marks >= 11 && marks <= 20:
                points = 2;
                break;
            case marks >= 0 && marks <= 10:
                points = 1;
                break;
            default:
                points = "Invalid marks"; // Handle marks outside of defined ranges
        }
    
        return points;
    }

    /*
    function calculateGradePoint(mark) {
        switch (true) {
            case mark >= 90:
                return 10;
            case mark >= 80:
                return 9;
            case mark >= 70:
                return 8;
            case mark >= 60:
                return 7;
            case mark >= 50:
                return 6;
            case mark >= 40:
                return 5;
            case mark >= 30:
                return 4;
            default:
                return 0;
        }
    }*/
    /*
    function calculatePoint(mark) {
    switch (true) {
    case mark >= 45:
    return 10;
    case mark >= 40:
    return 9;
    case mark >= 35:
    return 8;
    case mark >= 30:
    return 7;
    case mark >= 25:
    return 6;
    case mark >= 20:
    return 5;
    case mark >= 15:
    return 4;
    default:
    return 0;
    }
    } */

    function calculatePoint(marks) {
        let points;
    
        switch (true) {
            case marks >= 45 && marks <= 50:
                points = 10;
                break;
            case marks >= 41 && marks <= 44:
                points = 9;
                break;
            case marks >= 36 && marks <= 40:
                points = 8;
                break;
            case marks >= 31 && marks <= 35:
                points = 7;
                break;
            case marks >= 26 && marks <= 30:
                points = 6;
                break;
            case marks >= 21 && marks <= 25:
                points = 5;
                break;
            case marks >= 16 && marks <= 20:
                points = 4;
                break;
            case marks >= 11 && marks <= 15:
                points = 3;
                break;
            case marks >= 6 && marks <= 10:
                points = 2;
                break;
            case marks >= 0 && marks <= 5:
                points = 1;
                break;
            default:
                points = "Invalid marks"; // Handle marks outside of defined ranges
        }
    
        return points;
    }
if(sem==1){
    const gradePointA = calculateGradePoint(a);
    const gradePointB = calculateGradePoint(b);
    const gradePointC = calculateGradePoint(c);
    const gradePointD = calculateGradePoint(d);
    const gradePointE = calculatePoint(e);

   // console.log(gradePointA,gradePointB,gradePointC,gradePointD,gradePointE);
    //console.log(gradePointA);
    cgpa1=((gradePointA*grade1)+(gradePointB*grade2)+(gradePointC*grade3)+(gradePointD*grade4)+(gradePointE*grade5));
    creditTotal=grade1+grade2+grade3+grade4+grade5;
} else if(sem==2){
    const gradePointA = calculateGradePoint(a);
    const gradePointB = calculateGradePoint(b);
    const gradePointC = calculateGradePoint(c);
    const gradePointD = calculateGradePoint(d);
    const gradePointE = calculateGradePoint(e);
    const gradePointF= calculatePoint(f);

    console.log(gradePointA,gradePointB,gradePointC,gradePointD,gradePointE,gradePointF);
    cgpa1=((gradePointA*grade1)+(gradePointB*grade2)+(gradePointC*grade3)+(gradePointD*grade4)+(gradePointE*grade5)+(gradePointF*grade6));
   
    creditTotal=grade1+grade2+grade3+grade4+grade5+grade6;

} else if(sem==3){
    const gradePointA = calculateGradePoint(a);
    const gradePointB = calculateGradePoint(b);
    const gradePointC = calculateGradePoint(c);
    const gradePointD = calculateGradePoint(d);
    const gradePointE = calculatePoint(e);
    console.log(grade1,grade2,grade3,grade4,grade5);
    cgpa1=((gradePointA*grade1)+(gradePointB*grade2)+(gradePointC*grade3)+(gradePointD*grade4)+(gradePointE*grade5));
    creditTotal=grade1+grade2+grade3+grade4+grade5;
}
else{
    const gradePointA = calculateGradePoint(a);
    const gradePointB = calculateGradePoint(b);
    const gradePointC = calculateGradePoint(c);
    const gradePointD = calculateGradePoint(d);
    const gradePointE = calculatePoint(e);
    console.log(grade1,grade2,grade3,grade4,grade5);
    cgpa1=((gradePointA*grade1)+(gradePointB*grade2)+(gradePointC*grade3)+(gradePointD*grade4)+(gradePointE*grade5));
    creditTotal=grade1+grade2+grade3+grade4+grade5; 
}
   
    
    
   // console.log(creditTotal);
    
   const cgpaVal = cgpa1 /  creditTotal;
   //console.log(cgpaVal);
   const roundedNumber = (Math.round(cgpaVal * 100) / 100).toFixed(2);
//console.log(roundedNumber);
    return [creditTotal,cgpa1,roundedNumber];
        
    
}
 
   
       
    


}
