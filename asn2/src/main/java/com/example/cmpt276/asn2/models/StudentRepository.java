package com.example.cmpt276.asn2.models;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface StudentRepository extends JpaRepository<Student,Integer> {
    List<Student> findByGender(String gender);
}
