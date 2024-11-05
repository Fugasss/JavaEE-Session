package com.plunker.backend.auth.services;

import java.util.*;

import com.plunker.backend.auth.models.Role;
import com.plunker.backend.auth.models.User;
import com.plunker.backend.auth.repositories.UserRepository;
import com.plunker.backend.auth.util.UserWithEmailAlreadyExists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService{

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var userFromDb = userRepository.findByEmail(username);

        if(userFromDb.isEmpty()){
            throw new UsernameNotFoundException("User not found");
        }

        return userFromDb.get();
    }

    public boolean userWithEmailExists(String email){
        return userRepository.existsByEmail(email);
    }

    public User findUserById(String userId) {
        Optional<User> userFromDb = userRepository.findById(userId);
        return userFromDb.orElse(new User());
    }

    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public User create(User user) {
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            throw new UserWithEmailAlreadyExists(user.getEmail());
        }

        return save(user);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public boolean deleteUser(String userId) {
        if (userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Пользователь не найден"));

    }

    public UserDetailsService userDetailsService() {
        return this::getByEmail;
    }

    public User getCurrentUser() {
        // Получение имени пользователя из контекста Spring Security
        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        return getByEmail(email);
    }


    /**
     * Выдача прав администратора текущему пользователю
     * <p>
     * Нужен для демонстрации
     */
    @Deprecated
    public void getAdmin() {
        var user = getCurrentUser();
        user.setRole(Role.ROLE_ADMIN);
        save(user);
    }
}