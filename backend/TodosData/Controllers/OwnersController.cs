using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TodosData.Models;

namespace TodosData.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OwnersController : ControllerBase
    {
        private ApplicationDbContext _context;
        public OwnersController(ApplicationDbContext context)
        {
            _context = context;
        }

        //HTTP Get 
        //Get All
        [HttpGet]
        public IEnumerable<Owner> Get()
        {
            return _context.Owners.ToList();
        }

        

    }
}
