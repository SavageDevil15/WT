package com.wt.marksheet.service;

import com.wt.marksheet.entity.Student;
import com.wt.marksheet.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService
{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveMarks(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getMarks() {
        return studentRepository.findAll();
    }
}
