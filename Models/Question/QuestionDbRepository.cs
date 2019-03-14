using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace QuizTest.Models.Question
{
    public class QuestionDbRepository : IQuestionRepository
    {
        private AppDbContext _context;

        public QuestionDbRepository(AppDbContext context)
        {
            _context = context;
        }

     

        public IEnumerable<Question> GetAllQuestions() => _context.Questions;


        public Question GetQuestionById(string id) => _context.Questions.SingleOrDefault(q => q.Id == id);


        public async void PostQuestion(Question question)
        {
            _context.Add(question);
            await _context.SaveChangesAsync();
        }


        public async void PutQuestion(Question question)
        {
            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();

        }

        public void DeleteQuestion(string id)
        {
            throw new NotImplementedException();
        }
    }
}
