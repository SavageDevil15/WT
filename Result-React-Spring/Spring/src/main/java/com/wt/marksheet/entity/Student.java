package com.wt.marksheet.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int roll_no;
    public int os, cn, cs, ai;
    public double cgpa;

    public Student() {
    }

    public int getRoll_no() {
        return roll_no;
    }

    public void setRoll_no(int roll_no) {
        this.roll_no = roll_no;
    }

    public int getOs() {
        return os;
    }

    public void setOs(int OS) {
        this.os = OS;
    }

    public int getCn() {
        return cn;
    }

    public void setCn(int CN) {
        this.cn = CN;
    }

    public int getCs() {
        return cs;
    }

    public void setCs(int CS) {
        this.cs = CS;
    }

    public int getAi() {
        return ai;
    }

    public void setAi(int AI) {
        this.ai = AI;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double CGPA) {
        this.cgpa = CGPA;
    }
}
