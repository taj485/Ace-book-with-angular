using System;
using System.Collections.Generic;
using System.Text;

namespace MBA.Data.Entites
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public ICollection<Post> Posts { get; set; }
    }
}
