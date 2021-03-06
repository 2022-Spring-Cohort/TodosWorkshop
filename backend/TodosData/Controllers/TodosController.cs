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

        [HttpGet("{id}")]
        public ActionResult<Todo> Get(int id)
        {
            return _context.Todos.Find(id);
        }

        [HttpPost]
        public IEnumerable<Todo> Post(Todo todo)
        {
            todo.DueDate = DateTime.Now.AddDays(3);

            _context.Todos.Add(todo);
            _context.SaveChanges();

            return _context.Todos.ToList();
        }

        [HttpDelete("{id}")]
        public IEnumerable<Todo> Delete(int id)
        {
            Todo itemToDelete = _context.Todos.Find(id);
            _context.Todos.Remove(itemToDelete);
            _context.SaveChanges();

            return _context.Todos.ToList();
        }

        [HttpPut("{id}")]
        public Todo Put(Todo todo)
        {
            _context.Todos.Update(todo);
            _context.SaveChanges();

            todo.Owner = _context.Owners.Find(todo.OwnerId);

            return todo;
        }


    }
}
