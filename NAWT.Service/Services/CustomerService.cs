using NAWT.Data.Model;
using NAWT.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace NAWT.Service.Services
{
    public class CustomerService
    {
        public IEnumerable<Customers> GetList()
        {
            var data= CustomersRepository.GetList();
            return data;
        }
    }
}
