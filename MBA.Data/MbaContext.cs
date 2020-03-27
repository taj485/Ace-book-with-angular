using MBA.Data.Entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MBA.Data
{
    public class MbaContext : DbContext
    {
        public MbaContext(DbContextOptions<MbaContext> options) : base(options)
        {
        }

        public DbSet<User> Users{ get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> comments { get; set; }
    
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    modelBuilder.Entity<User>()
        //        .HasData(new User()
        //        {
        //            UserId = 1,
        //            FirstName = "Tom",
        //            LastName = "Baker",
        //            UserName = "Tom123",
        //            Password = "Tom123"
        //        });
        //}
    }
}
