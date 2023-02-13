package com.shivsai.StudentSystem.service;

import com.shivsai.StudentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
