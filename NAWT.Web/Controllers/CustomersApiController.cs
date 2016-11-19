using NotAWorkingTeam.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NAWT.Service.Services;
using NAWT.Data.Model;

namespace NotAWorkingTeam.Controllers
{
    public class CustomersApiController : ApiController
    {
        private readonly CustomerService _customerService = new CustomerService();
        public List<CustomersViewModel> GetList()
        {
            var data = _customerService.GetList();
            var result = data.Select(x => BindCustomer(x)).ToList();
            return result;
        }
        public CustomersViewModel BindCustomer(Customers ent)
        {
            return new CustomersViewModel()
            {
                Id = ent.CustomerID,
                Name = ent.ContactName,
                Address = ent.Address,
                CompanyName = ent.CompanyName
            };
        }
    }
}
