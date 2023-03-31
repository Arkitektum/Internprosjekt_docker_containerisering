package com.example.postgres_demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.postgres_demo.Entity.RegistrationEntity;

public interface RegistrationRepository  extends JpaRepository<RegistrationEntity,String> {

}
