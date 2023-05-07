package com.wt.marksheet.controller;

import com.wt.marksheet.entity.Student;
import com.wt.marksheet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController
{
    @Autowired
    private StudentService studentService;

    @PostMapping("/marks")
    public String add(@RequestBody Student student) {
        studentService.saveMarks(student);
        return "Marks Saved";
    }

    @GetMapping("/marksheet")
    public List<Student> getStudentMarks() {
        return studentService.getMarks();
    }
}
