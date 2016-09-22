function diffImage(img) 
{
   if(img.src.match("images/roboback2.png")) img.src = "images/analysis.png";
   else if(img.src.match("images/analysis.png")) img.src = "images/marking.png";
   else if(img.src.match("images/marking.png")) img.src = "images/roboback.png";
   else if(img.src.match("images/roboback.png")) img.src = "images/roboback2.png";
   else img.src = "images/roboback2.png";
}