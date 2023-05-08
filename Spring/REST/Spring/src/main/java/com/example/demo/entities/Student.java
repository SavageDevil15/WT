package com.example.demo.entities;

public class Student
{
    public int rollNo;
    public String name;

    public Student() {
        super();
    }

    public Student(int rollNo, String name) {
        super();
        this.rollNo = rollNo;
        this.name = name;
    }

    public int getRollno() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{" +
                "RollNo=" + rollNo +
                ", Name='" + name + '\'' +
                '}';
    }
}
