using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QuizTest.Models.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizTest
{
    public class UserDbContext:IdentityDbContext<IdentityUser>
    {
        public UserDbContext (DbContextOptions<UserDbContext> opt): base(opt)
        {

        }
     
    }
}
