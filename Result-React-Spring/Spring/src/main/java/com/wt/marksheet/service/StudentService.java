package com.wt.marksheet.service;

import com.wt.marksheet.entity.Student;

import java.util.List;

public interface StudentService
{
    public Student saveMarks(Student student);
    public List<Student> getMarks();
}
