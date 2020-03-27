using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MBA.Data
{
    public class SeedData
    {
        private readonly MbaContext _mbaContext;
        public SeedData(MbaContext mbaContext)
        {
            _mbaContext = mbaContext;
        }

        public void Seed()
        {
            // checks if database exist
            _mbaContext.Database.EnsureCreated();

            if (!_mbaContext.Users.Any())
            {
                // seed data
            }
        }
    }
}
