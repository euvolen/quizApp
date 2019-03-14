using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizTest.Models.Question
{
    public class Question
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public string CorAnswer { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string Answer3 { get; set; }

        public string QuizId { get; set; }

    }
}
