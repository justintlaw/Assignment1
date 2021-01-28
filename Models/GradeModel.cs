using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class GradeModel
    {
        [Required]
        [Range(0, 100)]
        public decimal assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal groupProject { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal exams { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal intex { get; set; }
    }
}
