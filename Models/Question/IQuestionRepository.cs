using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizTest.Models.Question
{
    public interface IQuestionRepository
    {
        IEnumerable<Question> GetAllQuestions();

        Question GetQuestionById(string id);

        void PostQuestion(Question question);

        void PutQuestion(Question question);

        void DeleteQuestion(string id);
    }
}
