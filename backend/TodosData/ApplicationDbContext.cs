using Microsoft.EntityFrameworkCore;
using TodosData.Models;

namespace TodosData
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb; Database=TodoDB; Trusted_Connection=True";

            options.UseSqlServer(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }


    }
}
