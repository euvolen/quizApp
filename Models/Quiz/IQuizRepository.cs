using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizTest.Models.Quiz
{
    public interface IQuizRepository
    {
        IEnumerable<Quiz> GetAllQuizes();

        Quiz GetQuizById(string id);

        void PostQuiz(Quiz question);

        void PutQuiz(Quiz question);

        void DeleteQuiz(string id);
    }
}
