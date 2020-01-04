package com.example.IPLFantasy.web.dto;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
public class TeamDto {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    @NotNull
    @NotEmpty
    private String teamName;
    @NotNull
    @NotEmpty
    private String email;
    @NotNull
    @NotEmpty
    private String Name;

    private String Notes;
    @NotNull
    @NotEmpty
    private String team;
    @NotNull
    @NotEmpty
    private String type;

    public String getName(){
        return Name;
    }
    public void setName(final String Name){
        this.Name = Name;
    }
    public String getNotes() {
        return Notes;
    }

    public void setNotes(final String Notes) {
        this.Notes = Notes;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(final String team) {
        this.team = team;
    }

    public String getType(){
        return type;
    }

    public void setType(final String type){
        this.type = type;
    }
    public String getTeamName(){
        return teamName;
    }

    public void setTeamName(final String teamName){
        this.teamName = teamName;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(final String email){
        this.email = email;
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public TeamDto(){

    }
    
    public TeamDto(Integer id, String Name, String teamName, String email, String Notes, String team, String type){
        this.id = id;
        this.Name=Name;
        this.Notes=Notes;
        this.team=team;
        this.type=type;
        this.email = email;
        this.teamName = teamName;
    }
}
