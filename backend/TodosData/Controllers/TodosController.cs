using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TodosData.Models;

namespace TodosData.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class TodosController : ControllerBase
    {

        // private ApplicationDbContext _context;

        public TodosController()
        {
            // _context = context;
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return new List<Todo>()
            {
                new Todo() { Title = "Task 1" },
                new Todo() { Title = "Task 2" },
                new Todo() { Title = "Task 3" }
            };
        }


    }
}
