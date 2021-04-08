using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIAssignment.Models
{
    public class CalcService
    {
        public double Add(Calculation calc)
        {
            return calc.InputOne + calc.InputTwo;
        }
        public double Subtract(Calculation calc)
        {
            return calc.InputOne - calc.InputTwo;
        }
        public double Multiply(Calculation calc)
        {
            return calc.InputOne * calc.InputTwo;
        }
        public double Divide(Calculation calc)
        {
            return calc.InputOne / calc.InputTwo;
        }
        public double Modulo(Calculation calc)
        {
            return calc.InputOne % calc.InputTwo;
        }
    }
}