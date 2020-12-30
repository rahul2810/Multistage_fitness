using System;
using System.Collections.Generic;
using System.Text;

namespace Multistage_fitness.Domain.Models
{
    public class OnLoadTestModel
    {
        public List<TestModel> TestData { get; set; }
        public List<UserModel> UserData { get; set; }
        public List<string> PossibleResults { get; set; }
    }
}
