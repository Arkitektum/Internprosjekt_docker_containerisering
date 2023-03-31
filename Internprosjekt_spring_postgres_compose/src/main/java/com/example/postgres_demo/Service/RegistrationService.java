package com.example.postgres_demo.Service;

import org.springframework.stereotype.Service;

import com.example.postgres_demo.Entity.RegistrationEntity;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RegistrationService {

    public RegistrationEntity getRegistration(String id){
       
        return null;
    }

    public RegistrationEntity saveRegistration(RegistrationEntity registrationEntity) throws JsonMappingException, JsonProcessingException{
        
       
        return null;
    }
}