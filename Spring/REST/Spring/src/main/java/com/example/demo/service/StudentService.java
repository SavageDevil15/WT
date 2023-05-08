package com.example.demo.service;


import com.example.demo.entities.Student;

import java.util.List;

public interface StudentService
{
    public List<Student> getStudentData();

    Student getDataByRollNo(int rollNo);

    public Student saveStudentData(Student student);
}
