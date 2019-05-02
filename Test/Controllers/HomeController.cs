using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

//Get all lines information : use in ClientApp!!!

//fetch('api/Home/GetLines')
//  .then(response => response.json())
//  .then(data => {
//    //code
//    //ex: console.log(data);
//});

/* ------------------------------- */

namespace Test.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        [HttpGet("[action]")]
        public ActionResult GetLines()
        {
            return Json(lines);
        }

        [HttpGet("[action]")]
        public void EmptyTheData()
        {
            lines.Clear();
        }

        [HttpGet("[action]")]
        public void CreateLine(double startX, double startY, double endX, double endY)
        {
            Line line = new Line(startX, startY, endX, endY);
            lines.Add(line);
        }

        public class Line
        {
           
            public readonly string lineColor = "blue";
            public readonly string drawLineColor = "red";
            public readonly string pointColor = "green";
            public PointCoordinates pointCoordinates;
            public Line(double startX, double startY, double endX, double endY)
            {
                this.pointCoordinates = new PointCoordinates(startX, startY, endX, endY);
            }

            public class PointCoordinates
            {
                public double startX, startY, endX, endY;

                public PointCoordinates(double startX, double startY, double endX, double endY)
                {
                    this.startX = startX;
                    this.startY = startY;
                    this.endX = endX;
                    this.endY = endY;
                }
            }
        }

        static public List<Line> lines = new List<Line>();
    }
}

