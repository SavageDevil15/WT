package com.example.demo.service;

import com.example.demo.entities.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImplementation implements StudentService
{
    public List<Student> dataList;

    public StudentServiceImplementation()
    {
        dataList = new ArrayList<>();
        dataList.add(new Student(1, "Atharv"));
        dataList.add(new Student(2, "Test"));
    }

    @Override
    public List<Student> getStudentData() {
        return dataList;
    }

    @Override
    public Student getDataByRollNo(int rollNo) {
        Student student = null;
        for (Student data : dataList) {
            if (data.getRollno() == rollNo)
                student = data;
        }
        return student;
    }

    @Override
    public Student saveStudentData(Student student) {
        dataList.add(student);
        return student;
    }
}
