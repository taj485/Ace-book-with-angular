using MBA.Data.Entites;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MBA.Data
{
    public class MbaContext : IdentityDbContext<AppUser>
    {
        public MbaContext(DbContextOptions<MbaContext> options) : base(options)
        {
        }

        public DbSet<AppUser> Users{ get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
