function dictionary_function(){                //creating dictionary function, adding an object, then deleting an element (student name)

    var Developer = {                            
        Name:           "Randy",                  
        Status:         "Student",          
        School:    "Academy of Learning",        
        Location:     "British Columbia"                     
    };            
    delete Developer.Name;                       

    document.getElementById("Dictionary").innerHTML = Student.Name; 
}