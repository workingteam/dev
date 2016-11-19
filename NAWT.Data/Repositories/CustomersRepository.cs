using NAWT.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NAWT.Data.Repositories
{
    public class CustomersRepository
    {
        public static NAWTEntities context = new NAWTEntities();
        public static CustomersRepository New()
        {
            return new CustomersRepository();
        }
        public static IEnumerable<Customers> GetList()
        {
            return context.Customers;
        }
    }
}
