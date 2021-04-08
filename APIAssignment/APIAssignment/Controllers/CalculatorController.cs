using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using APIAssignment.Models;

namespace APIAssignment.Controllers
{
    [Route("api/[controller]")]
    public class CalculatorController : Controller
    {
        [Route ("add")]
        public ActionResult AddOption(Calculation Model)
        {
            var result = new CalcResultModel();
            CalcService Service = new CalcService();
            result.result = Service.Add(Model);
            return Ok(result);
        }
        [Route("subtract")]
        public ActionResult SubOption(Calculation Model)
        {
            var result = new CalcResultModel();
            CalcService Service = new CalcService();
            result.result = Service.Subtract(Model);
            return Ok(result);
        }
        [Route("multiply")]
        public ActionResult MultOption(Calculation Model)
        {
            var result = new CalcResultModel();
            CalcService Service = new CalcService();
            result.result = Service.Multiply(Model);
            return Ok(result);
        }
        [Route("divide")]
        public ActionResult DivOption(Calculation Model)
        {
            var result = new CalcResultModel();
            CalcService Service = new CalcService();
            result.result = Service.Divide(Model);
            return Ok(result);
        }
    }
}