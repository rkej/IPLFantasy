package com.example.IPLFantasy.web.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
@Entity
public class LoginDto {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    @NotNull
    @NotEmpty
    private String password;
    @NotNull
    @NotEmpty
    private String email;
    public String getPassword() {
        return password;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(final String email){
        this.email = email;
    }
    public void setPassword(final String password) {
        this.password = password;
    }
    public LoginDto(String email, String password){
        this.email=email;
        this.password=password;
    }
}
