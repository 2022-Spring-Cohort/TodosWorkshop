using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TodosData.Models;

namespace TodosData
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }
        public DbSet<Owner> Owners { get; set; }

        //public IConfiguration Configuration;
        //public ApplicationDbContext(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb; Database=TodoDB; Trusted_Connection=True";

            options.UseSqlServer(connectionString).UseLazyLoadingProxies();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Owner>().HasData(
                new Owner() { Id = 1, Name = "Gavin Hensley"},
                new Owner() { Id = 2, Name = "Carlos Lopez"}, 
                new Owner() { Id = 3, Name = "Davis Murphy"}
                );
            
            builder.Entity<Todo>().HasData(
                new Todo() { Id = 1, Title = "Todo Item 1", Description = "Test Todo", DueDate = System.DateTime.Now, OwnerId = 3},
                new Todo() { Id = 2, Title= "Clean living room", Description = "Seriously, clean it.", DueDate= System.DateTime.Now.AddDays(2), OwnerId = 1},
                new Todo() { Id = 3, Title = "Teach class", Description = "", DueDate = System.DateTime.Now, OwnerId = 3}
                );
            
            base.OnModelCreating(builder);
        }


    }
}
