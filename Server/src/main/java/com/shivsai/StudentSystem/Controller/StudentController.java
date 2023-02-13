package com.shivsai.StudentSystem.Controller;

import com.shivsai.StudentSystem.model.Student;
import com.shivsai.StudentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/student")
@CrossOrigin


public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
    studentService.saveStudent(student);
    return "New Student is Added";
    }
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
