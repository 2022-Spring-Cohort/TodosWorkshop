using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace TodosData.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public virtual List<Todo> Todos { get; set; }
    }
}
