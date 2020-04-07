using MBA.Data.Entites;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MBA.Data
{
    public class SeedData
    {
        private readonly MbaContext _mbaContext;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<AppUser> _userManger;



        public SeedData(MbaContext mbaContext, IHostingEnvironment hosting, UserManager<AppUser> userManger)
        {
            _mbaContext = mbaContext;
            _hosting = hosting;
            _userManger = userManger;
        }

        public async Task SeedAsync()
        {
            // checks if database exist
            _mbaContext.Database.EnsureCreated();

            AppUser user = await _userManger.FindByEmailAsync("test123@test.com");
            if (user == null)
            {
                user = new AppUser()
                {
                    FirstName = "Tom",
                    LastName = "Jones",
                    Email = "test123@test.com",
                    UserName = "Tom123"
                };
            }

            var result = await _userManger.CreateAsync(user, "Password123!");
            if (result != IdentityResult.Success)
            {
                throw new InvalidOperationException("Could not create new user in seeder");
            }


            if (!_mbaContext.Posts.Any())
            {
                var post = new Post()
                {
                    User = user,
                    Text = "Hello World"
                };

                _mbaContext.Posts.Add(post);
                _mbaContext.SaveChanges();
            }
        }
    }
}
