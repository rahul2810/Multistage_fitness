using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Multistage_fitness.Domain.Repositories;
using Multistage_fitness.Domain.Models;
using Newtonsoft.Json;
using System.Linq;

namespace Multistage_fitness.Data.Repositories
{
    public class TestPageRepository : ITestPageRepository
    {
        public dynamic GetOnLoadInformation()
        {
            OnLoadTestModel onLoadData = new OnLoadTestModel();
            try
            {

                using (StreamReader sr = new StreamReader("../Multistage_fitness.Data/Data/fitnessrating_beeptest.json"))
                {
                    onLoadData.TestData = JsonConvert.DeserializeObject<List<TestModel>>(sr.ReadToEnd());
                    onLoadData.UserData = new List<UserModel>
                    {
                        new UserModel { AthleteName = "Ashton Eaton",IsWarn="Warn",IsStop="Stop",Result=""},
                        new UserModel { AthleteName = "Bryan Clay" ,IsWarn="Warn",IsStop="Stop",Result=""},
                        new UserModel { AthleteName = "Dean Karnezes" ,IsWarn="Warn",IsStop="Stop",Result=""},
                        new UserModel { AthleteName = "Usain Bolt" ,IsWarn="Warn",IsStop="Stop",Result=""},
                        new UserModel { AthleteName = "Thomas Reich" ,IsWarn="Warn",IsStop="Stop",Result=""}    
                    };
                    onLoadData.PossibleResults = onLoadData.TestData.Select(o => o.SpeedLevel + "-" + o.ShuttleNo).ToList();

                    return onLoadData;
                }
            }
            catch(Exception ex)
            {
                return ex;
            }
            
        }

    }
}
