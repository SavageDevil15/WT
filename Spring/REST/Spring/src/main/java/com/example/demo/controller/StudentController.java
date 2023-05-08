package com.example.demo.controller;

import com.example.demo.entities.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class StudentController
{
    @Autowired
    public StudentService studentService;

    @GetMapping("/home")
    public String home() {
        return "home";
    }

    @GetMapping("/student")
    public List<Student> getData() {
        return studentService.getStudentData();
    }

    @GetMapping("/student/{rollNo}")
    public Student getDataByRollNo(@PathVariable int rollNo) {
        return studentService.getDataByRollNo(rollNo);
    }

    @PostMapping("/student")
    public Student addData(@RequestBody Student student) {
        return studentService.saveStudentData(student);
    }
}
