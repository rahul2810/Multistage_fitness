using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Multistage_fitness.Domain.Supervisor;

namespace Multistage_fitness.Api.Controllers
{
    [EnableCors("CorsApi")]
    [Route("api/[controller]")]
    [ApiController]
    public class TestPageController : ControllerBase
    {
        private ITestPageSupervisor _testPageSupervisor;
        public TestPageController(ITestPageSupervisor testPageSupervisor)
        {
            _testPageSupervisor = testPageSupervisor;
        }
        [HttpGet]
        public dynamic GetOnTestLoadInformation()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "GET,POST");
            try
            {
                var result = _testPageSupervisor.GetOnLoadInformation();
                return result;
            }
            catch(Exception ex)
            {
            
              return  NotFound("Data Not available");
            }
        }
    }
}