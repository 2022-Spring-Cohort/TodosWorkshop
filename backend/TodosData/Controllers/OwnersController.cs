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

        [HttpGet("{id}")]
        public Owner Get(int id)
        {
            return _context.Owners.Find(id);
        }

        [HttpPost]
        public IEnumerable<Owner> Post(Owner owner, IFormFile image)
        {
            if(owner != null)
            {
                _context.Owners.Add(owner);
                _context.SaveChanges();
            }
           

            return _context.Owners.ToList();
        }

        [HttpPut("{id}")]
        public Owner Put(Owner owner)
        {
            _context.Owners.Update(owner);
            _context.SaveChanges();

            owner.Todos = _context.Todos.Where(t => t.OwnerId == owner.Id).ToList();

            return owner;
        }

        [HttpDelete("{id}")]
        public IEnumerable<Owner> Delete(int id)
        {
            Owner ownerToDelete = _context.Owners.Find(id);
            _context.Owners.Remove(ownerToDelete);
            _context.SaveChanges();

            return _context.Owners.ToList();
        }

    }
}
