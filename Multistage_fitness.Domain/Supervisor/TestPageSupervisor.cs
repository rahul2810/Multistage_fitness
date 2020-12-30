using System;
using System.Collections.Generic;
using System.Text;
using Multistage_fitness.Domain.Repositories;

namespace Multistage_fitness.Domain.Supervisor
{
    public class TestPageSupervisor : ITestPageSupervisor
    {
        private readonly ITestPageRepository _testPageRepository;

        public TestPageSupervisor(ITestPageRepository testPageRepository)
        {
            _testPageRepository = testPageRepository;
        }
        public dynamic GetOnLoadInformation()
        {
            try
            {
                var result = _testPageRepository.GetOnLoadInformation();
                return result;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

    }
}
