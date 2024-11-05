package com.plunker.backend.auth.repositories;

import java.util.Optional;

import com.plunker.backend.auth.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String>{
    
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
