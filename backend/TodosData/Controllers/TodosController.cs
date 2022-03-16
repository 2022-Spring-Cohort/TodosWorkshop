using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TodosData.Models;

namespace TodosData.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class TodosController : ControllerBase
    {

        private ApplicationDbContext _context;

        public TodosController(ApplicationDbContext context)
        {
             _context = context;
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return _context.Todos.ToList();

            //return new List<Todo>()
            //{
            //    new Todo() { Title = "Task 1" },
            //    new Todo() { Title = "Task 2" },
            //    new Todo() { Title = "Task 3" }
            //};
        }

        [HttpPost]
        public bool Post(Todo todo)
        {
            todo.DueDate = DateTime.Now.AddDays(3);

            _context.Todos.Add(todo);
            _context.SaveChanges();

            return true;
        }


    }
}
