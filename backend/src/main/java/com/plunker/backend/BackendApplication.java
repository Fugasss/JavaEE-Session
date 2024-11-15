package com.plunker.backend;

import com.plunker.backend.email.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@SpringBootApplication
@EnableMongoRepositories
@EnableJpaRepositories
public class BackendApplication implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Autowired
    private EmailSenderService emailSenderService;

    @Override
    public void run(String... args) throws Exception {
        emailSenderService.sendSimpleEmail("krip.2.102@gmail.com", "Test message", "This is test message");
    }
}
