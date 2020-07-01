const calc = (EnteredSymb, result) =>
{
    switch (EnteredSymb)
    {
        case ".":
            return (result+".");
        case "%":
            result = calcBefore(result);
            return (result+"|%|");
        case "-":
            result =calcBefore(result);
            return (result+"|-|");
        case "+":
            result =calcBefore(result);
            return (result+"|+|");
        case "/":
            result =calcBefore(result);
            return (result+"|/|");
        case "x":
            result =calcBefore(result);
            return (result+"|x|");   
        default:
            {
                if(!isNaN(EnteredSymb))
                {
                    result =  String(result)+String(EnteredSymb);
                }
                else{
                    result = "";
                    alert("ERROR: NaN");
                }
                return result;
            }
    }
}

//считает результат операции, который был до нажатия новой операции (|)
const calcBefore = (res)  =>
{
    res = res.split("|");
  //  console.log(res+" ============================")
   // if(res[2]!="")
        switch (res[1])
        {
            case "%":
                return String(Number(res[0])/100*Number(res[2]));
            case "-":
                return String(Number(res[0])-Number(res[2]));
            case "+":
                return String(Number(res[0])+Number(res[2]));
            case "/":
                return String(Number(res[0])/Number(res[2]));
            case "x":
                return String(Number(res[0])*Number(res[2]));
            default:
                return String(res.join());
        }
}
