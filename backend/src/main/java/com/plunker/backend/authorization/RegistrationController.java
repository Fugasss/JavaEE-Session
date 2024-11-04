package com.plunker.backend.authorization;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "/registration")
public class RegistrationController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/")
    public HttpStatus Register(@RequestBody User user){
        if(!user.getPassword().equals(user.getPasswordAgain())){
            return HttpStatus.BAD_REQUEST;
        }

        if(userService.userWithEmailExists(user.getEmail())){
            return HttpStatus.CONFLICT;
        }
        
        userService.saveUser(user);

        return HttpStatus.OK;
    }
}
