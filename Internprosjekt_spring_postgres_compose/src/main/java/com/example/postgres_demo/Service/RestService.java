package com.example.postgres_demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RestService {

    @Autowired
    public RestService() {
    }

    public String getRegistration(Long id){
       
        return "";
    }

    public String saveRegistration(String registrationAsJson) throws JsonMappingException, JsonProcessingException{
        
       
        return "";
    }
}