package com.example.postgres_demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@Controller
@RequestMapping(path = "/baerekraft")
@ResponseBody
public class RegistrationController {
    

    @Autowired
    public RegistrationController() {

    }
    @RequestMapping(value = "getRegistration", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<String> onGetRequest(){
        
        return ResponseEntity.ok("");
    }

    @RequestMapping(value = "postRegistration", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<String> onPostRequest() throws JsonMappingException, JsonProcessingException{

        

        return ResponseEntity.ok("");
    }
}