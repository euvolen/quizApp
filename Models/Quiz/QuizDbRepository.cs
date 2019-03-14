using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizTest.Models.Quiz
{
    public class QuizDbRepository : IQuizRepository
    {
        private AppDbContext _context;

        public QuizDbRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Quiz> GetAllQuizes() => _context.Quezzes;


        public Quiz GetQuizById(string id)
        {
            var quiz = _context.Quezzes.SingleOrDefault(q => q.Id == id);
            return quiz;
        }


        public void PostQuiz(Quiz question)
        {
            throw new NotImplementedException();
        }

        public void PutQuiz(Quiz question)
        {
            throw new NotImplementedException();
        }
        public void DeleteQuiz(string id)
        {
            throw new NotImplementedException();
        }
    }
}
