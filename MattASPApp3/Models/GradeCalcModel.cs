using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace MattASPApp3.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public double Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public double Projects { get; set; }

        [Required]
        [Range(0, 100)]
        public double Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public double Exams { get; set; }

        [Required]
        [Range(0, 100)]
        public double INTEX { get; set; }

    }
}
