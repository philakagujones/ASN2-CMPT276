package com.example.cmpt276.asn2.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.cmpt276.asn2.models.Student;
import com.example.cmpt276.asn2.models.StudentRepository;

import jakarta.servlet.http.HttpServletResponse;

@Controller

public class StudentsController {

    @Autowired
    private StudentRepository studentRepo;

    @GetMapping("/students/view")
    public String getAllStudents(Model model) {
        System.out.println("Getting all users");
        List<Student> students = studentRepo.findAll();
        
        model.addAttribute("studs", students);
        return "students/showAll";
    }

    @PostMapping("/students/add")
    public String addStudent(@RequestParam Map<String, String> newstudent, HttpServletResponse response) {
        System.out.println("ADD Student");
        String newName = newstudent.get("name");
        int newAge = Integer.parseInt(newstudent.get("age"));
        String newGender = newstudent.get("gender");
        double newWeight = Double.parseDouble(newstudent.get("weight"));
        double newHeight = Double.parseDouble(newstudent.get("height"));
        String newHairColour = newstudent.get("haircolour");
        double newGPA = Double.parseDouble(newstudent.get("gpa"));
        studentRepo.save(new Student(newName, newAge, newGender, newWeight, newHeight, newHairColour, newGPA));
        response.setStatus(201);
        return "students/addedStudent";
    }

    @PostMapping("/students/{id}/delete")
    public String deleteStudent(@PathVariable("id") int id) {
        Student student = studentRepo.findById(id).orElse(null);
        studentRepo.delete(student);
        return "students/showAll";
    }

    @GetMapping("/students/{id}/edit")
    public String showEditForm(@PathVariable("id") int id, Model model) {
        Student student = studentRepo.findById(id).orElse(null);
        model.addAttribute("student", student);
        return "students/editStudent";
    }

    @PostMapping("/students/{id}/edit")
    public String editStudent(@PathVariable("id") int id, @RequestParam Map<String, String> updatedStudent) {
        Student student = studentRepo.findById(id).orElse(null);
        if (student != null) {
            student.setName(updatedStudent.get("name"));
            student.setAge(Integer.parseInt(updatedStudent.get("age")));
            student.setGender(updatedStudent.get("gender"));
            student.setWeight(Double.parseDouble(updatedStudent.get("weight")));
            student.setHeight(Double.parseDouble(updatedStudent.get("height")));
            student.setHairColour(updatedStudent.get("haircolour"));
            student.setGpa(Double.parseDouble(updatedStudent.get("gpa")));
            studentRepo.save(student);
        }
        return "redirect:/students/view";
    }
}
