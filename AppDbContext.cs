using Microsoft.EntityFrameworkCore;
using QuizTest.Models.Question;
using QuizTest.Models.Quiz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizTest
{
    public class AppDbContext:DbContext
    {
        public AppDbContext (DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Quiz> Quezzes { get; set; }
    }
}
