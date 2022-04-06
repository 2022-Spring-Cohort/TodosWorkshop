using Microsoft.AspNetCore.Http;

namespace TodosData.Models
{
    public class OwnerViewModel
    {
        public Owner Owner { get; set; }
        public IFormFile Image { get; set; }
    }
}
